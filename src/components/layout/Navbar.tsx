"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "About", id: "about" }, { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" }, { label: "Projects", id: "projects" },
  { label: "Services", id: "services" }, { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((l) => { const el = document.getElementById(l.id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors ${scrolled ? "border-border bg-background/85" : "border-transparent bg-background/60"}`}>
      <nav className="container-width flex h-[72px] items-center justify-between gap-6">
        <Link href="/#home" onClick={() => setOpen(false)} className="text-2xl font-bold tracking-tight">
          Naveen<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.id} href={`/#${l.id}`}
              className={`relative text-sm font-medium transition-colors hover:text-foreground ${active === l.id ? "text-foreground" : "text-muted"}`}>
              {l.label}
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-accent transition-all ${active === l.id ? "w-full" : "w-0"}`} />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/#contact" className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90 sm:inline-flex">
            Let&apos;s Talk ↗
          </Link>
          <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden">
            <span className="text-xl">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((l) => (
              <Link key={l.id} href={`/#${l.id}`} onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted hover:bg-accent-soft hover:text-foreground">{l.label}</Link>
            ))}
            <Link href="/#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-background">Let&apos;s Talk ↗</Link>
          </div>
        </div>
      )}
    </header>
  );
}
