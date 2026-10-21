import { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";
import { blogPosts } from "@/data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kbflooringbd.com";

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-21"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-10-21"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-10-21"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date("2026-10-21"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-10-21"),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-10-21"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date("2026-10-21"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-10-21"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Category pages
  const categoryRoutes: MetadataRoute.Sitemap = servicesData.map((cat) => ({
    url: `${baseUrl}/services/${cat.slug}`,
    lastModified: new Date("2026-10-21"),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // All 21 Sub-service routes
  const subServiceRoutes: MetadataRoute.Sitemap = [];
  for (const cat of servicesData) {
    for (const sub of cat.subServices) {
      subServiceRoutes.push({
        url: `${baseUrl}/services/${cat.slug}/${sub.slug}`,
        lastModified: new Date("2026-10-21"),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  // All 12 Blog posts routes
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date("2026-10-21"),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...categoryRoutes, ...subServiceRoutes, ...blogRoutes];
}
