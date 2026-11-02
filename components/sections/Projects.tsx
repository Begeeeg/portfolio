"use client";

import { useState, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FolderKanban } from "lucide-react";
import { projects } from "@/lib/projects";

function updatePreviewTilt(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    event.currentTarget.style.setProperty("--tilt-x", `${(0.5 - y) * 9}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${(x - 0.5) * 11}deg`);
}

function resetPreviewTilt(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
}

export default function Projects() {
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
                        <FolderKanban
                            width={25}
                            height={25}
                            className="text-(--primaryground)"
                        />
                        <h2 className="text-2xl font-semibold text-white">
                            Projects
                        </h2>
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
                        <div
                            key={project.title}
                            className="project-preview-scene relative w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-95 bg-black/30"
                            onPointerMove={updatePreviewTilt}
                            onPointerLeave={resetPreviewTilt}
                        >
                            <div className="project-preview-surface absolute inset-0">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} project preview`}
                                    fill
                                    className="project-preview-image object-cover"
                                />
                                <div
                                    className="project-preview-shade"
                                    aria-hidden="true"
                                />
                                <div className="project-preview-label">
                                    <span className="project-preview-mark">
                                        ↗
                                    </span>
                                    <span>
                                        <strong>{project.title}</strong>
                                        <small>
                                            {project.group === "smaller"
                                                ? "SMALLER BUILD"
                                                : "SELECTED WORK"}
                                        </small>
                                    </span>
                                </div>
                                <span className="project-preview-count">
                                    {String(index + 1).padStart(2, "0")}{" "}
                                    <span>/</span>{" "}
                                    {String(projects.length).padStart(2, "0")}
                                </span>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                            {project.status === "in-progress" && (
                                <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-3 inline-block w-fit">
                                    In Progress
                                </span>
                            )}

                            {project.group === "smaller" && (
                                <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 mb-3 inline-block w-fit">
                                    Smaller build
                                </span>
                            )}

                            <h3 className="text-xl font-semibold text-white mb-3">
                                {project.title}
                            </h3>

                            <p className="text-sm text-gray-400 leading-relaxed mb-5">
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
