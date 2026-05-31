"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Expertise & Passion",
    text: "Chaque véhicule est traité avec le plus grand soin, comme s'il s'agissait du nôtre.",
  },
  {
    title: "Nettoyage soucieux de l'environnement",
    text: "Nous valorisons des pratiques respectueuses de l'environnement, avec des méthodes adaptées au lieu d'intervention.",
  },
  {
    title: "Adapté à tous, pour tous",
    text: "De la formule Essentiel à la formule Élégance, chaque prestation est réalisée avec des outils professionnels et un vrai souci du détail.",
  },
  {
    title: "Service à domicile & sur réservation",
    text: "Plus besoin de vous déplacer. Nous intervenons directement chez vous ou sur votre lieu de travail, uniquement sur rendez-vous.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-14 text-white sm:px-6 sm:py-16 md:py-20 lg:py-24">

      {/* Glow */}
      <div className="absolute right-[-140px] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl md:right-0 md:h-[400px] md:w-[400px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10 lg:mb-12">

          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
            POURQUOI NOUS
          </p>

          <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
            Pourquoi nous choisir ?
          </h2>

        </div>

        <div className="mx-auto grid max-w-5xl gap-3 sm:gap-4 lg:grid-cols-2">

          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.25 }}
              className="flex min-w-0 gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition hover:border-blue-400/40 sm:p-5"
            >

              <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400 shadow-[0_0_25px_rgba(34,211,238,1)]" />

              <div className="min-w-0">
                <h3 className="mb-2 text-lg font-black leading-tight sm:text-xl">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.text}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mt-5 max-w-5xl rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 text-center text-sm leading-relaxed text-zinc-300 sm:text-base"
        >
          De la citadine au véhicule signature, Ferrari, Porsche et autres
          modèles d&apos;exception, notre savoir-faire s&apos;adapte avec le même
          niveau d&apos;exigence et de passion.
        </motion.p>
      </div>
    </section>
  );
}
