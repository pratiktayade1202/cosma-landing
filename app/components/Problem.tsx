"use client";

import { motion } from "framer-motion";

export default function Problem() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-domine text-4xl md:text-5xl font-light mb-16 text-center">
                        India's Social Brokenness
                    </h2>

                    <div className="space-y-8 font-inter text-lg leading-relaxed text-stardust">
                        <p>
                            People don't trust strangers. Dating apps feel unsafe and low quality.
                            Good people don't meet other good people.
                        </p>

                        <p>
                            We've normalized scrolling through faces like a catalog.
                            We've accepted that meaningful connection is rare.
                            We've settled for surface-level interactions.
                        </p>

                        <p className="text-offWhite">
                            Safety is not a feature. It's a baseline obligation.
                        </p>

                        <p>
                            Cosma was built because the current landscape fails those who seek depth,
                            authenticity, and human warmth in a digital-first world.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
