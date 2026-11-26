
import Link from "next/link";
import HeroVisual from "./HeroVisual";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 3, suffix: "", label: "Internships" },
  { value: 15, suffix: "+", label: "Projects Built" },
  { value: 10, suffix: "", label: "Certifications" },
];

const stack = [
  "Java",
  "Spring Boot",
  "React.js",
  "Next.js",
  "PostgreSQL",
  "AI Integration",
];

const d = (ms: number) =>
  ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />

      <div className="container-width relative flex min-h-[calc(100vh-64px)] items-center py-12 sm:py-14 lg:py-16">
        <div className="grid w-full items-center gap-12 md:grid-cols-[1.15fr_0.85fr] lg:gap-14">

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
              Available for Freelance Opportunities
            </p>

            <p
              className="fade-up mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent"
              style={d(80)}
            >
              Java Full Stack Developer
            </p>

            <h1
              className="fade-up mt-3 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
              style={d(160)}
            >
              Turning Ideas Into{" "}
              <span className="text-accent">
                Powerful Digital Experiences.
              </span>
            </h1>

            <p
              className="fade-up mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
              style={d(260)}
            >
              I&apos;m Naveen Tanwar, a Java Full Stack Developer
              passionate about building modern, reliable, and scalable
              web applications. I work with Java, Spring Boot,
              React, and Next.js, with a growing focus on
              AI-powered application development.
            </p>

            <p
              className="fade-up mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base"
              style={d(320)}
            >
              From backend APIs and database design to responsive
              user interfaces, I turn ideas into practical digital
              solutions.
            </p>

            {/* Action Buttons */}
            <div
              className="fade-up mt-8 flex flex-wrap items-center gap-3"
              style={d(400)}
            >
              <Link
                href="/#contact"
                className="group rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-accent/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
              >
                Let&apos;s Work Together{" "}
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
                Explore My Work
              </Link>

              <a
                href="/resume/Naveen_CV.pdf"
                download
                className="text-sm font-semibold text-muted underline-offset-4 transition hover:text-accent hover:underline"
              >
                Download Resume ↓
              </a>
            </div>

            {/* Core Technologies */}
            <div
              className="fade-up mt-8"
              style={d(480)}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                Technologies I Work With
              </p>

              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted transition hover:border-accent hover:text-accent"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional Stats */}
            <dl
              className="fade-up mt-8 grid max-w-md grid-cols-3 gap-5 border-t border-border pt-6"
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
