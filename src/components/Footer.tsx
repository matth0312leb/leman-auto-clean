"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-black px-5 py-14 text-white sm:px-6 md:py-20"
    >

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl md:h-[300px] md:w-[300px]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.4fr_0.75fr_0.95fr_0.95fr] lg:gap-12">

        {/* Logo */}
        <div className="min-w-0">
          <Image
            src="/logo.png"
            alt="Léman Auto Clean"
            width={260}
            height={130}
            className="mb-6 h-auto w-[220px] max-w-full object-contain sm:w-[260px]"
          />

          <div className="max-w-sm space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            <p>
              Depuis toujours je suis passionné d&apos;automobile et soucieux du
              détail, entrepreneur dans l&apos;âme.
            </p>

            <p>
              J&apos;ai créé Léman Auto Clean pour offrir un service de nettoyage
              haut de gamme, directement chez vous.
            </p>

            <p>
              Mon objectif ? Redonner à votre véhicule l&apos;éclat qu&apos;il mérite,
              avec soin et professionnalisme.
            </p>

            <p className="pt-2 text-right font-semibold text-white">
              Matthieu L.
            </p>
          </div>

        </div>

        {/* Navigation */}
        <div className="min-w-0">
          <h3 className="mb-5 text-xs uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
            Navigation
          </h3>

          <div className="flex flex-col gap-4 text-sm text-zinc-300 sm:text-base">

            <Link href="/#prestations" className="transition hover:text-blue-400">
              Prestations
            </Link>

            <Link href="/#realisations" className="transition hover:text-blue-400">
              Nos réalisations
            </Link>

            <Link href="/#faq" className="transition hover:text-blue-400">
              FAQ
            </Link>

            <Link href="/contact" className="transition hover:text-blue-400">
              Contact
            </Link>

          </div>
        </div>

        {/* Legal */}
        <div className="min-w-0">
          <h3 className="mb-5 text-xs uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
            Légal
          </h3>

          <div className="flex flex-col gap-4 text-sm text-zinc-300 sm:text-base">

            <Link href="/mentions-legales" className="transition hover:text-blue-400">
              Mentions légales
            </Link>

            <Link href="/politique-confidentialite" className="transition hover:text-blue-400">
              Politique de confidentialité
            </Link>

            <Link href="/cgv" className="transition hover:text-blue-400">
              CGV
            </Link>

            <Link href="/conditions-prestations-detailing" className="transition hover:text-blue-400">
              Conditions prestations detailing
            </Link>

            <Link href="/cookies" className="transition hover:text-blue-400">
              Cookies
            </Link>

          </div>
        </div>

        {/* Contact */}
        <div className="min-w-0">
          <h3 className="mb-5 text-xs uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
            Contact
          </h3>

          <div className="flex flex-col gap-5 text-sm text-zinc-300 sm:text-base">

            <a
              href="tel:+33604475205"
              className="flex min-w-0 items-center gap-3 transition hover:text-blue-400"
            >
              <FiPhone className="shrink-0 text-2xl" />
              <span className="min-w-0 break-words">+33 6 04 47 52 05</span>
            </a>

            <a
              href="mailto:lemanautoclean@gmail.com"
              className="flex min-w-0 items-center gap-3 transition hover:text-blue-400"
            >
              <FiMail className="shrink-0 text-2xl" />
              <span className="min-w-0 break-words">lemanautoclean@gmail.com</span>
            </a>

            <a
              href="https://wa.me/33604475205"
              target="_blank"
              className="flex min-w-0 items-center gap-3 transition hover:text-green-400"
            >
              <FaWhatsapp className="shrink-0 text-2xl" />
              <span className="min-w-0 break-words">WhatsApp</span>
            </a>

            <a
              href="https://instagram.com/LemanAutoClean"
              target="_blank"
              className="flex min-w-0 items-center gap-3 transition hover:text-pink-400"
            >
              <FaInstagram className="shrink-0 text-2xl" />
              <span className="min-w-0 break-words">@LemanAutoClean</span>
            </a>

            <a
              href="https://www.tiktok.com/@lemanautoclean1"
              target="_blank"
              className="flex min-w-0 items-center gap-3 transition hover:text-white"
            >
              <FaTiktok className="shrink-0 text-2xl" />
              <span className="min-w-0 break-words">TikTok</span>
            </a>

            <a
              href="https://www.facebook.com/people/L%C3%A9man-Auto-Clean-LAC/61577427215915/?locale=fr_FR"
              target="_blank"
              className="flex min-w-0 items-center gap-3 transition hover:text-blue-400"
            >
              <FaFacebookF className="shrink-0 text-2xl" />
              <span className="min-w-0 break-words">Facebook</span>
            </a>

            <p className="flex items-start gap-3 leading-relaxed">
              <FiMapPin className="mt-0.5 shrink-0 text-2xl text-blue-400" />
              Déplacement dans le Chablais, Genève et Haute-Savoie
            </p>

            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 sm:text-base"
            >
              Réserver
            </Link>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="relative mt-12 border-t border-white/10 pt-6 text-center text-xs text-zinc-500 sm:text-sm md:mt-20 md:pt-8">
        © 2026 Léman Auto Clean — Tous droits réservés.
      </div>
    </footer>
  );
}
