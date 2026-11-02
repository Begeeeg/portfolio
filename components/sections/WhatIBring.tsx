import { Briefcase, Users } from "lucide-react";

const audiences = [
    {
        title: "For teams",
        icon: Users,
        points: [
            {
                lead: "Full-stack from day one.",
                text: "I can work across the UI, REST APIs, authentication and database layers in Next.js, Node/Express and TypeScript.",
            },
            {
                lead: "Team-ready.",
                text: "I've contributed to a 5-person Agile team on an internal business system, building notification features and keeping shared branches stable.",
            },
            {
                lead: "Quality built in.",
                text: "I write automated API tests and set up CI pipelines rather than leaving them for later.",
            },
            {
                lead: "Hardware-aware.",
                text: "My Computer Engineering background means I'm comfortable where software meets devices: Raspberry Pi, ESP32 and RFID.",
            },
        ],
    },
    {
        title: "For clients",
        icon: Briefcase,
        points: [
            {
                lead: "End-to-end delivery.",
                text: "I build and deploy complete web apps: interface, API, authentication, database and hosting on Vercel and Render.",
            },
            {
                lead: "Secure by default.",
                text: "Cookie-based JWT sessions, OAuth sign-in, validated requests and rate-limited auth endpoints.",
            },
            {
                lead: "Clear communication.",
                text: "I write clearly in English, work in UTC+8, and track work in ClickUp and GitHub.",
            },
        ],
    },
];

export default function WhatIBring() {
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="content-panel py-12 px-8">
                <div className="flex items-center gap-2 mb-4">
                    <Briefcase
                        width={25}
                        height={25}
                        className="text-(--primaryground)"
                        aria-hidden="true"
                    />
                    <h2 className="text-2xl font-semibold text-white">
                        What I Bring
                    </h2>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-3xl">
                    Whether you&apos;re building a team or a product,
                    here&apos;s what you can expect from me.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                    {audiences.map((audience) => {
                        const Icon = audience.icon;

                        return (
                            <article
                                key={audience.title}
                                className="rounded-xl bg-white/3 border border-white/10 p-5"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Icon
                                        width={20}
                                        height={20}
                                        className="shrink-0 text-(--accent-text)"
                                        aria-hidden="true"
                                    />
                                    <h3 className="text-base font-semibold text-white">
                                        {audience.title}
                                    </h3>
                                </div>
                                <ul className="space-y-3">
                                    {audience.points.map((point) => (
                                        <li
                                            key={point.lead}
                                            className="text-sm text-gray-400 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-[#C02BFF]"
                                        >
                                            <strong className="font-semibold text-white">
                                                {point.lead}
                                            </strong>{" "}
                                            {point.text}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
