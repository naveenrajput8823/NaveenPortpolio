
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import Footer from "@/components/sections/Footer";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naveentanwar.vercel.app"),

  title: {
    default: "Naveen Rajput | Java Full Stack Developer",
    template: "%s | Naveen Rajput",
  },

  description:
    "Naveen Rajput is a Java Full Stack Developer specializing in Java, Spring Boot, Next.js, React and PostgreSQL. Explore projects, development services and get in touch.",

  applicationName: "Naveen Rajput Portfolio",

  keywords: [
    "Naveen Rajput",
    "Java Full Stack Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Next.js Developer",
    "React Developer",
    "Freelance Web Developer",
    "PostgreSQL",
  ],

  authors: [{ name: "Naveen Rajput" }],
  creator: "Naveen Rajput",

  openGraph: {
    title: "Naveen Rajput | Java Full Stack Developer",
    description:
      "Building modern web applications and scalable backend solutions.",
    url: "https://naveentanwar.vercel.app",
    siteName: "Naveen Rajput Portfolio",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Naveen Rajput | Java Full Stack Developer",
    description:
      "Explore my development projects, skills and freelance services.",
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const THEME_SCRIPT = `
  try {
    var theme = localStorage.getItem("theme");

    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  } catch (error) {}
`;

const PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Naveen Rajput",
  jobTitle: "Java Full Stack Developer",
  url: "https://naveentanwar.vercel.app",
  sameAs: [
    "https://www.linkedin.com/in/naveen-tanwar-422325251/",
    "https://www.instagram.com/_naveen_tanwar__/",
    "https://stackoverflow.com/users/33113943/naveen",
  ],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "PostgreSQL",
    "Hibernate",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_SCRIPT}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(PERSON).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body className="flex min-h-full flex-col">
        <ScrollProgress />

        <Navbar />

        {children}

        <Footer />

        <WhatsAppFloat />
      </body>
    </html>
  );
}
