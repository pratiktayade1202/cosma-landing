"use client";

import { motion } from "framer-motion";

export default function India() {
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
                        Why India Needs This
                    </h2>

                    <div className="space-y-8 font-inter text-lg leading-relaxed text-stardust">
                        <p>
                            India has a safety deficit. Women navigate public spaces with heightened
                            vigilance. Trust is rare.
                        </p>

                        <p>
                            India has an authenticity deficit. Social media has trained us to perform
                            rather than connect.
                        </p>

                        <p>
                            India has a human warmth deficit in digital-first life. We scroll more
                            than we speak. We match more than we meet.
                        </p>

                        <p className="text-offWhite">
                            Cosma was built for this moment. For this country. For people who refuse
                            to settle for shallow connection.
                        </p>

                        <p>
                            We believe India deserves social infrastructure that prioritizes safety,
                            depth, and genuine human encounter.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
