"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Meteors from "./Meteors";

const ritualCards = [
    {
        number: "01",
        title: "Identity & Trust",
        description: "We take identity seriously. Verified profiles. Real humans. Safe tables require trust.",
        icon: "🔐"
    },
    {
        number: "02",
        title: "Origin & Cosmos",
        description: "We map your birth alignment to understand your emotional archetype and cosmic resonance.",
        icon: "✨"
    },
    {
        number: "03",
        title: "Psyche & Resonance",
        description: "Your personality shapes the table's energy. We match minds, not just faces.",
        icon: "🧠"
    },
    {
        number: "04",
        title: "Safety & Comfort",
        description: "You choose the environments where you feel most yourself. Your boundaries matter.",
        icon: "🛡️"
    },
    {
        number: "05",
        title: "The Covenant",
        description: "No flaking. No cruelty. No chaos. A promise to show up with presence.",
        icon: "📜"
    },
];

function RitualCard({
    card,
    index,
    scrollYProgress
}: {
    card: typeof ritualCards[0];
    index: number;
    scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
    const cardStart = index * 0.18;
    const cardPeak = cardStart + 0.12;
    const cardEnd = cardStart + 0.20;

    const y = useTransform(
        scrollYProgress,
        [cardStart, cardPeak],
        [150, 0]
    );

    const scale = useTransform(
        scrollYProgress,
        [cardStart, cardPeak, cardEnd],
        [0.8, 1, 0.95]
    );

    const opacity = useTransform(
        scrollYProgress,
        [cardStart, cardStart + 0.03, cardEnd - 0.02, cardEnd + 0.1],
        [0, 1, 1, 0.3]
    );

    const rotateX = useTransform(
        scrollYProgress,
        [cardStart, cardPeak],
        [15, 0]
    );

    return (
        <motion.div
            className="absolute w-full max-w-lg"
            style={{
                y,
                scale,
                opacity,
                rotateX,
                zIndex: 10 + index,
                transformPerspective: 1000,
            }}
        >
            {/* Card with glassmorphism */}
            <div className="relative p-10 rounded-2xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 shadow-2xl overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 pointer-events-none" />

                {/* Shine effect */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Icon */}
                <span className="text-4xl mb-4 block">{card.icon}</span>

                {/* Number */}
                <span className="absolute top-8 right-10 text-7xl font-domine text-white/5">
                    {card.number}
                </span>

                <h3 className="font-domine text-2xl md:text-3xl text-offWhite mb-4 relative">
                    {card.title}
                </h3>
                <p className="font-inter text-lg text-stardust leading-relaxed relative">
                    {card.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function Ritual() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className="relative h-[350vh] border-t border-wireframe">

            {/* 🌠 METEORS BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Meteors number={40} />
            </div>

            {/* Background glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[200px]" />
            </div>

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block font-inter text-sm tracking-[0.3em] uppercase text-stardust mb-4">
                        The Onboarding
                    </span>
                    <h2 className="text-4xl md:text-6xl font-light text-offWhite font-domine">
                        The Ritual
                    </h2>
                    <p className="text-lg text-stardust max-w-2xl mx-auto mt-6 font-inter px-6">
                        Before you enter, we understand you. Not through swipes, but through intention.
                    </p>
                </motion.div>

                {/* Card Stack Container */}
                <div className="relative h-[350px] w-full max-w-lg mx-auto px-6 flex items-center justify-center">
                    {ritualCards.map((card, index) => (
                        <RitualCard
                            key={card.number}
                            card={card}
                            index={index}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>

                {/* Progress indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2"
                >
                    {ritualCards.map((_, index) => {
                        const dotOpacity = useTransform(
                            scrollYProgress,
                            [index * 0.18, (index + 1) * 0.18],
                            [0.3, 1]
                        );
                        return (
                            <motion.div
                                key={index}
                                className="w-2 h-2 rounded-full bg-offWhite"
                                style={{ opacity: dotOpacity }}
                            />
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
