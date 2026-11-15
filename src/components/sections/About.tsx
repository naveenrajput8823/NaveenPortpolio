
const highlights = [
  {
    number: "01",
    title: "Backend Development",
    description:
      "Developing backend applications and REST APIs using Java, Spring Boot and database technologies.",
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Building responsive and intuitive web interfaces using React, Next.js and modern JavaScript.",
  },
  {
    number: "03",
    title: "Problem Solving",
    description:
      "Learning through practical projects, writing maintainable code and solving real-world requirements.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-surface">
      <div className="container-width section-spacing">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              About Me
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Turning ideas
              <br />
              into digital
              <br />
              experiences.
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-foreground">
              I&apos;m Naveen Tanwar, a Java Full Stack Developer with a
              background in Computer Science and Engineering.
            </p>

            <p className="mt-6 leading-8 text-muted">
              My development journey includes full stack web development
              internship experience and hands-on work with modern web
              technologies. I enjoy building applications that combine
              reliable backend functionality with clean, user-friendly
              interfaces.
            </p>

            <p className="mt-5 leading-8 text-muted">
              Currently, I&apos;m focusing on Java, Spring Boot, React,
              Next.js, databases and API development while continuously
              improving my practical development skills.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-border px-4 py-2 text-sm">
                B.Tech – Computer Science
              </span>
              <span className="rounded-full border border-border px-4 py-2 text-sm">
                Full Stack Development
              </span>
              <span className="rounded-full border border-border px-4 py-2 text-sm">
                Java Backend
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20 grid border-t border-border md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.number}
              className="border-b border-border py-8 md:border-b-0 md:border-r md:px-7 first:md:pl-0 last:md:border-r-0"
            >
              <span className="text-sm font-medium text-accent">
                {item.number}
              </span>

              <h3 className="mt-5 text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
