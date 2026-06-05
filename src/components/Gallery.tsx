"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, type TouchEvent } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { siteImages } from "@/data/siteImages";
import { useIsDesktop } from "@/hooks/useIsDesktop";

function GalleryImage({
  image,
  priority = false,
}: {
  image: { src: string; alt: string };
  priority?: boolean;
}) {
  return (
    <div className="group min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
      <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4] lg:h-[460px] lg:aspect-auto">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          quality={84}
          sizes="(min-width: 1280px) 420px, (min-width: 1024px) 33vw, 100vw"
          className="object-cover object-center transition duration-700 md:group-hover:scale-105 lg:group-hover:scale-110"
        />
      </div>
    </div>
  );
}

export default function Gallery() {
  const images = siteImages.gallery;
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    images.forEach((image) => {
      const preloadImage = new window.Image();
      preloadImage.src = image.src;
    });
  }, [images]);

  const goToImage = (index: number) => {
    setActiveIndex(index);
  };

  const previousImage = () => {
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    goToImage(nextIndex);
  };

  const nextImage = () => {
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    goToImage(nextIndex);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];

    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartXRef.current;
    const deltaY = touch.clientY - touchStartYRef.current;

    if (Math.abs(deltaY) > Math.abs(deltaX) || Math.abs(deltaX) < 45) return;

    if (deltaX < 0) {
      nextImage();
    } else {
      previousImage();
    }
  };

  return (
    <section
      id="realisations"
      className="relative overflow-x-hidden bg-black px-5 py-18 text-white sm:px-6 sm:py-20 md:py-28 lg:py-32"
    >
      <div className="absolute right-[-120px] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl md:right-0 md:h-[400px] md:w-[400px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16 lg:mb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
            Galerie
          </p>

          <h2 className="text-3xl font-black uppercase sm:text-4xl md:text-5xl">
            Aperçu de nos réalisations
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: isDesktop ? 40 : 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isDesktop ? 0.55 : 0.25 }}
          viewport={{ once: true, amount: 0.25 }}
          className="lg:hidden"
        >
          <div className="relative">
            <div className="overflow-hidden">
              <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="flex touch-pan-y transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={image.src} className="min-w-full px-0.5">
                    <GalleryImage image={image} priority={index === 0} />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={previousImage}
              aria-label="Image précédente"
              className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/70 text-xl text-white backdrop-blur-sm transition hover:border-blue-400 hover:text-blue-400 md:backdrop-blur-xl"
            >
              <FiChevronLeft aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Image suivante"
              className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/70 text-xl text-white backdrop-blur-sm transition hover:border-blue-400 hover:text-blue-400 md:backdrop-blur-xl"
            >
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => goToImage(index)}
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

        <div className="hidden gap-5 sm:gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: isDesktop ? 40 : 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: isDesktop ? 0.55 : 0.25,
                delay: isDesktop ? index * 0.12 : 0,
              }}
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
