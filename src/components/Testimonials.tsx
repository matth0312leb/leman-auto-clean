"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useIsDesktop } from "@/hooks/useIsDesktop";

const googleReviewsUrl =
  "https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJNdFQjRvsSIwR-15U4siiNfo";

const reviews = [
  {
    name: "Thomas C.",
    text: "Franchement impressionnant ! L'intérieur de ma voiture était vraiment dans un état catastrophique et je pensais qu'il serait impossible de la récupérer aussi bien. Après le passage de Léman Auto Clean, elle est ressortie comme neuve. Tout est impeccable, propre dans les moindres détails, avec une vraie attention portée au travail bien fait. Équipe professionnelle, sympathique et efficace. Je recommande sans hésiter à tous ceux qui veulent redonner une seconde vie à leur véhicule. Merci encore pour ce travail exceptionnel !",
    date: "Visité en juin 2026",
  },
  {
    name: "Elodie T.",
    text: "Merci beaucoup à Matthieu pour le nettoyage complet de notre voiture ! Nous avons l'impression d'avoir une voiture neuve qui sort tout juste du garage. Les finitions à l'intérieur et à l'extérieur font plaisir. Il est vraiment minutieux et c'est vraiment appréciable.",
    date: "Visité en septembre 2025",
  },
  {
    name: "Nicolas M.",
    text: "Magnifique prestation intérieure et extérieure pour la Renault Express de notre papa, qui a une vraie valeur sentimentale. Matthieu est digne de confiance avec une belle communication. Un immense merci. À hautement recommander !",
    date: "Visité en juillet 2025",
  },
  {
    name: "Mélissa L.",
    text: "Merci beaucoup Matthieu ! Nettoyage de mes 2 voitures, résultat impeccable, je suis très satisfaite et je recommande à 100 %. Le avant/après est incroyable. Tellement pratique ce service à domicile.",
    date: "Visité en juin 2025",
  },
];

function ReviewCard({
  review,
  index,
  isDesktop,
}: {
  review: (typeof reviews)[number];
  index: number;
  isDesktop: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: isDesktop ? 36 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: isDesktop ? 0.55 : 0.25,
        delay: isDesktop ? index * 0.1 : 0,
      }}
      viewport={{ once: true, amount: 0.25 }}
      className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-7 md:backdrop-blur-xl lg:p-8"
    >

      <div className="mb-5 flex gap-1 text-blue-400 sm:mb-6" aria-label="5 étoiles sur 5">
        {Array.from({ length: 5 }).map((_, star) => (
          <motion.span
            key={star}
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.15 + star * 0.08, type: "spring", stiffness: 380, damping: 16 }}
          >
            ★
          </motion.span>
        ))}
      </div>

      <p className="mb-7 text-sm leading-relaxed text-zinc-300 sm:text-base lg:mb-8">
        &ldquo;{review.text}&rdquo;
      </p>

      <h3 className="font-semibold text-white">
        {review.name}
      </h3>

    </motion.div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useIsDesktop();

  const previousReview = () => {
    setActiveIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1,
    );
  };

  const nextReview = () => {
    setActiveIndex((current) =>
      current === reviews.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="bg-black px-5 py-18 text-white sm:px-6 sm:py-20 md:py-28 lg:py-32">

      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16 lg:mb-20">

          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
            AVIS CLIENTS
          </p>

          <h2 className="text-3xl font-black uppercase sm:text-4xl md:text-5xl">
            Ils nous font confiance
          </h2>

          <a
            href={googleReviewsUrl}
            target="_blank"
            className="mx-auto mt-6 inline-flex max-w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-zinc-200 backdrop-blur-xl transition hover:border-blue-400 hover:text-blue-400 sm:px-5 sm:text-base"
          >
            <span className="shrink-0 text-blue-400">★★★★★</span>
            <span>5/5 sur Google</span>
          </a>

        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <ReviewCard
              review={reviews[activeIndex]}
              index={activeIndex}
              isDesktop={isDesktop}
            />

            <button
              type="button"
              onClick={previousReview}
              aria-label="Avis précédent"
              className="absolute -left-1 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/80 text-xl text-white shadow-lg backdrop-blur-sm transition hover:border-blue-400 hover:text-blue-400 md:backdrop-blur-xl"
            >
              <FiChevronLeft aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={nextReview}
              aria-label="Avis suivant"
              className="absolute -right-1 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/80 text-xl text-white shadow-lg backdrop-blur-sm transition hover:border-blue-400 hover:text-blue-400 md:backdrop-blur-xl"
            >
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {reviews.map((review, index) => (
              <button
                key={review.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Afficher l'avis ${index + 1}`}
                className={`h-2.5 rounded-full transition ${
                  activeIndex === index
                    ? "w-8 bg-blue-400"
                    : "w-2.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden gap-5 sm:gap-6 lg:grid lg:grid-cols-3 lg:gap-8">

          {reviews.slice(0, 3).map((review, index) => (
            <ReviewCard
              key={review.name}
              review={review}
              index={index}
              isDesktop={isDesktop}
            />
          ))}

        </div>
      </div>
    </section>
  );
}
