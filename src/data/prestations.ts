/** Formules, tarifs et options : modifier ici met à jour tout le site. */
export const prestations = [
  {
    title: "Essentiel",
    price: "100€",
    badge: "INTÉRIEUR",
    description:
      "Nettoyage intérieur complet avec aspiration, plastiques, vitres et finitions premium.",
    details: [
      "Aspiration complète de l'habitacle",
      "Nettoyage des plastiques et surfaces",
      "Vitres intérieures et finitions",
      "Nettoyage des tapis",
      "Parfum habitacle",
    ],
    vehiclePrices: [
      { type: "Citadine", price: "100€" },
      { type: "Berline", price: "110€" },
      { type: "SUV / Break", price: "130€" },
      { type: "Monospace", price: "150€" },
    ],
  },
  {
    title: "Équilibre",
    price: "60€",
    badge: "EXTÉRIEUR",
    description:
      "Lavage extérieur premium avec jantes, séchage soigné et finition brillante.",
    details: [
      "Prélavage et lavage carrosserie",
      "Nettoyage des jantes",
      "Séchage microfibre premium",
      "Vitres extérieures",
      "Brillance pneus",
    ],
    vehiclePrices: [
      { type: "Citadine", price: "60€" },
      { type: "Berline", price: "70€" },
      { type: "SUV / Break", price: "80€" },
      { type: "Monospace", price: "90€" },
    ],
  },
  {
    title: "Élégance",
    price: "150€",
    /** Formules incluses : sert à afficher l'économie réalisée. */
    bundleOf: ["Essentiel", "Équilibre"],
    badge: "COMPLET",
    highlighted: true,
    description:
      "La prestation signature Léman Auto Clean intérieur + extérieur haut de gamme.",
    details: [
      "Inclus Essentiel + Équilibre",
      "Nettoyage intérieur complet",
      "Lavage extérieur premium",
      "Finitions intérieures et extérieures",
      "Résultat haut de gamme à domicile",
    ],
    vehiclePrices: [
      { type: "Citadine", price: "150€" },
      { type: "Berline", price: "170€" },
      { type: "SUV / Break", price: "200€" },
      { type: "Monospace", price: "230€" },
    ],
  },
];

export const options = [
  {
    category: "Intérieur",
    label: "Poils d'animaux",
    price: "10 à 20€",
    detail:
      "Aspiration renforcée avec brosses adaptées pour retirer les poils incrustés dans les tissus, tapis et moquettes.",
  },
  {
    category: "Intérieur",
    label: "Shampoing des sièges, 5 places",
    note: "Siège à l'unité : 20€",
    price: "60€",
    detail:
      "Nettoyage ciblé des taches avec produits respectueux des matières, puis extraction et séchage soigné.",
  },
  {
    category: "Intérieur",
    label: "Nourrissage des cuirs",
    price: "20€",
    detail:
      "Soin nourrissant appliqué sur les cuirs pour raviver l'aspect, limiter le dessèchement et conserver un toucher propre.",
  },
  {
    category: "Intérieur",
    label: "Nettoyage approfondi du coffre",
    price: "10€",
    detail:
      "Aspiration et nettoyage plus poussé du coffre, idéal après courses, transport d'objets, animaux ou activités extérieures.",
  },
  {
    category: "Extérieur",
    label: "Décontamination carrosserie",
    price: "20€",
    detail:
      "Retrait des contaminants collés à la peinture pour retrouver une carrosserie plus lisse avant la finition.",
  },
  {
    category: "Protection",
    label: "Cire hydrophobe / protectrice",
    price: "20€",
    detail:
      "Protection rapide qui aide l'eau à perler, facilite l'entretien et apporte une finition plus brillante.",
  },
];
