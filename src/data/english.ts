/** Textes de la version anglaise (prix repris automatiquement de prestations.ts). */

export const formulesEn: Record<
  string,
  { badge: string; description: string; details: string[] }
> = {
  Essentiel: {
    badge: "INTERIOR",
    description:
      "Complete interior cleaning: vacuuming, plastics, windows and premium finishing.",
    details: [
      "Full cabin vacuuming",
      "Cleaning of plastics and surfaces",
      "Interior windows and finishing",
      "Floor mats cleaning",
      "Cabin fragrance",
    ],
  },
  Équilibre: {
    badge: "EXTERIOR",
    description:
      "Premium exterior wash with wheels, careful drying and a glossy finish.",
    details: [
      "Pre-wash and body wash",
      "Wheel cleaning",
      "Premium microfibre drying",
      "Exterior windows",
      "Tyre shine",
    ],
  },
  Élégance: {
    badge: "COMPLETE",
    description:
      "The Léman Auto Clean signature service: high-end interior + exterior.",
    details: [
      "Includes Essentiel + Équilibre",
      "Complete interior cleaning",
      "Premium exterior wash",
      "Interior and exterior finishing",
      "High-end result, at your home",
    ],
  },
};

export const vehiculesEn: Record<string, string> = {
  Citadine: "City car",
  Berline: "Sedan",
  "SUV / Break": "SUV / Estate",
  Monospace: "MPV / Van",
};

export const optionsEn: Record<string, string> = {
  "Poils d'animaux": "Pet hair removal",
  "Shampoing des sièges, 5 places": "Seat shampoo, 5 seats",
  "Nourrissage des cuirs": "Leather conditioning",
  "Nettoyage approfondi du coffre": "Deep boot / trunk cleaning",
  "Décontamination carrosserie": "Paint decontamination",
  "Cire hydrophobe / protectrice": "Hydrophobic protective wax",
};

export const faqEn = [
  {
    question: "Do you need water and electricity on site?",
    answer:
      "Ideally a power socket within 20 metres of the vehicle and, for an exterior wash, an accessible water tap.",
  },
  {
    question: "Where do you operate?",
    answer:
      "Geneva and its surroundings (Cologny, Collonge-Bellerive, Thônex, Chêne-Bourg, Carouge…), as well as the French side of Lake Geneva: Thonon-les-Bains, Évian, Douvaine, Annemasse and the Chablais, up to Morzine and Abondance.",
  },
  {
    question: "Is travel included?",
    answer:
      "Travel is included up to 30 km from Sciez. Beyond 30 km, travel is charged at 0,50 €/km.",
  },
  {
    question: "How do I book?",
    answer:
      "Send a request with the form below or message me on WhatsApp. I reply within 24 hours to confirm the price and schedule an appointment at your home or workplace.",
  },
];
