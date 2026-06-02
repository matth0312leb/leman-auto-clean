import type { MetadataRoute } from "next";

const siteUrl = "https://www.leman-autoclean.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/contact",
    "/abonnements",
    "/professionnels",
    "/mentions-legales",
    "/politique-confidentialite",
    "/cgv",
    "/conditions-prestations-detailing",
    "/cookies",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" ||
      route === "/contact" ||
      route === "/abonnements" ||
      route === "/professionnels"
        ? "weekly"
        : "yearly",
    priority:
      route === ""
        ? 1
        : route === "/contact" ||
            route === "/abonnements" ||
            route === "/professionnels"
          ? 0.9
          : 0.4,
  }));
}
