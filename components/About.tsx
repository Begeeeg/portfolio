import Image from "next/image";

export default function About() {
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12 overflow-x-hidden">
            <div className="relative">
                <div
                    className="
                    relative flex flex-col md:flex-row justify-between gap-10
                    pt-30 pb-20  px-8 rounded-2xl
                    bg-[#171717]/80
                    backdrop-blur-xl
                "
                >
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/user.png"
                                alt="About icon"
                                width={25}
                                height={25}
                            />
                            <h1 className="text-lg font-semibold text-white">
                                About Me
                            </h1>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            I&apos;m a newly graduated Computer Engineer with a
                            strong foundation in programming, data structures,
                            and software development. I&apos;m particularly
                            interested in Web Development and enjoy turning
                            ideas into clean, intuitive websites and web
                            applications.
                            <br />
                            <br />
                            I&apos;m eager to learn, grow, and contribute to
                            real-world projects while continuously improving my
                            skills.
                        </p>
                    </div>

                    <div className="flex-1 min-w-0 grid gap-4 text-sm">
                        <div className="flex items-start gap-3">
                            <Image
                                src="/suitcase.png"
                                alt="Degree"
                                width={25}
                                height={25}
                            />
                            <div className="min-w-0">
                                <p className="text-gray-400">Degree</p>
                                <p className="text-white wrap-break-word">
                                    Bachelor of Computer Engineering
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Image
                                src="/location.png"
                                alt="Location"
                                width={25}
                                height={25}
                            />
                            <div className="min-w-0">
                                <p className="text-gray-400">Location</p>
                                <p className="text-white wrap-break-word">
                                    Cagayan De Oro City, Philippines
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Image
                                src="/mail.png"
                                alt="Email"
                                width={25}
                                height={25}
                            />
                            <div className="min-w-0">
                                <p className="text-gray-400">Email</p>
                                <p className="text-white wrap-break-word">
                                    vyecyec7@email.com
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Image
                                src="/rocket.png"
                                alt="Currently"
                                width={25}
                                height={25}
                            />
                            <div className="min-w-0">
                                <p className="text-gray-400">Currently</p>
                                <p className="text-white wrap-break-word">
                                    Deepening my Next.js & backend skills
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
