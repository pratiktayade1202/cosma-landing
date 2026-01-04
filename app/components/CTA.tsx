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

            // Magnetic pull within 150px
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
            className="w-full py-4 border border-wireframe hover:border-offWhite hover:bg-offWhite hover:text-obsidian transition-all duration-300 font-inter text-sm tracking-widest uppercase"
            style={{ x: xSpring, y: ySpring }}
        >
            {children}
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

    const underlineWidth = useTransform(
        useMotionValue(isFocused ? 1 : 0),
        [0, 1],
        ["0%", "100%"]
    );

    const InputComponent = rows ? "textarea" : "input";

    return (
        <div className="relative">
            <label className="block font-inter text-sm tracking-wide mb-2 text-stardust">
                {label}
            </label>
            <InputComponent
                type={type}
                required={required}
                rows={rows}
                className="w-full bg-transparent border-b border-wireframe px-0 py-3 font-inter text-offWhite focus:outline-none transition-colors resize-none"
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <motion.div
                className="absolute bottom-0 left-1/2 h-px bg-offWhite"
                style={{
                    width: underlineWidth,
                    x: "-50%",
                }}
                initial={{ width: "0%" }}
                animate={{ width: isFocused ? "100%" : "0%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            />
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
        <section className="py-32 px-6 border-t border-wireframe">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-domine text-4xl md:text-5xl font-light mb-8 text-center">
                        Enter the Circle
                    </h2>

                    <p className="font-inter text-lg text-stardust text-center mb-12">
                        This is not for everyone. And that's intentional.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-8">
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

                        <MagneticButton>Request Invitation</MagneticButton>
                    </form>

                    <p className="font-inter text-xs text-stardust text-center mt-12 tracking-wide">
                        We review every application thoughtfully.
                        <br />
                        You'll hear from us within 48 hours.
                    </p>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="max-w-6xl mx-auto mt-32 pt-12 border-t border-wireframe">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 font-inter text-sm text-stardust">
                    <p>© 2025 Cosma. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-offWhite transition-colors">Privacy</a>
                        <a href="#" className="hover:text-offWhite transition-colors">Terms</a>
                        <a href="#" className="hover:text-offWhite transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
