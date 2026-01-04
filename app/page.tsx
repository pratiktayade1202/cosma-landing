"use client";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";

export default function Home() {
  return (
    <main>
      <div className="bg-grain" /> {/* Grain overlay everywhere */}
      <Hero />
      <Philosophy />

      {/* Footer Area - Stark Invitation */}
      <section className="h-[50vh] flex flex-col items-center justify-center border-t border-[#222] bg-black text-white">
        <div className="mb-12 text-center">
          <p className="font-serif italic text-2xl text-[#888] mb-2">"I hate small talk. This fixed it."</p>
          <p className="label-text text-[#444]">Overheard in New York</p>
        </div>

        <p className="label-text mb-6">Initiation Protocol</p>
        <a href="#" className="text-4xl md:text-6xl font-serif hover:italic transition-all decoration-1 underline underline-offset-8">
          Request Access
        </a>
      </section>
    </main>
  );
}
