
const experiences = [
  {
    period: "September 2026 — Present",
    role: "Java Full Stack Developer",
    company: "Siteforce Consultants Private Limited",
    type: "Internship",
    location: "Remote",
    description:
      "Building practical experience in Java Full Stack development, strengthening software development fundamentals and expanding knowledge of modern application development.",
    technologies: ["Java", "Full Stack Development"],
    current: true,
  },
  {
    period: "May 2026 — Present",
    role: "Java Full Stack with Cloud & GenAI",
    company: "AAM Infotech",
    type: "Internship",
    location: "Gurugram, Haryana, India · Hybrid",
    description:
      "Expanding technical knowledge through practical exposure to Java Full Stack development, cloud technologies, and Generative AI concepts.",
    technologies: [
      "Java",
      "Full Stack Development",
      "Cloud",
      "Generative AI",
    ],
    current: true,
  },
  {
    period: "10 July 2025 — 25 August 2025",
    role: "Full Stack Web Development Intern",
    company: "Upflairs Technologies",
    type: "Internship",
    location: "India",
    description:
      "Developed foundational full stack web development skills through hands-on learning and project-based practice using core frontend technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-surface">
      <div className="container-width section-spacing">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Experience
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            My professional journey.
          </h2>

          <p className="mt-6 leading-8 text-muted">
            Building real-world experience through internships, continuous
            learning, and hands-on software development.
          </p>
        </div>

        <div className="mt-16 border-t border-border">
          {experiences.map((item) => (
            <article
              key={item.company}
              className="grid gap-5 border-b border-border py-9 md:grid-cols-[0.7fr_1.3fr]"
            >
              <div>
                <p className="text-sm font-medium text-accent">
                  {item.period}
                </p>

                <p className="mt-3 text-sm text-muted">
                  {item.location}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold">
                    {item.role}
                  </h3>

                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                    {item.type}
                  </span>

                  {item.current && (
                    <span className="flex items-center gap-2 rounded-full border border-accent/30 px-3 py-1 text-xs text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Ongoing
                    </span>
                  )}
                </div>

                <p className="mt-2 font-medium text-muted">
                  {item.company}
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-muted">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border px-3 py-2 text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
