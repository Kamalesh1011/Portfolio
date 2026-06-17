"use client";

export default function GlitchDivider({ color = "var(--accent)" }: { color?: string }) {
  return (
    <div className="relative w-full h-px my-4 overflow-hidden">
      {/* Base line */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${color}40 20%, ${color} 50%, ${color}40 80%, transparent 100%)`,
        }}
      />
      {/* Glitch offset lines */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent 0%, #ff00ff30 30%, transparent 60%)`,
          animation: "glitch-left 3s infinite",
          opacity: 0.5,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent 40%, #00d4ff30 70%, transparent 100%)`,
          animation: "glitch-right 3s infinite",
          opacity: 0.5,
        }}
      />
      {/* Center diamond */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2"
        style={{
          background: color,
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          boxShadow: `0 0 8px ${color}`,
        }}
      />
    </div>
  );
}
