"use client";

import ReactCompareImage from "react-compare-image";
import { motion } from "framer-motion";
import { siteImages } from "@/data/siteImages";

export default function BeforeAfter() {
  return (
    <section
      id="avantapres"
      className="relative overflow-x-hidden bg-black px-5 py-18 text-white sm:px-6 sm:py-20 md:py-28 lg:py-32"
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
              leftImage={siteImages.beforeAfter.before.src}
              rightImage={siteImages.beforeAfter.after.src}
              handleSize={34}
              leftImageAlt={siteImages.beforeAfter.before.alt}
              rightImageAlt={siteImages.beforeAfter.after.alt}
              leftImageCss={{
                objectFit: "contain",
                objectPosition: "center 38%",
                backgroundColor: "black",
              }}
              rightImageCss={{
                objectFit: "contain",
                objectPosition: "center 38%",
                backgroundColor: "black",
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
