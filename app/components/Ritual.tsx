"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Meteors from "./Meteors";

const ritualCards = [
    { number: "01", title: "Identity & Trust", description: "We take identity seriously. Safe tables require trust." },
    { number: "02", title: "Origin & Cosmos", description: "We map your birth alignment to understand your emotional archetype." },
    { number: "03", title: "Psyche & Resonance", description: "Your personality shapes the table's energy." },
    { number: "04", title: "Safety & Comfort", description: "You choose environments you feel safe in." },
    { number: "05", title: "The Covenant", description: "No flaking. No cruelty. No chaos." },
];

export default function Ritual() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-[#050505] border-t border-[#333333]">

            {/* 🌠 METEORS BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Meteors number={30} />
            </div>

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 w-full">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-light mb-8 text-[#F2F2F2] font-[var(--font-domine)]">
                            The Ritual
                        </h2>
                        <p className="text-lg text-[#888888] max-w-2xl mx-auto font-[var(--font-inter)]">
                            Before you enter, we understand you. Not through swipes, but through intention.
                        </p>
                    </div>

                    {/* Card Stack Container */}
                    <div className="relative h-[400px] flex items-center justify-center">
                        {ritualCards.map((card, index) => {
                            // Each card appears at a specific scroll position
                            // Card 1: 0-0.2, Card 2: 0.2-0.4, etc.
                            const cardStart = index * 0.2;
                            const cardEnd = cardStart + 0.2;

                            // Card enters from bottom and stays in place
                            const cardY = useTransform(
                                scrollYProgress,
                                [cardStart, cardEnd],
                                [100, 0]
                            );

                            // Card scales up as it enters
                            const cardScale = useTransform(
                                scrollYProgress,
                                [cardStart, cardEnd],
                                [0.85, 1]
                            );

                            // Card fades in quickly
                            const cardOpacity = useTransform(
                                scrollYProgress,
                                [cardStart, cardStart + 0.05],
                                [0, 1]
                            );

                            return (
                                <motion.div
                                    key={card.number}
                                    className="absolute w-full max-w-md border border-[#333333] p-8 bg-[#0a0a0a] backdrop-blur-xl shadow-2xl rounded-sm"
                                    style={{
                                        y: cardY,
                                        scale: cardScale,
                                        opacity: cardOpacity,
                                        zIndex: index + 10, // Higher index = on top
                                    }}
                                >
                                    <div className="text-5xl text-[#888888] mb-4 font-[var(--font-domine)]">
                                        {card.number}
                                    </div>
                                    <h3 className="text-2xl mb-4 text-[#F2F2F2] font-[var(--font-domine)]">
                                        {card.title}
                                    </h3>
                                    <p className="text-base text-[#888888] leading-relaxed font-[var(--font-inter)]">
                                        {card.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
