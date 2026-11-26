
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (prefers-reduced-motion: no-preference)"
    );

    if (!media.matches) return;

    let raf = 0;

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;

        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        el.style.setProperty("--px", String(x));
        el.style.setProperty("--py", String(y));
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="hero3d relative mx-auto w-full max-w-[420px]"
      style={{ perspective: "1200px" }}
    >
      <div
        className="hero3d-scene relative isolate aspect-[4/5]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background Glow */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[40%] h-[65%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
          style={{
            background:
              "radial-gradient(circle, var(--accent-soft), transparent 70%)",
            transform: "translate3d(-50%, -50%, -80px)",
          }}
        />

        {/* 3D Energy Sphere */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[38%] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-60 sm:w-60"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.45), var(--accent-soft) 30%, rgba(14,165,233,0.12) 65%, transparent 75%)",
            boxShadow:
              "0 0 50px rgba(14,165,233,0.18), inset -15px -15px 35px rgba(14,165,233,0.15)",
            transform: "translate3d(-50%, -50%, -30px)",
          }}
        />

        {/* Orbital Rings */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[38%] h-[58%] w-[100%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-sky-400/30"
          style={{
            transform: "translate3d(-50%, -50%, 20px) rotateX(68deg)",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[38%] h-[72%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-sky-400/20"
          style={{
            transform: "translate3d(-50%, -50%, 10px) rotateY(65deg)",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[38%] h-[48%] w-[105%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-400/20"
          style={{
            transform: "translate3d(-50%, -50%, 30px) rotateX(72deg) rotateZ(-25deg)",
          }}
        />

        {/* Profile Background */}
        <div
          className="absolute inset-x-[5%] bottom-0 top-[12%] rounded-t-full border border-border/70"
          style={{
            background:
              "linear-gradient(180deg, var(--glow), var(--accent-soft))",
            transform: "translateZ(15px)",
          }}
        />

        {/* Profile Image */}
        <div
          className="hero3d-layer absolute inset-0"
          style={{
            transform:
              "translate3d(calc(var(--px, 0) * -10px), calc(var(--py, 0) * -6px), 80px)",
          }}
        >
          <Image
            src="/images/profile/profile.png"
            alt="Naveen Tanwar, Java Full Stack Developer"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-contain object-bottom"
          />
        </div>

        {/* Floating Particles */}
        {[
          { top: "17%", left: "18%", delay: "0s" },
          { top: "31%", right: "12%", delay: "1s" },
          { top: "58%", left: "8%", delay: "2s" },
          { top: "72%", right: "15%", delay: "1.5s" },
          { top: "12%", right: "30%", delay: "2.5s" },
        ].map((particle, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="absolute h-2 w-2 animate-pulse rounded-full bg-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.9)]"
            style={{
              ...particle,
              animationDelay: particle.delay,
              transform: `translateZ(${40 + i * 10}px)`,
            }}
          />
        ))}

        {/* Core Stack Card */}
        <div
          className="hero3d-layer absolute -left-2 bottom-16 sm:-left-8"
          style={{
            transform:
              "translate3d(calc(var(--px, 0) * -5px), calc(var(--py, 0) * -3px), 120px)",
          }}
        >
          <div className="floaty rounded-xl border border-sky-400/20 bg-surface/95 px-4 py-3 shadow-xl shadow-sky-950/30 backdrop-blur-xl">
            <p className="text-xs text-muted">Core Stack</p>
            <p className="text-sm font-semibold">Java · Spring Boot</p>
          </div>
        </div>

        {/* Availability Card */}
        <div
          className="hero3d-layer absolute -right-2 top-16 sm:-right-6"
          style={{
            transform:
              "translate3d(calc(var(--px, 0) * 5px), calc(var(--py, 0) * 4px), 110px)",
          }}
        >
          <div
            className="floaty rounded-xl border border-emerald-400/20 bg-surface/95 px-4 py-3 shadow-xl backdrop-blur-xl"
            style={{ animationDelay: "1.5s" }}
          >
            <p className="flex items-center gap-2 text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Currently
            </p>
            <p className="text-sm font-semibold">Open to Work</p>
          </div>
        </div>

        {/* AI Floating Card */}
        <div
          className="hero3d-layer absolute right-0 top-[65%] sm:-right-3"
          style={{
            transform:
              "translate3d(calc(var(--px, 0) * 4px), calc(var(--py, 0) * -4px), 100px)",
          }}
        >
          <div
            className="floaty rounded-xl border border-violet-400/20 bg-surface/95 px-4 py-3 shadow-xl backdrop-blur-xl"
            style={{ animationDelay: "2s" }}
          >
            <p className="text-xs text-muted">Specialization</p>
            <p className="text-sm font-semibold">AI Integration ✦</p>
          </div>
        </div>
      </div>
    </div>
  );
}
