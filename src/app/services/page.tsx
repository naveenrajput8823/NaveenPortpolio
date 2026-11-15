
import type { Metadata } from "next";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Development Services",
  description:
    "Explore web development, Java backend and frontend development services by Naveen Rajput.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <Services />
    </main>
  );
}
