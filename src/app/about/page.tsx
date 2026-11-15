
import type { Metadata } from "next";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Naveen Rajput, Java Full Stack Developer, his background and development experience.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <About />
    </main>
  );
}
