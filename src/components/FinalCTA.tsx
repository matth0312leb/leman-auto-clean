"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white">

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-2xl md:p-20"
      >

        <p className="mb-6 text-sm uppercase tracking-[0.5em] text-blue-400">
          PRENEZ RENDEZ-VOUS
        </p>

        <h2 className="mx-auto mb-8 max-w-4xl text-5xl font-black uppercase leading-tight md:text-7xl">
          Offrez une finition premium à votre véhicule
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Contactez Léman Auto Clean dès maintenant pour un nettoyage
          automobile haut de gamme à domicile.
        </p>

        <a
          href="https://wa.me/33604475205"
          target="_blank"
          className="inline-flex items-center gap-4 rounded-full bg-blue-500 px-10 py-5 text-lg font-semibold text-white transition hover:bg-blue-400"
        >

          <FaWhatsapp className="text-2xl" />

          Réserver sur WhatsApp

        </a>

      </motion.div>
    </section>
  );
}