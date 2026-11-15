import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://naveentanwar.vercel.app";
  return ["", "/about", "/projects", "/services", "/contact"].map((p) => ({ url: base + p, lastModified: new Date() }));
}
