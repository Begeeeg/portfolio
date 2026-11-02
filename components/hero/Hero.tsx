import { Download, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/site";

export default function Hero() {
    return (
        <div className="hero-shell">
            <div className="hero-content">
                <div className="hero-copy">
                    <p className="hero-eyebrow">
                        <span className="status-dot" />
                        JUNIOR FULL-STACK WEB DEVELOPER{" "}
                        <span aria-hidden="true">/</span> COMPUTER ENGINEER
                    </p>
                    <h1>
                        Victor Manuel
                        <span>Yecyec</span>
                    </h1>
                    <p className="hero-lead">
                        I build and ship full-stack TypeScript web apps, from
                        the API to the deployed UI.
                    </p>
                    <p className="hero-description">
                        Computer Engineering graduate based in Cebu City.
                        I&apos;ve built a collaborative task manager with OAuth
                        and role-based permissions, contributed to internal
                        business web apps during my internship, and shipped
                        hardware-backed projects on Raspberry Pi and ESP32. Open
                        to junior full-stack roles and freelance full-stack app
                        projects.
                    </p>

                    <div className="hero-actions">
                        <Link className="button-primary" href="/#projects">
                            Explore my work
                            <MoveUpRight
                                width={15}
                                height={20}
                                className="flex items-center"
                            />
                        </Link>
                        <a
                            className="button-secondary"
                            href="/Yecyec_Resume.pdf"
                            download="Yecyec_Resume.pdf"
                        >
                            Download resume
                            <Download width={20} height={20} />
                        </a>
                    </div>

                    <div className="hero-socials" aria-label="Social links">
                        <a
                            href={contact.github.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profile"
                        >
                            <Image
                                src="/github.png"
                                alt=""
                                width={20}
                                height={20}
                            />
                        </a>
                        <a
                            href={contact.linkedin.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                        >
                            <Image
                                src="/linkedin.png"
                                alt=""
                                width={20}
                                height={20}
                            />
                        </a>
                        <a
                            href={`mailto:${contact.email}`}
                            aria-label="Email Victor"
                        >
                            <Image
                                src="/gmail.png"
                                alt=""
                                width={20}
                                height={20}
                            />
                        </a>
                        <span className="hero-social-caption">
                            {contact.location}
                        </span>
                    </div>
                </div>

                <div className="hero-visual" aria-hidden="true">
                    <div className="orb-scene">
                        <div className="orb-glow" />
                        <div className="orb">
                            <span className="orb-ring orb-ring-one" />
                            <span className="orb-ring orb-ring-two" />
                            <span className="orb-ring orb-ring-three" />
                            <span className="orb-core" />
                        </div>
                        <span className="orb-satellite orb-satellite-one" />
                        <span className="orb-satellite orb-satellite-two" />
                    </div>
                    <div className="portrait-frame">
                        <Image
                            src="/profile.png"
                            alt=""
                            width={560}
                            height={700}
                            priority
                            className="hero-portrait"
                        />
                    </div>
                    <div className="hero-note">
                        <span className="hero-note-mark">01</span>
                        <span>
                            <strong>Engineering mindset</strong>
                            <small>
                                From embedded hardware to deployed web apps.
                            </small>
                        </span>
                    </div>
                </div>
            </div>
            <Link className="scroll-cue" href="/#about">
                <span /> SCROLL TO DISCOVER
            </Link>
        </div>
    );
}
