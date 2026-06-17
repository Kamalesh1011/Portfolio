"use client";

import { useEffect, useRef, useState } from "react";
import FloatingOrbs from "./FloatingOrbs";

const stats = [
  { label: "CGPA", value: 8.32, suffix: "" },
  { label: "HACKATHONS WON", value: 3, suffix: "+" },
  { label: "INTERNATIONAL AWARDS", value: 1, suffix: "" },
  { label: "PLATFORMS BUILT", value: 3, suffix: "+" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current * 100) / 100);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const displayValue = Number.isInteger(target)
    ? Math.round(count)
    : count.toFixed(2);

  return (
    <div ref={ref} className="font-orbitron text-3xl sm:text-4xl font-black text-[var(--accent)] text-glow-green">
      {displayValue}{suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-50" />
      <FloatingOrbs />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <span className="font-sharetech text-sm text-[var(--accent)] uppercase tracking-[0.2em]">
            &gt; cat /var/log/profile.data
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[var(--foreground)] mt-2">
            About
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-start">
          {/* Left — Profile card */}
          <div className="group perspective-[1000px]">
            <div className="relative w-full max-w-sm mx-auto transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
              style={{ transformStyle: "preserve-3d" }}>
              {/* Front */}
              <div className="relative card-holographic p-0 overflow-hidden"
                style={{ backfaceVisibility: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/kamal.jpg"
                  alt="Kamaleshwaran BM"
                  className="w-full h-auto block"
                  style={{ objectPosition: "center top" }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'flex items-center justify-center bg-[var(--muted)] py-24';
                      fallback.innerHTML = '<div class="text-center"><div class="font-orbitron text-[var(--accent)] text-5xl font-black opacity-20">KBM</div><div class="font-sharetech text-xs text-[var(--muted-foreground)] uppercase tracking-[0.2em] mt-4">AI ARCHITECT</div></div>';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>

              {/* Back */}
              <div className="absolute inset-0 card-terminal p-6 overflow-hidden"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                <div className="card-terminal-header -mx-6 -mt-6 mb-4 px-4 py-3 border-b border-[var(--border)]">
                  <div className="card-terminal-dot" style={{ background: "#ff3366" }} />
                  <div className="card-terminal-dot" style={{ background: "#ffd700" }} />
                  <div className="card-terminal-dot" style={{ background: "#00ff88" }} />
                  <span className="font-sharetech text-xs text-[var(--muted-foreground)] ml-2 uppercase tracking-[0.2em]">
                    Profile.data
                  </span>
                </div>
                <div className="font-jetbrains text-xs space-y-2 text-[var(--foreground)]">
                  <p><span className="text-[var(--accent)]">&gt;</span> DESIGNATION: B.Tech AI &amp; Data Science</p>
                  <p><span className="text-[var(--accent)]">&gt;</span> INSTITUTION: KCE, Coimbatore</p>
                  <p><span className="text-[var(--accent)]">&gt;</span> CGPA: 8.32 [ACTIVE]</p>
                  <p><span className="text-[var(--accent)]">&gt;</span> CURRENT: Software Developer Intern @ Adya.ai</p>
                  <p><span className="text-[var(--accent)]">&gt;</span> STATUS: Building [ACTIVE]</p>
                </div>
              </div>
            </div>
            <p className="text-center font-sharetech text-xs text-[var(--muted-foreground)] mt-4 uppercase tracking-[0.15em]">
              [Hover to flip]
            </p>
          </div>

          {/* Right — Bio text */}
          <div className="space-y-6">
            {/* Terminal bio block */}
            <div className="card-terminal p-6">
              <div className="card-terminal-header -mx-6 -mt-6 mb-4 px-4 py-3 border-b border-[var(--border)]">
                <div className="card-terminal-dot" style={{ background: "#ff3366" }} />
                <div className="card-terminal-dot" style={{ background: "#ffd700" }} />
                <div className="card-terminal-dot" style={{ background: "#00ff88" }} />
              </div>
              <div className="font-jetbrains text-sm space-y-2">
                <p><span className="text-[var(--accent)]">&gt;</span> <span className="text-[var(--muted-foreground)]">DESIGNATION:</span> B.Tech Artificial Intelligence &amp; Data Science</p>
                <p><span className="text-[var(--accent)]">&gt;</span> <span className="text-[var(--muted-foreground)]">INSTITUTION:</span> Karpagam College of Engineering, Coimbatore</p>
                <p><span className="text-[var(--accent)]">&gt;</span> <span className="text-[var(--muted-foreground)]">CGPA:</span> 8.32 [ACTIVE]</p>
                <p><span className="text-[var(--accent)]">&gt;</span> <span className="text-[var(--muted-foreground)]">CURRENT:</span> Software Developer Intern @ Adya.ai, Bengaluru</p>
                <p><span className="text-[var(--accent)]">&gt;</span> <span className="text-[var(--muted-foreground)]">STATUS:</span> Building Vanij Platform Copilot</p>
              </div>
            </div>

            {/* Bio paragraph */}
            <p className="font-jetbrains text-sm text-[var(--foreground)] leading-relaxed tracking-wide">
              Kamaleshwaran BM builds multi-agent AI systems, BCI pipelines, and autonomous coding runtimes.
              International award winner at Taipei 2026. National hackathon champion (IIT Kharagpur Alumni &times; Shiv Nadar).
              Currently architecting the Vanij Platform Copilot — a Go-based autonomous software engineering runtime — at Adya.ai.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-holographic p-4 text-center"
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <div className="font-sharetech text-[10px] text-[var(--muted-foreground)] uppercase tracking-[0.2em] mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
