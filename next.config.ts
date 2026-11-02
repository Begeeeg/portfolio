import type { NextConfig } from "next";
import { siteUrl } from "./lib/site";

const nextConfig: NextConfig = {
    async redirects() {
        if (
            process.env.NODE_ENV !== "production" ||
            siteUrl === "http://localhost:3000"
        ) {
            return [];
        }

        return [
            {
                source: "/:path*",
                missing: [{ type: "host", value: new URL(siteUrl).host }],
                destination: `${siteUrl}/:path*`,
                permanent: true,
            },
        ];
    },

    experimental: {
        agentFeedback: true,
    },
    cacheComponents: true,
    partialPrefetching: true,
    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
};

export default nextConfig;
