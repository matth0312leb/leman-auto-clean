"use client";

import { setCurrency, useCurrency } from "@/hooks/useCurrency";
import { convertPriceText } from "@/lib/currency";

/** Affiche un texte de prix en € ou en CHF selon le visiteur. */
export default function Prix({ children }: { children?: string }) {
  const currency = useCurrency();
  if (!children) return null;
  return <>{convertPriceText(children, currency)}</>;
}

/** Petit sélecteur € / CHF, aux couleurs du site. */
export function CurrencyToggle({ className = "" }: { className?: string }) {
  const currency = useCurrency();

  return (
    <div
      role="group"
      aria-label="Devise d'affichage des prix"
      className={`inline-flex rounded-full border border-white/10 bg-black/40 p-1 text-xs font-semibold backdrop-blur-md ${className}`}
    >
      {(["EUR", "CHF"] as const).map((value) => {
        const active = currency === value;

        return (
          <button
            key={value}
            type="button"
            aria-pressed={active}
            onClick={() => setCurrency(value)}
            className={`rounded-full px-3.5 py-1.5 transition ${
              active
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                : "text-zinc-400 hover:text-blue-300"
            }`}
          >
            {value === "EUR" ? "€" : "CHF"}
          </button>
        );
      })}
    </div>
  );
}
