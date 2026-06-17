"use client";

import { useState } from "react";
import { skillCategories } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  "AI / ML": "\u{1f9e0}",
  "LANGUAGES": "\u{1f4bb}",
  "FRAMEWORKS": "\u{2699}\ufe0f",
  "INFRA / DEVOPS": "\u{2601}\ufe0f",
  "DATA": "\u{1f4ca}",
  "VISUALIZATION": "\u{1f3a8}",
  "EDGE / HARDWARE": "\u{1f527}",
};

const categoryColors: Record<string, string> = {
  "AI / ML": "var(--accent)",
  "LANGUAGES": "var(--accent-secondary)",
  "FRAMEWORKS": "var(--accent-tertiary)",
  "INFRA / DEVOPS": "var(--accent-gold)",
  "DATA": "var(--accent)",
  "VISUALIZATION": "var(--accent-secondary)",
  "EDGE / HARDWARE": "var(--accent-tertiary)",
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = skillCategories[activeTab];
  const activeColor = categoryColors[activeCategory.name] || "var(--accent)";

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-30" />

      {/* Floating geometric accents */}
      <div className="absolute top-20 right-[10%] w-20 h-20 border border-[var(--accent)] opacity-10 rotate-45"
        style={{ animation: "neonPulse 6s ease-in-out infinite" }} />
      <div className="absolute bottom-20 left-[5%] w-16 h-16 border border-[var(--accent-secondary)] opacity-10"
        style={{ animation: "neonPulseSecondary 8s ease-in-out infinite", clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }} />
      <div className="absolute top-[40%] left-[80%] w-12 h-12 border border-[var(--accent-tertiary)] opacity-10 rounded-full"
        style={{ animation: "neonPulse 5s ease-in-out infinite 1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <span className="font-sharetech text-sm text-[var(--accent)] uppercase tracking-[0.2em]">
            &gt; nmap -sV --script=skills scan
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[var(--foreground)] mt-2">
            Technical Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Tabs - vertical on desktop */}
          <div className="flex flex-row flex-wrap lg:flex-col gap-2">
            {skillCategories.map((cat, index) => {
              const color = categoryColors[cat.name] || "var(--accent)";
              const icon = categoryIcons[cat.name] || "\u{1f4e6}";
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 font-sharetech text-xs uppercase tracking-[0.15em] px-4 py-3 border transition-all duration-300 cyber-chamfer-sm text-left ${
                    activeTab === index
                      ? "text-[var(--background)]"
                      : "border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  }`}
                  style={
                    activeTab === index
                      ? {
                          borderColor: color,
                          background: color,
                          color: "var(--background)",
                          boxShadow: `0 0 12px ${color}60`,
                        }
                      : {}
                  }
                >
                  <span className="text-base">{icon}</span>
                  <div>
                    <div className="font-semibold">{cat.name}</div>
                    <div className="text-[9px] opacity-60 mt-0.5">[{cat.skills.length} MODULES]</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Skills grid */}
          <div className="card-terminal p-6 relative overflow-hidden">
            {/* Animated corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 opacity-30"
              style={{ borderColor: activeColor, transition: "border-color 0.3s" }} />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 opacity-30"
              style={{ borderColor: activeColor, transition: "border-color 0.3s" }} />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 opacity-30"
              style={{ borderColor: activeColor, transition: "border-color 0.3s" }} />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 opacity-30"
              style={{ borderColor: activeColor, transition: "border-color 0.3s" }} />

            <div className="card-terminal-header -mx-6 -mt-6 mb-6 px-4 py-3 border-b border-[var(--border)]">
              <div className="card-terminal-dot" style={{ background: "#ff3366" }} />
              <div className="card-terminal-dot" style={{ background: "#ffd700" }} />
              <div className="card-terminal-dot" style={{ background: "#00ff88" }} />
              <span className="font-sharetech text-xs text-[var(--muted-foreground)] ml-2 uppercase tracking-[0.2em]">
                {categoryIcons[activeCategory.name]} {activeCategory.name}
              </span>
            </div>

            {/* Skills with 3D perspective hover */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {activeCategory.skills.map((skill, i) => (
                <div
                  key={skill}
                  className="group perspective-[500px]"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div
                    className="font-jetbrains text-sm px-4 py-3 border border-[var(--border)] text-[var(--foreground)] transition-all duration-300 cyber-chamfer-sm cursor-default text-center relative overflow-hidden"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = activeColor;
                      el.style.color = activeColor;
                      el.style.boxShadow = `0 0 12px ${activeColor}40, inset 0 0 20px ${activeColor}08`;
                      el.style.transform = "translateY(-4px) rotateX(5deg)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "";
                      el.style.color = "";
                      el.style.boxShadow = "";
                      el.style.transform = "";
                    }}
                  >
                    {/* Hover glow background */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${activeColor}10 0%, transparent 70%)`,
                      }}
                    />
                    <span className="relative z-10">{skill}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 font-sharetech text-xs text-[var(--muted-foreground)] uppercase tracking-[0.15em] flex items-center gap-2">
              <span className="text-[var(--accent)]">&gt;</span>
              <span>{activeCategory.skills.length} modules detected in {activeCategory.name} sector</span>
              <span className="inline-block w-2 h-4 bg-[var(--accent)] ml-1" style={{ animation: "blink 1s step-end infinite" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
