"use client";

import { useCurrencyContext } from "@/components/CurrencyProvider";
import type { Currency } from "@/lib/currency";

/** Devise du visiteur : CHF en Suisse, € ailleurs (décidée par le serveur). */
export function useCurrency(): Currency {
  return useCurrencyContext();
}
