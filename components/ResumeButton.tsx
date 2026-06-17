"use client";

export default function ResumeButton() {
  return (
    <a
      href="/kamal_resume.pdf"
      download
      className="fixed bottom-6 left-6 z-[9998] card-holographic px-4 py-3 font-sharetech text-xs text-[var(--accent-tertiary)] uppercase tracking-[0.15em] hover:animate-[neonPulse_1s_ease_infinite] transition-all duration-200"
      title="Download Resume"
      style={{
        clipPath:
          "polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))",
      }}
    >
      <span className="flex items-center gap-2">
        <span className="text-base">&#x1F4C4;</span>
        RESUME.PDF
      </span>
    </a>
  );
}
