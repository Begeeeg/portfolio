import { GraduationCap, Mail, MapPin, Rocket, User } from "lucide-react";

export default function About() {
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12 overflow-x-hidden">
            <div className="relative">
                <div
                    className="
                    relative flex flex-col md:flex-row justify-between gap-10
                    content-panel pt-12 pb-12 px-8
                "
                >
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-4">
                            <User
                                width={25}
                                height={25}
                                className="text-(--primaryground)"
                            />

                            <h1 className="text-xl font-semibold text-white">
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
                        <div className="flex items-center gap-3">
                            <GraduationCap
                                width={25}
                                height={25}
                                className="text-(--primaryground)"
                            />
                            <div className="min-w-0">
                                <p className="text-gray-400">Degree</p>
                                <p className="text-white wrap-break-word">
                                    Bachelor of Computer Engineering
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <MapPin
                                width={25}
                                height={25}
                                className="text-(--primaryground)"
                            />
                            <div className="min-w-0">
                                <p className="text-gray-400">Location</p>
                                <p className="text-white wrap-break-word">
                                    Cebu City, Philippines
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail
                                width={25}
                                height={25}
                                className="text-(--primaryground)"
                            />
                            <div className="min-w-0">
                                <p className="text-gray-400">Email</p>
                                <p className="text-white wrap-break-word">
                                    vyecyec7@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Rocket
                                width={40}
                                height={40}
                                className="text-(--primaryground)"
                            />
                            <div className="min-w-0">
                                <p className="text-gray-400">Currently</p>
                                <p className="text-white wrap-break-word">
                                    Improving my skills in Full-Stack Web
                                    Development and looking for opportunities to
                                    contribute to real-world projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
