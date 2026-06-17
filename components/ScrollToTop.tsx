"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-[9998] w-12 h-12 flex items-center justify-center border-2 border-[var(--accent)] text-[var(--accent)] bg-[var(--background)] cyber-chamfer-sm transition-all duration-200 hover:bg-[var(--accent)] hover:text-[var(--background)] hover:shadow-[var(--shadow-neon)]"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} strokeWidth={1.5} />
    </button>
  );
}
