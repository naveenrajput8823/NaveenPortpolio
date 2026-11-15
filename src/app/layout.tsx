import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
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

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
