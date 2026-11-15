"use client";
import { useRef } from "react";

// Card tilts in 3D towards the mouse pointer (desktop only), with a soft light glare
export default function TiltCard({ children, className = "", max = 8 }: { children: React.ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  function move(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${(0.5 - y) * max * 2}deg`);
      el.style.setProperty("--ry", `${(x - 0.5) * max * 2}deg`);
      el.style.setProperty("--gx", `${x * 100}%`);
      el.style.setProperty("--gy", `${y * 100}%`);
    });
  }
  function leave() {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(raf.current);
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <div className="tilt-wrap">
      <div ref={ref} onPointerMove={move} onPointerLeave={leave} className={`tilt ${className}`}>
        {children}
        <span className="tilt-glare" aria-hidden="true" />
      </div>
    </div>
  );
}
