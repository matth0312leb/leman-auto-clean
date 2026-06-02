"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { siteImages } from "@/data/siteImages";

function GalleryImage({
  image,
}: {
  image: { src: string; alt: string };
}) {
  return (
    <div className="group min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
      <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4] lg:h-[460px] lg:aspect-auto">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          quality={95}
          sizes="(min-width: 1280px) 420px, (min-width: 1024px) 33vw, 100vw"
          className="object-cover object-center transition duration-700 group-hover:scale-105 lg:group-hover:scale-110"
        />
      </div>
    </div>
  );
}

export default function Gallery() {
  const images = siteImages.gallery;
  const [activeIndex, setActiveIndex] = useState(0);

  const previousImage = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const nextImage = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="realisations"
      className="relative overflow-x-hidden bg-black px-5 py-18 text-white sm:px-6 sm:py-20 md:py-28 lg:py-32"
    >

      {/* Glow */}
      <div className="absolute right-[-120px] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl md:right-0 md:h-[400px] md:w-[400px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16 lg:mb-20">

          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
            GALERIE
          </p>

          <h2 className="text-3xl font-black uppercase sm:text-4xl md:text-5xl">
            Aperçu de nos réalisations
          </h2>

        </div>

        {/* Mobile carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.25 }}
          className="lg:hidden"
        >
          <div className="relative">
            <GalleryImage image={images[activeIndex]} />

            <button
              type="button"
              onClick={previousImage}
              aria-label="Image précédente"
              className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/70 text-xl text-white backdrop-blur-xl transition hover:border-blue-400 hover:text-blue-400"
            >
              <FiChevronLeft aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Image suivante"
              className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/70 text-xl text-white backdrop-blur-xl transition hover:border-blue-400 hover:text-blue-400"
            >
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Afficher l'image ${index + 1}`}
                className={`h-2.5 rounded-full transition ${
                  activeIndex === index
                    ? "w-8 bg-blue-400"
                    : "w-2.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden gap-5 sm:gap-6 lg:grid lg:grid-cols-3 lg:gap-8">

          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <GalleryImage image={image} />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
