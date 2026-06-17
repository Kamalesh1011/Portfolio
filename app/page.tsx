"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import GlitchDivider from "@/components/GlitchDivider";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
  ssr: false,
});

const ParticlesOverlay = dynamic(() => import("@/components/ParticlesOverlay"), {
  ssr: false,
});

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      <div
        className={`transition-opacity duration-500 ${
          loading ? "opacity-0 h-screen overflow-hidden" : "opacity-100"
        }`}
      >
        <Navbar />
        <ParticlesOverlay />
        <main>
          <Hero />
          <GlitchDivider color="var(--accent)" />
          <About />
          <GlitchDivider color="var(--accent-gold)" />
          <Achievements />
          <GlitchDivider color="var(--accent-secondary)" />
          <Skills />
          <GlitchDivider color="var(--accent-tertiary)" />
          <Projects />
          <GlitchDivider color="var(--accent)" />
          <CurrentlyBuilding />
          <GlitchDivider color="var(--accent-secondary)" />
          <Experience />
          <GlitchDivider color="var(--accent-tertiary)" />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
