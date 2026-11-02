import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: site.title,
    description: site.description,
    applicationName: "Victor Manuel Yecyec Portfolio",
    authors: [{ name: site.name }],
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: "/",
        siteName: site.name,
        title: site.title,
        description: site.description,
        locale: "en_US",
    },
    // The image comes from app/opengraph-image.tsx, which Next also uses for Twitter.
    twitter: {
        card: "summary_large_image",
        title: site.title,
        description: site.description,
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = {
    themeColor: "#080b10",
    colorScheme: "dark",
};

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.jobTitle,
    url: siteUrl,
    description: site.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            <body>
                <a href="#main" className="skip-link">
                    Skip to main content
                </a>
                <script
                    type="application/ld+json"
                    // Escape "<" so the JSON can never close the script tag.
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personJsonLd).replace(
                            /</g,
                            "\\u003c",
                        ),
                    }}
                />
                {children}
            </body>
        </html>
    );
}
