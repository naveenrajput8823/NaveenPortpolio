"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Photo with 3D depth: layers move at different distances as the mouse moves
export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty("--px", String((e.clientX / window.innerWidth - 0.5) * 2));
        el.style.setProperty("--py", String((e.clientY / window.innerHeight - 0.5) * 2));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div ref={ref} className="hero3d relative mx-auto w-full max-w-[420px]">
      <div className="hero3d-scene relative aspect-[4/5]">
        <div className="orbit" />
        <div className="absolute inset-x-[5%] bottom-0 top-[12%] rounded-t-full border border-border"
          style={{ background: "linear-gradient(180deg, var(--glow), var(--accent-soft))" }} />

        <div className="hero3d-layer absolute inset-0"
          style={{ transform: "translate3d(calc(var(--px, 0) * -10px), calc(var(--py, 0) * -6px), 50px)" }}>
          <Image src="/images/profile/profile.png" alt="Naveen Rajput, Java Full Stack Developer"
            fill priority sizes="(max-width: 768px) 90vw, 420px" className="object-contain object-bottom" />
        </div>

        <div className="hero3d-layer absolute -left-3 bottom-16 sm:-left-8" style={{ transform: "translateZ(110px)" }}>
          <div className="floaty rounded-xl border border-border bg-surface/95 px-4 py-3 shadow-xl backdrop-blur">
            <p className="text-xs text-muted">Core stack</p>
            <p className="text-sm font-semibold">Java · Spring Boot</p>
          </div>
        </div>
        <div className="hero3d-layer absolute -right-2 top-16 sm:-right-6" style={{ transform: "translateZ(90px)" }}>
          <div className="floaty rounded-xl border border-border bg-surface/95 px-4 py-3 shadow-xl backdrop-blur" style={{ animationDelay: "1.5s" }}>
            <p className="text-xs text-muted">Currently</p>
            <p className="text-sm font-semibold">Open to work</p>
          </div>
        </div>
      </div>
    </div>
  );
}
