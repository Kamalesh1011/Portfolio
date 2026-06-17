"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Project } from "@/lib/data";

const colorMap: Record<string, string> = {
  gold: "var(--accent-gold)",
  accent: "var(--accent)",
  secondary: "var(--accent-secondary)",
  tertiary: "var(--accent-tertiary)",
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const color = colorMap[project.accentColor] || "var(--accent)";

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto card-holographic p-0"
        onClick={(e) => e.stopPropagation()}
        style={{
          borderColor: color,
          boxShadow: `0 0 20px ${color}40, 0 0 40px ${color}20`,
        }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-[var(--border)] bg-[var(--card)]">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.icon}</span>
            <div>
              <h3 className="font-orbitron text-lg font-bold uppercase tracking-wide text-[var(--foreground)]">
                {project.title}
              </h3>
              <span
                className="font-sharetech text-[10px] uppercase tracking-[0.15em]"
                style={{ color }}
              >
                {project.status}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors p-1"
            aria-label="Close modal"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Tagline */}
          <div>
            <span className="font-sharetech text-xs text-[var(--muted-foreground)] uppercase tracking-[0.2em]">
              &gt; Overview:
            </span>
            <p className="font-jetbrains text-sm mt-1" style={{ color }}>
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <div>
            <span className="font-sharetech text-xs text-[var(--muted-foreground)] uppercase tracking-[0.2em]">
              &gt; Description:
            </span>
            <p className="font-jetbrains text-sm text-[var(--foreground)] leading-relaxed tracking-wide mt-1">
              {project.description}
            </p>
          </div>

          {/* Stack */}
          <div>
            <span className="font-sharetech text-xs text-[var(--muted-foreground)] uppercase tracking-[0.2em]">
              &gt; Tech Stack:
            </span>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-sharetech text-xs px-3 py-1 border cyber-chamfer-sm"
                  style={{
                    borderColor: `${color}60`,
                    color,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber text-xs px-5 py-2.5 border cyber-chamfer-sm"
                style={{
                  borderColor: color,
                  color,
                }}
              >
                [&gt; LIVE_DEMO]
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber btn-ghost text-xs px-5 py-2.5 border border-[var(--border)] cyber-chamfer-sm"
              >
                [&gt; GITHUB]
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
