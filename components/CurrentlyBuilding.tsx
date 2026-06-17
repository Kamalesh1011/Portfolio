"use client";

import dynamic from "next/dynamic";
import { processes } from "@/lib/data";

const MatrixRain = dynamic(
  () => import("./three/MatrixRain"),
  { ssr: false }
);

export default function CurrentlyBuilding() {
  return (
    <section id="currently-building" className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-40" />
      <div className="absolute inset-0 hidden md:block">
        <MatrixRain />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-8">
          <span className="font-sharetech text-sm text-[var(--accent)] uppercase tracking-[0.2em]">
            &gt; ps aux --color | grep KAMAL
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[var(--foreground)] mt-2">
            Active Operations
          </h2>
        </div>

        {/* Terminal window */}
        <div className="card-terminal overflow-hidden backdrop-blur-sm">
          {/* Terminal header */}
          <div className="card-terminal-header px-4 sm:px-6 py-3 border-b border-[var(--border)]">
            <div className="card-terminal-dot" style={{ background: "#ff3366" }} />
            <div className="card-terminal-dot" style={{ background: "#ffd700" }} />
            <div className="card-terminal-dot" style={{ background: "#00ff88" }} />
            <span className="font-sharetech text-[10px] sm:text-xs text-[var(--muted-foreground)] ml-3 uppercase tracking-[0.2em] truncate">
              kamal@adya-ai:~/projects$ ps aux
            </span>
            <div className="ml-auto flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 bg-[var(--accent)] rounded-full" style={{ animation: "pulseDot 2s ease-in-out infinite" }} />
              <span className="font-sharetech text-[10px] text-[var(--accent)] uppercase tracking-[0.15em]">LIVE</span>
            </div>
          </div>

          {/* Process list — mobile: stacked cards, desktop: table */}
          <div className="p-4 sm:p-6">
            {/* Desktop table header */}
            <div className="hidden md:grid grid-cols-[80px_120px_1fr_2fr] gap-4 font-sharetech text-[10px] text-[var(--muted-foreground)] uppercase tracking-[0.15em] pb-3 border-b border-[var(--border)] mb-2">
              <span>PID</span>
              <span>STATUS</span>
              <span>PROCESS</span>
              <span>DETAILS</span>
            </div>

            {/* Desktop rows */}
            <div className="hidden md:block space-y-1">
              {processes.map((proc) => (
                <div
                  key={proc.pid}
                  className="grid grid-cols-[80px_120px_1fr_2fr] gap-4 font-jetbrains text-xs py-2 hover:bg-[var(--muted)] transition-colors group"
                >
                  <span className="text-[var(--muted-foreground)]">{proc.pid}</span>
                  <span className={`flex items-center gap-2 ${proc.status === "active" ? "text-[var(--accent)]" : "text-[var(--muted-foreground)]"}`}>
                    <span className={`inline-block w-2 h-2 ${proc.status === "active" ? "bg-[var(--accent)]" : "bg-[var(--muted-foreground)]"}`}
                      style={proc.status === "active" ? { animation: "pulseDot 2s ease-in-out infinite" } : {}} />
                    [{proc.status === "active" ? "ACTIVE" : "QUEUED"}]
                  </span>
                  <span className="text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">{proc.process}</span>
                  <span className="text-[var(--muted-foreground)] truncate">{proc.details}</span>
                </div>
              ))}
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
              {processes.map((proc) => (
                <div key={proc.pid} className="p-3 bg-[var(--muted)] border border-[var(--border)]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-jetbrains text-xs text-[var(--foreground)] font-semibold">{proc.process}</span>
                    <span className={`font-sharetech text-[9px] uppercase tracking-[0.1em] flex items-center gap-1 ${proc.status === "active" ? "text-[var(--accent)]" : "text-[var(--muted-foreground)]"}`}>
                      <span className={`inline-block w-1.5 h-1.5 ${proc.status === "active" ? "bg-[var(--accent)]" : "bg-[var(--muted-foreground)]"}`}
                        style={proc.status === "active" ? { animation: "pulseDot 2s ease-in-out infinite" } : {}} />
                      {proc.status === "active" ? "ACTIVE" : "QUEUED"}
                    </span>
                  </div>
                  <p className="font-jetbrains text-[10px] text-[var(--muted-foreground)]">{proc.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal footer */}
          <div className="px-4 sm:px-6 py-4 border-t border-[var(--border)] flex items-center justify-between">
            <span className="font-jetbrains text-xs sm:text-sm text-[var(--accent)]">
              kamal@adya-ai:~${" "}
              <span className="inline-block w-3 h-5 bg-[var(--accent)] align-middle"
                style={{ animation: "blink 1s step-end infinite" }} />
            </span>
            <span className="font-sharetech text-[9px] sm:text-[10px] text-[var(--muted-foreground)] uppercase tracking-[0.15em]">
              {processes.filter(p => p.status === "active").length} ACTIVE // {processes.filter(p => p.status === "queued").length} QUEUED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
