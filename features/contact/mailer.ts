const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";
const SEND_TIMEOUT_MS = 10_000;

const parseMailbox = (value: string, setting: string) => {
    const match = value.match(/^\s*(.*?)\s*<([^>]+)>\s*$/);
    const name = match?.[1].replace(/^"|"$/g, "").trim();
    const email = (match ? match[2] : value).trim();

    if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) {
        throw new Error(`${setting} must contain a valid email address.`);
    }

    return {
        email,
        ...(name ? { name } : {}),
    };
};

interface SendMailOptions {
    to: string;
    subject: string;
    html: string;
    replyTo: { email: string; name: string };
}

export async function sendMail({
    to,
    subject,
    html,
    replyTo,
}: SendMailOptions) {
    const apiKey = process.env.BREVO_API_KEY;
    const from = process.env.MAIL_FROM;

    if (!apiKey) throw new Error("BREVO_API_KEY is not configured.");
    if (!from) throw new Error("MAIL_FROM is not configured.");

    const sender = parseMailbox(from, "MAIL_FROM");
    const recipient = parseMailbox(to, "MAIL_TO");

    const response = await fetch(BREVO_ENDPOINT, {
        method: "POST",
        headers: {
            "api-key": apiKey,
            "Content-Type": "application/json",
            accept: "application/json",
        },
        body: JSON.stringify({
            sender,
            to: [recipient],
            subject,
            htmlContent: html,
            replyTo,
        }),
        signal: AbortSignal.timeout(SEND_TIMEOUT_MS),
    });

    if (!response.ok) {
        const detail = await response.text();
        throw new Error(
            `Brevo responded with ${response.status}: ${detail}`,
        );
    }
}
