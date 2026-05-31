import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Conditions prestations detailing",
  description:
    "Conditions des prestations de nettoyage auto à domicile, lavage voiture à domicile et detailing à domicile proposées par Léman Auto Clean.",
  alternates: {
    canonical: "/conditions-prestations-detailing",
  },
};

export default function ConditionsPrestationsPage() {
  return (
    <LegalPage
      title="Conditions prestations"
      description="Informations pratiques concernant le déroulement des prestations de nettoyage automobile à domicile."
      sections={[
        {
          title: "Intervention à domicile",
          paragraphs: [
            "Les prestations sont réalisées à domicile ou sur le lieu de travail du client, sous réserve d'un accès adapté au véhicule.",
            "Le client doit s'assurer que le véhicule est accessible et que l'intervention peut être réalisée dans de bonnes conditions.",
          ],
        },
        {
          title: "Sur rendez-vous",
          paragraphs: [
            "Toutes les prestations Léman Auto Clean sont réalisées uniquement sur rendez-vous.",
            "La durée d'intervention varie selon la formule, le type de véhicule, les options choisies et l'état du véhicule.",
          ],
        },
        {
          title: "État du véhicule",
          paragraphs: [
            "Le client est invité à décrire l'état du véhicule au moment de la demande afin d'obtenir une estimation adaptée.",
            "Un véhicule très sale, fortement encombré, présentant des poils d'animaux, des taches importantes ou une intervention plus longue que prévu peut entraîner un supplément.",
          ],
        },
        {
          title: "Objets personnels",
          paragraphs: [
            "Avant l'intervention, le client doit retirer les objets personnels, documents importants, objets de valeur et effets fragiles du véhicule.",
            "Léman Auto Clean ne peut être tenu responsable de la présence d'objets oubliés dans le véhicule.",
          ],
        },
        {
          title: "Résultat attendu",
          paragraphs: [
            "Léman Auto Clean met en oeuvre un travail minutieux avec des produits et outils professionnels.",
            "Certains défauts, taches anciennes, usures, rayures, odeurs ou marques incrustées peuvent ne pas disparaître totalement malgré l'intervention.",
          ],
        },
      ]}
    />
  );
}
