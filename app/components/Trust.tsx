"use client";

import { motion } from "framer-motion";

export default function Trust() {
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
                        Social Trust
                    </h2>

                    <div className="space-y-8 font-inter text-lg leading-relaxed text-stardust">
                        <p>
                            Cosma is not a mass app. We are deliberately small, deliberately curated.
                        </p>

                        <p>
                            Entry is by invitation or application review. We prioritize quality of
                            community over scale.
                        </p>

                        <p className="text-offWhite">
                            Women-first safety design philosophy. Community before scalability.
                        </p>

                        <p>
                            We believe that the best social experiences emerge when everyone at the
                            table has been thoughtfully selected, not algorithmically sorted.
                        </p>

                        <p>
                            Trust is earned through consistency, transparency, and a shared commitment
                            to showing up with intention.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
