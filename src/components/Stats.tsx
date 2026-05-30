"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "100%",
    label: "Satisfaction client",
  },
  {
    number: "Mobile",
    label: "Service à domicile",
  },
  {
    number: "Premium",
    label: "Produits professionnels",
  },
  {
    number: "7j/7",
    label: "Disponibilité",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white">

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-4">

        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
          >

            <h2 className="mb-4 text-5xl font-black text-blue-400">
              {stat.number}
            </h2>

            <p className="uppercase tracking-[0.3em] text-zinc-400">
              {stat.label}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}