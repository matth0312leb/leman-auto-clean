"use client";

import { useSyncExternalStore } from "react";
import type { Currency } from "@/lib/currency";

const listeners = new Set<() => void>();
let current: Currency | null = null;

/** Visiteur en Suisse (fuseau horaire de l'appareil) → CHF, sinon €. */
function detect(): Currency {
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

export function useCurrency(): Currency {
  return useSyncExternalStore(subscribe, getSnapshot, () => "EUR");
}
