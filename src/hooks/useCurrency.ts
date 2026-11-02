"use client";

import { useSyncExternalStore } from "react";
import type { Currency } from "@/lib/currency";

const STORAGE_KEY = "lac-currency";
const listeners = new Set<() => void>();
let current: Currency | null = null;

/** Visiteur en Suisse (fuseau horaire de l'appareil) → CHF, sinon €. */
function detect(): Currency {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "EUR" || saved === "CHF") return saved;
  } catch {
    // stockage indisponible
  }

  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (zone === "Europe/Zurich") return "CHF";
  } catch {
    // Intl indisponible
  }

  return "EUR";
}

function getSnapshot(): Currency {
  if (current === null) current = detect();
  return current;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setCurrency(value: Currency) {
  current = value;
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // stockage indisponible : le choix vaut pour la visite
  }
  listeners.forEach((listener) => listener());
}

export function useCurrency(): Currency {
  return useSyncExternalStore(subscribe, getSnapshot, () => "EUR");
}
