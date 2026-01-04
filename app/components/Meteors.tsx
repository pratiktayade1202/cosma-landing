"use client";

import { useEffect, useState } from "react";

export default function Meteors({ number = 20 }: { number?: number }) {
    const [meteors, setMeteors] = useState<Array<{ left: number; delay: number; duration: number }>>([]);

    useEffect(() => {
        const styles = new Array(number).fill(null).map(() => ({
            left: Math.floor(Math.random() * 100),
            delay: Math.random() * 5, // Random delay between 0s and 5s
            duration: Math.floor(Math.random() * 3 + 2), // 2-5 seconds
        }));
        setMeteors(styles);
    }, [number]);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {meteors.map((style, idx) => (
                <span
                    key={idx}
                    className="absolute h-0.5 w-0.5 rounded-full bg-white/60 animate-meteor"
                    style={{
                        top: `${Math.random() * 50}%`,
                        left: `${style.left}%`,
                        animationDelay: `${style.delay}s`,
                        animationDuration: `${style.duration}s`,
                    }}
                >
                    {/* Meteor Tail */}
                    <div className="absolute top-1/2 -translate-y-1/2 h-[1px] w-[80px] bg-gradient-to-r from-white/60 to-transparent -rotate-45" />
                </span>
            ))}
        </div>
    );
}
