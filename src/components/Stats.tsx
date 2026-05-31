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
    <section className="relative overflow-x-hidden bg-black px-5 py-14 text-white sm:px-6 sm:py-16 md:py-24">

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl md:h-[400px] md:w-[400px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">

        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
            className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl sm:p-6 lg:p-10"
          >

            <h2 className="mb-2 break-words text-2xl font-black text-blue-400 sm:text-3xl lg:mb-4 lg:text-5xl">
              {stat.number}
            </h2>

            <p className="text-[10px] uppercase leading-relaxed tracking-[0.16em] text-zinc-400 sm:text-xs lg:text-base lg:tracking-[0.3em]">
              {stat.label}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
