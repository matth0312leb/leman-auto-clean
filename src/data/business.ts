/**
 * Informations de l'entreprise centralisées ici :
 * modifier une valeur la met à jour partout sur le site.
 */
export const business = {
  siteUrl: "https://www.leman-autoclean.com",
  phoneDisplay: "+33 6 04 47 52 05",
  phoneHref: "tel:+33604475205",
  whatsappHref: "https://wa.me/33604475205",
  email: "lemanautoclean@gmail.com",

  /** Délai de réponse annoncé après une demande. */
  responseTime: "sous 24 h",

  /** Note Google affichée sur l'accueil (null = non affichée). */
  googleRating: null as null | { rating: string; count: number },

  /** Mentions légales (null = ligne non affichée). */
  siret: null as null | string,
  legalStatus: null as null | string,
};
