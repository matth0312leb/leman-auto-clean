"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black text-white md:h-screen">

      {/* Background image */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-[62%_center] md:bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/72 to-black md:bg-gradient-to-r md:from-black md:via-black/80 md:to-black/40" />

      {/* Blue glow */}
      <div className="absolute left-[-140px] top-24 h-[260px] w-[260px] rounded-full bg-blue-400/20 blur-3xl md:left-[20%] md:top-1/2 md:h-[400px] md:w-[400px] md:-translate-y-1/2" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] items-center pb-12 pt-28 md:h-full md:pb-0 md:pt-0">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:gap-12">

          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 64 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex max-w-2xl min-w-0 flex-col justify-center"
          >

            <p className="mb-4 max-w-[20rem] text-xs uppercase tracking-[0.28em] text-blue-400 sm:max-w-none md:mb-6 md:text-sm md:tracking-[0.45em]">
              NETTOYAGE AUTOMOBILE PREMIUM
            </p>

            <h1 className="mb-5 max-w-full text-[clamp(2.6rem,13vw,4.5rem)] font-black uppercase leading-[0.92] md:mb-6 lg:text-8xl">
              LÉMAN
              <br />
              AUTO CLEAN
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg md:mb-10">
              Nettoyage automobile haut de gamme, uniquement sur rendez-vous,
              à domicile. Déplacement dans le Chablais, Genève et Haute-Savoie.
            </p>

            {/* Buttons */}
            <Link
              href="/contact"
              className="inline-flex w-full justify-center rounded-full bg-blue-500 px-6 py-3.5 text-center text-sm font-semibold transition hover:bg-blue-400 sm:w-fit sm:px-8 sm:py-4 sm:text-base"
            >
              Nous contacter
            </Link>

            {/* Stats */}
            <div className="mt-10 grid max-w-sm grid-cols-2 gap-5 md:mt-16 md:flex md:max-w-none md:gap-10">

              <div className="min-w-0">
                <h3 className="text-2xl font-bold text-blue-400 md:text-3xl">
                  100%
                </h3>

                <p className="text-xs uppercase tracking-widest text-zinc-400 sm:text-sm">
                  Satisfaction
                </p>
              </div>

              <div className="min-w-0">
                <h3 className="text-2xl font-bold text-blue-400 md:text-3xl">
                  Rendez-vous
                </h3>

                <p className="text-xs uppercase tracking-widest text-zinc-400 sm:text-sm">
                  À domicile
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
