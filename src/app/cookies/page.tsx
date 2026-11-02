import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "Informations cookies du site Léman Auto Clean, nettoyage auto à domicile et detailing à domicile dans le Chablais et la Haute-Savoie.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookies"
      description="Informations relatives à l'utilisation des cookies et services tiers sur le site Léman Auto Clean."
      sections={[
        {
          title: "Utilisation des cookies",
          paragraphs: [
            "Le site Léman Auto Clean n'utilise aucun cookie publicitaire.",
            "Des éléments techniques strictement nécessaires peuvent être utilisés pour assurer le bon fonctionnement du site et mémoriser votre choix concernant les cookies.",
          ],
        },
        {
          title: "Mesure d'audience",
          paragraphs: [
            "Avec votre accord uniquement, le site utilise Google Analytics (Google Ireland Limited) pour mesurer sa fréquentation : pages consultées, durée de visite, type d'appareil, ainsi que les clics sur les boutons de contact (WhatsApp, téléphone, réservation) et l'envoi des formulaires. Ces cookies sont conservés au maximum 13 mois.",
            "Si vous refusez, Google Analytics n'est pas chargé et aucun cookie de mesure d'audience n'est déposé.",
            "Le site utilise également Vercel Analytics et Speed Insights, des outils de mesure anonymes qui ne déposent pas de cookie.",
          ],
        },
        {
          title: "Services externes",
          paragraphs: [
            "Le site contient des liens vers des services externes comme WhatsApp, Instagram, TikTok, Facebook, Google ou FormSubmit.",
            "Ces services peuvent déposer leurs propres cookies ou appliquer leurs propres règles de confidentialité lorsque vous les utilisez.",
          ],
        },
        {
          title: "Gérer votre choix",
          paragraphs: [
            "Vous pouvez modifier votre choix à tout moment grâce au lien « Gérer les cookies » en bas de chaque page.",
            "Vous pouvez aussi configurer votre navigateur pour accepter, refuser ou supprimer les cookies.",
          ],
        },
      ]}
    />
  );
}
