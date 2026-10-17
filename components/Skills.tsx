import Image from "next/image";

export default function Skills() {
    const categories = [
        {
            label: "Languages",
            skills: ["js", "ts", "python", "java", "c", "html", "css"],
        },
        {
            label: "Frameworks",
            skills: ["react", "nextjs", "express"],
        },
        {
            label: "Backend & Data",
            skills: ["node-js", "mongodb", "xampp", "phpmyadmin"],
        },
        {
            label: "Tools",
            skills: [
                "git",
                "github",
                "vscode",
                "figma",
                "clickup",
                "render",
                "vercel",
            ],
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="py-20 px-8 rounded-2xl bg-[#171717]/80 backdrop-blur-xl">
                <h1 className="text-lg font-semibold text-white mb-10">
                    Skills/Tech Stack
                </h1>

                <div className="space-y-10">
                    {categories.map((category) => (
                        <div key={category.label}>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="h-3 w-3 rounded-sm bg-[linear-gradient(135deg,#6A00FF,#C02BFF)]" />
                                <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">
                                    {category.label}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="group flex flex-col items-center gap-3 w-24 py-5 rounded-xl bg-white/3 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#C02BFF]/50"
                                    >
                                        <Image
                                            src={`/${skill}.png`}
                                            alt={skill}
                                            width={32}
                                            height={32}
                                            className="object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_#C02BFF]"
                                        />
                                        <p className="text-xs text-gray-400 capitalize group-hover:text-white transition-colors">
                                            {skill
                                                .replace("-js", "")
                                                .replace("js", "JS")}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
