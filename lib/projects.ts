export type Project = {
    title: string;
    image: string;
    href: string;
    stack: string[];
    description: string;
    status?: "in-progress";
    /** "smaller" projects are shown last and labelled as smaller builds. */
    group?: "smaller";
};

// Order here is the order shown in the carousel.
export const projects: Project[] = [
    {
        title: "Progress",
        image: "/progress.png",
        href: "https://progress-developer.vercel.app",
        stack: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "Vitest",
            "Docker",
        ],
        description:
            "A collaborative task manager for developer teams. Create personal lists or invite members to shared ones, assign and track tasks, and control access with owner-only permissions. Built end to end with a TypeScript MERN stack, cookie-based JWT authentication, OAuth sign-in (GitHub, Google, LinkedIn, Facebook), API tests and a GitHub Actions pipeline.",
    },
    {
        title: "Real Estate Redesign",
        image: "/real-estate.png",
        href: "https://marci-metzger-tan-tau.vercel.app/",
        stack: ["Next.js", "Tailwind", "Sonner", "TypeScript", "Brevo"],
        description:
            "A redesign of a Nevada real estate broker's website, built as a technical assessment for a web developer role. Features an interactive 3D hero, a filterable listings search ready for MLS/IDX integration, animated sales stats, testimonials, and a contact form that sends inquiries through Brevo with toast feedback and spam protection.",
    },
    {
        title: "Nyxon Banking Kiosk",
        image: "/nyxon_banking_kiosk.png",
        href: "https://github.com/ArcaIcr/GUI---BANKING-KIOSK",
        stack: ["Python - PyQt5", "MySQL"],
        description:
            "An embedded banking kiosk on a Raspberry Pi 4 with a touchscreen GUI for cash deposits via bill acceptor, thermal receipt printing and transaction history. As co-leader, I directed the GUI development and database integration and coordinated hardware testing across the team.",
    },
    {
        title: "MediTrack",
        image: "/meditrack.png",
        href: "https://github.com/Begeeeg/mediTrackPit",
        stack: ["HTML", "Javascript", "CSS", "Php", "PhpMyAdmin"],
        description:
            "A hospital medical inventory system that tracks supplies automatically using RFID tags and an ESP32 microcontroller. Staff get real-time stock visibility, low-supply alerts and usage logs instead of manual counts. Built with a PHP/MySQL backend for inventory records and reporting.",
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
        group: "smaller",
    },
    {
        title: "Weather Application",
        image: "/weather_webApp.png",
        href: "https://begeeeg.github.io/Weather-App/",
        stack: ["HTML", "Javascript", "CSS"],
        description:
            "A weather web application that uses a Weather API to fetch real-time conditions and forecasts for any searched city, displaying temperature, humidity, and current sky conditions in a clean, responsive interface.",
        group: "smaller",
    },
];
