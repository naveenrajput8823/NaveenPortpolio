"use client";
import { useEffect, useRef } from "react";

// Thin progress bar at the top that fills as you scroll
export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  return <div ref={bar} className="fixed left-0 top-0 z-[70] h-[3px] w-full origin-left scale-x-0 bg-accent" aria-hidden="true" />;
}
