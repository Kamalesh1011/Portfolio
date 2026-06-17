"use client";

import { useState, useRef, useEffect } from "react";
import { projects } from "@/lib/data";
import ProjectModal from "./ProjectModal";

const colorMap: Record<string, string> = {
  gold: "var(--accent-gold)",
  accent: "var(--accent)",
  secondary: "var(--accent-secondary)",
  tertiary: "var(--accent-tertiary)",
};

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: (typeof projects)[0];
  index: number;
  onSelect: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const color = colorMap[project.accentColor] || "var(--accent)";

  return (
    <div
      ref={ref}
      className={`card-default p-6 cursor-pointer transition-all duration-500 group ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 80}ms`,
      }}
      onClick={onSelect}
      onMouseEnter={(e) => {
        const card = e.currentTarget;
        card.style.transform = "translateY(-6px) perspective(800px) rotateX(2deg)";
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget;
        card.style.transform = "";
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{project.icon}</span>
          <h3 className="font-orbitron text-sm font-bold uppercase tracking-wide text-[var(--foreground)]">
            {project.title}
          </h3>
        </div>
        <span
          className={`font-sharetech text-[9px] uppercase tracking-[0.15em] px-2 py-1 border cyber-chamfer-sm whitespace-nowrap ${
            project.status.includes("ACTIVE") || project.status.includes("BUILDING")
              ? "animate-pulse"
              : ""
          }`}
          style={{
            borderColor: color,
            color: color,
          }}
        >
          {project.status}
        </span>
      </div>

      {/* Tagline */}
      <p className="font-jetbrains text-xs text-[var(--accent)] mb-3">
        {project.tagline}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.stack.slice(0, 5).map((s) => (
          <span
            key={s}
            className="font-sharetech text-[10px] uppercase tracking-[0.1em] px-2 py-0.5 bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)]"
          >
            {s}
          </span>
        ))}
        {project.stack.length > 5 && (
          <span className="font-sharetech text-[10px] text-[var(--muted-foreground)]">
            +{project.stack.length - 5}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber text-[10px] px-3 py-1.5 border border-[var(--accent)] text-[var(--accent)] cyber-chamfer-sm hover:bg-[var(--accent)] hover:text-[var(--background)]"
            onClick={(e) => e.stopPropagation()}
          >
            [&gt; DEMO]
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber text-[10px] px-3 py-1.5 border border-[var(--border)] text-[var(--muted-foreground)] cyber-chamfer-sm hover:border-[var(--accent)] hover:text-[var(--accent)]"
            onClick={(e) => e.stopPropagation()}
          >
            [&gt; GITHUB]
          </a>
        )}
        {!project.demoUrl && !project.githubUrl && (
          <span className="font-sharetech text-[10px] text-[var(--muted-foreground)] uppercase tracking-[0.15em]">
            [PRIVATE]
          </span>
        )}
      </div>

      {/* Bottom accent line */}
      <div
        className="mt-4 h-px transition-all duration-300 group-hover:h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          opacity: 0.4,
        }}
      />
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <>
      <section id="projects" className="relative py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-12">
            <span className="font-sharetech text-sm text-[var(--accent)] uppercase tracking-[0.2em]">
              &gt; ls -la /projects/ | grep --color=auto CLASSIFIED
            </span>
            <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[var(--foreground)] mt-2">
              Featured Projects
            </h2>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
