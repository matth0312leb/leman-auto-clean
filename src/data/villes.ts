/**
 * Villes mises en avant pour le référencement local.
 * Chaque ville a sa propre page : /nettoyage-voiture-domicile/<slug>
 */
export type Ville = {
  slug: string;
  name: string;
  /** Nom court pour les liens (ex. « Thonon »). */
  shortName: string;
  intro: string;
  context: string;
  communes: string[];
};

export const villes: Ville[] = [
  {
    slug: "thonon-les-bains",
    name: "Thonon-les-Bains",
    shortName: "Thonon",
    intro:
      "Léman Auto Clean se déplace chez vous à Thonon-les-Bains pour le nettoyage intérieur, le lavage extérieur et le detailing de votre véhicule, sur rendez-vous.",
    context:
      "Au domicile, sur le parking de votre résidence ou sur votre lieu de travail : vous gardez votre journée, votre voiture retrouve son éclat sans que vous ayez à vous déplacer.",
    communes: ["Anthy-sur-Léman", "Margencel", "Allinges", "Armoy", "Publier", "Marin"],
  },
  {
    slug: "evian-les-bains",
    name: "Évian-les-Bains",
    shortName: "Évian",
    intro:
      "Nettoyage automobile premium à domicile à Évian-les-Bains : intérieur, extérieur ou formule complète, réalisés chez vous avec un matériel professionnel.",
    context:
      "Idéal pour remettre à neuf un véhicule familial, préparer une revente ou simplement retrouver une voiture impeccable, sans passer par une station de lavage.",
    communes: ["Publier", "Amphion", "Neuvecelle", "Maxilly-sur-Léman", "Lugrin", "Larringes"],
  },
  {
    slug: "douvaine",
    name: "Douvaine",
    shortName: "Douvaine",
    intro:
      "À Douvaine et dans le Bas-Chablais, Léman Auto Clean intervient à domicile pour le lavage, le nettoyage intérieur et le detailing de votre voiture.",
    context:
      "Un service pensé pour les actifs et les frontaliers : la prestation est réalisée pendant que vous travaillez ou que vous profitez de votre temps libre.",
    communes: ["Chens-sur-Léman", "Massongy", "Ballaison", "Loisin", "Veigy-Foncenex", "Excenevex"],
  },
  {
    slug: "annemasse",
    name: "Annemasse",
    shortName: "Annemasse",
    intro:
      "Léman Auto Clean propose le nettoyage voiture à domicile à Annemasse et dans son agglomération, uniquement sur rendez-vous.",
    context:
      "Nettoyage intérieur, lavage extérieur soigné ou prestation complète : votre véhicule est traité sur place, au pied de chez vous ou au travail.",
    communes: ["Ambilly", "Gaillard", "Ville-la-Grand", "Vétraz-Monthoux", "Étrembières", "Cranves-Sales"],
  },
  {
    slug: "geneve",
    name: "Genève",
    shortName: "Genève",
    intro:
      "Nettoyage automobile premium à domicile dans le canton de Genève : Léman Auto Clean se déplace chez vous pour l'intérieur, l'extérieur et le detailing.",
    context:
      "Pour les particuliers comme pour les professionnels, la prestation est réalisée sur place, sur rendez-vous, avec le même niveau d'exigence qu'en Haute-Savoie.",
    communes: ["Cologny", "Collonge-Bellerive", "Vésenaz", "Thônex", "Chêne-Bourg", "Carouge"],
  },
  {
    slug: "morzine",
    name: "Morzine",
    shortName: "Morzine",
    intro:
      "Léman Auto Clean monte jusqu'à Morzine pour le nettoyage de votre véhicule à domicile ou au chalet : intérieur, extérieur ou formule complète, sur rendez-vous.",
    context:
      "Boue, sel de déneigement, sable et traces de skis : après la saison ou avant de redescendre, votre voiture retrouve un intérieur net et une carrosserie propre, sans passer par une station.",
    communes: ["Les Gets", "Montriond", "Saint-Jean-d'Aulps", "Essert-Romand", "Le Biot", "Avoriaz"],
  },
  {
    slug: "abondance",
    name: "Abondance",
    shortName: "Abondance",
    intro:
      "Nettoyage voiture à domicile dans la vallée d'Abondance : Léman Auto Clean se déplace chez vous pour l'intérieur, l'extérieur et le detailing, uniquement sur rendez-vous.",
    context:
      "Routes de montagne, hivers rigoureux, véhicules très sollicités : une prestation complète sur place redonne à votre voiture un aspect impeccable et la protège mieux.",
    communes: ["La Chapelle-d'Abondance", "Châtel", "Bonnevaux", "Vacheresse", "Chevenoz", "Le Lyaud"],
  },
];

export function getVille(slug: string) {
  return villes.find((ville) => ville.slug === slug);
}
