"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiMessageCircle } from "react-icons/fi";
import { useState } from "react";

const faqs = [
  {
    question: "Quelle formule choisir ?",
    answer:
      "Essentiel est idéal pour l'intérieur, Équilibre pour l'extérieur, et Élégance pour une prestation complète intérieur + extérieur.",
  },
  {
    question: "Intervenez-vous à Genève ?",
    answer:
      "Oui. Déplacement dans le Chablais, Genève et Haute-Savoie. Selon la distance, un supplément de déplacement peut être appliqué.",
  },
  {
    question: "Combien de temps dure une prestation ?",
    answer:
      "La durée dépend de la formule, du type de véhicule et de son état. En général, il faut prévoir entre 1h30 et 4h, parfois plus pour un nettoyage complet ou un véhicule très sale.",
  },
  {
    question: "Et si mon véhicule est très sale ?",
    answer:
      "Aucun souci. Si le véhicule demande beaucoup plus de temps que prévu, un supplément de 30 à 60€ peut être ajouté selon l'état réel du véhicule.",
  },
  {
    question: "Peut-on réserver pour plusieurs véhicules ?",
    answer:
      "Oui. Dans le formulaire de réservation, vous pouvez indiquer le nombre de véhicules et préciser les modèles, leur état et la prestation souhaitée pour chacun.",
  },
  {
    question: "Quelles options puis-je ajouter ?",
    answer:
      "Vous pouvez ajouter des options comme le traitement des poils d'animaux, le shampoing des sièges, le nourrissage des cuirs, le coffre, la décontamination carrosserie ou la cire protectrice.",
  },
];

export default function FAQAssistant() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-x-hidden bg-black px-5 py-18 text-white sm:px-6 sm:py-20 md:py-28 lg:py-32"
    >
      <div className="absolute right-0 top-20 h-[280px] w-[280px] translate-x-1/3 rounded-full bg-blue-500/10 blur-3xl md:h-[420px] md:w-[420px]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8 lg:sticky lg:top-28"
        >
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-2xl text-white shadow-lg shadow-blue-500/25">
            <FiMessageCircle aria-hidden="true" />
          </div>

          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
            FAQ
          </p>

          <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
            Une question avant de réserver ?
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Retrouvez les réponses rapides aux questions les plus fréquentes.
            Pour une demande précise, le formulaire permet de détailler votre
            véhicule, vos options et vos disponibilités.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 sm:text-base"
          >
            Poser ma question
          </Link>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.25 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-white/[0.03] sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white sm:text-lg">
                    {item.question}
                  </span>
                  <FiChevronDown
                    aria-hidden="true"
                    className={`shrink-0 text-xl text-blue-400 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <p className="border-t border-white/10 px-5 py-5 text-sm leading-relaxed text-zinc-400 sm:px-6 sm:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
