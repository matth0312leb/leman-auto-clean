"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { siteImages } from "@/data/siteImages";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export default function BeforeAfter() {
  const beforeAfterItems = siteImages.beforeAfter;
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useIsDesktop();
  const activeItem = beforeAfterItems[activeIndex];

  useEffect(() => {
    beforeAfterItems.forEach((item) => {
      if (!item.src) return;

      const preloadImage = new window.Image();
      preloadImage.src = item.src;
    });
  }, [beforeAfterItems]);

  const previousItem = () => {
    setActiveIndex((current) =>
      current === 0 ? beforeAfterItems.length - 1 : current - 1,
    );
  };

  const nextItem = () => {
    setActiveIndex((current) =>
      current === beforeAfterItems.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="avantapres"
      className="relative overflow-x-hidden bg-black px-5 py-18 text-white sm:px-6 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: isDesktop ? 36 : 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isDesktop ? 0.7 : 0.25 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 text-center md:mb-12 lg:mb-14"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
            RÉSULTATS
          </p>

          <h2 className="text-3xl font-black uppercase sm:text-4xl md:text-5xl">
            Avant / Après
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: isDesktop ? 0.96 : 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: isDesktop ? 0.7 : 0.25 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl lg:max-w-4xl xl:max-w-[860px]"
        >
          <div key={activeItem.title} className="group relative aspect-[1331/1181] overflow-hidden bg-black">
            {activeItem.src ? (
              <Image
                src={activeItem.src}
                alt={activeItem.alt ?? ""}
                fill
                priority
                quality={86}
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover object-center transition duration-700 md:group-hover:scale-[1.015]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18),rgba(0,0,0,0.95)_62%)] px-6 text-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-400">
                    À venir
                  </p>
                  <p className="mt-3 text-sm text-zinc-400 sm:text-base">
                    Prochain avant / après
                  </p>
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={previousItem}
            aria-label="Avant/après précédent"
            className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/45 text-xl text-white shadow-lg backdrop-blur-md transition hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-200 sm:left-5 sm:h-12 sm:w-12"
          >
            <FiChevronLeft aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={nextItem}
            aria-label="Avant/après suivant"
            className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/45 text-xl text-white shadow-lg backdrop-blur-md transition hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-200 sm:right-5 sm:h-12 sm:w-12"
          >
            <FiChevronRight aria-hidden="true" />
          </button>
        </motion.div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {beforeAfterItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Afficher ${item.title}`}
              className={`h-2.5 rounded-full transition ${
                activeIndex === index
                  ? "w-8 bg-blue-400"
                  : "w-2.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
