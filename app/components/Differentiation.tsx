"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const comparisons = [
    { not: "Swipe culture", yes: "Meaningful connection", icon: "↔️" },
    { not: "Random strangers", yes: "Curated equilibrium", icon: "🎲" },
    { not: "Crowded clubs", yes: "Intimate tables", icon: "🏟️" },
    { not: "Superficial aesthetics", yes: "Inner resonance", icon: "💅" },
    { not: '"Match"', yes: '"Alignment"', icon: "🎯" },
];

export default function Differentiation() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-32 px-6 border-t border-wireframe relative overflow-hidden">
            {/* Background gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="block text-center font-inter text-sm tracking-[0.3em] uppercase text-stardust mb-4">
                        The Difference
                    </span>
                    <h2 className="font-domine text-4xl md:text-6xl font-light mb-16 text-center">
                        What Makes Cosma <span className="gradient-text">Different</span>
                    </h2>

                    <div className="space-y-4">
                        {comparisons.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative group"
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Card background */}
                                <div className={`
                                    relative p-6 rounded-xl border transition-all duration-500
                                    ${hoveredIndex === index
                                        ? 'border-purple-500/50 bg-purple-500/5'
                                        : 'border-wireframe/50 bg-transparent'
                                    }
                                `}>
                                    {/* Glow effect on hover */}
                                    <div className={`
                                        absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-xl
                                        transition-opacity duration-500
                                        ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                                    `} />

                                    <div className="relative grid md:grid-cols-[1fr,auto,1fr] gap-4 items-center">
                                        {/* NOT side */}
                                        <div className={`
                                            font-inter text-lg transition-all duration-300
                                            ${hoveredIndex === index
                                                ? 'text-stardust/40 line-through'
                                                : 'text-stardust'
                                            }
                                        `}>
                                            <span className="text-red-400/60 mr-2">✗</span>
                                            {item.not}
                                        </div>

                                        {/* Arrow/Icon */}
                                        <motion.div
                                            className="text-2xl text-center hidden md:block"
                                            animate={{
                                                x: hoveredIndex === index ? 5 : 0,
                                                scale: hoveredIndex === index ? 1.2 : 1
                                            }}
                                        >
                                            →
                                        </motion.div>

                                        {/* YES side */}
                                        <motion.div
                                            className="font-inter text-lg text-offWhite font-medium"
                                            animate={{
                                                x: hoveredIndex === index ? 5 : 0,
                                                opacity: hoveredIndex === index ? 1 : 0.6,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <span className="text-green-400/80 mr-2">✓</span>
                                            {item.yes}
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
