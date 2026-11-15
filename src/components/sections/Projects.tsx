import TiltCard from "@/components/ui/TiltCard";

type Project = {
  name: string; category: string; description: string; tags: string[];
  github?: string; live?: string; status?: string;
};

const projects: Project[] = [
  { name: "ShopSphere", category: "E-commerce Application", status: "In progress",
    description: "Modern e-commerce application with product browsing and category navigation.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "E-Commerce Website", category: "Web Development",
    description: "Responsive shopping interface with a clean, modern product layout.",
    tags: ["Next.js", "React.js", "JavaScript", "CSS"], github: "https://github.com/naveenrajput8823/E-Commerce" },
  { name: "E-Learning Platform", category: "Web Development",
    description: "Structured, responsive interface for an online learning platform.",
    tags: ["HTML5", "SCSS", "JavaScript"], github: "https://github.com/naveenrajput8823/E-learning_platform" },
  { name: "Car Rental System", category: "Java Application",
    description: "Manages cars, customers, rentals and payments with object-oriented design.",
    tags: ["Java", "OOP", "Collections"], github: "https://github.com/naveenrajput8823/CarRentelSystem" },
  { name: "Student Management System", category: "Java Application",
    description: "Organizes and manages student records with proper exception handling.",
    tags: ["Java", "OOP", "Exception Handling"], github: "https://github.com/naveenrajput8823/StudentManagementSystem" },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-surface">
      <div className="container-width section-spacing">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Selected Projects</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Work that reflects<br />my development journey.</h2>
          </div>
          <a href="https://github.com/naveenrajput8823" target="_blank" rel="noopener noreferrer"
            className="text-sm font-semibold text-accent hover:underline">View GitHub Profile ↗</a>
        </div>

        <div className="stagger mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <TiltCard key={p.name} max={6} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background hover:border-accent hover:shadow-xl hover:shadow-black/10">
              <div className="relative flex h-40 items-end justify-between overflow-hidden p-6"
                style={{ background: "linear-gradient(135deg, var(--glow), var(--accent-soft))" }}>
                <span className="text-6xl font-semibold tracking-tight text-accent/25" style={{ transform: "translateZ(40px)" }}>{String(i + 1).padStart(2, "0")}</span>
                <span className="rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-muted backdrop-blur">{p.category}</span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                  {p.status && <span className="shrink-0 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">{p.status}</span>}
                </div>
                <p className="text-sm leading-7 text-muted">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted">{t}</span>)}
                </div>
                <div className="mt-auto flex gap-5 pt-2 text-sm font-semibold">
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Source Code ↗</a>}
                  {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Live Demo ↗</a>}
                  {!p.github && !p.live && <span className="text-muted">Coming soon</span>}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
