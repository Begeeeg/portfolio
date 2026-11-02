import { GraduationCap, Mail, MapPin, Rocket, User } from "lucide-react";
import { contact } from "@/lib/site";

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

                            <h2 className="text-xl font-semibold text-white">
                                About Me
                            </h2>
                        </div>

                        <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                            <p>
                                I&apos;m a Computer Engineering graduate who
                                builds full-stack web applications, mostly with
                                Next.js, Node/Express and TypeScript. I like the
                                parts of a project people don&apos;t see:
                                authentication, validation, tests, CI and
                                deployment.
                            </p>
                            <p>
                                I&apos;m looking for a junior full-stack role,
                                and I&apos;m open to on-site, hybrid, remote or
                                relocation. I also take on freelance full-stack
                                app projects.
                            </p>
                            <p>
                                I work from Cebu City (UTC+8), communicate in
                                written English, and use GitHub, ClickUp,
                                Postman and Vercel day to day.
                            </p>
                        </div>
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
                                    {contact.location}
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
                                    {contact.email}
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
                                    Open to junior full-stack roles (on-site,
                                    hybrid, remote or relocation) and freelance
                                    full-stack app projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
