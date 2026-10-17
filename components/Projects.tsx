"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
    title: string;
    image: string;
    href: string;
    stack: string[];
    description: string;
    status?: "in-progress";
};

export default function Projects() {
    const projects: Project[] = [
        {
            title: "Progress",
            image: "/progress.png",
            href: "https://progress-developer.vercel.app",
            stack: [
                "Next.js",
                "Tailwind",
                "Node.js",
                "Express",
                "TypeScript",
                "MongoDB",
                "Vitest",
                "Supertest",
                "Zod",
            ],
            description:
                "A SaaS-style collaborative list and task manager for individuals and teams of developers — create personal lists or invite members to shared ones, assign and track tasks together, with owner-controlled permissions. Built full-stack with a TypeScript MERN stack and secure cookie-based JWT authentication, and OAuth to access GitHub, Google, LinkedIn, and Facebook accounts for seamless account connectivity.",
        },
        {
            title: "To Do List",
            image: "/todolist_project.png",
            href: "https://todo-frontend-seven-fawn.vercel.app/",
            stack: [
                "Next.js",
                "Tailwind",
                "Node.js",
                "Express",
                "MongoDB",
                "TypeScript",
            ],
            description:
                "A web application that allows users to create, read, update, and delete tasks. It features a responsive design and a user-friendly interface.",
        },
        {
            title: "Nyxon Banking Kiosk",
            image: "/nyxon_banking_kiosk.png",
            href: "https://github.com/ArcaIcr/GUI---BANKING-KIOSK",
            stack: ["Python - PyQt5", "MySQL"],
            description:
                "An embedded banking kiosk system built on a Raspberry Pi 4, featuring a touchscreen GUI for cash deposits via bill acceptor, thermal receipt printing, and transaction history tracking. As co-leader, I directed the GUI development and database integration while coordinating hardware testing across the team.",
        },
        {
            title: "MediTrack",
            image: "/meditrack.png",
            href: "https://github.com/Begeeeg/mediTrackPit",
            stack: ["HTML", "Javascript", "CSS", "Php", "PhpMyAdmin"],
            description:
                "A hospital medical inventory system that automates supply tracking using RFID tags and an ESP32 microcontroller. Instead of manual counts, staff get real-time stock visibility, low-supply alerts, and usage logs — reducing tracking errors and freeing up time for patient care. Built with a PHP/MySQL backend for inventory records and reporting.",
        },
        {
            title: "Weather Application",
            image: "/weather_webApp.png",
            href: "https://begeeeg.github.io/Weather-App/",
            stack: ["HTML", "Javascript", "CSS"],
            description:
                "A weather web application that uses a Weather API to fetch real-time conditions and forecasts for any searched city, displaying temperature, humidity, and current sky conditions in a clean, responsive interface.",
        },
    ];

    const [index, setIndex] = useState(0);
    const project = projects[index];

    const goPrev = () =>
        setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));

    const goNext = () =>
        setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="content-panel py-12 px-8">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/folder.png"
                            alt="Projects icon"
                            width={25}
                            height={25}
                        />
                        <h1 className="section-title">Projects</h1>
                    </div>

                    <p className="text-sm text-gray-500">
                        {index + 1} / {projects.length}
                    </p>
                </div>

                <div className="relative flex items-center gap-4">
                    <button
                        onClick={goPrev}
                        aria-label="Previous project"
                        className="hidden md:flex shrink-0 h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:border-[#C02BFF]/50 hover:text-[#C02BFF] transition-colors"
                    >
                        ‹
                    </button>

                    <div className="flex-1 flex flex-col md:flex-row items-stretch gap-6 rounded-xl overflow-hidden bg-white/3 border border-white/10 md:min-h-95">
                        <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto bg-black/30">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                            {project.status === "in-progress" && (
                                <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-3 inline-block w-fit">
                                    In Progress
                                </span>
                            )}

                            <h2 className="text-xl font-semibold text-white mb-3">
                                {project.title}
                            </h2>

                            <p className="text-sm text-gray-400 leading-relaxed mb-5 line-clamp-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {project.status === "in-progress" ? (
                                <span className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                                    Coming Soon
                                </span>
                            ) : (
                                <Link
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-[linear-gradient(135deg,#6A00FF,#C02BFF)] text-white hover:opacity-90 transition-opacity"
                                >
                                    View Project
                                </Link>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={goNext}
                        aria-label="Next project"
                        className="hidden md:flex shrink-0 h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:border-[#C02BFF]/50 hover:text-[#C02BFF] transition-colors"
                    >
                        ›
                    </button>
                </div>

                <div className="flex md:hidden items-center justify-center gap-4 mt-6">
                    <button
                        onClick={goPrev}
                        aria-label="Previous project"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
                    >
                        ‹
                    </button>
                    <button
                        onClick={goNext}
                        aria-label="Next project"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
                    >
                        ›
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-6">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            aria-label={`Go to project ${i + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                i === index
                                    ? "w-6 bg-[linear-gradient(135deg,#6A00FF,#C02BFF)]"
                                    : "w-1.5 bg-white/20"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
