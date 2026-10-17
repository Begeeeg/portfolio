import Image from "next/image";
import Link from "next/link";

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
                        I build thoughtful digital products, from polished
                        interfaces to dependable backends.
                    </p>
                    <p className="hero-description">
                        A Computer Engineering graduate focused on full-stack
                        web development. I bring ideas to life with clean,
                        maintainable code and a strong eye for usability.
                    </p>

                    <div className="hero-actions">
                        <Link className="button-primary" href="/#projects">
                            Explore my work
                            <span aria-hidden="true">↗</span>
                        </Link>
                        <a
                            className="button-secondary"
                            href="/Yecyec_CV.pdf"
                            download="Yecyec_CV.pdf"
                        >
                            Download resume
                            <Image
                                src="/download.png"
                                alt=""
                                width={17}
                                height={17}
                            />
                        </a>
                    </div>

                    <div className="hero-socials" aria-label="Social links">
                        <a
                            href="https://github.com/Begeeeg"
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
                            href="https://www.linkedin.com/in/vmyecyec"
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
                            href="mailto:vyecyec7@gmail.com"
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
                            Cebu City, Philippines
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
                            <small>Built for people. Designed to work.</small>
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
