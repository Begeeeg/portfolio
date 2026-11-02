"use client";

import {
    ArrowUpRight,
    BriefcaseBusiness,
    CodeXml,
    Mail,
    Phone,
    Send,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { contact } from "@/lib/site";

type SubmissionStatus = {
    kind: "success" | "error";
    message: string;
} | null;

export default function CTA() {
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<SubmissionStatus>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSending(true);
        setStatus(null);

        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const result: { message?: string; error?: string } =
                await response.json();

            if (!response.ok) {
                setStatus({
                    kind: "error",
                    message:
                        result.error ??
                        "Your message could not be sent. Please try again.",
                });
                return;
            }

            form.reset();
            setStatus({
                kind: "success",
                message: result.message ?? "Your message has been sent.",
            });
        } catch {
            setStatus({
                kind: "error",
                message: "Unable to send your message. Please try again.",
            });
        } finally {
            setIsSending(false);
        }
    }

    return (
        <div className="mx-auto w-full max-w-6xl px-6 md:px-12">
            <div className="content-panel relative overflow-hidden px-8 py-12 sm:px-12 sm:py-16">
                <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--accent-bright) to-transparent"
                    aria-hidden="true"
                />
                <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
                    <div>
                        <div className="mb-5 flex items-center gap-2 text-(--accent-text)">
                            <Send width={18} height={18} aria-hidden="true" />
                            <span className="font-mono text-xs tracking-[0.18em] uppercase">
                                Get in touch
                            </span>
                        </div>
                        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                            Let&apos;s build something great.
                        </h2>
                        <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-400">
                            I&apos;m open to junior full-stack roles and
                            freelance projects. Have an idea or opportunity?
                            I&apos;d love to hear about it.
                        </p>
                        <div className="mt-8 grid gap-5">
                            <a
                                href={`mailto:${contact.email}`}
                                className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white"
                            >
                                <Mail
                                    size={18}
                                    className="shrink-0 text-(--accent-text)"
                                    aria-hidden="true"
                                />
                                {contact.email}
                            </a>
                            <a
                                href="tel:+639565313865"
                                className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white"
                            >
                                <Phone
                                    size={18}
                                    className="shrink-0 text-(--accent-text)"
                                    aria-hidden="true"
                                />
                                PH +63 956 531 3865
                            </a>
                            <a
                                href={contact.github.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white"
                            >
                                <CodeXml
                                    size={18}
                                    className="shrink-0 text-(--accent-text)"
                                    aria-hidden="true"
                                />
                                {contact.github.handle}
                            </a>
                            <a
                                href={contact.linkedin.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white"
                            >
                                <BriefcaseBusiness
                                    size={18}
                                    className="shrink-0 text-(--accent-text)"
                                    aria-hidden="true"
                                />
                                {contact.linkedin.handle}
                            </a>
                        </div>
                    </div>
                    <form
                        className="text-left"
                        onSubmit={handleSubmit}
                        aria-busy={isSending}
                    >
                        <div
                            className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                            aria-hidden="true"
                        >
                            <label htmlFor="contact-website">
                                Leave this field empty
                            </label>
                            <input
                                id="contact-website"
                                name="website"
                                type="text"
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="grid gap-2 text-sm text-gray-300">
                                Name
                                <input
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    maxLength={120}
                                    required
                                    className="rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-(--accent-bright)"
                                />
                            </label>
                            <label className="grid gap-2 text-sm text-gray-300">
                                Email
                                <input
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    maxLength={254}
                                    required
                                    className="rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-(--accent-bright)"
                                />
                            </label>
                        </div>
                        <label className="mt-4 grid gap-2 text-sm text-gray-300">
                            I&apos;m reaching out as
                            <select
                                name="inquiryType"
                                defaultValue=""
                                required
                                className="rounded-lg border border-white/10 bg-[#11171f] px-4 py-3 text-white outline-none transition-colors focus:border-(--accent-bright)"
                            >
                                <option value="" disabled>
                                    Choose one
                                </option>
                                <option value="Hiring company">
                                    Hiring company / recruiter
                                </option>
                                <option value="Potential client">
                                    Potential client
                                </option>
                                <option value="Freelance project">
                                    Freelance project
                                </option>
                                <option value="Collaboration">
                                    Collaboration
                                </option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                        <label className="mt-4 grid gap-2 text-sm text-gray-300">
                            What would you like to discuss?
                            <input
                                name="topic"
                                type="text"
                                maxLength={160}
                                required
                                className="rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-(--accent-bright)"
                            />
                        </label>
                        <label className="mt-4 grid gap-2 text-sm text-gray-300">
                            Message
                            <textarea
                                name="message"
                                rows={5}
                                maxLength={5000}
                                required
                                className="resize-y rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-(--accent-bright)"
                            />
                        </label>
                        <div className="mt-5 flex flex-col items-start gap-4">
                            <button
                                type="submit"
                                disabled={isSending}
                                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#6A00FF,#C02BFF)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
                            >
                                {isSending ? "Sending..." : "Send message"}
                                {isSending ? (
                                    <Send
                                        width={16}
                                        height={16}
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <ArrowUpRight
                                        width={17}
                                        height={17}
                                        aria-hidden="true"
                                    />
                                )}
                            </button>
                            {status && (
                                <p
                                    role={
                                        status.kind === "error"
                                            ? "alert"
                                            : "status"
                                    }
                                    className={
                                        status.kind === "error"
                                            ? "text-sm text-red-300"
                                            : "text-sm text-emerald-300"
                                    }
                                >
                                    {status.message}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
