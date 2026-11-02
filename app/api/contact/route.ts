import { sendMail } from "@/features/contact/mailer";

interface ContactInquiry {
    name: string;
    email: string;
    inquiryType: string;
    topic: string;
    message: string;
    website: string;
}

const inquiryTypes = [
    "Hiring company",
    "Potential client",
    "Freelance project",
    "Collaboration",
    "Other",
] as const;

const escapeHtml = (value: string) =>
    value.replace(
        /[&<>"']/g,
        (character) =>
            ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
            })[character]!,
    );

const isString = (value: unknown): value is string =>
    typeof value === "string";

const isInquiryType = (
    value: string,
): value is (typeof inquiryTypes)[number] =>
    inquiryTypes.some((type) => type === value);

export async function POST(request: Request) {
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > 12_000) {
        return Response.json(
            { error: "Your message is too large." },
            { status: 413 },
        );
    }

    let requestBody: string;
    try {
        requestBody = await request.text();
    } catch {
        return Response.json(
            { error: "Unable to read request body." },
            { status: 400 },
        );
    }

    if (requestBody.length > 12_000) {
        return Response.json(
            { error: "Your message is too large." },
            { status: 413 },
        );
    }

    let body: unknown;
    try {
        body = JSON.parse(requestBody);
    } catch {
        return Response.json(
            { error: "Invalid request body." },
            { status: 400 },
        );
    }

    if (typeof body !== "object" || body === null) {
        return Response.json({ error: "Invalid request body." }, {
            status: 400,
        });
    }

    const values = body as Record<string, unknown>;
    const inquiry: ContactInquiry = {
        name: isString(values.name) ? values.name.trim() : "",
        email: isString(values.email) ? values.email.trim() : "",
        inquiryType: isString(values.inquiryType)
            ? values.inquiryType.trim()
            : "",
        topic: isString(values.topic) ? values.topic.trim() : "",
        message: isString(values.message) ? values.message.trim() : "",
        website: isString(values.website) ? values.website.trim() : "",
    };

    if (inquiry.website) {
        return Response.json({ error: "Unable to send your message." }, {
            status: 400,
        });
    }

    if (
        !inquiry.name ||
        inquiry.name.length > 120 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email) ||
        inquiry.email.length > 254 ||
        !isInquiryType(inquiry.inquiryType) ||
        !inquiry.topic ||
        inquiry.topic.length > 160 ||
        !inquiry.message ||
        inquiry.message.length > 5000
    ) {
        return Response.json(
            { error: "Check the form fields and try again." },
            { status: 400 },
        );
    }

    const to = process.env.MAIL_TO;
    if (!to) {
        console.error("MAIL_TO is not configured.");
        return Response.json(
            { error: "Email sending is not configured right now." },
            { status: 500 },
        );
    }

    try {
        await sendMail({
            to,
            replyTo: { email: inquiry.email, name: inquiry.name },
            subject: `Portfolio inquiry (${inquiry.inquiryType}): ${inquiry.topic.replace(/[\r\n]/g, " ")}`,
            html: `
                <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #14110f;">
                    <h1>New portfolio inquiry</h1>
                    <p><b>Reaching out as:</b> ${escapeHtml(inquiry.inquiryType)}</p>
                    <h2>${escapeHtml(inquiry.topic)}</h2>
                    <p><b>Name:</b> ${escapeHtml(inquiry.name)}</p>
                    <p><b>Email:</b> ${escapeHtml(inquiry.email)}</p>
                    <p><b>Message:</b></p>
                    <p style="white-space: pre-wrap;">${escapeHtml(inquiry.message)}</p>
                    <p style="color:#666;font-size:12px;">Reply directly to respond to ${escapeHtml(inquiry.name)}.</p>
                </div>
            `,
        });
    } catch (error) {
        console.error("Unable to send portfolio inquiry:", error);
        return Response.json(
            { error: "Your message could not be sent. Please try again later." },
            { status: 502 },
        );
    }

    return Response.json({ message: "Your message has been sent." });
}
