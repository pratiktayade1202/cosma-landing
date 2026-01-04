"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// Magnetic Button Component
function MagneticButton({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

            if (distance < 150) {
                x.set(distanceX * 0.3);
                y.set(distanceY * 0.3);
            } else {
                x.set(0);
                y.set(0);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    return (
        <motion.button
            ref={ref}
            type="submit"
            className="relative w-full py-5 overflow-hidden rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 hover:from-purple-500/20 hover:to-indigo-500/20 transition-all duration-500 font-inter text-sm tracking-[0.2em] uppercase text-offWhite group"
            style={{ x: xSpring, y: ySpring }}
        >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Shine sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}

// Animated Input Component
function AnimatedInput({
    label,
    type = "text",
    required = false,
    rows,
    value,
    onChange,
}: {
    label: string;
    type?: string;
    required?: boolean;
    rows?: number;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
    const [isFocused, setIsFocused] = useState(false);

    const InputComponent = rows ? "textarea" : "input";

    return (
        <div className="relative group">
            <label className="block font-inter text-sm tracking-wider mb-3 text-stardust group-focus-within:text-purple-300 transition-colors">
                {label}
            </label>
            <div className="relative">
                <InputComponent
                    type={type}
                    required={required}
                    rows={rows}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 font-inter text-offWhite focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 resize-none placeholder:text-stardust/50"
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                />
                {/* Focus glow */}
                <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: isFocused ? 1 : 0,
                        boxShadow: isFocused ? '0 0 30px rgba(124, 58, 237, 0.2)' : 'none'
                    }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </div>
    );
}

export default function CTA() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        why: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <section className="py-32 px-6 border-t border-wireframe relative overflow-hidden">
            {/* Background orbs */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-2xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="block text-center font-inter text-sm tracking-[0.3em] uppercase text-stardust mb-4">
                        Join The Circle
                    </span>
                    <h2 className="font-domine text-4xl md:text-6xl font-light mb-4 text-center">
                        Enter the Circle
                    </h2>
                    <p className="font-inter text-lg text-stardust text-center mb-12">
                        This is not for everyone. And that's <span className="text-offWhite">intentional</span>.
                    </p>

                    {/* Form Card */}
                    <div className="relative p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5">
                        {/* Card glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-indigo-500/5 pointer-events-none" />

                        <form onSubmit={handleSubmit} className="space-y-6 relative">
                            <AnimatedInput
                                label="NAME"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />

                            <AnimatedInput
                                label="EMAIL"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />

                            <AnimatedInput
                                label="WHY DO YOU WANT TO BE HERE? (OPTIONAL)"
                                rows={4}
                                value={formData.why}
                                onChange={(e) => setFormData({ ...formData, why: e.target.value })}
                            />

                            <div className="pt-4">
                                <MagneticButton>Request Invitation</MagneticButton>
                            </div>
                        </form>
                    </div>

                    <p className="font-inter text-sm text-stardust text-center mt-8 tracking-wide">
                        We review every application thoughtfully. You'll hear from us within 48 hours.
                    </p>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="max-w-6xl mx-auto mt-32 pt-12 border-t border-wireframe relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 font-inter text-sm text-stardust">
                    <p>© 2025 Cosma. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-purple-300 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-purple-300 transition-colors">Terms</a>
                        <a href="#" className="hover:text-purple-300 transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
