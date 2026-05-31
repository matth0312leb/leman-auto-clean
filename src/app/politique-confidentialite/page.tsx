import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité Léman Auto Clean pour les demandes de nettoyage automobile premium à domicile et de detailing à domicile.",
  alternates: {
    canonical: "/politique-confidentialite",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      description="Léman Auto Clean s'engage à protéger les données personnelles transmises via le site ou lors d'une prise de contact."
      sections={[
        {
          title: "Données collectées",
          paragraphs: [
            "Les informations collectées via WhatsApp, par e-mail, téléphone ou formulaire du site peuvent inclure votre nom, votre prénom, votre adresse e-mail, votre numéro de téléphone, le type de véhicule, la prestation souhaitée et votre message.",
            "Ces données sont utilisées uniquement pour répondre à votre demande de prestation, établir un devis, organiser un rendez-vous ou assurer le suivi de votre demande.",
          ],
        },
        {
          title: "Utilisation des données",
          paragraphs: [
            "Aucune donnée personnelle n'est revendue à des tiers.",
            "Les informations sont conservées uniquement le temps nécessaire au traitement de la demande et au suivi commercial raisonnable de la prestation.",
          ],
        },
        {
          title: "Vos droits",
          paragraphs: [
            "Conformément au RGPD, vous pouvez demander l'accès, la rectification ou la suppression de vos données personnelles.",
            "Pour exercer vos droits, vous pouvez contacter Léman Auto Clean par e-mail : lemanautoclean@gmail.com.",
          ],
        },
        {
          title: "Cookies et services tiers",
          paragraphs: [
            "Ce site n'utilise pas de cookies tiers à but publicitaire.",
            "Certains services externes, comme FormSubmit pour l'envoi du formulaire ou les liens vers WhatsApp, Instagram, TikTok, Facebook et Google, peuvent appliquer leurs propres règles de confidentialité.",
          ],
        },
      ]}
    />
  );
}
