import { useEffect, useRef, useState } from "react";

/**
 * Global cinematic effects layer:
 * - Floating red orbs background
 * - Subtle animated grid
 * - Noise texture overlay
 * - Mouse-follow red cursor glow (desktop)
 * - Scroll progress bar
 * Purely visual — no layout impact.
 */
const CinematicFX = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };
    const onScroll = () => {
      const h = document.documentElement;
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(p);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-primary via-red-500 to-primary shadow-[0_0_15px_hsl(var(--primary))]"
          style={{ width: `${progress}%`, transition: "width .15s linear" }}
        />
      </div>

      {/* Ambient floating background */}
      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full bg-primary/25 blur-[120px] animate-float-orb" />
        <div
          className="absolute top-1/3 -right-32 w-[520px] h-[520px] rounded-full bg-red-700/20 blur-[140px] animate-float-orb"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[380px] h-[380px] rounded-full bg-primary/15 blur-[120px] animate-float-orb"
          style={{ animationDelay: "-8s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      {/* Noise overlay (above bg, below content) */}
      <div className="noise-overlay" aria-hidden />

      {/* Cursor glow */}
      <div ref={glowRef} className="cursor-glow" aria-hidden />
    </>
  );
};

export default CinematicFX;
