"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { openCookieConsent } from "@/components/CookieConsent";
import { villes } from "@/data/villes";
import { useLang } from "@/hooks/useLang";

const aboutFr = [
  "Depuis toujours je suis passionné d'automobile et soucieux du détail, entrepreneur dans l'âme.",
  "J'ai créé Léman Auto Clean pour offrir un service de nettoyage automobile premium à domicile, directement chez vous.",
  "Mon objectif ? Redonner à votre véhicule l'éclat qu'il mérite, avec soin et professionnalisme, de Douvaine à Thonon-les-Bains, dans le Chablais, Genève et la Haute-Savoie.",
];

const aboutEn = [
  "I have always been passionate about cars and obsessed with detail, an entrepreneur at heart.",
  "I created Léman Auto Clean to offer a premium car cleaning service at your home, wherever you are.",
  "My goal? To give your vehicle back the shine it deserves, with care and professionalism, from Geneva to Thonon-les-Bains, across the Chablais and Haute-Savoie.",
];

const navFr = [
  { href: "/#prestations", label: "Prestations" },
  { href: "/abonnements", label: "Abonnements" },
  { href: "/#realisations", label: "Nos réalisations" },
  { href: "/professionnels", label: "Professionnels" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const navEn = [
  { href: "/en#services", label: "Services" },
  { href: "/en#how-it-works", label: "How it works" },
  { href: "/en#faq", label: "FAQ" },
  { href: "/en#quote", label: "Free quote" },
];

export default function Footer() {
  const en = useLang() === "en";

  return (
    <footer
      id="contact"
      className="relative overflow-x-hidden border-t border-white/10 bg-black px-5 py-14 text-white sm:px-6 md:py-20"
    >

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl md:h-[300px] md:w-[300px]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.4fr_0.75fr_0.95fr_0.95fr] lg:gap-12">

        {/* Logo */}
        <div className="min-w-0">
          <Image
            src="/logo.png"
            alt="Léman Auto Clean"
            width={320}
            height={120}
            className="mb-6 h-auto w-[240px] max-w-full object-contain sm:w-[300px]"
          />

          <div className="max-w-sm space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {(en ? aboutEn : aboutFr).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

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

            {(en ? navEn : navFr).map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-blue-400">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="min-w-0">
          <h3 className="mb-5 text-xs uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
            {en ? "Legal (in French)" : "Légal"}
          </h3>

          <div className="flex flex-col gap-4 text-sm text-zinc-300 sm:text-base">

            <Link href="/mentions-legales" className="transition hover:text-blue-400">
              {en ? "Legal notice" : "Mentions légales"}
            </Link>

            <Link href="/politique-confidentialite" className="transition hover:text-blue-400">
              {en ? "Privacy policy" : "Politique de confidentialité"}
            </Link>

            <Link href="/cgv" className="transition hover:text-blue-400">
              {en ? "Terms and conditions" : "CGV"}
            </Link>

            <Link href="/conditions-prestations-detailing" className="transition hover:text-blue-400">
              {en ? "Detailing service conditions" : "Conditions prestations detailing"}
            </Link>

            <Link href="/cookies" className="transition hover:text-blue-400">
              Cookies
            </Link>

            <button
              type="button"
              onClick={openCookieConsent}
              className="w-fit text-left transition hover:text-blue-400"
            >
              {en ? "Cookie settings" : "Gérer les cookies"}
            </button>

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
              {en
                ? "Travel across Geneva, the Chablais and Haute-Savoie"
                : "Déplacement dans le Chablais, Genève et Haute-Savoie"}
            </p>

            <Link
              href={en ? "/en#quote" : "/contact"}
              className="mt-2 inline-flex w-fit rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 sm:text-base"
            >
              {en ? "Book" : "Réserver"}
            </Link>

          </div>
        </div>

      </div>

      {/* Zones d'intervention */}
      <div className="relative mx-auto mt-12 max-w-7xl md:mt-16">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
          {en ? "Mobile car cleaning (pages in French)" : "Nettoyage voiture à domicile"}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400">
          {villes.map((ville) => (
            <Link
              key={ville.slug}
              href={`/nettoyage-voiture-domicile/${ville.slug}`}
              className="transition hover:text-blue-400"
            >
              {ville.name}
            </Link>
          ))}
          <Link
            href={en ? "/" : "/en"}
            hrefLang={en ? "fr" : "en"}
            className="text-blue-300 transition hover:text-blue-200"
          >
            {en ? "Version française" : "English version"}
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative mt-10 border-t border-white/10 pt-6 text-center text-xs text-zinc-500 sm:text-sm md:mt-12 md:pt-8">
        © 2026 Léman Auto Clean — {en ? "All rights reserved." : "Tous droits réservés."}
      </div>
    </footer>
  );
}
