import type { MetadataRoute } from "next";
import { villes } from "@/data/villes";

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
    "/en",
  ];

  const villeRoutes = villes.map((ville) => ({
    url: `${siteUrl}/nettoyage-voiture-domicile/${ville.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
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

  return [...pages, ...villeRoutes];
}
