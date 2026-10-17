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

export default function Page() {
    return (
        <main>
            <Navbar />
            <section id="hero" aria-label="Introduction">
                <Hero />
            </section>
            <section id="about" className="portfolio-section">
                <About />
            </section>
            <section id="skills" className="portfolio-section">
                <Skills />
            </section>
            <section id="projects" className="portfolio-section">
                <Projects />
            </section>
            <section id="education" className="portfolio-section">
                <Education />
            </section>
            <section id="experience" className="portfolio-section">
                <Experience />
            </section>
            <section id="activity" className="portfolio-section">
                <Suspense fallback={<GithubActivitySkeleton />}>
                    <GithubActivity />
                </Suspense>
            </section>
            <section id="contact" className="portfolio-section">
                <Contact />
            </section>
        </main>
    );
}
