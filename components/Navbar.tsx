"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: "/#about", label: "About" },
        { href: "/#skills", label: "Skills" },
        { href: "/#projects", label: "Projects" },
        { href: "/#education", label: "Education" },
        { href: "/#experience", label: "Experience" },
        { href: "/#activity", label: "Activity" },
        { href: "/#contact", label: "Contact" },
    ];

    return (
        <nav className="absolute top-0 w-full flex items-center justify-between py-5 px-6 lg:px-20 z-50">
            <div className="text-2xl font-bold px-4 py-2 flex items-center gap-2">
                <Link href="/">VMY</Link>
                <Image src="/code.png" alt="code" width={30} height={30} />
            </div>

            <div className="hidden lg:flex space-x-10">
                {links.map((link) => (
                    <Link key={link.href} href={link.href}>
                        {link.label}
                    </Link>
                ))}
            </div>

            <button
                onClick={() => setOpen(!open)}
                className="lg:hidden text-white text-2xl px-4"
                aria-label="Toggle menu"
            >
                {open ? "✕" : "☰"}
            </button>

            {open && (
                <div className="absolute top-full left-0 w-full flex flex-col items-center gap-4 py-6 bg-[#171717]/95 border-t border-white/10 lg:hidden">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
