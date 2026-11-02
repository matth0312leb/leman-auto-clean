"use client";

import { motion } from "framer-motion";

/** Petite ligne bleue lumineuse qui se dessine sous un titre de section. */
export default function TitleLine({ className = "" }: { className?: string }) {
  return (
    <motion.span
      aria-hidden="true"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className={`mx-auto mt-5 block h-[3px] w-16 origin-center rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_14px_rgba(59,130,246,0.9)] sm:w-20 ${className}`}
    />
  );
}
