import type { Metadata } from "next";
import GiftCardPage from "@/components/GiftCardPage";

export const metadata: Metadata = {
  title: { absolute: "Car cleaning gift card in Geneva | Léman Auto Clean" },
  description:
    "Give a Léman Auto Clean gift card: premium mobile car cleaning in Geneva and around Lake Geneva. Valid for 12 months, sent as a PDF.",
  alternates: { canonical: "/en/gift-card", languages: { fr: "/carte-cadeau", en: "/en/gift-card" } },
};

export default function Page() {
  return <GiftCardPage lang="en" />;
}
