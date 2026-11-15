
const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend Development",
    description: "Developing application logic and RESTful APIs.",
    skills: ["Java", "Core Java", "Spring Boot", "Hibernate", "Spring Data JPA"],
  },
  {
    number: "03",
    title: "Database Technologies",
    description: "Working with relational and NoSQL databases.",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    number: "04",
    title: "Tools & Technologies",
    description: "Development tools and application workflows.",
    skills: ["Git", "GitHub", "Docker", "Maven", "VS Code", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="container-width section-spacing">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Technical Expertise
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-6 leading-8 text-muted">
            My technical toolkit covers frontend development, Java backend
            engineering, databases and tools used to build modern web
            applications.
          </p>
        </div>

        <div className="mt-16 grid border-t border-border sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="border-b border-border py-9 sm:px-8 sm:first:pl-0 sm:nth-[2]:border-l sm:nth-[2]:pr-0"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-accent">{group.number}</span>
                <span className="text-xs uppercase tracking-widest text-muted">
                  {group.skills.length} Technologies
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
