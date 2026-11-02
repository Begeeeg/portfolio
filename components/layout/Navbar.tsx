"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [heroVisible, setHeroVisible] = useState(true);

    useEffect(() => {
        const hero = document.getElementById("hero");
        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => setHeroVisible(entry.isIntersecting),
            { threshold: 0 },
        );
        observer.observe(hero);

        return () => observer.disconnect();
    }, []);

    const links: { href: string; label: string; contact?: boolean }[] = [
        { href: "/#about", label: "About" },
        { href: "/#what-i-bring", label: "What I Bring" },
        { href: "/#skills", label: "Skills" },
        { href: "/#implementation", label: "Implementation" },
        { href: "/#structure", label: "Structure" },
        { href: "/#projects", label: "Projects" },
        { href: "/#experience", label: "Experience" },
        { href: "/#contribute", label: "GitHub" },
        { href: "/#contact", label: "Contact", contact: true },
    ];

    return (
        <nav
            aria-label="Primary"
            className={`site-nav${heroVisible ? " site-nav--hero-hidden" : ""}`}
        >
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
                    className="lg:hidden rounded-md border border-white/10 p-2 text-white"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile-navigation"
                >
                    {open ? (
                        <X width={22} height={22} aria-hidden="true" />
                    ) : (
                        <Menu width={22} height={22} aria-hidden="true" />
                    )}
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
