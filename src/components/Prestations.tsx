"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const prestations = [
  {
    title: "Essentiel",
    price: "100€",
    badge: "INTÉRIEUR",
    description:
      "Nettoyage intérieur complet avec aspiration, plastiques, vitres et finitions premium.",
  },
  {
    title: "Équilibre",
    price: "60€",
    badge: "EXTÉRIEUR",
    description:
      "Lavage detailing extérieur avec jantes, séchage premium et finition brillante.",
  },
  {
    title: "Élégance",
    price: "150€",
    badge: "COMPLET",
    description:
      "La prestation signature Léman Auto Clean intérieur + extérieur haut de gamme.",
  },
];

export default function Prestations() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="prestations"
      className="relative overflow-hidden bg-black px-6 py-32 text-white"
    >

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-20 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-blue-400">
            PRESTATIONS PREMIUM
          </p>

          <h2 className="text-5xl font-black uppercase md:text-6xl">
            Nos Services
          </h2>

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {prestations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:border-blue-500/40"
            >

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
              </div>

              {/* Badge */}
              <div className="mb-8 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-[0.3em] text-blue-400">
                {item.badge}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-4xl font-black uppercase">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mb-10 leading-relaxed text-zinc-400">
                {item.description}
              </p>

              {/* Bottom */}
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm uppercase tracking-widest text-zinc-500">
                    À partir de
                  </p>

                  <h4 className="text-4xl font-black text-blue-400">
                    {item.price}
                  </h4>
                </div>

                <button
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                  className="rounded-full border border-white/10 px-6 py-3 transition hover:border-blue-400 hover:text-blue-400"
                >
                  {active === index ? "Fermer" : "Voir +"}
                </button>

              </div>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-8 border-t border-white/10 pt-6 text-zinc-400">

                      <ul className="space-y-3">
                        <li>✔ Nettoyage premium</li>
                        <li>✔ Produits professionnels</li>
                        <li>✔ Intervention à domicile</li>
                        <li>✔ Finition haut de gamme</li>
                      </ul>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}