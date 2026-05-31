"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsappButton() {
  return (
    <motion.a
      href="https://wa.me/33604475205"
      target="_blank"
      aria-label="Contacter Léman Auto Clean sur WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 }}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-black/80 p-2.5 text-white shadow-2xl backdrop-blur-xl transition hover:border-green-400 sm:bottom-6 sm:right-6 sm:px-5 sm:py-4"
    >

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-2xl text-white sm:h-12 sm:w-12">
        <FaWhatsapp />
      </div>

      <div className="hidden sm:block">
        <p className="text-xs uppercase tracking-widest text-zinc-400">
          Contact rapide
        </p>

        <p className="font-semibold">
          WhatsApp
        </p>
      </div>

    </motion.a>
  );
}
