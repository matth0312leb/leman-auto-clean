"use client";

import { useCurrency } from "@/hooks/useCurrency";
import { convertPriceText } from "@/lib/currency";

/** Affiche un texte de prix en € ou en CHF selon le visiteur. */
export default function Prix({ children }: { children?: string }) {
  const currency = useCurrency();
  if (!children) return null;
  return <>{convertPriceText(children, currency)}</>;
}
