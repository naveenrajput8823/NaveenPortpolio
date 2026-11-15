const steps = [
  { n: "01", t: "Discovery", d: "We discuss your goals, audience and requirements so the scope is clear before any work begins." },
  { n: "02", t: "Planning", d: "You receive a clear plan covering features, timeline and cost, with no hidden surprises." },
  { n: "03", t: "Development", d: "I build in stages with regular progress updates, and the code stays transparent on GitHub." },
  { n: "04", t: "Delivery", d: "Testing, deployment and launch, followed by post-launch support and improvements." },
];

export default function Process() {
  return (
    <section id="process" className="border-t border-border bg-surface">
      <div className="container-width section-spacing">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">How I Work</p>
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">A clear process,<br />from idea to launch.</h2>
        <div className="stagger relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-black/5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">{s.n}</span>
              <h3 className="mt-5 text-xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
