import type { Metadata } from "next";
import GiftCardPage from "@/components/GiftCardPage";

export const metadata: Metadata = {
  title: { absolute: "Carte cadeau nettoyage auto | Thonon, Genève, Chablais" },
  description:
    "Idée cadeau originale : offrez une carte cadeau Léman Auto Clean, nettoyage automobile premium à domicile à Thonon, Évian, Douvaine, Annemasse, Genève et dans le Chablais. Dès 50 €, valable 12 mois.",
  alternates: { canonical: "/carte-cadeau", languages: { fr: "/carte-cadeau", en: "/en/gift-card" } },
};

export default function Page() {
  return <GiftCardPage lang="fr" />;
}
