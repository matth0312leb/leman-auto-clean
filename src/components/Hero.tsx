"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

      {/* Blue glow */}
      <div className="absolute left-[20%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-400/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2">

          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >

            <p className="mb-6 text-sm uppercase tracking-[0.5em] text-blue-400">
              DETAILING AUTOMOBILE PREMIUM
            </p>

            <h1 className="mb-6 text-6xl font-black uppercase leading-[0.9] md:text-8xl">
              LÉMAN
              <br />
              AUTO CLEAN
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-zinc-300">
              Nettoyage automobile haut de gamme à domicile dans le Chablais,
              Douvaine, Thonon-les-Bains et alentours.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">

              <a
                href="#prestations"
                className="rounded-full bg-blue-500 px-8 py-4 text-center font-semibold transition hover:bg-blue-400"
              >
                Découvrir les prestations
              </a>

              <a
                href="https://wa.me/33604475205"
                target="_blank"
                className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-semibold backdrop-blur-xl transition hover:border-blue-400 hover:text-blue-400"
              >
                WhatsApp
              </a>

            </div>

            {/* Stats */}
            <div className="mt-16 flex gap-10">

              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  100%
                </h3>

                <p className="text-sm uppercase tracking-widest text-zinc-400">
                  Satisfaction
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  Mobile
                </h3>

                <p className="text-sm uppercase tracking-widest text-zinc-400">
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