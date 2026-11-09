import { MetadataRoute } from "next";
import { siteConfig, flagshipPrograms } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  // Core static pages
  const staticPages = [
    "",
    "/about",
    "/programs",
    "/solutions/colleges",
    "/solutions/corporate",
    "/services",
    "/lms",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/programs") ? 0.9 : 0.8,
  }));

  // Dedicated flagship program pages
  const programPages = flagshipPrograms.map((program) => ({
    url: `${baseUrl}/programs/${program.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...programPages];
}
