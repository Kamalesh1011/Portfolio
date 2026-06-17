"use client";

import { useRef, useEffect, useState } from "react";
import { achievements } from "@/lib/data";

const colorMap: Record<string, string> = {
  gold: "var(--accent-gold)",
  accent: "var(--accent)",
  secondary: "var(--accent-secondary)",
  tertiary: "var(--accent-tertiary)",
};

const glowMap: Record<string, string> = {
  gold: "var(--shadow-neon-gold)",
  accent: "var(--shadow-neon)",
  secondary: "var(--shadow-neon-secondary)",
  tertiary: "var(--shadow-neon-tertiary)",
};

function AchievementCard({ achievement, index }: { achievement: typeof achievements[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const color = colorMap[achievement.badgeColor] || "var(--accent)";
  const glow = glowMap[achievement.badgeColor] || "var(--shadow-neon)";

  return (
    <div
      ref={ref}
      className={`group card-terminal p-6 gold-shimmer transition-all duration-500 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        borderColor: visible ? color : "var(--border)",
        boxShadow: visible ? glow : "none",
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-3">
          <span className="text-xl">
            {achievement.badge === "INTL" && "\u{1f3c6}"}
            {achievement.badge === "NATIONAL" && "\u{1f3c6}"}
            {achievement.badge === "INDUSTRY" && "\u{1f3c6}"}
            {achievement.badge === "TOP 10" && "\u{1f3c6}"}
            {achievement.badge === "1ST PLACE" && "\u{1f3c6}"}
          </span>
          <h3 className="font-orbitron text-sm sm:text-base font-bold uppercase tracking-wide text-[var(--foreground)]">
            {achievement.title}
          </h3>
        </div>
        <span
          className="font-sharetech text-[10px] uppercase tracking-[0.2em] px-3 py-1 border shrink-0 cyber-chamfer-sm"
          style={{
            borderColor: color,
            color: color,
            boxShadow: `0 0 4px ${color}40`,
          }}
        >
          {achievement.badge}
        </span>
      </div>

      <p className="font-jetbrains text-xs text-[var(--muted-foreground)] mb-2">
        {achievement.event}
      </p>

      <div className="flex items-center justify-between">
        <span className="font-sharetech text-xs text-[var(--muted-foreground)] uppercase tracking-[0.15em]">
          {achievement.location}
        </span>
        <span className="font-sharetech text-xs uppercase tracking-[0.15em]" style={{ color }}>
          [{achievement.date}]
        </span>
      </div>

      {/* Expandable content — description + images on hover */}
      <div className="hover-expand grid">
        <div>
          <div className="border-t border-[var(--border)] pt-4 mt-4 space-y-4">
            {/* Description */}
            <p className="font-jetbrains text-[11px] text-[var(--foreground)] leading-relaxed tracking-wide">
              {achievement.description}
            </p>

            {/* Image gallery */}
            {achievement.images && achievement.images.length > 0 && (
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {achievement.images.map((img, i) => (
                  <div
                    key={i}
                    className="shrink-0 w-28 h-20 sm:w-36 sm:h-24 border border-[var(--border)] overflow-hidden cyber-chamfer-sm"
                    style={{ borderColor: `${color}40` }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`${achievement.title} photo ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Progress bar decoration */}
      <div className="mt-4 h-1 bg-[var(--border)] overflow-hidden">
        <div
          className="h-full"
          style={{
            width: "100%",
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 40%, #00ff8808 0%, transparent 50%), radial-gradient(circle at 70% 60%, #ff00ff06 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <span className="font-sharetech text-sm text-[var(--accent)] uppercase tracking-[0.2em]">
            &gt; cat /var/log/achievements.log
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[var(--foreground)] mt-2">
            Achievements
          </h2>
        </div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
