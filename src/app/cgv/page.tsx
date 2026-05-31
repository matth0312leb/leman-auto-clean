import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "CGV",
  description:
    "Conditions générales de vente Léman Auto Clean pour les prestations de nettoyage automobile premium à domicile, lavage voiture à domicile et detailing à domicile.",
  alternates: {
    canonical: "/cgv",
  },
};

export default function CGVPage() {
  return (
    <LegalPage
      title="CGV"
      description="Conditions générales applicables aux prestations de nettoyage automobile proposées par Léman Auto Clean."
      sections={[
        {
          title: "1. Présentation de l'entreprise",
          paragraphs: [
            "Léman Auto Clean.",
            "LEBOURG Matthieu.",
            "Micro-entreprise - SIRET : 98823001700010.",
            "Siège : Rue du Foron, 74140 Sciez, France.",
            "E-mail : lemanautoclean@gmail.com.",
            "Téléphone : 06 04 47 52 05.",
          ],
        },
        {
          title: "2. Prestations proposées",
          paragraphs: [
            "Les prestations de nettoyage sont réalisées à domicile, sur le lieu de travail ou tout autre lieu validé avec le client.",
            "Le détail complet des prestations, formules, tarifs et options est disponible sur le site www.leman-autoclean.com et sur devis.",
            "Les prestations sont réalisées uniquement sur rendez-vous.",
          ],
        },
        {
          title: "3. Conditions d'intervention",
          paragraphs: [
            "Le client s'engage à mettre à disposition un point d'eau et une prise électrique si la prestation le nécessite.",
            "Le client s'engage à autoriser l'accès au lieu d'intervention à l'heure convenue.",
            "Le client doit s'assurer que le lieu est privé et permet une intervention sans enfreindre la législation, notamment pas de nettoyage sur la voie publique sans autorisation.",
            "En cas d'absence d'accès à l'eau ou à l'électricité, un fonctionnement autonome peut être prévu selon la formule choisie.",
          ],
        },
        {
          title: "4. Report / Annulation",
          paragraphs: [
            "Toute annulation doit être signalée au moins 24h à l'avance.",
            "En cas d'annulation tardive ou d'impossibilité d'accès au véhicule, Léman Auto Clean se réserve le droit de facturer jusqu'à 50% du montant prévu.",
          ],
        },
        {
          title: "5. Responsabilités et assurance",
          paragraphs: [
            "Léman Auto Clean s'engage à utiliser des produits professionnels, adaptés aux surfaces traitées et respectueux de l'environnement.",
            "Toutefois, la responsabilité de Léman Auto Clean ne saurait être engagée en cas de dégâts antérieurs ou défauts non signalés, comme un vernis abîmé, des jantes corrodées, un intérieur fragile ou tout autre défaut préexistant.",
            "Léman Auto Clean est couvert par un contrat de Responsabilité Civile Professionnelle souscrit auprès de Assurup / Hiscox, couvrant l'activité de nettoyage de véhicules dans la limite d'un plafond de 50 000€ par sinistre.",
            "Contrat n° RCP250627173209 - valable du 27/06/2025 au 26/06/2026.",
          ],
        },
        {
          title: "6. Paiement",
          paragraphs: [
            "Le paiement s'effectue à la fin de la prestation.",
            "Les espèces sont acceptées en euros (€) ou en francs suisses (CHF). En cas de paiement en CHF, une majoration de 10% est appliquée pour couvrir les frais de change et de traitement.",
            "Le paiement peut également être effectué par virement bancaire SEPA, PayPal, Revolut ou équivalents.",
            "Tous les tarifs sont indiqués en euros (€) sur le site et les supports.",
            "La conversion CHF se base sur le taux en vigueur le jour de la prestation, selon le taux XE ou le taux fixé par l'entreprise.",
          ],
        },
        {
          title: "7. Données personnelles",
          paragraphs: [
            "Les informations collectées, comme le nom, le téléphone, l'adresse et les informations liées au véhicule, sont utilisées uniquement dans le cadre de la gestion des rendez-vous.",
            "Ces données ne sont jamais transmises à des tiers.",
          ],
        },
      ]}
    />
  );
}
