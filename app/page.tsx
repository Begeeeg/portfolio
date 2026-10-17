import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import GithubActivity from "@/components/GithubActivity";
import Contact from "@/components/Contact";
import GithubActivitySkeleton from "@/components/GithubActivitySkeleton";
import { Suspense } from "react";

export default function page() {
    return (
        <div>
            <Navbar />
            <section id="hero">
                <Hero />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="education">
                <Education />
            </section>
            <section id="experience">
                <Experience />
            </section>
            <section id="activity">
                <Suspense fallback={<GithubActivitySkeleton />}>
                    <GithubActivity />
                </Suspense>
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}
