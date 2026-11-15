import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import TechStrip from "@/components/sections/TechStrip";
import WhyMe from "@/components/sections/WhyMe";
import FAQ from "@/components/sections/FAQ";
import Process from "@/components/sections/Process";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <TechStrip />
        <Reveal><About /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><WhyMe /></Reveal>
        <Reveal><Process /></Reveal>
        <Reveal><Certifications /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Contact />
      </main>
    </>
  );
}
