"use client";

import { motion } from "framer-motion";

const audienceTypes = [
    { name: "Builders", icon: "🔨", desc: "Those who create" },
    { name: "Artists", icon: "🎨", desc: "Those who imagine" },
    { name: "Philosophers", icon: "🧠", desc: "Those who question" },
    { name: "Explorers", icon: "🧭", desc: "Those who seek" },
    { name: "Introverts with depth", icon: "🌙", desc: "Quiet intensity" },
    { name: "Extroverts with intention", icon: "☀️", desc: "Purposeful energy" },
];

export default function Audience() {
    return (
        <section className="py-32 px-6 border-t border-wireframe relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="block text-center font-inter text-sm tracking-[0.3em] uppercase text-stardust mb-4">
                        The Circle
                    </span>
                    <h2 className="font-domine text-4xl md:text-6xl font-light mb-6 text-center">
                        Who This Is For
                    </h2>
                    <p className="font-inter text-lg text-stardust text-center max-w-2xl mx-auto mb-16">
                        For those who value substance over superficiality
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
                        {audienceTypes.map((type, index) => (
                            <motion.div
                                key={type.name}
                                className="group relative"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Card */}
                                <div className="relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 text-center group-hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]">
                                    {/* Icon */}
                                    <span className="text-4xl md:text-5xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {type.icon}
                                    </span>

                                    {/* Name */}
                                    <h3 className="font-domine text-xl md:text-2xl text-offWhite mb-2">
                                        {type.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="font-inter text-sm text-stardust opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {type.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        className="font-inter text-xl text-center leading-relaxed max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-stardust">If you value</span>{" "}
                        <span className="text-offWhite">presence over performance</span>
                        <span className="text-stardust">, and</span>{" "}
                        <span className="text-offWhite">depth over distraction</span>{" "}
                        <span className="text-stardust">— this is your circle.</span>
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
