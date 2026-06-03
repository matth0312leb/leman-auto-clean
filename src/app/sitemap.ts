import type { MetadataRoute } from "next";

const siteUrl = "https://www.leman-autoclean.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/contact",
    "/contact-professionnel",
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
      route === "/contact-professionnel" ||
      route === "/abonnements" ||
      route === "/professionnels"
        ? "weekly"
        : "yearly",
    priority:
      route === ""
        ? 1
        : route === "/contact" ||
            route === "/contact-professionnel" ||
            route === "/abonnements" ||
            route === "/professionnels"
          ? 0.9
          : 0.4,
  }));
}
