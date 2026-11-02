"use client";

import Link from "next/link";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { startClickTracking } from "@/lib/trackClicks";
import { useLang } from "@/hooks/useLang";

const STORAGE_KEY = "lac-cookie-consent";
const OPEN_EVENT = "lac:open-cookie-consent";

type Consent = "granted" | "denied";

function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function saveConsent(value: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Stockage indisponible (navigation privée stricte) : le choix vaut pour la visite.
  }
}

/** Rouvre le bandeau (lien « Gérer les cookies » du pied de page). */
export function openCookieConsent() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export default function CookieConsent({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [visible, setVisible] = useState(false);
  const en = useLang() === "en";

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    if (!stored) setVisible(true);

    const open = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  useEffect(() => {
    if (consent !== "granted") return;
    return startClickTracking();
  }, [consent]);

  const choose = (value: Consent) => {
    saveConsent(value);
    setVisible(false);

    if (value === "denied" && consent === "granted") {
      // Google Analytics était actif : on recharge pour l'arrêter proprement.
      window.location.reload();
      return;
    }

    setConsent(value);
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}

      <AnimatePresence>
        {visible && (
          <motion.div
            role="dialog"
            aria-live="polite"
            aria-label={en ? "Cookie choice" : "Choix des cookies"}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-md"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/90 p-5 text-white shadow-2xl shadow-blue-500/10 backdrop-blur-xl sm:p-6">
              <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400 sm:text-xs">
                  Cookies
                </p>

                <p className="text-sm leading-relaxed text-zinc-300">
                  {en
                    ? "We use Google Analytics to measure website traffic, only with your consent. No advertising cookies."
                    : "Nous utilisons Google Analytics pour mesurer la fréquentation du site, uniquement avec votre accord. Aucun cookie publicitaire."}{" "}
                  <Link
                    href="/cookies"
                    className="text-blue-300 underline-offset-4 transition hover:text-blue-200 hover:underline"
                  >
                    {en ? "Learn more" : "En savoir plus"}
                  </Link>
                </p>

                <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => choose("denied")}
                    className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-semibold text-zinc-200 transition hover:border-blue-400 hover:text-blue-300"
                  >
                    {en ? "Decline" : "Refuser"}
                  </button>

                  <button
                    type="button"
                    onClick={() => choose("granted")}
                    className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-blue-500 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
                  >
                    {en ? "Accept" : "Accepter"}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
