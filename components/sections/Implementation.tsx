import {
    Blocks,
    Database,
    ShieldCheck,
    TestTube2,
    Workflow,
} from "lucide-react";

const areas = [
    {
        title: "Full-Stack Development",
        icon: Blocks,
        capabilities: [
            "Responsive user interfaces",
            "Reusable frontend components",
            "REST API integration",
            "End-to-end CRUD workflows",
        ],
    },
    {
        title: "Authentication & Access Control",
        icon: ShieldCheck,
        capabilities: [
            "JWT authentication with HTTP-only cookies",
            "OAuth account integrations",
            "Email verification and protected routes",
            "Ownership-based permissions",
        ],
    },
    {
        title: "APIs & Data",
        icon: Database,
        capabilities: [
            "REST API design with Node.js and Express",
            "MongoDB data modeling",
            "Zod request validation",
            "Consistent API error responses",
        ],
    },
    {
        title: "Testing & Quality",
        icon: TestTube2,
        capabilities: [
            "Automated API tests with Vitest and Supertest",
            "Authentication endpoint rate limiting",
            "Type-safe development with TypeScript",
        ],
    },
    {
        title: "Build & Deployment",
        icon: Workflow,
        capabilities: [
            "GitHub Actions continuous integration",
            "Dockerized backend services",
            "Frontend deployment on Vercel",
            "API deployment on Render",
        ],
    },
];

export default function Implementation() {
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="content-panel py-12 px-8">
                <div className="implementation-heading">
                    <div>
                        <p className="implementation-kicker">
                            <Workflow size={15} aria-hidden="true" />
                            FROM CONCEPT TO SHIPPED PRODUCT
                        </p>
                        <h1 className="text-2xl font-semibold text-white">
                            What I Can Implement
                        </h1>
                        <p className="text-sm text-gray-400 leading-relaxed mt-3 max-w-3xl">
                            From polished interfaces to secure APIs and
                            deployment, I build the features and workflows that
                            bring full-stack applications together.
                        </p>
                    </div>
                    <span className="implementation-flow" aria-hidden="true">
                        <span>DESIGN</span>
                        <i />
                        <span>BUILD</span>
                        <i />
                        <span>SHIP</span>
                    </span>
                </div>

                <div className="implementation-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {areas.map((area, index) => {
                        const Icon = area.icon;

                        return (
                            <article
                                key={area.title}
                                className="implementation-card rounded-xl bg-white/3 border border-white/10 p-5"
                            >
                                <div className="implementation-card-top">
                                    <span className="implementation-icon">
                                        <Icon
                                            width={21}
                                            height={21}
                                            className="text-(--accent-text)"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <span className="implementation-index">
                                        0{index + 1}
                                    </span>
                                </div>
                                <h2 className="implementation-card-title">
                                    {area.title}
                                </h2>
                                <ul className="implementation-capabilities">
                                    {area.capabilities.map((capability) => (
                                        <li key={capability}>
                                            <span aria-hidden="true" />
                                            {capability}
                                        </li>
                                    ))}
                                </ul>
                                <div
                                    className="implementation-card-glint"
                                    aria-hidden="true"
                                />
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
