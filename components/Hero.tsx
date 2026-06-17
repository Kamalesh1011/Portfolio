"use client";

import { useState, useEffect, useCallback } from "react";
import HeroVisual from "./HeroVisual";

const subtitles = [
  "Multi-Agent Systems Architect",
  "BCI & EEG Interface Engineer",
  "International Award Winner — Taipei 2026",
  "Software Developer Intern @ Adya.ai — Bengaluru",
];

const skillChips = [
  "LangGraph",
  "Claude API",
  "Go",
  "FastAPI",
  "React",
  "EEG",
  "Arduino",
];

export default function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typeNext = useCallback(() => {
    const current = subtitles[subtitleIndex];
    if (!isDeleting) {
      if (displayText.length < current.length) {
        setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 35);
      } else {
        setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayText.length > 0) {
        setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 18);
      } else {
        setIsDeleting(false);
        setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
      }
    }
  }, [displayText, isDeleting, subtitleIndex]);

  useEffect(() => {
    const timer = setTimeout(typeNext, isDeleting ? 18 : 35);
    return () => clearTimeout(timer);
  }, [typeNext, isDeleting]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 circuit-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,255,136,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,0,255,0.06)_0%,_transparent_50%)]" />

      {/* Animated scan line */}
      <div
        className="absolute left-0 right-0 h-40 pointer-events-none z-[2] opacity-[0.07]"
        style={{
          background: "linear-gradient(transparent, #00ff8820, transparent)",
          animation: "scanline 8s linear infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center">
          {/* Left — text */}
          <div className="space-y-6">
            {/* Subject ID label */}
            <div className="font-sharetech text-xs text-[var(--accent)] uppercase tracking-[0.2em]">
              <span>&gt; Subject ID: KBM-2026</span>
              <span
                className="inline-block w-2 h-4 ml-1 bg-[var(--accent)] align-middle"
                style={{ animation: "blink 1s step-end infinite" }}
              />
            </div>

            {/* Name with glitch */}
            <h1
              className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider text-[var(--foreground)] cyber-glitch leading-tight"
              data-text="KAMALESHWARAN BM"
              style={{ animation: "rgbShift 4s ease-in-out infinite" }}
            >
              KAMALESHWARAN
              <br />
              BM
            </h1>

            {/* Typewriter subtitle */}
            <div className="h-8">
              <span className="font-jetbrains text-lg sm:text-xl text-[var(--accent)]">
                {displayText}
                <span
                  className="inline-block w-[2px] h-5 ml-1 bg-[var(--accent)] align-middle"
                  style={{ animation: "blink 1s step-end infinite" }}
                />
              </span>
            </div>

            {/* Bio line */}
            <p className="font-jetbrains text-sm text-[var(--muted-foreground)] tracking-wide leading-relaxed max-w-lg">
              Final Year B.Tech — AI &amp; Data Science — KCE Coimbatore — CGPA: 8.32
            </p>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {skillChips.map((skill, i) => (
                <span
                  key={skill}
                  className="font-sharetech text-xs uppercase tracking-[0.15em] px-3 py-1.5 border border-[var(--border)] text-[var(--accent)] cyber-chamfer-sm transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[var(--shadow-neon-sm)]"
                  style={{
                    boxShadow: "var(--shadow-neon-sm)",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="btn-cyber btn-primary px-6 py-3 text-sm font-semibold cyber-chamfer-sm"
              >
                [&gt; VIEW PROJECTS]
              </a>
              <a
                href="/kamal_resume.pdf"
                download
                className="btn-cyber btn-secondary px-6 py-3 text-sm font-semibold cyber-chamfer-sm"
              >
                [&gt; DOWNLOAD RESUME]
              </a>
              <a
                href="#contact"
                className="btn-cyber btn-ghost px-6 py-3 text-sm font-semibold cyber-chamfer-sm"
              >
                [&gt; GET IN TOUCH]
              </a>
            </div>
          </div>

          {/* Right — SVG Neural Network visual (visible on md+) */}
          <div className="hidden md:flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Bottom scanline accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50" />
    </section>
  );
}
