"use client";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-20 text-white"
    >

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 md:grid-cols-3">

        {/* Logo */}
        <div>
          <img
  src="/logo.png"
  alt="Léman Auto Clean"
  className="mb-6 w-[260px] object-contain"
/>

          <p className="max-w-sm leading-relaxed text-zinc-400">
            Léman Auto Clean — detailing automobile premium à domicile
            dans le Chablais, Douvaine, Thonon-les-Bains et alentours.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-blue-400">
            Navigation
          </h3>

          <div className="flex flex-col gap-4 text-zinc-300">

            <a href="#prestations" className="transition hover:text-blue-400">
              Prestations
            </a>

            <a href="#avantapres" className="transition hover:text-blue-400">
              Avant / Après
            </a>

            <a href="#contact" className="transition hover:text-blue-400">
              Contact
            </a>

          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-blue-400">
            Contact
          </h3>

          <div className="flex flex-col gap-5 text-zinc-300">

            <a
              href="https://wa.me/33604475205"
              target="_blank"
              className="flex items-center gap-3 transition hover:text-green-400"
            >
              <FaWhatsapp className="text-2xl" />
              WhatsApp
            </a>

            <a
              href="https://instagram.com/LemanAutoClean"
              target="_blank"
              className="flex items-center gap-3 transition hover:text-pink-400"
            >
              <FaInstagram className="text-2xl" />
              Instagram
            </a>

            <p>
              Douvaine • Thonon • Chablais
            </p>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="relative mt-20 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
        © 2026 Léman Auto Clean — Tous droits réservés.
      </div>
    </footer>
  );
}