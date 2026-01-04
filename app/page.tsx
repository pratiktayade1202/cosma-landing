import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Philosophy from "./components/Philosophy";
import Ritual from "./components/Ritual";
import Differentiation from "./components/Differentiation";
import Trust from "./components/Trust";
import Audience from "./components/Audience";
import India from "./components/India";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Philosophy />
      <Ritual />
      <Differentiation />
      <Trust />
      <Audience />
      <India />
      <CTA />
    </main>
  );
}
