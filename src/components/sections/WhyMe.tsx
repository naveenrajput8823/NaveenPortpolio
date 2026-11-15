import TiltCard from "@/components/ui/TiltCard";

const reasons = [
  { t: "Clear communication", d: "Plain-language updates at every stage, so you always know where your project stands." },
  { t: "Clean, maintainable code", d: "Structured, well-documented code that is easy to extend long after launch." },
  { t: "Reliable delivery", d: "Realistic timelines, agreed scope and work delivered when promised." },
  { t: "End-to-end ownership", d: "Frontend, backend, database and deployment handled by one developer, with no hand-offs." },
];

export default function WhyMe() {
  return (
    <section id="why" className="border-t border-border">
      <div className="container-width section-spacing">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Why Work With Me</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">A developer you can rely on.</h2>
            <p className="mt-6 leading-8 text-muted">
              Every project gets the same standard: a clear brief, careful engineering and honest communication from start to finish.
            </p>
          </div>
          <div className="stagger grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <TiltCard key={r.t} max={5} className="rounded-2xl border border-border bg-surface p-6 hover:border-accent">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-background">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>
                </span>
                <h3 className="mt-4 text-lg font-semibold">{r.t}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{r.d}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
