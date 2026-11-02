"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PromoBanner from "@/components/PromoBanner";
import type { Promo } from "@/data/promos";
import { useLang } from "@/hooks/useLang";
import LanguageSwitch from "@/components/LanguageSwitch";

const linksFr = [
  { href: "/#prestations", label: "Prestations" },
  { href: "/abonnements", label: "Abonnements" },
  { href: "/#realisations", label: "Nos réalisations" },
  { href: "/professionnels", label: "Professionnels" },
  { href: "/carte-cadeau", label: "Carte cadeau" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const linksEn = [
  { href: "/en#services", label: "Services" },
  { href: "/en#how-it-works", label: "How it works" },
  { href: "/en/gift-card", label: "Gift card" },
  { href: "/en#faq", label: "FAQ" },
  { href: "/en#quote", label: "Free quote" },
];

export default function Navbar({ promo = null }: { promo?: Promo | null }) {
  const [open, setOpen] = useState(false);
  const isEnglish = useLang() === "en";
  const pathname = usePathname() ?? "/";
  const links = isEnglish ? linksEn : linksFr;
  const bookHref = isEnglish ? "/en#quote" : "/contact";
  const bookLabel = isEnglish ? "Book" : "Réserver";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 text-white backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:h-[84px] sm:px-6 md:h-[96px]">

        {/* Logo */}
        <Link href={isEnglish ? "/en" : "/"} aria-label={isEnglish ? "Léman Auto Clean home" : "Accueil Léman Auto Clean"} onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Léman Auto Clean"
            width={340}
            height={128}
            className="h-12 w-auto object-contain sm:h-16 md:h-[72px]"
            priority
          />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-3 text-[13px] lg:flex xl:gap-6 xl:text-base">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}

          <LanguageSwitch current={isEnglish ? "en" : "fr"} />

          <Link
            href={bookHref}
            className="btn-shine rounded-full bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 xl:px-5"
          >
            {bookLabel}
          </Link>
        </nav>

        <div className="flex items-center gap-2 min-[380px]:gap-3 lg:hidden">
          <LanguageSwitch
            current={isEnglish ? "en" : "fr"}
            onSelect={() => setOpen(false)}
            className="hidden min-[360px]:inline-flex"
          />

          <Link
            href={bookHref}
            onClick={() => setOpen(false)}
            className="rounded-full bg-blue-500 px-3.5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 min-[380px]:px-4 min-[380px]:text-sm"
          >
            {bookLabel}
          </Link>

          {/* Burger */}
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={isEnglish ? (open ? "Close menu" : "Open menu") : open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-xl backdrop-blur-xl transition hover:border-blue-400 hover:text-blue-400 sm:h-11 sm:w-11 sm:text-2xl"
          >
            {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {promo && !pathname.startsWith("/carte-cadeau") && !pathname.startsWith("/en/gift-card") && (
        <PromoBanner promo={promo} lang={isEnglish ? "en" : "fr"} />
      )}

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 bottom-0 top-[72px] z-0 bg-black/45 backdrop-blur-2xl sm:top-[84px] lg:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="absolute left-0 right-0 top-full z-10 border-t border-white/10 bg-black/90 shadow-2xl shadow-black backdrop-blur-xl lg:hidden"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/92 via-black/78 to-black/88" />

              <nav className="relative mx-auto flex max-w-xl flex-col px-5 py-7 text-base sm:py-8 sm:text-lg">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/10 py-4 font-semibold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] transition hover:text-blue-400 sm:py-5"
                  >
                    {link.label}
                  </a>
                ))}

                <Link
                  href={bookHref}
                  onClick={() => setOpen(false)}
                  className="mt-7 rounded-full bg-blue-500 px-6 py-4 text-center font-semibold transition hover:bg-blue-400 sm:mt-8"
                >
                  {bookLabel}
                </Link>

                <div className="mt-6 flex justify-center">
                  <LanguageSwitch
                    current={isEnglish ? "en" : "fr"}
                    onSelect={() => setOpen(false)}
                  />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
