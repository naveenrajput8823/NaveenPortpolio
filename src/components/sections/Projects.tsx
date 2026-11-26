
import TiltCard from "@/components/ui/TiltCard";

type ProjectLink = {
  label: string;
  url: string;
};

type Project = {
  name: string;
  category: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  status?: string;
  featured?: boolean;
};

const featuredProjects: Project[] = [
  {
    name: "AI-Powered E-Commerce Platform",
    category: "Full Stack · Artificial Intelligence",
    description:
      "An AI-powered full-stack shopping platform combining modern e-commerce functionality with intelligent customer experiences. Features include an AI shopping assistant, persistent conversations, review sentiment analysis, AI-generated review summaries and image generation.",
    tags: [
      "React 19",
      "Redux Toolkit",
      "Java",
      "Spring Boot",
      "Spring AI",
      "PostgreSQL",
    ],
    featured: true,
    links: [
      {
        label: "Main Repository",
        url: "https://github.com/naveenrajput8823/Full-Stack-E-Commerce-Project-withAIChatbot",
      },
      {
        label: "Frontend",
        url: "https://github.com/naveenrajput8823/E-CommerceWithAIChatBot",
      },
      {
        label: "Backend",
        url: "https://github.com/naveenrajput8823/ECommerceWithAIChatbotBackend",
      },
    ],
  },
  {
    name: "Portfolio Backend API",
    category: "Backend · REST API",
    description:
      "A dedicated backend system for handling portfolio inquiries using structured Spring Boot architecture. Includes request validation, PostgreSQL persistence, spam protection and API rate limiting.",
    tags: [
      "Java 25",
      "Spring Boot",
      "PostgreSQL",
      "Spring Data JPA",
      "REST API",
      "Validation",
    ],
    featured: true,
    links: [
      {
        label: "Source Code",
        url: "https://github.com/naveenrajput8823/naveen-portfolio-backend",
      },
    ],
  },
  {
    name: "Product Management REST API",
    category: "Backend · Enterprise Development",
    description:
      "A Spring Boot-based product management API demonstrating layered backend architecture, CRUD operations, database integration, DTO mapping and structured request validation.",
    tags: [
      "Java 25",
      "Spring Boot",
      "MySQL",
      "Spring Data JPA",
      "MapStruct",
      "REST API",
    ],
    featured: true,
    links: [
      {
        label: "Source Code",
        url: "https://github.com/naveenrajput8823/product-service-springboot",
      },
    ],
  },
];

const moreProjects: Project[] = [
  {
    name: "Spring Security RBAC System",
    category: "Backend · Security",
    description:
      "A role-based access control project exploring authentication, authorization and protected application resources using Spring Security.",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "RBAC",
      "Authentication",
    ],
    links: [
      {
        label: "Source Code",
        url: "https://github.com/naveenrajput8823/spring-security-rbac-demo",
      },
    ],
  },
  {
    name: "Car Rental Management System",
    category: "Java · Application Development",
    description:
      "A Java application for managing vehicle availability, customers, rental records and payment simulation using object-oriented programming.",
    tags: ["Java", "OOP", "Collections", "Management System"],
    links: [
      {
        label: "Source Code",
        url: "https://github.com/naveenrajput8823/CarRentelSystem",
      },
    ],
  },
  {
    name: "Next.js E-Commerce Frontend",
    category: "Frontend · E-Commerce",
    description:
      "A modern shopping frontend built with Next.js and TypeScript, focusing on responsive layouts, reusable components and product browsing experiences.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    links: [
      {
        label: "Source Code",
        url: "https://github.com/naveenrajput8823/nextjs-ecommerce-frontend",
      },
    ],
  },
];

const additionalProjects: Project[] = [
  {
    name: "E-Learning Platform",
    category: "Web Development",
    description:
      "A responsive web interface for an online learning platform, built with structured layouts and modern styling.",
    tags: ["HTML5", "SCSS", "JavaScript"],
    links: [
      {
        label: "Source Code",
        url: "https://github.com/naveenrajput8823/E-learning_platform",
      },
    ],
  },
  {
    name: "E-Commerce Website",
    category: "Web Development",
    description:
      "A shopping website project focused on product presentation, responsive design and frontend development fundamentals.",
    tags: ["CSS", "HTML", "JavaScript"],
    links: [
      {
        label: "Source Code",
        url: "https://github.com/naveenrajput8823/E-Commerce",
      },
    ],
  },
  {
    name: "Student Management System",
    category: "Java Application",
    description:
      "A Java application demonstrating student record organization, object-oriented programming and exception handling.",
    tags: ["Java", "OOP", "Exception Handling"],
    links: [
      {
        label: "Source Code",
        url: "https://github.com/naveenrajput8823/StudentManagementSystem",
      },
    ],
  },
  {
    name: "Calculator",
    category: "Mini Project",
    description:
      "A lightweight calculator project demonstrating interactive interface development and JavaScript fundamentals.",
    tags: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Source Code",
        url: "https://github.com/naveenrajput8823/Calculator",
      },
    ],
  },
  {
    name: "Digital Clock & Stopwatch",
    category: "Mini Project",
    description:
      "A browser-based clock and stopwatch project demonstrating time-based JavaScript functionality.",
    tags: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Source Code",
        url: "https://github.com/naveenrajput8823/DigitalClock-StopWatch",
      },
    ],
  },
];

function ProjectCard({
  project,
  index,
}:

 {
  project: Project;
  index: number;
}) {
  return (
    <TiltCard
      key={project.name}
      max={5}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-black/10 ${
        project.featured ? "min-h-[410px]" : "min-h-[340px]"
      }`}
    >
      {/* Project Visual Header */}
      <div
        className="relative flex h-40 shrink-0 items-end justify-between overflow-hidden p-6"
        style={{
          background:
            "linear-gradient(135deg, var(--glow), var(--accent-soft))",
        }}
      >
        <div
          className="pointer-events-none absolute -right-10 -top-14 h-48 w-48 rounded-full border border-accent/15 transition-transform duration-500 group-hover:scale-125"
          style={{ transform: "translateZ(15px)" }}
        />

        <div className="pointer-events-none absolute -right-4 -top-6 h-32 w-32 rounded-full border border-accent/15" />

        <span
          className={`relative z-10 font-semibold tracking-tighter text-accent/25 ${
            project.featured ? "text-7xl" : "text-6xl"
          }`}
          style={{ transform: "translateZ(35px)" }}
        >
          {String(index).padStart(2, "0")}
        </span>

        <span className="relative z-10 max-w-[65%] rounded-full border border-border bg-surface/80 px-3 py-1.5 text-right text-[10px] font-semibold uppercase tracking-wider text-muted backdrop-blur-md">
          {project.category}
        </span>

        {project.featured && (
          <span className="absolute left-6 top-5 rounded-full border border-accent/30 bg-background/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent backdrop-blur-md">
            Featured Work
          </span>
        )}
      </div>

      {/* Project Details */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-accent">
            {project.name}
          </h3>
        </div>

        <p className="text-sm leading-7 text-muted">
          {project.description}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-border bg-surface px-3 py-1.5 text-[11px] font-medium text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Repository Links */}
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-5">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-all hover:gap-2.5 hover:underline"
            >
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}



function ProjectSection({
  eyebrow,
  title,
  projects,
  startIndex = 1,
  featured = false,
}: {
  eyebrow: string;
  title: string;
  projects: Project[];
  startIndex?: number;
  featured?: boolean;
}) {
  return (
    <div className="mt-20 first:mt-0">
      <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h3>
        </div>

        <span className="text-xs font-medium text-muted">
          {String(projects.length).padStart(2, "0")} Projects
        </span>
      </div>

      <div
        className={`stagger grid gap-6 ${
          featured ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={startIndex + index}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-surface">
      <div className="container-width section-spacing">
        {/* Main Heading */}
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Selected Projects
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Turning ideas into
              <br />
              <span className="text-accent">digital solutions.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Explore my development work across full-stack applications,
              AI-powered solutions, backend engineering and modern web
              technologies.
            </p>
          </div>

          <a
            href="https://github.com/naveenrajput8823"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-all hover:border-accent hover:text-accent"
          >
            Explore GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Featured Projects */}
        <div className="mt-16">
          <ProjectSection
            eyebrow="01 / Flagship Work"
            title="Featured Projects"
            projects={featuredProjects}
            startIndex={1}
            featured
          />
        </div>

        {/* Advanced Projects */}
        <ProjectSection
          eyebrow="02 / Engineering & Development"
          title="More Projects"
          projects={moreProjects}
          startIndex={4}
        />

        {/* Additional Projects */}
        <ProjectSection
          eyebrow="03 / Additional Work"
          title="Other Projects"
          projects={additionalProjects}
          startIndex={7}
        />

        {/* GitHub CTA */}
        <div className="mt-20 overflow-hidden rounded-2xl border border-border bg-background p-8 text-center sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            More on GitHub
          </p>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Interested in what I build?
          </h3>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted">
            Discover more experiments, source code and development projects
            on my GitHub profile.
          </p>

          <a
            href="https://github.com/naveenrajput8823"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
          >
            Visit My GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
