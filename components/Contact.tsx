"use client";

import { useState, useRef } from "react";
import { socialLinks } from "@/lib/data";
import Toast from "./Toast";

export default function Contact() {
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({
    message: "",
    visible: false,
  });
  const [formState, setFormState] = useState({
    handle: "",
    email: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socialLinks.email);
      setToast({ message: "> Email copied to clipboard [OK]", visible: true });
      setTimeout(() => setToast({ message: "", visible: false }), 3000);
    } catch {
      setToast({ message: "> Copy failed [ERR]", visible: true });
      setTimeout(() => setToast({ message: "", visible: false }), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToast({ message: "> Message queued for transmission [OK]", visible: true });
    setTimeout(() => setToast({ message: "", visible: false }), 3000);
    setFormState({ handle: "", email: "", message: "" });
  };

  return (
    <>
      <section id="contact" className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-8">
            <span className="font-sharetech text-sm text-[var(--accent)] uppercase tracking-[0.2em]">
              &gt; ssh kamal@comms.kamal.dev -p 2089
            </span>
            <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[var(--foreground)] mt-2">
              Get In Touch
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left — Contact info terminal */}
            <div className="card-terminal p-6">
              <div className="card-terminal-header -mx-6 -mt-6 mb-6 px-4 py-3 border-b border-[var(--border)]">
                <div className="card-terminal-dot" style={{ background: "#ff3366" }} />
                <div className="card-terminal-dot" style={{ background: "#ffd700" }} />
                <div className="card-terminal-dot" style={{ background: "#00ff88" }} />
                <span className="font-sharetech text-xs text-[var(--muted-foreground)] ml-2 uppercase tracking-[0.2em]">
                  Contact Info
                </span>
              </div>

              <div className="space-y-4 font-jetbrains text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-[var(--muted-foreground)] shrink-0">&gt; EMAIL:</span>
                  <button
                    onClick={copyEmail}
                    className="text-[var(--accent)] hover:text-glow-green transition-all text-left cursor-pointer"
                  >
                    {socialLinks.email} <span className="text-[var(--muted-foreground)] text-xs">[CLICK TO COPY]</span>
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-[var(--muted-foreground)] shrink-0">&gt; PHONE:</span>
                  <a href={`tel:${socialLinks.phone}`} className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">
                    {socialLinks.phone}
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-[var(--muted-foreground)] shrink-0">&gt; LINKEDIN:</span>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                  >
                    linkedin.com/in/kamaleshwaran-bm
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-[var(--muted-foreground)] shrink-0">&gt; GITHUB:</span>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                  >
                    github.com/Kamalesh1011
                  </a>
                </div>

                <div className="pt-4 border-t border-[var(--border)]">
                  <span className="text-[var(--accent)]">
                    &gt; STATUS: Accepting connections...
                    <span
                      className="inline-block w-2 h-4 ml-1 bg-[var(--accent)] align-middle"
                      style={{ animation: "blink 1s step-end infinite" }}
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* Right — Contact form */}
            <div className="card-terminal p-6">
              <div className="card-terminal-header -mx-6 -mt-6 mb-6 px-4 py-3 border-b border-[var(--border)]">
                <div className="card-terminal-dot" style={{ background: "#ff3366" }} />
                <div className="card-terminal-dot" style={{ background: "#ffd700" }} />
                <div className="card-terminal-dot" style={{ background: "#00ff88" }} />
                <span className="font-sharetech text-xs text-[var(--muted-foreground)] ml-2 uppercase tracking-[0.2em]">
                  Compose Message
                </span>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-sharetech text-xs text-[var(--muted-foreground)] uppercase tracking-[0.15em] mb-1 block">
                    &gt; YOUR NAME:
                  </label>
                  <input
                    type="text"
                    value={formState.handle}
                    onChange={(e) => setFormState({ ...formState, handle: e.target.value })}
                    className="terminal-input w-full px-4 py-2.5 text-sm cyber-chamfer-sm"
                    placeholder="> enter your name..."
                    required
                  />
                </div>

                <div>
                  <label className="font-sharetech text-xs text-[var(--muted-foreground)] uppercase tracking-[0.15em] mb-1 block">
                    &gt; YOUR EMAIL:
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="terminal-input w-full px-4 py-2.5 text-sm cyber-chamfer-sm"
                    placeholder="> enter your email..."
                    required
                  />
                </div>

                <div>
                  <label className="font-sharetech text-xs text-[var(--muted-foreground)] uppercase tracking-[0.15em] mb-1 block">
                    &gt; MESSAGE:
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="terminal-input w-full px-4 py-2.5 text-sm cyber-chamfer-sm min-h-[120px] resize-y"
                    placeholder="> enter your message..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-cyber btn-glitch w-full px-6 py-3 text-sm font-semibold cyber-chamfer-sm"
                >
                  [&gt; SEND MESSAGE]
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}
