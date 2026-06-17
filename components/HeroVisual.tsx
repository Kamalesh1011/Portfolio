"use client";

export default function HeroVisual() {
  return (
    <div className="w-80 h-80 relative">
      {/* Outer frame */}
      <div className="absolute inset-0 border border-[var(--accent)] opacity-20"
        style={{
          clipPath: "polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px))",
          animation: "neonPulse 4s ease-in-out infinite",
        }}
      />
      {/* Inner frame */}
      <div className="absolute inset-6 border border-[var(--accent-secondary)] opacity-10"
        style={{
          clipPath: "polygon(0 12px, 12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px))",
          animation: "neonPulseSecondary 5s ease-in-out infinite 1s",
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--accent)] opacity-40" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--accent-secondary)] opacity-40" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--accent-tertiary)] opacity-40" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--accent-gold)] opacity-40" />

      {/* SVG Neural Network */}
      <svg
        viewBox="0 0 320 320"
        className="absolute inset-0 w-full h-full"
        style={{ filter: "drop-shadow(0 0 8px #00ff8840)" }}
      >
        {/* Connection lines — animate opacity */}
        <g stroke="#00ff88" strokeWidth="0.5" opacity="0.15">
          {/* Layer 1 to Layer 2 */}
          <line x1="60" y1="80" x2="140" y2="60">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="60" y1="80" x2="140" y2="130">
            <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.5s" repeatCount="indefinite" />
          </line>
          <line x1="60" y1="80" x2="140" y2="200">
            <animate attributeName="opacity" values="0.1;0.2;0.1" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="60" y1="160" x2="140" y2="60">
            <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3.5s" repeatCount="indefinite" />
          </line>
          <line x1="60" y1="160" x2="140" y2="130">
            <animate attributeName="opacity" values="0.1;0.35;0.1" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="60" y1="160" x2="140" y2="200">
            <animate attributeName="opacity" values="0.1;0.25;0.1" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="60" y1="240" x2="140" y2="60">
            <animate attributeName="opacity" values="0.1;0.15;0.1" dur="4.5s" repeatCount="indefinite" />
          </line>
          <line x1="60" y1="240" x2="140" y2="130">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.8s" repeatCount="indefinite" />
          </line>
          <line x1="60" y1="240" x2="140" y2="200">
            <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3.2s" repeatCount="indefinite" />
          </line>

          {/* Layer 2 to Layer 3 */}
          <line x1="140" y1="60" x2="220" y2="100">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.7s" repeatCount="indefinite" />
          </line>
          <line x1="140" y1="60" x2="220" y2="220">
            <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3.8s" repeatCount="indefinite" />
          </line>
          <line x1="140" y1="130" x2="220" y2="100">
            <animate attributeName="opacity" values="0.1;0.35;0.1" dur="2.2s" repeatCount="indefinite" />
          </line>
          <line x1="140" y1="130" x2="220" y2="160">
            <animate attributeName="opacity" values="0.1;0.25;0.1" dur="3.3s" repeatCount="indefinite" />
          </line>
          <line x1="140" y1="130" x2="220" y2="220">
            <animate attributeName="opacity" values="0.1;0.2;0.1" dur="4.2s" repeatCount="indefinite" />
          </line>
          <line x1="140" y1="200" x2="220" y2="100">
            <animate attributeName="opacity" values="0.1;0.15;0.1" dur="3.6s" repeatCount="indefinite" />
          </line>
          <line x1="140" y1="200" x2="220" y2="160">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.4s" repeatCount="indefinite" />
          </line>
          <line x1="140" y1="200" x2="220" y2="220">
            <animate attributeName="opacity" values="0.1;0.25;0.1" dur="3.1s" repeatCount="indefinite" />
          </line>

          {/* Layer 3 to Output */}
          <line x1="220" y1="100" x2="280" y2="160">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.6s" repeatCount="indefinite" />
          </line>
          <line x1="220" y1="160" x2="280" y2="160">
            <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="220" y1="220" x2="280" y2="160">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.8s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Input layer nodes */}
        <g>
          <circle cx="60" cy="80" r="5" fill="#00ff88" opacity="0.6">
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="160" r="5" fill="#00ff88" opacity="0.6">
            <animate attributeName="r" values="4;6;4" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="240" r="5" fill="#00ff88" opacity="0.6">
            <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Hidden layer 1 */}
        <g>
          <circle cx="140" cy="60" r="5" fill="#ff00ff" opacity="0.5">
            <animate attributeName="r" values="4;6;4" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="140" cy="130" r="5" fill="#ff00ff" opacity="0.5">
            <animate attributeName="r" values="4;6;4" dur="2.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="140" cy="200" r="5" fill="#ff00ff" opacity="0.5">
            <animate attributeName="r" values="4;6;4" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Hidden layer 2 */}
        <g>
          <circle cx="220" cy="100" r="5" fill="#00d4ff" opacity="0.5">
            <animate attributeName="r" values="4;6;4" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="220" cy="160" r="5" fill="#00d4ff" opacity="0.5">
            <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="220" cy="220" r="5" fill="#00d4ff" opacity="0.5">
            <animate attributeName="r" values="4;6;4" dur="2.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.6s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Output node — pulsing */}
        <circle cx="280" cy="160" r="8" fill="#ffd700" opacity="0.6">
          <animate attributeName="r" values="6;10;6" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="280" cy="160" r="14" fill="none" stroke="#ffd700" strokeWidth="0.5" opacity="0.2">
          <animate attributeName="r" values="12;18;12" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="1.5s" repeatCount="indefinite" />
        </circle>

        {/* Traveling data particles */}
        <circle r="2" fill="#00ff88" opacity="0.8">
          <animateMotion dur="2s" repeatCount="indefinite" path="M60,80 L140,130 L220,160 L280,160" />
        </circle>
        <circle r="2" fill="#ff00ff" opacity="0.8">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M60,160 L140,60 L220,100 L280,160" />
        </circle>
        <circle r="2" fill="#00d4ff" opacity="0.8">
          <animateMotion dur="3s" repeatCount="indefinite" path="M60,240 L140,200 L220,220 L280,160" />
        </circle>
        <circle r="1.5" fill="#ffd700" opacity="0.8">
          <animateMotion dur="2.2s" repeatCount="indefinite" path="M60,80 L140,200 L220,160 L280,160" />
        </circle>
      </svg>

      {/* Label */}
      <div className="absolute -bottom-8 left-0 right-0 text-center">
        <span className="font-sharetech text-[10px] text-[var(--muted-foreground)] uppercase tracking-[0.3em]">
          Neural Architecture
        </span>
      </div>
    </div>
  );
}
