"use client";

import { createContext, useContext } from "react";
import type { Currency } from "@/lib/currency";

const CurrencyContext = createContext<Currency>("EUR");

/** Devise choisie côté serveur selon la localisation du visiteur. */
export function CurrencyProvider({
  currency,
  children,
}: {
  currency: Currency;
  children: React.ReactNode;
}) {
  return <CurrencyContext.Provider value={currency}>{children}</CurrencyContext.Provider>;
}

export function useCurrencyContext(): Currency {
  return useContext(CurrencyContext);
}
