"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiArrowRight, FiCheck, FiInfo, FiMinus, FiPlus } from "react-icons/fi";
import { useIsDesktop } from "@/hooks/useIsDesktop";

const prestations = [
  {
    title: "Essentiel",
    price: "100€",
    badge: "INTÉRIEUR",
    description:
      "Nettoyage intérieur complet avec aspiration, plastiques, vitres et finitions premium.",
    details: [
      "Aspiration complète de l'habitacle",
      "Nettoyage des plastiques et surfaces",
      "Vitres intérieures et finitions",
      "Nettoyage des tapis",
      "Parfum habitacle",
    ],
    vehiclePrices: [
      { type: "Citadine", price: "100€" },
      { type: "Berline", price: "110€" },
      { type: "SUV / Break", price: "130€" },
      { type: "Monospace", price: "150€" },
    ],
  },
  {
    title: "Équilibre",
    price: "60€",
    badge: "EXTÉRIEUR",
    description:
      "Lavage extérieur premium avec jantes, séchage soigné et finition brillante.",
    details: [
      "Prélavage et lavage carrosserie",
      "Nettoyage des jantes",
      "Séchage microfibre premium",
      "Vitres extérieures",
      "Brillance pneus",
    ],
    vehiclePrices: [
      { type: "Citadine", price: "60€" },
      { type: "Berline", price: "70€" },
      { type: "SUV / Break", price: "80€" },
      { type: "Monospace", price: "90€" },
    ],
  },
  {
    title: "Élégance",
    price: "150€",
    badge: "COMPLET",
    highlighted: true,
    description:
      "La prestation signature Léman Auto Clean intérieur + extérieur haut de gamme.",
    details: [
      "Inclus Essentiel + Équilibre",
      "Nettoyage intérieur complet",
      "Lavage extérieur premium",
      "Finitions intérieures et extérieures",
      "Résultat haut de gamme à domicile",
    ],
    vehiclePrices: [
      { type: "Citadine", price: "150€" },
      { type: "Berline", price: "170€" },
      { type: "SUV / Break", price: "200€" },
      { type: "Monospace", price: "230€" },
    ],
  },
];

const options = [
  {
    category: "Intérieur",
    label: "Poils d'animaux",
    price: "10 à 20€",
    detail:
      "Aspiration renforcée avec brosses adaptées pour retirer les poils incrustés dans les tissus, tapis et moquettes.",
  },
  {
    category: "Intérieur",
    label: "Shampoing des sièges, 5 places",
    note: "Siège à l'unité : 20€",
    price: "60€",
    detail:
      "Nettoyage ciblé des taches avec produits respectueux des matières, puis extraction et séchage soigné.",
  },
  {
    category: "Intérieur",
    label: "Nourrissage des cuirs",
    price: "20€",
    detail:
      "Soin nourrissant appliqué sur les cuirs pour raviver l'aspect, limiter le dessèchement et conserver un toucher propre.",
  },
  {
    category: "Intérieur",
    label: "Nettoyage approfondi du coffre",
    price: "10€",
    detail:
      "Aspiration et nettoyage plus poussé du coffre, idéal après courses, transport d'objets, animaux ou activités extérieures.",
  },
  {
    category: "Extérieur",
    label: "Décontamination carrosserie",
    price: "20€",
    detail:
      "Retrait des contaminants collés à la peinture pour retrouver une carrosserie plus lisse avant la finition.",
  },
  {
    category: "Protection",
    label: "Cire hydrophobe / protectrice",
    price: "20€",
    detail:
      "Protection rapide qui aide l'eau à perler, facilite l'entretien et apporte une finition plus brillante.",
  },
];

export default function Prestations() {
  const [active, setActive] = useState<number | null>(null);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState<number | null>(null);
  const isDesktop = useIsDesktop();

  const toggleOptions = () => {
    setOptionsOpen((current) => {
      if (current) setActiveOption(null);
      return !current;
    });
  };

  const selectedOption = activeOption !== null ? options[activeOption] : null;

  return (
    <section
      id="prestations"
      className="relative overflow-x-hidden bg-black px-5 py-16 text-white sm:px-6 sm:py-20 md:py-28 lg:py-32"
    >
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl md:h-[500px] md:w-[500px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-9 max-w-3xl text-center md:mb-16 lg:mb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
            PRESTATIONS PREMIUM
          </p>

          <h2 className="text-3xl font-black uppercase sm:text-4xl md:text-5xl">
            Nos Services
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {prestations.map((item, index) => {
            const isActive = active === index;
            const isHighlighted = "highlighted" in item && item.highlighted;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: isDesktop ? 36 : 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: isDesktop ? 0.5 : 0.25,
                  delay: isDesktop ? index * 0.1 : 0,
                }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={isDesktop ? { y: -6 } : undefined}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                onClick={() => setActive(isActive ? null : index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActive(isActive ? null : index);
                  }
                }}
                className={`group relative flex min-w-0 cursor-pointer flex-col overflow-visible rounded-3xl p-4 backdrop-blur-sm transition duration-500 focus:outline-none focus:ring-2 focus:ring-blue-400/70 sm:p-7 md:backdrop-blur-xl lg:p-8 ${
                  isHighlighted
                    ? "border border-blue-400/70 bg-blue-500/[0.12] shadow-2xl shadow-blue-500/20 ring-1 ring-blue-400/30"
                    : "border border-white/10 bg-white/[0.06] hover:border-blue-500/40"
                }`}
              >
                {isHighlighted && (
                  <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-blue-300/50 bg-blue-500 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-500/40 ring-4 ring-black sm:px-5 sm:text-[11px]">
                    Le plus populaire
                  </div>
                )}

                <div
                  className={`pointer-events-none absolute inset-0 transition duration-500 ${
                    isHighlighted ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <div className="absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-500/25 blur-3xl" />
                </div>

                <div className="relative flex min-h-full min-w-0 flex-col">
                  <div
                    className={`mb-4 inline-block max-w-fit rounded-full border px-3 py-2 text-[10px] font-semibold tracking-[0.22em] sm:mb-5 sm:px-4 sm:text-[11px] md:mb-7 md:text-xs md:tracking-[0.3em] ${
                      isHighlighted
                        ? "border-blue-300/50 bg-blue-400/15 text-blue-200"
                        : "border-blue-500/30 bg-blue-500/10 text-blue-400"
                    }`}
                  >
                    {item.badge}
                  </div>

                  <h3 className="mb-3 break-words text-2xl font-black uppercase sm:mb-4 sm:text-3xl md:text-[2rem]">
                    {item.title}
                  </h3>

                  <p className="mb-6 min-h-0 text-sm leading-relaxed text-zinc-400 sm:mb-7 sm:text-base lg:mb-10 lg:min-h-[84px]">
                    {item.description}
                  </p>

                  <div className="mt-auto flex flex-col items-start gap-4 min-[380px]:flex-row min-[380px]:items-end min-[380px]:justify-between sm:gap-5">
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-widest text-zinc-500 sm:text-sm">
                        À partir de
                      </p>

                      <h4 className="text-3xl font-black text-blue-400 sm:text-4xl">
                        {item.price}
                      </h4>
                    </div>

                    <Link
                      href={`/contact?formule=${encodeURIComponent(item.title)}`}
                      onClick={(event) => event.stopPropagation()}
                      onKeyDown={(event) => event.stopPropagation()}
                      className={`inline-flex h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition sm:h-12 sm:px-5 ${
                        isHighlighted
                          ? "border-blue-300/40 bg-blue-500/20 text-white hover:bg-blue-500/35"
                          : "border-white/10 hover:border-blue-400 hover:text-blue-400"
                      }`}
                    >
                      <span>Réserver</span>
                      <FiArrowRight aria-hidden="true" />
                    </Link>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 border-t border-white/10 pt-5 text-sm text-zinc-300 sm:text-base">
                          <div className="mb-5">
                            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-zinc-500">
                              Tarifs selon véhicule
                            </p>

                            <div className="grid grid-cols-4 gap-1 sm:gap-2">
                              {item.vehiclePrices.map((vehicle) => (
                                <div
                                  key={vehicle.type}
                                  className="flex min-h-[70px] flex-col items-center justify-center rounded-xl border border-white/10 bg-black/40 px-1 py-2 text-center sm:min-h-[76px] sm:rounded-2xl sm:px-2 sm:py-3"
                                >
                                  <p className="text-[9px] font-medium leading-tight text-zinc-400 min-[390px]:text-[10px] sm:text-xs">
                                    {vehicle.type}
                                  </p>

                                  <p className="mt-1.5 text-sm font-black leading-none text-blue-400 min-[390px]:text-base sm:text-lg">
                                    {vehicle.price}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <ul className="space-y-3">
                            {item.details.map((detail) => (
                              <li key={detail} className="flex min-w-0 gap-3">
                                <FiCheck
                                  aria-hidden="true"
                                  className="mt-0.5 shrink-0 text-blue-400"
                                />
                                <span className="min-w-0">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: isDesktop ? 18 : 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isDesktop ? 0.45 : 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] px-4 py-4 shadow-lg shadow-blue-500/5 sm:mt-10 sm:px-5"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              <span className="font-semibold text-white">Des options sont disponibles en complément</span>{" "}
              pour adapter la prestation à votre véhicule : sièges, coffre,
              jantes, pneus et finitions ciblées.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Shampoing sièges", "Coffre", "Jantes", "Brillance pneus"].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-semibold text-blue-200"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: isDesktop ? 36 : 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isDesktop ? 0.55 : 0.25 }}
          viewport={{ once: true, amount: 0.2 }}
          role="button"
          tabIndex={0}
          aria-expanded={optionsOpen}
          onClick={toggleOptions}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              toggleOptions();
            }
          }}
          className="mt-14 cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/70 sm:mt-16 sm:p-7 md:backdrop-blur-xl lg:mt-20 lg:p-8"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <p className="mb-3 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
                OPTIONS
              </p>

              <h3 className="text-2xl font-black uppercase sm:text-3xl md:text-4xl">
                À ajouter selon vos besoins
              </h3>
            </div>
          </div>

          <div className="mt-6 flex justify-start md:justify-end">
            <div className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/10 px-5 text-sm font-semibold text-zinc-100 sm:h-12 sm:w-auto">
              {optionsOpen ? (
                <FiMinus aria-hidden="true" />
              ) : (
                <FiPlus aria-hidden="true" />
              )}
              <span>{optionsOpen ? "Fermer" : "Voir les options"}</span>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {optionsOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                  {options.map((option, index) => {
                    const isOptionActive = activeOption === index;

                    return (
                      <div
                        key={`${option.category}-${option.label}`}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isOptionActive}
                        onClick={(event) => {
                          event.stopPropagation();
                          setActiveOption(isOptionActive ? null : index);
                        }}
                        onKeyDown={(event) => {
                          event.stopPropagation();
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setActiveOption(isOptionActive ? null : index);
                          }
                        }}
                        onMouseEnter={() => {
                          if (isDesktop) setActiveOption(index);
                        }}
                        onMouseLeave={() => {
                          if (isDesktop) setActiveOption(null);
                        }}
                        className={`min-w-0 cursor-pointer rounded-2xl border bg-black/30 p-4 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 ${
                          isOptionActive
                            ? "border-blue-400/50 bg-blue-500/[0.08]"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-400">
                            {option.category}
                          </span>

                          <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">
                            {option.price}
                          </span>
                        </div>

                        <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                          {option.label}
                        </p>

                        {"note" in option && (
                          <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                            {option.note}
                          </p>
                        )}

                      </div>
                    );
                  })}
                </div>

                <div
                  className="mt-4 min-h-[104px]"
                  onClick={(event) => event.stopPropagation()}
                >
                  <AnimatePresence mode="wait">
                    {selectedOption ? (
                      <motion.div
                        key={selectedOption.label}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="rounded-2xl border border-blue-400/20 bg-black/35 p-4 text-sm leading-relaxed text-zinc-300 shadow-lg shadow-blue-500/5"
                      >
                        <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300">
                          <FiInfo aria-hidden="true" />
                          <span>{selectedOption.label}</span>
                        </div>
                        {selectedOption.detail}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="options-help"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-relaxed text-zinc-500"
                      >
                        Chaque option est proposée en complément selon l'état du
                        véhicule, la matière à traiter et le niveau de finition souhaité.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <p className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-relaxed text-zinc-400">
                  Déplacement dans le Chablais, Genève et Haute-Savoie. Selon
                  la distance, un supplément de 0,50€ par km peut être
                  appliqué.
                  <br />
                  Pour les véhicules très sales, un supplément de 30 à 60€ peut
                  être ajouté selon l&apos;état du véhicule.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
