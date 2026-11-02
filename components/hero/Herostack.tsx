"use client";

import { useEffect, useRef, type CSSProperties } from "react";

// Bottom to top: the same path a request takes from hardware to the browser.
const layers = [
    {
        id: "device",
        title: "Device",
        detail: "Raspberry Pi, ESP32",
        z: "0rem",
        float: "-4s",
        enter: "0ms",
    },
    {
        id: "data",
        title: "Data",
        detail: "MongoDB, MySQL",
        z: "4.2rem",
        float: "-2.5s",
        enter: "160ms",
    },
    {
        id: "api",
        title: "API",
        detail: "Node, Express",
        z: "8.4rem",
        float: "-1s",
        enter: "320ms",
    },
    {
        id: "ui",
        title: "UI",
        detail: "Next.js, React",
        z: "12.6rem",
        float: "0s",
        enter: "480ms",
    },
] as const;

/**
 * Decorative 3D stack of the layers I build across. Pure CSS 3D; the only
 * script is a small pointer parallax that is skipped for touch input and
 * reduced-motion users.
 */
export default function HeroStack() {
    const tiltRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = tiltRef.current;
        if (
            !el ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            return;
        }

        let frame = 0;
        const onMove = (event: PointerEvent) => {
            if (event.pointerType === "touch") return;

            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const x = event.clientX / window.innerWidth - 0.5;
                const y = event.clientY / window.innerHeight - 0.5;
                el.style.setProperty("--tilt-x", `${-y * 9}deg`);
                el.style.setProperty("--tilt-y", `${x * 14}deg`);
            });
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        return () => {
            window.removeEventListener("pointermove", onMove);
            cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div className="stack-scene" aria-hidden="true">
            <div className="stack-tilt" ref={tiltRef}>
                <div className="stack-sway">
                    <span className="stack-shadow" />
                    <span className="stack-rod stack-rod--a" />
                    <span className="stack-rod stack-rod--b" />
                    <span className="stack-rod stack-rod--c" />
                    <span className="stack-rod stack-rod--d" />
                    {layers.map((layer) => (
                        <div
                            key={layer.id}
                            className={`stack-layer stack-layer--${layer.id}`}
                            style={
                                {
                                    "--z": layer.z,
                                    "--float": layer.float,
                                    "--enter": layer.enter,
                                } as CSSProperties
                            }
                        >
                            <div className="stack-plate">
                                <span className="stack-label">
                                    <strong>{layer.title}</strong>
                                    <small>{layer.detail}</small>
                                </span>
                            </div>
                        </div>
                    ))}
                    <span className="stack-packet" />
                    <span className="stack-packet stack-packet--late" />
                </div>
            </div>
        </div>
    );
}
