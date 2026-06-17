"use client";

import { socialLinks } from "@/lib/data";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--border)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="font-orbitron text-[var(--accent)] text-lg font-bold tracking-wider">
              KAMAL<span className="text-[var(--foreground)] font-normal">.exe</span>
            </a>
            <p className="font-jetbrains text-xs text-[var(--muted-foreground)] mt-3 leading-relaxed">
              Multi-agent AI systems builder, BCI engineer, and international award winner.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sharetech text-xs text-[var(--accent)] uppercase tracking-[0.2em] mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-jetbrains text-xs text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sharetech text-xs text-[var(--accent)] uppercase tracking-[0.2em] mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[var(--shadow-neon-sm)] transition-all cyber-chamfer-sm"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[var(--shadow-neon-sm)] transition-all cyber-chamfer-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a href={`mailto:${socialLinks.email}`}
                className="w-10 h-10 flex items-center justify-center border border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[var(--shadow-neon-sm)] transition-all cyber-chamfer-sm"
                aria-label="Email"
              >
                <Mail size={16} strokeWidth={1.5} />
              </a>
              <a href={`tel:${socialLinks.phone}`}
                className="w-10 h-10 flex items-center justify-center border border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[var(--shadow-neon-sm)] transition-all cyber-chamfer-sm"
                aria-label="Phone"
              >
                <Phone size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sharetech text-[10px] text-[var(--muted-foreground)] uppercase tracking-[0.2em]">
            &copy; 2026 Kamaleshwaran BM. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
}
