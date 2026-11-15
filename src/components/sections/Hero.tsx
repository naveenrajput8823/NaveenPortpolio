
import Link from "next/link";
import HeroVisual from "./HeroVisual";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 3, suffix: "", label: "Internships" },
  { value: 5, suffix: "+", label: "Projects Built" },
  { value: 10, suffix: "", label: "Certifications" },
];

const stack = ["Java", "Spring Boot", "React", "Next.js", "PostgreSQL"];

const d = (ms: number) =>
  ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />

      <div className="container-width relative flex min-h-[calc(100vh-64px)] items-center py-8 sm:py-10 lg:py-12">
        <div className="grid w-full items-center gap-10 md:grid-cols-[1.15fr_0.85fr] lg:gap-12">

          {/* Hero Content */}
          <div>
            <p
              className="fade-up inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted"
              style={d(0)}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Available for Freelance Projects
            </p>

            <h1
              className="fade-up mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
              style={d(100)}
            >
              Building Digital Products That{" "}
              <span className="text-accent">
                Solve Real Problems.
              </span>
            </h1>

            <p
              className="fade-up mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
              style={d(220)}
            >
              I&apos;m Naveen Tanwar, a Java Full Stack Developer. I design
              and build fast, secure, and scalable web applications using
              Java, Spring Boot, React, and Next.js, from initial concept
              to deployment.
            </p>

            {/* Action Buttons */}
            <div
              className="fade-up mt-7 flex flex-wrap items-center gap-3"
              style={d(340)}
            >
              <Link
                href="/#contact"
                className="group rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-accent/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
              >
                Hire Me{" "}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </Link>

              <Link
                href="/#projects"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                View Projects
              </Link>

              <a
                href="resume/Naveen_CV.pdf"
                download
                className="text-sm font-semibold text-muted underline-offset-4 transition hover:text-accent hover:underline"
              >
                Download CV ↓
              </a>
            </div>

            {/* Technology Stack */}
            <div
              className="fade-up mt-7 flex flex-wrap gap-2"
              style={d(450)}
            >
              {stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-medium text-accent"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Professional Stats */}
            <dl
              className="fade-up mt-7 grid max-w-md grid-cols-3 gap-5 border-t border-border pt-6"
              style={d(560)}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </dt>

                  <dd className="mt-1 text-xs text-muted">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero Visual */}
          <div className="fade-up" style={d(250)}>
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
