import { ClipboardList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Experience() {
    const experience = [
        {
            company: "Orblabs",
            location: "Cagayan De Oro City",
            role: "Full-Stack Developer Intern (OJT)",
            period: "January 2026 — March 2026",
            logo: "/orblabs.png",
            href: "https://www.ordlabs.dev/",
            highlights: [
                "Contributed to a 5-person Agile team delivering internal web applications, including a web-based inventory and accounting system that supports day-to-day business operations, following the SDLC from planning through release",
                "Built notification features for the system using Next.js, Node.js, Express 5 and TypeScript",
                "Resolved merge conflicts and kept the shared codebase stable across the team's branches",
                "Took part in testing, deployment and client support to keep the software aligned with business requirements",
            ],
        },
        {
            company: "Remotasks",
            location: "Remote",
            role: "AI Data Annotation Contributor",
            period: "March 2026 — September 2026",
            logo: "/remotasks.png",
            href: "https://www.remotasks.com/en",
            highlights: [
                "Performed AI data annotation and quality validation to project guidelines, maintaining high accuracy as requirements changed",
                "Identified inconsistencies and documented issues to support quality reviews",
            ],
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="content-panel py-12 px-8">
                <div className="flex items-center gap-2 mb-10">
                    <ClipboardList
                        width={25}
                        height={25}
                        className="text-(--primaryground)"
                    />
                    <h2 className="text-xl font-semibold text-white">
                        Experience
                    </h2>
                </div>

                <div className="relative">
                    <div className="absolute left-6 top-2 bottom-2 w-px bg-white/10" />

                    <div className="space-y-10">
                        {experience.map((entry) => (
                            <div key={entry.company} className="relative pl-16">
                                <Link
                                    href={entry.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute left-0 top-0 h-12 w-12 flex items-center justify-center hover:scale-110 transition-transform"
                                >
                                    <Image
                                        src={entry.logo}
                                        alt={`${entry.company} logo`}
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                    />
                                </Link>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                                    <h3 className="text-white font-semibold leading-snug">
                                        {entry.role}
                                    </h3>
                                    <span className="text-xs text-gray-500 shrink-0 sm:pl-4">
                                        {entry.period}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <Link
                                        href={entry.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-[#C02BFF] hover:underline"
                                    >
                                        {entry.company}
                                    </Link>
                                    <span className="text-gray-600">•</span>
                                    <span className="text-xs text-gray-500">
                                        {entry.location}
                                    </span>
                                </div>

                                <ul className="space-y-1.5">
                                    {entry.highlights.map((point) => (
                                        <li
                                            key={point}
                                            className="text-sm text-gray-400 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-[#C02BFF]"
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
