"use client";

import { motion, useMotionValue, useTransform, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

// ✅ 1. Extract the single Star into a component
// This lets us call useTransform safely for each individual star
function Star({
    star,
    mouseX,
    mouseY
}: {
    star: { id: number; x: number; y: number; size: number; depth: number };
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
}) {
    // Hooks are now at the top level of this component (Valid!)
    const offsetX = useTransform(mouseX, [0, window.innerWidth], [-20 * star.depth, 20 * star.depth]);
    const offsetY = useTransform(mouseY, [0, window.innerHeight], [-20 * star.depth, 20 * star.depth]);

    return (
        <motion.div
            className="absolute rounded-full bg-offWhite"
            style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                x: offsetX,
                y: offsetY,
                opacity: star.depth,
            }}
        />
    );
}

function Starfield() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Set initial mouse position to center to avoid jump
        if (typeof window !== "undefined") {
            mouseX.set(window.innerWidth / 2);
            mouseY.set(window.innerHeight / 2);
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    if (!mounted) return null;

    const stars = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        depth: Math.random() * 0.5 + 0.5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                // ✅ 2. Render the extracted component
                <Star
                    key={star.id}
                    star={star}
                    mouseX={mouseX}
                    mouseY={mouseY}
                />
            ))}
        </div>
    );
}

export default function Hero() {
    const headline = "Curated Cosmic Connections for People Who Think Deeper";
    const words = headline.split(" ");

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-obsidian">
            <Starfield />
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-light mb-8 text-offWhite font-domine tracking-normal">
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            className="inline-block mr-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>
                <motion.p
                    className="text-lg md:text-xl text-stardust font-inter max-w-2xl mx-auto mb-12 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Small gatherings. Deep conversations. Intention driven.
                    <br />
                    This is not a dating app. This is human encounter design.
                </motion.p>
                <motion.button
                    className="px-12 py-4 border border-wireframe text-offWhite font-inter hover:bg-offWhite hover:text-obsidian transition-all duration-300 tracking-widest uppercase text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                >
                    Request Invitation
                </motion.button>
            </div>
        </section>
    );
}
