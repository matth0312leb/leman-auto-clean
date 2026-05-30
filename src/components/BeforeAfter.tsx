"use client";

import ReactCompareImage from "react-compare-image";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  return (
    <section
      id="avantapres"
      className="relative overflow-hidden bg-black px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-blue-400">
            RÉSULTATS
          </p>

          <h2 className="text-5xl font-black uppercase">
            Avant / Après
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
        >
          <ReactCompareImage
            leftImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
            rightImage="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1200&auto=format&fit=crop"
          />
        </motion.div>

      </div>
    </section>
  );
}