"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center border border-cyan-400/35 bg-[#000c14]/90 text-cyan-300 backdrop-blur transition hover:border-cyan-400/70 hover:bg-cyan-400/10"
      style={{ borderRadius: "2px", boxShadow: "0 0 12px rgba(0,212,255,0.2)" }}
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
