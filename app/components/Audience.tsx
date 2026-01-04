"use client";

import { motion } from "framer-motion";

const audienceTypes = [
    "Builders",
    "Artists",
    "Philosophers",
    "Explorers",
    "Introverts with depth",
    "Extroverts with intention",
];

export default function Audience() {
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
                        Who This Is For
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {audienceTypes.map((type, index) => (
                            <motion.div
                                key={type}
                                className="border border-wireframe p-6 text-center"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <p className="font-domine text-2xl">{type}</p>
                            </motion.div>
                        ))}
                    </div>

                    <p className="font-inter text-lg text-stardust text-center leading-relaxed">
                        If you value substance over superficiality, presence over performance,
                        and depth over distraction — this is your circle.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
