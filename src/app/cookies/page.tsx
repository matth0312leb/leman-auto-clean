import LegalPage from "@/components/LegalPage";

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookies"
      description="Informations relatives à l'utilisation des cookies et services tiers sur le site Léman Auto Clean."
      sections={[
        {
          title: "Utilisation des cookies",
          paragraphs: [
            "Le site Léman Auto Clean n'utilise pas de cookies tiers à but publicitaire.",
            "Des cookies ou éléments techniques strictement nécessaires peuvent être utilisés pour assurer le bon fonctionnement du site.",
          ],
        },
        {
          title: "Services externes",
          paragraphs: [
            "Le site peut contenir des liens vers des services externes comme WhatsApp, Instagram, TikTok, Facebook, Google ou FormSubmit.",
            "Ces services peuvent déposer leurs propres cookies ou appliquer leurs propres règles de confidentialité lorsque vous les utilisez.",
          ],
        },
        {
          title: "Gestion des cookies",
          paragraphs: [
            "Vous pouvez configurer votre navigateur pour accepter, refuser ou supprimer les cookies.",
            "Le refus de certains cookies peut limiter le fonctionnement de certains services externes.",
          ],
        },
      ]}
    />
  );
}
