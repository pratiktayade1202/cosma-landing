"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

    return (
        <section ref={ref} className="relative h-screen flex flex-col items-center justify-center border-b border-[#222]">
            {/* Background Geometry (Wireframe Globe) */}
            <motion.div
                style={{ y, rotate }}
                className="absolute inset-0 z-0 flex items-center justify-center opacity-20"
            >
                <div className="w-[600px] h-[600px] border-[1px] border-white rounded-full flex items-center justify-center">
                    <div className="w-[400px] h-[400px] border-[1px] border-white rounded-full" />
                    <div className="absolute w-[800px] h-[1px] bg-white rotate-45" />
                    <div className="absolute w-[800px] h-[1px] bg-white -rotate-45" />
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-8">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="label-text"
                >
                    Social Chemistry Engine
                </motion.p>

                <h1 className="text-6xl md:text-9xl text-white leading-[0.9]">
                    Most connections <br />
                    <span className="italic text-[#444]">fail by design.</span>
                </h1>
            </div>

            {/* Stream of Consciousness Ticker */}
            <div className="absolute bottom-12 w-full overflow-hidden flex border-y border-[#222] py-2 bg-black z-20">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex whitespace-nowrap gap-12"
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-12 text-[#666] font-mono text-sm uppercase tracking-widest">
                            <span>Is this it?</span>
                            <span>Am I too much?</span>
                            <span>Connection lost</span>
                            <span>Searching for signal</span>
                            <span>Why does everyone feel the same?</span>
                            <span>Do they like me?</span>
                            <span>System Error</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
