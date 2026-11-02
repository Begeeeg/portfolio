function resolveSiteUrl(): string {
    const explicit = process.env.NEXT_PUBLIC_SITE_URL;
    if (explicit) return explicit.replace(/\/$/, "");

    const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
    if (vercel) return `https://${vercel}`;

    if (process.env.NODE_ENV === "production") {
        console.warn(
            "[site] NEXT_PUBLIC_SITE_URL is not set; canonical and social URLs will point at localhost.",
        );
    }
    return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const site = {
    name: "Victor Manuel Yecyec",
    jobTitle: "Junior Full-Stack Web Developer",
    title: "Victor Manuel Yecyec | Junior Full-Stack Web Developer",
    description:
        "Portfolio of Victor Manuel Yecyec, a Computer Engineering graduate and full-stack developer building thoughtful, reliable web applications.",
} as const;

// Single source of truth for contact details used across sections.
export const contact = {
    email: "vyecyec7@gmail.com",
    location: "Cebu City, Philippines",
    github: {
        handle: "github.com/Begeeeg",
        href: "https://github.com/Begeeeg",
    },
    linkedin: {
        handle: "linkedin.com/in/vmyecyec",
        href: "https://www.linkedin.com/in/vmyecyec",
    },
} as const;
