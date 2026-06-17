"use client";

import { useEffect, useState } from "react";

const bootLines = [
  { text: "> Initializing system...", delay: 0 },
  { text: "> Loading neural modules............ [OK]", delay: 400 },
  { text: "> Decrypting agent runtimes......... [OK]", delay: 800 },
  { text: "> Connecting to network............. [OK]", delay: 1200 },
  { text: "> EEG interface calibrated........... [OK]", delay: 1600 },
  { text: "> Access granted. Welcome.", delay: 2000 },
];

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [flicker, setFlicker] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    bootLines.forEach((line, index) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines(index + 1);
        }, line.delay)
      );
    });

    // Flicker effect
    timers.push(
      setTimeout(() => setFlicker(true), 600),
      setTimeout(() => setFlicker(false), 650),
      setTimeout(() => setFlicker(true), 1400),
      setTimeout(() => setFlicker(false), 1450),
      setTimeout(() => setFlicker(true), 2200),
      setTimeout(() => setFlicker(false), 2250)
    );

    // Fade out and complete
    timers.push(
      setTimeout(() => setFadeOut(true), 2800),
      setTimeout(() => onComplete(), 3300)
    );

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#0a0a0f] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{
        animation: flicker ? "bootFlicker 0.1s ease" : "none",
      }}
    >
      <div className="w-full max-w-2xl mx-4">
        <div
          className="card-holographic p-8"
          style={{ borderRadius: 0 }}
        >
          {/* Terminal header */}
          <div className="card-terminal-header mb-6" style={{ margin: "-32px -32px 24px -32px" }}>
            <div className="card-terminal-dot" style={{ background: "#ff3366" }} />
            <div className="card-terminal-dot" style={{ background: "#ffd700" }} />
            <div className="card-terminal-dot" style={{ background: "#00ff88" }} />
            <span className="font-sharetech text-xs text-[var(--muted-foreground)] ml-2 uppercase tracking-[0.2em]">
              System Boot
            </span>
          </div>

          {/* Boot lines */}
          <div className="space-y-2">
            {bootLines.map((line, index) => (
              <div
                key={index}
                className={`font-jetbrains text-sm transition-all duration-300 ${
                  index < visibleLines
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
              >
                <span
                  className={
                    line.text.includes("[OK]")
                      ? "text-[var(--accent)]"
                      : line.text.includes("Welcome")
                      ? "text-[var(--accent)] font-bold text-glow-green"
                      : "text-[var(--foreground)]"
                  }
                >
                  {line.text}
                </span>
              </div>
            ))}

            {/* Blinking cursor */}
            {visibleLines >= bootLines.length && (
              <div className="font-jetbrains text-sm text-[var(--accent)] mt-2">
                <span
                  className="inline-block w-3 h-5 bg-[var(--accent)]"
                  style={{ animation: "blink 1s step-end infinite" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
