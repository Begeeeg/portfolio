"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links: { href: string; label: string; contact?: boolean }[] = [
        { href: "/#about", label: "About" },
        { href: "/#skills", label: "Skills" },
        { href: "/#projects", label: "Projects" },
        { href: "/#experience", label: "Experience" },
        { href: "/#contact", label: "Contact", contact: true },
    ];

    return (
        <nav className="site-nav">
            <div className="site-nav-inner flex items-center justify-between">
                <Link href="/" className="site-brand text-xl font-semibold">
                    VMY
                </Link>

                <div className="nav-links hidden items-center gap-7 lg:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={link.contact ? "nav-contact" : ""}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden rounded-md border border-white/10 px-3 py-2 text-lg text-white"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    aria-controls="mobile-navigation"
                >
                    {open ? "Close" : "Menu"}
                </button>

                {open && (
                    <div
                        id="mobile-navigation"
                        className="nav-mobile-menu absolute top-full left-0 flex w-full flex-col items-center gap-5 py-6 lg:hidden"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-sm text-gray-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
