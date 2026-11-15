
import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore development projects by Naveen Rajput, Java Full Stack Developer.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <Projects />
    </main>
  );
}
