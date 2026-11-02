/** Réglages de la carte cadeau. */
export const giftCard = {
  /** Lien de paiement Revolut. */
  revolutUrl: "https://revolut.me/lebmatth",
  /** Montants proposés (dans la devise du visiteur : € ou CHF). */
  amounts: [50, 100, 150, 200],
  /** Montant minimum pour « Autre montant ». */
  minAmount: 30,
  /** Durée de validité en mois. */
  validityMonths: 12,
};

const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

/** Code unique lisible, sans caractères ambigus (0/O, 1/I/L) : LAC-XXXX-XXXX. */
export function generateGiftCode(): string {
  const values = new Uint32Array(8);
  crypto.getRandomValues(values);
  const chars = Array.from(values, (value) => CODE_ALPHABET[value % CODE_ALPHABET.length]);
  return `LAC-${chars.slice(0, 4).join("")}-${chars.slice(4).join("")}`;
}

/** Référence de commande (affichée au client pour la note du paiement) : CMD-XXXXX. */
export function generateOrderRef(): string {
  const values = new Uint32Array(5);
  crypto.getRandomValues(values);
  return `CMD-${Array.from(values, (value) => CODE_ALPHABET[value % CODE_ALPHABET.length]).join("")}`;
}

/** Lien Revolut avec montant et devise déjà remplis (montant en centimes). */
export function revolutPayLink(amount: number, currency: "EUR" | "CHF"): string {
  const url = new URL(giftCard.revolutUrl);
  url.searchParams.set("currency", currency);
  url.searchParams.set("amount", String(Math.round(amount * 100)));
  return url.toString();
}

export function addMonths(date: Date, months: number): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

export function formatDate(iso: string, lang: "fr" | "en"): string {
  const date = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString(lang === "en" ? "en-GB" : "fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatGiftAmount(amount: number, currency: "EUR" | "CHF"): string {
  return currency === "CHF" ? `${amount} CHF` : `${amount} €`;
}
