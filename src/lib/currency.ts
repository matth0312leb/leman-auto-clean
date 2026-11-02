/**
 * Prix en francs suisses : prix en euros + 10 %, arrondi au franc supérieur
 * (au 5 centimes supérieur pour les petits montants, ex. 0,50 € → 0,55 CHF).
 */
export type Currency = "EUR" | "CHF";

export const CHF_MARKUP = 1.1;

export function toChf(eur: number): number {
  // Arrondi à 2 décimales d'abord pour éviter les erreurs de virgule flottante
  // (0,50 × 1,1 donne 0,55000000000000004 en JavaScript).
  const raw = Math.round(eur * CHF_MARKUP * 100) / 100;
  if (raw < 10) return Math.ceil(raw * 20 - 1e-9) / 20;
  return Math.ceil(raw - 1e-9);
}

export function formatAmount(value: number): string {
  return Number.isInteger(value)
    ? String(value)
    : value.toFixed(2).replace(".", ",");
}

function parseAmount(text: string): number {
  return Number(text.replace(",", "."));
}

const PRICE_PATTERN = /(\d+(?:,\d+)?)(?:(\s*à\s*)(\d+(?:,\d+)?))?\s*€/g;

/**
 * Convertit tous les prix en euros d'un texte.
 * « 100€ » → « 110 CHF », « 10 à 20€ » → « 11 à 22 CHF », « 0,50 €/km » → « 0,55 CHF/km ».
 */
export function convertPriceText(text: string, currency: Currency): string {
  if (currency === "EUR") return text;

  return text.replace(PRICE_PATTERN, (_match, from: string, separator?: string, to?: string) => {
    const first = formatAmount(toChf(parseAmount(from)));
    const second = to ? `${separator}${formatAmount(toChf(parseAmount(to)))}` : "";
    return `${first}${second} CHF`;
  });
}
