"use client";

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Green orb */}
      <div
        className="absolute w-64 h-64 rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #00ff88 0%, transparent 70%)",
          top: "10%",
          left: "-5%",
          animation: "neonPulse 6s ease-in-out infinite",
        }}
      />
      {/* Magenta orb */}
      <div
        className="absolute w-48 h-48 rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #ff00ff 0%, transparent 70%)",
          top: "50%",
          right: "-8%",
          animation: "neonPulseSecondary 8s ease-in-out infinite",
        }}
      />
      {/* Cyan orb */}
      <div
        className="absolute w-40 h-40 rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
          bottom: "10%",
          left: "30%",
          animation: "neonPulse 7s ease-in-out infinite 1s",
        }}
      />
      {/* Gold orb */}
      <div
        className="absolute w-32 h-32 rounded-full opacity-[0.02]"
        style={{
          background: "radial-gradient(circle, #ffd700 0%, transparent 70%)",
          top: "30%",
          left: "60%",
          animation: "neonPulseGold 5s ease-in-out infinite 2s",
        }}
      />
    </div>
  );
}
