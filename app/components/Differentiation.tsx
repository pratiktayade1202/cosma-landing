"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const comparisons = [
    { not: "Swipe culture", yes: "Meaningful connection" },
    { not: "Random strangers", yes: "Curated equilibrium" },
    { not: "Crowded clubs", yes: "Intimate tables" },
    { not: "Superficial aesthetics", yes: "Inner resonance" },
    { not: '"Match"', yes: '"Alignment"' },
];

export default function Differentiation() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-32 px-6 border-t border-wireframe">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-domine text-4xl md:text-5xl font-light mb-16 text-center">
                        What Makes Cosma Different
                    </h2>

                    <div className="space-y-6">
                        {comparisons.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative grid md:grid-cols-2 gap-8 border-b border-wireframe pb-6 cursor-pointer"
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div
                                    className={`font-inter text-lg line-through transition-colors duration-300 ${hoveredIndex === index ? "text-stardust/50" : "text-stardust"
                                        }`}
                                >
                                    NOT {item.not}
                                </div>
                                <motion.div
                                    className="font-inter text-lg text-offWhite"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{
                                        x: hoveredIndex === index ? 0 : 20,
                                        opacity: hoveredIndex === index ? 1 : 0.3,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    YES {item.yes}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
