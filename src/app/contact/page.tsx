import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Naveen Rajput for freelance Java, Spring Boot and Next.js projects.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Contact />
    </main>
  );
}
