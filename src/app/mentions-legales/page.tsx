import LegalPage from "@/components/LegalPage";

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title="Mentions légales"
      description="Informations relatives à l'éditeur, à l'hébergement et à l'utilisation du site Léman Auto Clean."
      sections={[
        {
          title: "Éditeur du site",
          paragraphs: [
            "Nom commercial : Léman Auto Clean.",
            "Responsable de publication : Matthieu L.",
            "Adresse : Rue du Foron, 74140 Sciez, France.",
            "Téléphone : +33 6 04 47 52 05.",
            "E-mail : lemanautoclean@gmail.com.",
          ],
        },
        {
          title: "Activité",
          paragraphs: [
            "Léman Auto Clean propose des prestations de nettoyage automobile haut de gamme à domicile, uniquement sur rendez-vous.",
            "Déplacement dans le Chablais, Genève et Haute-Savoie.",
          ],
        },
        {
          title: "Hébergement",
          paragraphs: [
            "Le site est destiné à être hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.",
            "Ces informations pourront être ajustées selon la solution d'hébergement retenue lors de la mise en ligne définitive.",
          ],
        },
        {
          title: "Propriété intellectuelle",
          paragraphs: [
            "Les textes, visuels, logos, éléments graphiques et contenus présents sur le site sont protégés par le droit de la propriété intellectuelle.",
            "Toute reproduction ou utilisation sans autorisation préalable est interdite.",
          ],
        },
        {
          title: "Responsabilité",
          paragraphs: [
            "Léman Auto Clean s'efforce de fournir des informations à jour et exactes, mais ne peut garantir l'absence totale d'erreurs.",
            "Les tarifs, disponibilités et conditions peuvent évoluer. La confirmation finale est réalisée lors de la prise de contact ou du devis.",
          ],
        },
      ]}
    />
  );
}
