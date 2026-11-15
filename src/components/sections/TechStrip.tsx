const tech = ["Java", "Spring Boot", "Hibernate", "React", "Next.js", "TypeScript", "PostgreSQL", "MySQL", "MongoDB", "Docker", "Git", "REST APIs"];

export default function TechStrip() {
  const items = [...tech, ...tech];
  return (
    <div className="marquee overflow-hidden border-y border-border bg-surface py-5" aria-label="Technologies I work with">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} className="mx-8 flex items-center gap-8 whitespace-nowrap text-sm font-medium tracking-wide text-muted">
            {t}<span className="h-1 w-1 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
