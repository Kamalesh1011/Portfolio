"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9998] transition-all duration-300 border-b ${
        scrolled
          ? "bg-[rgba(10,10,15,0.92)] backdrop-blur-xl border-[var(--border)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="font-orbitron text-[var(--accent)] text-lg font-bold tracking-wider">
            KAMAL
            <span className="text-[var(--foreground)] font-normal">.exe</span>
            <span
              className="inline-block w-2 h-5 ml-1 bg-[var(--accent)] align-middle"
              style={{ animation: "blink 1s step-end infinite" }}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sharetech text-sm text-[var(--muted-foreground)] uppercase tracking-[0.15em] hover:text-[var(--accent)] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent)] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00ff88]" />
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[var(--foreground)] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[rgba(10,10,15,0.95)] backdrop-blur-xl border-b border-[var(--border)]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block font-sharetech text-sm text-[var(--muted-foreground)] uppercase tracking-[0.15em] hover:text-[var(--accent)] py-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-[var(--accent)] mr-2">&gt;</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
