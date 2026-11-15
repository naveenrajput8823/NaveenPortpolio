
const services = [
  {
    number: "01",
    title: "Full Stack Web Development",
    description:
      "Development of responsive web applications with modern frontend interfaces and reliable backend functionality.",
    technologies: ["React", "Next.js", "Java", "Spring Boot"],
  },
  {
    number: "02",
    title: "Java Backend Development",
    description:
      "Building REST APIs, backend business logic and database-driven applications using Java technologies.",
    technologies: ["Java", "Spring Boot", "Hibernate", "PostgreSQL"],
  },
  {
    number: "03",
    title: "Frontend Development",
    description:
      "Creating clean, responsive and user-friendly website interfaces that work across desktop and mobile devices.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-border">
      <div className="container-width section-spacing">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            What I Offer
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Development services
            <br />
            focused on your needs.
          </h2>

          <p className="mt-6 leading-8 text-muted">
            I help turn ideas and requirements into functional digital
            experiences through frontend and backend development.
          </p>
        </div>

        <div className="mt-16 border-t border-border">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid gap-6 border-b border-border py-9 md:grid-cols-[100px_1fr_1fr]"
            >
              <span className="text-sm font-medium text-accent">
                {service.number}
              </span>

              <div>
                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap content-start gap-2 md:justify-end">
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="h-fit rounded-full border border-border px-3 py-2 text-xs"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-lg font-medium">
            Have a project in mind?
          </p>

          <a
            href="/contact"
            className="rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent"
          >
            Let&apos;s Discuss Your Project ↗
          </a>
        </div>
      </div>
    </section>
  );
}
