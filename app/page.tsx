import type { ComponentType } from "react";
import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import WhatIBring from "@/components/sections/WhatIBring";
import Skills from "@/components/sections/Skills";
import Implementation from "@/components/sections/Implementation";
import Structure from "@/components/sections/Structure";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import GithubActivity from "@/features/github/GithubActivity";
import CTA from "@/features/contact/CTA";
import GithubActivitySkeleton from "@/features/github/GithubActivitySkeleton";
import SectionErrorBoundary from "@/components/shared/SectionErrorBoundary";

type SectionConfig = {
    id: string;
    label: string;
    Component: ComponentType;
};

// Sections rendered before the GitHub block, in page order.
const sectionsBefore: SectionConfig[] = [
    { id: "about", label: "About", Component: About },
    { id: "what-i-bring", label: "What I Bring", Component: WhatIBring },
    { id: "skills", label: "Skills", Component: Skills },
    {
        id: "implementation",
        label: "Implementation",
        Component: Implementation,
    },
    { id: "structure", label: "Structure", Component: Structure },
    { id: "projects", label: "Projects", Component: Projects },
    { id: "education", label: "Education", Component: Education },
    { id: "experience", label: "Experience", Component: Experience },
];

export default function Page() {
    return (
        <>
            {/* Navbar sits outside <main> so main only holds page content. */}
            <Navbar />
            <main id="main" tabIndex={-1} className="outline-none">
                <section id="hero" aria-label="Introduction">
                    <Hero />
                </section>
                {sectionsBefore.map(({ id, label, Component }) => (
                    <section
                        key={id}
                        id={id}
                        aria-label={label}
                        className="portfolio-section"
                    >
                        <Component />
                    </section>
                ))}
                {/* id kept as "contribute" so existing nav links keep working. */}
                <section
                    id="contribute"
                    aria-label="GitHub activity"
                    className="portfolio-section"
                >
                    <SectionErrorBoundary
                        fallback={
                            <div
                                role="status"
                                className="content-panel mx-auto w-[min(100%-3rem,76rem)] p-8 text-muted"
                            >
                                GitHub activity is unavailable right now. Please
                                check back later.
                            </div>
                        }
                    >
                        <Suspense fallback={<GithubActivitySkeleton />}>
                            <GithubActivity />
                        </Suspense>
                    </SectionErrorBoundary>
                </section>
                <section
                    id="contact"
                    aria-label="Contact"
                    className="portfolio-section"
                >
                    <CTA />
                </section>
            </main>
            <Footer />
        </>
    );
}
