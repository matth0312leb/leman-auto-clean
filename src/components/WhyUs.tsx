"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Déplacement à domicile",
    text: "Nous intervenons directement chez vous dans tout le Chablais.",
  },
  {
    title: "Produits premium",
    text: "Utilisation de produits professionnels haut de gamme detailing.",
  },
  {
    title: "Résultat showroom",
    text: "Chaque véhicule reçoit une finition minutieuse et soignée.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white">

      {/* Glow */}
      <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-20 max-w-3xl">

          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-blue-400">
            POURQUOI NOUS
          </p>

          <h2 className="text-5xl font-black uppercase leading-tight md:text-6xl">
            Une expérience detailing premium
          </h2>

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-[30px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition hover:border-blue-400/40"
            >

              <div className="mb-6 h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_25px_rgba(34,211,238,1)]" />

              <h3 className="mb-4 text-3xl font-black">
                {item.title}
              </h3>

              <p className="leading-relaxed text-zinc-400">
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}