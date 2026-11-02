"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiGift } from "react-icons/fi";
import type { Promo } from "@/data/promos";

export default function PromoBanner({ promo, lang }: { promo: Promo; lang: "fr" | "en" }) {
  const t = promo[lang];

  return (
    <AnimatePresence initial={false}>
      {(
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

            <a
              href={t.lien}
              aria-label={`${t.texte} – ${t.bouton}`}
              className="promo-marquee-wrap relative block overflow-hidden py-2 sm:py-2.5"
            >
              {/* Deux copies identiques : le défilement boucle sans coupure */}
              <div className="promo-marquee flex w-max" aria-hidden="true">
                {[0, 1].map((copy) => (
                  <div key={copy} className="flex shrink-0 items-center">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <span
                        key={index}
                        className="flex shrink-0 items-center gap-3 px-6 text-xs font-semibold text-white sm:text-sm"
                      >
                        <FiGift aria-hidden="true" className="promo-gift text-base text-blue-100 sm:text-lg" />
                        <span className="whitespace-nowrap">{t.texte}</span>
                        <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-white px-3 py-0.5 text-[11px] font-bold text-blue-700 sm:text-xs">
                          {t.bouton}
                          <FiArrowRight aria-hidden="true" />
                        </span>
                        <span className="pl-3 text-blue-200/60">✦</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </a>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-blue-950 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-blue-950 to-transparent" />

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
