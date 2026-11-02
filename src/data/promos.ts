/**
 * Bandeaux promotionnels temporaires.
 * Chaque bandeau s'affiche automatiquement entre « debut » et « fin » (inclus, heure de Paris),
 * puis disparaît tout seul. Pour une nouvelle promo : ajouter une entrée ici.
 */
export type Promo = {
  id: string;
  debut: string; // AAAA-MM-JJ
  fin: string; // AAAA-MM-JJ
  fr: { texte: string; bouton: string; lien: string };
  en: { texte: string; bouton: string; lien: string };
};

export const promos: Promo[] = [
  {
    id: "noel-2026-novembre",
    debut: "2026-11-02",
    fin: "2026-11-30",
    fr: {
      texte: "Noël approche : offrez une voiture comme neuve",
      bouton: "Carte cadeau",
      lien: "/carte-cadeau",
    },
    en: {
      texte: "Christmas is coming: give a car that looks brand new",
      bouton: "Gift card",
      lien: "/en/gift-card",
    },
  },
  {
    id: "fetes-2026-decembre",
    debut: "2026-12-01",
    fin: "2026-12-31",
    fr: {
      texte: "Fêtes de fin d'année : la carte cadeau idéale, envoyée sous 24 h",
      bouton: "Offrir",
      lien: "/carte-cadeau",
    },
    en: {
      texte: "Holiday season: the perfect gift card, sent within 24 hours",
      bouton: "Give",
      lien: "/en/gift-card",
    },
  },
];

/** Date du jour à Paris, au format AAAA-MM-JJ. */
export function todayInParis(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris" }).format(now);
}

export function getActivePromo(today = todayInParis()): Promo | null {
  return promos.find((promo) => promo.debut <= today && today <= promo.fin) ?? null;
}

export const PROMO_COOKIE = "lac-promo-fermee";
