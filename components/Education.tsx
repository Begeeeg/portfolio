import Image from "next/image";

export default function Education() {
    const education = [
        {
            school: "University of Science and Technology of Southern Philippines",
            location: "Cagayan De Oro City",
            degree: "Bachelor of Science in Computer Engineering",
            period: "2022 — 2026",
            logo: "/logo.png",
            org: {
                name: "College of Engineering and Architecture",
                logo: "/ustp_cea.png",
            },
            highlights: [
                "Built a strong foundation in programming, data structures, and software development, with exposure to machine learning and artificial intelligence",
                "Developed a solid understanding of computer architecture, electronics, and embedded systems",
                "Focused electives and thesis work on web application development",
            ],
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="content-panel py-12 px-8">
                <div className="flex items-center gap-2 mb-10">
                    <Image
                        src="/graduation.png"
                        alt="Education icon"
                        width={25}
                        height={25}
                    />
                    <h1 className="section-title">
                        Education
                    </h1>
                </div>

                <div className="space-y-6">
                    {education.map((entry) => (
                        <div
                            key={entry.school}
                            className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl"
                        >
                            <div className="shrink-0">
                                <Image
                                    src={entry.logo}
                                    alt={`${entry.school} logo`}
                                    width={130}
                                    height={130}
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                                    <h2 className="text-white font-semibold leading-snug">
                                        {entry.school}
                                    </h2>
                                    <span className="text-xs text-gray-500 shrink-0">
                                        {entry.period}
                                    </span>
                                </div>

                                <p className="text-sm text-gray-400 mb-1">
                                    {entry.degree}
                                </p>
                                <p className="text-xs text-gray-500 mb-4">
                                    {entry.location}
                                </p>

                                {entry.highlights.length > 0 && (
                                    <ul className="space-y-1.5 text-left inline-block">
                                        {entry.highlights.map((point) => (
                                            <li
                                                key={point}
                                                className="text-sm text-gray-400 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-[#C02BFF]"
                                            >
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {entry.org && (
                                <div className="shrink-0">
                                    <Image
                                        src={entry.org.logo}
                                        alt={`${entry.org.name} logo`}
                                        width={130}
                                        height={130}
                                        className="object-contain"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
