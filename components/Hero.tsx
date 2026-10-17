import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 desktop:gap-40 min-h-screen py-24 md:py-0">
                <div className="space-y-4 md:space-y-6">
                    <div>
                        <p className="text-lg md:text-xl font-bold">
                            Hi, I&apos;m
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold py-2 md:py-3">
                            Victor Manuel Yecyec
                        </h1>
                        <p className="text-xl md:text-2xl lg:text-3xl font-bold bg-[linear-gradient(135deg,#6A00FF,#C02BFF)] bg-clip-text text-transparent">
                            Junior Full-Stack Web Developer
                        </p>
                        <p className="text-lg md:text-xl lg:text-2xl font-bold bg-[linear-gradient(135deg,#6A00FF,#C02BFF)] bg-clip-text text-transparent">
                            Computer Engineer
                        </p>
                    </div>

                    <p className="max-w-md">
                        A Junior Full-Stack Web Developer with a Computer
                        Engineering background, focused on building responsive,
                        user-friendly web applications with clean, maintainable
                        code.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <div>
                            <Link href="/#projects">
                                <button className="bg-[linear-gradient(135deg,#6A00FF,#C02BFF)] px-8 py-4 cursor-pointer">
                                    View My Work
                                </button>
                            </Link>
                        </div>

                        <div className="p-1 bg-[linear-gradient(135deg,#6A00FF,#C02BFF)] inline-block">
                            <a href="/Yecyec_CV.pdf" download="Yecyec_CV.pdf">
                                <button className="flex gap-2 bg-[#171717] px-7 py-3 cursor-pointer">
                                    Download CV
                                    <Image
                                        src="/download.png"
                                        alt="Download Icon"
                                        width={20}
                                        height={20}
                                    />
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-6 justify-center">
                        <Link
                            href="https://github.com/Begeeeg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/github.png"
                                alt="Github"
                                width={35}
                                height={35}
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/vmyecyec"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/linkedin.png"
                                alt="LinkedIn"
                                width={35}
                                height={35}
                            />
                        </Link>
                        <Link href="mailto:vyecyec7@gmail.com">
                            <Image
                                src="/gmail.png"
                                alt="Gmail"
                                width={35}
                                height={35}
                            />
                        </Link>
                    </div>
                </div>

                <div className="hidden min-[768px]:flex relative items-center justify-center">
                    <div className="absolute h-48 w-48 md:h-72 md:w-72 rounded-full bg-[linear-gradient(135deg,#6A00FF,#C02BFF)] blur-3xl opacity-90"></div>
                    <div className="relative flex h-48 w-48 md:h-72 md:w-72 items-center justify-center">
                        <Image
                            src="/profile.png"
                            alt="Profile Picture"
                            width={350}
                            height={350}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
