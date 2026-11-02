"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiArrowRight, FiGift, FiX } from "react-icons/fi";
import { PROMO_COOKIE, type Promo } from "@/data/promos";

export default function PromoBanner({ promo, lang }: { promo: Promo; lang: "fr" | "en" }) {
  const [open, setOpen] = useState(true);
  const t = promo[lang];

  const close = () => {
    // Fermé pour ce bandeau uniquement (un nouveau bandeau réapparaîtra).
    document.cookie = `${PROMO_COOKIE}=${promo.id}; path=/; max-age=2592000; samesite=lax`;
    setOpen(false);
  };

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className="relative overflow-hidden border-t border-blue-400/30 bg-gradient-to-r from-blue-950 via-blue-600/80 to-blue-950">
            {/* Reflet animé */}
            <div className="promo-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <div className="promo-glow pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

            <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-3 px-10 py-2 sm:py-2.5">
              <a
                href={t.lien}
                className="group flex min-w-0 items-center gap-2.5 text-xs font-semibold text-white sm:text-sm"
              >
                <FiGift aria-hidden="true" className="promo-gift shrink-0 text-base text-blue-100 sm:text-lg" />
                <span className="truncate">{t.texte}</span>
                <span className="hidden shrink-0 items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-blue-700 shadow-lg shadow-blue-900/40 transition group-hover:bg-blue-50 min-[420px]:inline-flex sm:text-xs">
                  {t.bouton}
                  <FiArrowRight aria-hidden="true" className="transition group-hover:translate-x-0.5" />
                </span>
              </a>

              <button
                type="button"
                onClick={close}
                aria-label={lang === "en" ? "Close" : "Fermer"}
                className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-blue-100/80 transition hover:bg-white/10 hover:text-white sm:right-4"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
