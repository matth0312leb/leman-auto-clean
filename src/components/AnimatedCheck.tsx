"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Coche de validation qui se dessine avec un léger rebond. */
export default function AnimatedCheck() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { scale: 0.4, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 14 }}
      className="relative mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/40"
    >
      {!reduce && (
        <motion.span
          aria-hidden="true"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 1.9, opacity: 0 }}
          transition={{ delay: 0.45, duration: 1.1, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-blue-500"
        />
      )}
      <svg viewBox="0 0 24 24" className="relative h-8 w-8" fill="none" aria-hidden="true">
        <motion.path
          d="M5 12.5l4.5 4.5L19 7.5"
          stroke="currentColor"
          strokeWidth={2.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  );
}
