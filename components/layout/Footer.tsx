import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contact, site } from "@/lib/site";

const channels = [
    {
        name: "GitHub",
        href: contact.github.href,
        icon: "/github.png",
        external: true,
    },
    {
        name: "LinkedIn",
        href: contact.linkedin.href,
        icon: "/linkedin.png",
        external: true,
    },
    {
        name: "Email",
        href: `mailto:${contact.email}`,
        icon: "/gmail.png",
        external: false,
    },
] as const;

export default function Footer() {
    return (
        <footer className="mx-auto flex w-full max-w-6xl flex-col gap-6 border-t border-white/10 px-6 py-8 text-sm text-gray-400 md:flex-row md:items-center md:justify-between md:px-12">
            <div className="flex flex-col gap-2">
                <span className="font-medium text-white">{site.name}</span>
                <span className="inline-flex items-center gap-2 text-xs">
                    <MapPin
                        width={14}
                        height={14}
                        className="text-(--accent-text)"
                        aria-hidden="true"
                    />
                    {contact.location}
                </span>
            </div>
            <nav aria-label="Social links" className="flex items-center gap-5">
                {channels.map((channel) => (
                    <Link
                        key={channel.name}
                        href={channel.href}
                        target={channel.external ? "_blank" : undefined}
                        rel={
                            channel.external
                                ? "noopener noreferrer"
                                : undefined
                        }
                        aria-label={channel.name}
                        title={channel.name}
                        className="opacity-70 transition-opacity hover:opacity-100"
                    >
                        <Image
                            src={channel.icon}
                            alt=""
                            width={28}
                            height={28}
                            className="h-6 w-6 object-contain"
                        />
                    </Link>
                ))}
            </nav>
            <p className="text-xs text-gray-500">© {site.name}</p>
        </footer>
    );
}
