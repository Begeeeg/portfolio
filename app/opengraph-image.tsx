import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "80px",
                color: "#f4f6f8",
                background:
                    "radial-gradient(ellipse at 80% 10%, rgba(106,0,255,0.45), transparent 60%), #080b10",
            }}
        >
            <div
                style={{
                    fontSize: 28,
                    letterSpacing: 4,
                    color: "#b98cff",
                    textTransform: "uppercase",
                }}
            >
                Portfolio
            </div>
            <div
                style={{
                    marginTop: 24,
                    fontSize: 96,
                    fontWeight: 700,
                    lineHeight: 1.05,
                }}
            >
                {site.name}
            </div>
            <div style={{ marginTop: 28, fontSize: 40, color: "#9ba5b3" }}>
                {site.jobTitle}
            </div>
        </div>,
        size,
    );
}
