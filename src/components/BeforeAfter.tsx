"use client";

import ReactCompareImage from "react-compare-image";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  return (
    <section
      id="avantapres"
      className="relative overflow-hidden bg-black px-5 py-18 text-white sm:px-6 sm:py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 text-center md:mb-16 lg:mb-20"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
            RÉSULTATS
          </p>

          <h2 className="text-3xl font-black uppercase sm:text-4xl md:text-5xl">
            Avant / Après
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
        >
          <div className="aspect-[16/10] overflow-hidden bg-black md:aspect-[16/9]">
            <ReactCompareImage
              leftImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
              rightImage="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1200&auto=format&fit=crop"
              handleSize={34}
              leftImageAlt="Avant nettoyage Léman Auto Clean"
              rightImageAlt="Après nettoyage Léman Auto Clean"
              leftImageCss={{ objectFit: "contain", backgroundColor: "black" }}
              rightImageCss={{ objectFit: "contain", backgroundColor: "black" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
