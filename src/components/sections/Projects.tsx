
const projects = [
  {
    number: "01",
    name: "Car Rental System",
    category: "Java Project",
    description:
      "A car rental application project demonstrating Java development and application design.",
    technologies: ["Java"],
    github: "https://github.com/naveenrajput8823/CarRentelSystem",
  },
  {
    number: "02",
    name: "E-Learning Platform",
    category: "Web Development",
    description:
      "A web development project focused on an online learning platform.",
    technologies: [],
    github: "https://github.com/naveenrajput8823/E-learning_platform",
  },
  {
    number: "03",
    name: "Student Management System",
    category: "Java Project",
    description:
      "A student management application developed as a Java project.",
    technologies: ["Java"],
    github: "https://github.com/naveenrajput8823/StudentManagementSystem",
  },
  {
    number: "04",
    name: "E-Commerce Website",
    category: "Web Development",
    description:
      "A web development project based on an e-commerce website concept.",
    technologies: [],
    github: "https://github.com/naveenrajput8823/E-Commerce",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-surface">
      <div className="container-width section-spacing">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Selected Projects
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Work that reflects
              <br />
              my development journey.
            </h2>

            <p className="mt-6 leading-8 text-muted">
              A collection of development projects built while learning
              and working with different technologies.
            </p>
          </div>

          <a
            href="https://github.com/naveenrajput8823"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent hover:underline"
          >
            View GitHub Profile ↗
          </a>
        </div>

        <div className="mt-16 grid gap-x-10 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group border-t border-border py-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-accent">
                  {project.number}
                </span>

                <span className="text-xs uppercase tracking-wider text-muted">
                  {project.category}
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                {project.name}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                {project.description}
              </p>

              {project.technologies.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border px-3 py-2 text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
              >
                View Source Code <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
