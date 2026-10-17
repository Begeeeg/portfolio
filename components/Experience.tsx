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
                "Collaborated with a 5-person development team to build and maintain internal web applications used by company staff, following Agile methodology and the Software Development Life Cycle (SDLC)",
                "Developed responsive user interfaces and implemented UI/UX best practices to improve usability of internal tools",
                "Participated in testing, deployment, and client support activities to ensure software quality and alignment with business requirements",
            ],
        },
        {
            company: "Remotasks",
            location: "Cagayan De Oro City",
            role: "AI Data Annotation Contributor",
            period: "March 2026 — September 2026",
            logo: "/remotasks.png",
            href: "https://www.remotasks.com/en",
            highlights: [
                "Performed AI data annotation, task evaluation, and quality validation in accordance with project guidelines and quality standards",
                "Maintained high accuracy and productivity across changing project requirements and workflows",
                "Identified inconsistencies and documented issues to support ongoing project quality reviews",
            ],
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="py-20 px-8 rounded-2xl bg-[#171717]/80 backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-10">
                    <Image
                        src="/certificate.png"
                        alt="Experience icon"
                        width={25}
                        height={25}
                    />
                    <h1 className="text-lg font-semibold text-white">
                        Experience
                    </h1>
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
                                    <h2 className="text-white font-semibold leading-snug">
                                        {entry.role}
                                    </h2>
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
