"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiMapPin, FiShield } from "react-icons/fi";
import { siteImages } from "@/data/siteImages";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black text-white md:h-screen md:min-h-[100svh]">
      <div
        role="img"
        aria-label={siteImages.hero.alt}
        className="absolute inset-0 scale-105 bg-cover bg-[66%_center] min-[390px]:bg-[62%_center] min-[430px]:bg-[58%_center] md:bg-center"
        style={{
          backgroundImage: `url('${siteImages.hero.src}')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/74 to-black md:bg-gradient-to-r md:from-black md:via-black/76 md:to-black/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_46%,rgba(47,131,255,0.24),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.82))]" />
      <div className="absolute left-[-140px] top-24 h-[260px] w-[260px] rounded-full bg-blue-400/20 blur-3xl md:left-[20%] md:top-1/2 md:h-[400px] md:w-[400px] md:-translate-y-1/2" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

      <div className="relative z-10 flex min-h-[100svh] items-center pb-10 pt-28 min-[390px]:pt-32 sm:pt-36 md:h-full md:min-h-[100svh] md:pb-14 md:pt-32 lg:pt-28">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-7 px-5 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 64 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex max-w-3xl min-w-0 flex-col justify-center"
          >
            <div className="mb-4 flex items-center gap-4 min-[390px]:mb-5 md:mb-7">
              <span className="h-px w-12 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.9)] sm:w-16" />
              <p className="max-w-[19rem] text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-300 sm:max-w-none sm:text-xs md:text-sm md:tracking-[0.45em]">
                NETTOYAGE AUTOMOBILE PREMIUM
              </p>
            </div>

            <h1 className="mb-4 max-w-full text-[clamp(2.55rem,11.5vw,4.75rem)] font-black uppercase leading-[0.9] min-[390px]:mb-5 md:mb-6 lg:text-8xl">
              LÉMAN
              <br />
              <span className="bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
                AUTO CLEAN
              </span>
            </h1>

            <p className="mb-6 max-w-2xl text-[0.98rem] leading-relaxed text-zinc-200 min-[390px]:mb-7 sm:text-lg md:mb-8">
              Nettoyage automobile haut de gamme, uniquement sur rendez-vous,
              à domicile. Déplacement dans le Chablais, Genève et Haute-Savoie.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-500 px-6 py-3.5 text-center text-sm font-semibold shadow-lg shadow-blue-500/25 transition hover:bg-blue-400 hover:shadow-blue-400/35 sm:w-fit sm:px-8 sm:py-4 sm:text-base"
              >
                Nous contacter
                <FiArrowRight
                  aria-hidden="true"
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <p className="text-center text-xs uppercase tracking-[0.22em] text-zinc-400 sm:text-left">
                Devis gratuit et personnalisé
              </p>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 min-[390px]:mt-9 sm:grid-cols-3 md:mt-14 md:max-w-2xl">
              <div className="flex min-w-0 items-center gap-3 border-l border-blue-400/45 pl-4">
                <FiShield
                  aria-hidden="true"
                  className="shrink-0 text-2xl text-blue-400"
                />
                <p className="text-xs uppercase leading-relaxed tracking-widest text-zinc-300">
                  <span className="block font-bold text-white">100%</span>
                  Satisfaction
                </p>
              </div>

              <div className="flex min-w-0 items-center gap-3 border-l border-blue-400/45 pl-4">
                <FiCalendar
                  aria-hidden="true"
                  className="shrink-0 text-2xl text-blue-400"
                />
                <p className="text-xs uppercase leading-relaxed tracking-widest text-zinc-300">
                  <span className="block font-bold text-white">Rendez-vous</span>
                  À domicile
                </p>
              </div>

              <div className="flex min-w-0 items-center gap-3 border-l border-blue-400/45 pl-4">
                <FiMapPin
                  aria-hidden="true"
                  className="shrink-0 text-2xl text-blue-400"
                />
                <p className="text-xs uppercase leading-relaxed tracking-widest text-zinc-300">
                  <span className="block font-bold text-white">Secteur</span>
                  Chablais / Genève
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
