
const services = [
  {
    number: "01",
    title: "Full Stack Web Development",
    description:
      "Building complete web applications with responsive user interfaces, scalable backend systems and database integration. From frontend experiences to backend functionality, I develop solutions tailored to project requirements.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
    ],
  },
  {
    number: "02",
    title: "Java Backend & API Development",
    description:
      "Developing structured backend applications and RESTful APIs with secure authentication, business logic, database operations and maintainable application architecture.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "Microservices",
      "Apache Kafka",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "Frontend Development",
    description:
      "Creating modern, responsive and user-friendly web interfaces with reusable components, smooth interactions and consistent experiences across desktop, tablet and mobile devices.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    number: "04",
    title: "AI Integration & Smart Applications",
    description:
      "Integrating AI-powered capabilities into web applications, including intelligent chat assistants, AI-driven customer experiences and automated content insights.",
    technologies: [
      "Spring AI",
      "Generative AI",
      "React",
      "Java",
      "REST APIs",
    ],
  },
  {
    number: "05",
    title: "E-Commerce Development",
    description:
      "Developing modern online shopping experiences with product browsing, responsive interfaces, backend integration and AI-powered shopping features.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring AI",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-border">
      <div className="container-width section-spacing">
        {/* Section Heading */}
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
            From modern frontend experiences to scalable backend systems
            and AI-powered applications, I help transform ideas into
            functional digital solutions.
          </p>
        </div>

        {/* Services List */}
        <div className="mt-16 border-t border-border">
          {services.map((service) => (
            <article
              key={service.number}
              className="group grid gap-6 border-b border-border py-9 transition-colors duration-300 hover:bg-background/40 md:grid-cols-[100px_1fr_1fr]"
            >
              <span className="text-sm font-semibold text-accent transition-transform duration-300 group-hover:translate-x-1">
                {service.number}
              </span>

              <div>
                <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent sm:text-2xl">
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
                    className="h-fit rounded-full border border-border px-3 py-2 text-xs text-muted transition-all duration-300 hover:border-accent/50 hover:text-accent"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-semibold">
              Have a project in mind?
            </p>

            <p className="mt-2 text-sm text-muted">
              Let&apos;s discuss how we can bring your ideas to life.
            </p>
          </div>

          <a
            href="/contact"
            className="rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:bg-accent hover:text-white"
          >
            Let&apos;s Discuss Your Project ↗
          </a>
        </div>
      </div>
    </section>
  );
}
