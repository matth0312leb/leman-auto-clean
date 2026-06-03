"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export default function FinalCTA() {
  const isDesktop = useIsDesktop();

  return (
    <section className="relative overflow-x-hidden bg-black px-5 py-14 text-white sm:px-6 sm:py-16 md:py-20 lg:py-24">

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl md:h-[500px] md:w-[500px]" />

      <motion.div
        initial={{ opacity: 0, y: isDesktop ? 40 : 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: isDesktop ? 0.65 : 0.25 }}
        viewport={{ once: true, amount: 0.25 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm sm:p-7 md:p-10 md:backdrop-blur-2xl lg:p-12"
      >

        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:mb-6 md:text-sm md:tracking-[0.45em]">
          PRENEZ RENDEZ-VOUS
        </p>

        <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black uppercase leading-tight sm:text-4xl md:mb-6 md:text-5xl">
          Votre voiture mérite le meilleur
        </h2>

        <p className="mx-auto mb-7 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base md:mb-8">
          Contactez-nous pour un devis gratuit et personnalisé. Réponse rapide
          garantie.
        </p>

        <Link
          href="/contact"
          className="inline-flex max-w-full items-center justify-center gap-3 rounded-full bg-blue-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400 sm:gap-4 sm:px-8 sm:py-4 sm:text-base md:px-10 md:py-5 md:text-lg"
        >
          Réserver
        </Link>

      </motion.div>
    </section>
  );
}
