import type { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import Footer from "@/components/Footer";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Demande envoyée",
  description: "Votre demande a bien été envoyée à Léman Auto Clean.",
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative mx-auto flex min-h-[78svh] max-w-3xl items-center px-5 pb-14 pt-28 sm:px-6 sm:pt-32">
        <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-3xl" />

        <div className="relative w-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-center shadow-2xl shadow-blue-500/10 backdrop-blur-xl sm:p-10">
          <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-blue-500 text-3xl text-white shadow-lg shadow-blue-500/40">
            <FiCheck aria-hidden="true" />
          </div>

          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
            Demande envoyée
          </p>

          <h1 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
            Merci pour votre confiance
          </h1>

          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-zinc-300">
            Votre demande a bien été reçue. Je vous recontacte{" "}
            <span className="font-semibold text-white">{business.responseTime}</span>{" "}
            pour confirmer le tarif et convenir d&apos;un rendez-vous.
          </p>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
            Besoin d&apos;une réponse plus rapide ? Écrivez-moi directement sur WhatsApp.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-green-500 px-6 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-green-400 sm:text-base"
            >
              <FaWhatsapp aria-hidden="true" className="text-lg" />
              WhatsApp
            </a>

            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm font-semibold text-zinc-200 transition hover:border-blue-400 hover:text-blue-300 sm:text-base"
            >
              <FiArrowLeft aria-hidden="true" />
              Retour au site
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
