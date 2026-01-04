"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const lines = [
        "Cosma is not a mass app. We are deliberately small, deliberately curated.",
        "Small curated gatherings. Not crowded clubs. Not random strangers.",
        "Intimate tables of 6-8 people, algorithmically matched for resonance.",
        "Deep conversation environments. Structured icebreakers. Intentional prompts.",
        "Spaces designed for vulnerability and authentic exchange.",
        "Every attendee commits to showing up with presence. No flaking. No half-hearted participation.",
        "Built for thinkers, builders, creators, explorers.",
        "For those who value substance over superficiality.",
    ];

    return (
        <section ref={containerRef} className="py-32 px-6 border-t border-wireframe">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="font-domine text-4xl md:text-5xl font-light mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    The Cosma Philosophy
                </motion.h2>

                <div className="space-y-8 font-inter text-xl leading-relaxed">
                    {lines.map((line, index) => {
                        const lineProgress = useTransform(
                            scrollYProgress,
                            [index / lines.length, (index + 1) / lines.length],
                            [0, 1]
                        );

                        const opacity = useTransform(lineProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

                        return (
                            <motion.p
                                key={index}
                                style={{ opacity }}
                                className="transition-colors duration-300"
                            >
                                {line}
                            </motion.p>
                        );
                    })}
                </div>

                <div className="text-center mt-16">
                    <motion.p
                        className="text-2xl text-offWhite mb-4 font-domine"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Less scrolling. More serendipity.
                    </motion.p>
                    <motion.p
                        className="text-2xl text-offWhite font-domine"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        Less performance. More presence.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
