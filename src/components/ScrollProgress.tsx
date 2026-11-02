"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Fine barre bleue en haut de l'écran qui indique la progression de lecture. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: reduce ? scrollYProgress : scaleX }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
    />
  );
}
