import type { Metadata } from "next";
import GiftCardPage from "@/components/GiftCardPage";

export const metadata: Metadata = {
  title: "Carte cadeau nettoyage auto à domicile",
  description:
    "Offrez une carte cadeau Léman Auto Clean : nettoyage automobile premium à domicile dans le Chablais, Genève et Haute-Savoie. Valable 12 mois, envoyée en PDF.",
  alternates: { canonical: "/carte-cadeau", languages: { fr: "/carte-cadeau", en: "/en/gift-card" } },
};

export default function Page() {
  return <GiftCardPage lang="fr" />;
}
