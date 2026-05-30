"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <img
  src="/logo.png"
  alt="Léman Auto Clean"
  className="h-16 w-auto object-contain"
/>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#prestations"
            className="transition hover:text-blue-400"
          >
            Prestations
          </a>

          <a
            href="#avantapres"
            className="transition hover:text-blue-400"
          >
            Avant / Après
          </a>

          <a
            href="#contact"
            className="transition hover:text-blue-400"
          >
            Contact
          </a>
        </nav>

        {/* Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 md:hidden"
        >
          <span className="h-[2px] w-6 bg-white" />
          <span className="h-[2px] w-6 bg-white" />
          <span className="h-[2px] w-6 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10 bg-black/95 md:hidden"
          >
            <nav className="flex flex-col px-6 py-6 text-lg">

              <a
                href="#prestations"
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 transition hover:text-blue-400"
              >
                Prestations
              </a>

              <a
                href="#avantapres"
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 transition hover:text-blue-400"
              >
                Avant / Après
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="py-4 transition hover:text-blue-400"
              >
                Contact
              </a>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}