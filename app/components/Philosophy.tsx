"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const sheets = [
    { num: "01", title: "THE PROBLEM", content: "Swiping is a slot machine. It creates addiction, not connection." },
    { num: "02", title: "THE MECHANISM", content: "We map nervous systems using Synastry and Big Five psychometrics." },
    { num: "03", title: "THE RULES", content: "Tables of six. Verified identity. One night. No avatars." },
];

export default function Philosophy() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    return (
        <div ref={containerRef} className="relative bg-white text-black">
            {sheets.map((sheet, i) => {
                return (
                    <StickySheet key={i} i={i} sheet={sheet} progress={scrollYProgress} total={sheets.length} />
                );
            })}
        </div>
    );
}

function StickySheet({ i, sheet, progress, total }: { i: number; sheet: typeof sheets[0]; progress: any; total: number }) {
    return (
        <div className="sticky top-0 h-screen flex flex-col justify-between border-b border-black p-6 md:p-12 bg-[#F2F2F2]">
            <div className="flex justify-between items-start border-b border-black/10 pb-4">
                <span className="font-mono text-sm">{sheet.num}</span>
                <span className="font-sans text-xs tracking-[0.3em] font-bold">{sheet.title}</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-serif max-w-4xl leading-tight">
                {sheet.content}
            </h2>


            <div className="flex justify-between items-end">
                <div className="flex-1">
                    <Artifact i={i} />
                </div>
                <span className="font-mono text-xs ml-4">Fig. {i + 1}</span>
            </div>
        </div>
    );
}

function Artifact({ i }: { i: number }) {
    if (i === 0) {
        // RECIEPT - "Time Wasted"
        return (
            <div className="w-48 bg-white border border-[#ccc] p-3 font-mono text-[10px] shadow-[4px_4px_0px_#000] rotate-[-2deg]">
                <div className="text-center border-b border-dashed border-black pb-2 mb-2">
                    HINGE_INC<br />
                    ORD #39201
                </div>
                <div className="flex justify-between"><span>DATE_GHOSTED</span><span>12.00</span></div>
                <div className="flex justify-between"><span>BAD_DATES</span><span>45.00</span></div>
                <div className="flex justify-between"><span>SMALL_TALK</span><span>99.99</span></div>
                <div className="border-t border-dashed border-black mt-2 pt-1 flex justify-between font-bold">
                    <span>TOTAL</span>
                    <span>VOID</span>
                </div>
                <div className="text-center mt-4 text-[8px]">THANK YOU FOR SUFFERING</div>
            </div>
        );
    }
    if (i === 1) {
        // SYNASTRY CHART
        return (
            <div className="w-40 h-40 border border-black rounded-full relative flex items-center justify-center animate-spin-slow">
                <div className="absolute inset-0 border border-black rounded-full scale-75 opacity-50" />
                <div className="absolute w-full h-[1px] bg-black rotate-45" />
                <div className="absolute w-full h-[1px] bg-black rotate-90" />
                <div className="absolute w-full h-[1px] bg-black rotate-[135deg]" />
                <div className="w-2 h-2 bg-black rounded-full z-10" />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] font-mono">SUN</div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-mono">MOON</div>
            </div>
        );
    }
    if (i === 2) {
        // TICKET - "Admit One"
        return (
            <div className="w-52 h-20 border-2 border-black flex items-center justify-between px-4 bg-[#e5e5e5] relative font-mono">
                <div className="absolute -left-3 w-6 h-6 bg-[#F2F2F2] rounded-full border-r border-black" />
                <div className="absolute -right-3 w-6 h-6 bg-[#F2F2F2] rounded-full border-l border-black" />
                <div className="border-r border-dashed border-black h-full flex items-center pr-4">
                    <span className="text-2xl font-serif">A</span>
                </div>
                <div className="text-right">
                    <div className="text-[10px] uppercase">One Night Only</div>
                    <div className="text-lg font-bold">VIP ACCESS</div>
                    <div className="text-[10px]">NO_GHOSTS_ALLOWED</div>
                </div>
            </div>
        );
    }
    return null;
}
