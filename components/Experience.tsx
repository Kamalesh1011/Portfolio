"use client";

import { useRef, useEffect, useState } from "react";
import { experiences } from "@/lib/data";

function TimelineCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative pl-10 sm:pl-12 pb-10 sm:pb-12 transition-all duration-700 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Timeline node */}
      <div className="absolute left-0 top-1 w-5 h-5 bg-[var(--background)] border-2 border-[var(--accent)] flex items-center justify-center"
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      >
        <div
          className="w-2 h-2 bg-[var(--accent)]"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
        />
      </div>

      {/* Card */}
      <div className="card-terminal p-4 sm:p-6">
        <div className="flex items-start justify-between gap-3 sm:gap-4 mb-2">
          <div className="min-w-0">
            <h3 className="font-orbitron text-xs sm:text-sm font-bold uppercase tracking-wide text-[var(--foreground)]">
              {exp.role}
            </h3>
            <p className="font-jetbrains text-[10px] sm:text-xs text-[var(--accent)] mt-1 truncate">
              {exp.company}{" // "}{exp.location}
            </p>
          </div>
          <span
            className={`font-sharetech text-[9px] sm:text-[10px] uppercase tracking-[0.15em] px-2 py-1 border cyber-chamfer-sm shrink-0 ${
              exp.status === "ACTIVE"
                ? "border-[var(--accent)] text-[var(--accent)] animate-pulse"
                : "border-[var(--border)] text-[var(--muted-foreground)]"
            }`}
          >
            [{exp.status}]
          </span>
        </div>

        <span className="font-sharetech text-[10px] text-[var(--muted-foreground)] uppercase tracking-[0.15em]">
          {exp.period}
        </span>

        <p className="font-jetbrains text-[11px] sm:text-xs text-[var(--foreground)] mt-3 leading-relaxed tracking-wide">
          {exp.detail}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-8">
          <span className="font-sharetech text-sm text-[var(--accent)] uppercase tracking-[0.2em]">
            &gt; journalctl --since &quot;2023-01-01&quot; --priority=info
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[var(--foreground)] mt-2">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Animated vertical line */}
          <div className="absolute left-[9px] sm:left-[9px] top-0 bottom-0 w-px bg-[var(--border)]">
            <div
              className="absolute top-0 left-0 w-full bg-[var(--accent)] origin-top"
              style={{
                height: "100%",
                animation: "drawLine 2s ease-out forwards",
                boxShadow: "0 0 6px #00ff8860",
              }}
            />
          </div>

          {/* Cards */}
          {experiences.map((exp, index) => (
            <TimelineCard key={exp.role} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
