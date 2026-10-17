import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    const channels = [
        {
            name: "GitHub",
            handle: "github.com/Begeeeg",
            href: "https://github.com/Begeeeg",
            icon: "/github.png",
        },
        {
            name: "LinkedIn",
            handle: "linkedin.com/in/vmyecyec",
            href: "https://www.linkedin.com/in/vmyecyec",
            icon: "/linkedin.png",
        },
        {
            name: "Email",
            handle: "vyecyec7@gmail.com",
            href: "mailto:vyecyec7@gmail.com",
            icon: "/gmail.png",
        },
    ];

    const LAST_UPDATED = "August 2026";

    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="pt-20 pb-5 px-8 rounded-2xl bg-[#171717]/80 backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-6">
                    <Image
                        src="/send.png"
                        alt="Contact icon"
                        width={25}
                        height={25}
                    />
                    <h1 className="text-lg font-semibold text-white">
                        Contact
                    </h1>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed max-w-xl mb-8">
                    I&apos;m open to new opportunities and collaborations. If
                    you have any questions, want to discuss a project, or just
                    want to say hi, feel free to reach out through any of the
                    channels below.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    {channels.map((channel) => (
                        <Link
                            key={channel.name}
                            href={channel.href}
                            target={
                                channel.name !== "Email" ? "_blank" : undefined
                            }
                            rel={
                                channel.name !== "Email"
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            className="group flex-1 flex items-center gap-3 px-5 py-4 rounded-xl bg-white/3 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#C02BFF]/50"
                        >
                            <Image
                                src={channel.icon}
                                alt={channel.name}
                                width={28}
                                height={28}
                                className="object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_10px_#C02BFF]"
                            />
                            <div className="min-w-0">
                                <p className="text-sm font-medium text-white">
                                    {channel.name}
                                </p>
                                <p className="text-xs text-gray-500 truncate">
                                    {channel.handle}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <p className="text-center text-xs text-gray-600 mt-4 pb-10">
                Last updated {LAST_UPDATED}
            </p>
        </div>
    );
}
