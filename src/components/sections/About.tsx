
const highlights = [
  {
    number: "01",
    title: "Backend Engineering",
    description:
      "Building structured backend applications and RESTful APIs using Java, Spring Boot, Spring Data JPA, and relational databases with a focus on reliability and maintainability.",
    tags: ["Java", "Spring Boot", "REST APIs"],
  },
  {
    number: "02",
    title: "Modern Frontend Development",
    description:
      "Creating responsive, accessible, and user-friendly web experiences with modern frontend frameworks and reusable component-based architecture.",
    tags: ["React.js", "Next.js", "TypeScript"],
  },
  {
    number: "03",
    title: "Full Stack & AI Integration",
    description:
      "Connecting frontend applications with backend services, databases, and AI-powered features to develop practical solutions for real-world requirements.",
    tags: ["Full Stack", "AI Integration", "Databases"],
  },
];

const qualifications = [
  "B.Tech – Computer Science & Engineering",
  "Full Stack Development Experience",
  "Java & Spring Boot Development",
];

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-surface">
      <div className="container-width section-spacing">

        {/* Section Heading */}
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-12">

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              About Me
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Building with
              <br />
              purpose.
              <br />
              Growing with
              <br />
              technology.
            </h2>

            <p className="mt-5 max-w-xs text-sm leading-7 text-muted">
              Passionate about engineering digital solutions
              that bring ideas to life.
            </p>
          </div>

          {/* Introduction */}
          <div>
            <p className="text-xl font-medium leading-9 text-foreground sm:text-2xl">
              I&apos;m Naveen Tanwar, a Java Full Stack Developer
              with a background in Computer Science and Engineering.
            </p>

            <p className="mt-6 leading-8 text-muted">
              My development journey combines hands-on internship
              experience with practical application development.
              I enjoy understanding how systems work, designing
              reliable backend services, and creating intuitive
              interfaces that make applications easy to use.
            </p>

            <p className="mt-5 leading-8 text-muted">
              I primarily work with Java, Spring Boot, React,
              Next.js, and databases. I have also explored
              AI-powered application development, integrating
              intelligent features into full-stack projects.
            </p>

            <p className="mt-5 leading-8 text-muted">
              I believe in continuous learning, writing maintainable
              code, and improving through building real projects.
              My goal is to create useful digital products while
              growing as a software developer.
            </p>

            {/* Qualifications */}
            <div className="mt-8 flex flex-wrap gap-3">
              {qualifications.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise Highlights */}
        <div className="mt-20 border-t border-border">
          <div className="flex flex-col gap-3 py-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                What I Do
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Areas of Expertise
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-7 text-muted">
              Combining engineering fundamentals with modern
              technologies to build complete web applications.
            </p>
          </div>

          <div className="grid border-t border-border md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.number}
                className="group border-b border-border py-8 md:border-b-0 md:border-r md:px-7 first:md:pl-0 last:md:border-r-0"
              >
                <span className="text-sm font-medium text-accent">
                  {item.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold transition-colors group-hover:text-accent">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
