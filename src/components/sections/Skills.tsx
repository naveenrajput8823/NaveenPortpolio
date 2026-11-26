
"use client";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description: "Developing scalable backend systems and RESTful APIs.",
    skills: [
      "Java",
      "Core Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "Spring Security",
      "JWT",
      "REST APIs",
      "Microservices Architecture",
    ],
  },
  {
    number: "03",
    title: "Database Management",
    description: "Managing and optimizing relational databases.",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    number: "04",
    title: "Cloud & DevOps",
    description: "Working with development tools and deployment workflows.",
    skills: ["AWS", "Docker", "Linux", "Maven"],
  },
  {
    number: "05",
    title: "Messaging & Streaming",
    description: "Working with event-driven communication systems.",
    skills: ["Apache Kafka"],
  },
  {
    number: "06",
    title: "Development Tools",
    description: "Using modern tools for development and collaboration.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
      "Eclipse IDE",
      "Jira",
    ],
  },
];

export default function Skills() {
  const handlePointerMove = (
    event: React.PointerEvent<HTMLElement>
  ) => {
    if (event.pointerType !== "mouse") return;

    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -7;
    const rotateY = ((x / rect.width) - 0.5) * 7;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  };

  const handlePointerLeave = (
    event: React.PointerEvent<HTMLElement>
  ) => {
    event.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <section id="skills" className="relative overflow-hidden border-t border-border">
      {/* Ambient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-sky-500/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div className="container-width section-spacing relative">
        {/* Section Introduction */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Technical Expertise
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-6 leading-8 text-muted">
            My technical toolkit spans full-stack development,
            Java backend engineering, databases, cloud platforms
            and event-driven technologies. I continuously explore
            tools that help me build reliable and scalable
            applications.
          </p>
        </div>

        {/* 3D Skill Cards */}
        <div
          className="mt-16 grid gap-5 sm:grid-cols-2"
          style={{ perspective: "1200px" }}
        >
          {skillGroups.map((group) => (
            <article
              key={group.number}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/80 p-7 shadow-lg shadow-black/5 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:border-sky-400/40 hover:shadow-xl hover:shadow-sky-500/10 sm:p-8"
              style={{
                transformStyle: "preserve-3d",
                backgroundImage:
                  "radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56,189,248,0.09), transparent 75%)",
              }}
            >
              {/* Top Accent */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-500 group-hover:w-full"
              />

              {/* Card Header */}
              <div
                className="relative flex items-center justify-between"
                style={{ transform: "translateZ(25px)" }}
              >
                <span className="text-sm font-semibold tracking-widest text-accent">
                  {group.number}
                </span>

                <span className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                  {group.skills.length} Technologies
                </span>
              </div>

              {/* Card Content */}
              <div
                className="relative"
                style={{ transform: "translateZ(35px)" }}
              >
                <h3 className="mt-7 text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                  {group.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {group.description}
                </p>

                {/* Technology Badges */}
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {group.skills.map((skill, index) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background/80 px-3.5 py-2 text-xs font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-sky-400/60 hover:bg-sky-400/10 hover:text-accent hover:shadow-md hover:shadow-sky-500/10 sm:text-sm"
                      style={{
                        transitionDelay: `${Math.min(index * 20, 120)}ms`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-sky-400/0 blur-[65px] transition-all duration-500 group-hover:bg-sky-400/15"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
