import { headers } from "next/headers";
import type { Currency } from "@/lib/currency";

/** Pays où les prix sont affichés en francs suisses. */
const CHF_COUNTRIES = new Set(["CH", "LI"]);

/**
 * Pays du visiteur fourni par Vercel à partir de son adresse IP.
 * En l'absence d'information (robots, tests en local) : euros.
 */
export async function getVisitorCurrency(): Promise<Currency> {
  const country = (await headers()).get("x-vercel-ip-country")?.toUpperCase();
  return country && CHF_COUNTRIES.has(country) ? "CHF" : "EUR";
}
