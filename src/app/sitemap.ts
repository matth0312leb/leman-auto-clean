import type { MetadataRoute } from "next";

const siteUrl = "https://www.leman-autoclean.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/contact",
    "/mentions-legales",
    "/politique-confidentialite",
    "/cgv",
    "/conditions-prestations-detailing",
    "/cookies",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/contact" ? "weekly" : "yearly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.4,
  }));
}
