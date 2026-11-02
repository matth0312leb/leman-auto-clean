import type { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowLeft, FiCamera } from "react-icons/fi";
import Footer from "@/components/Footer";
import { business } from "@/data/business";
import AnimatedCheck from "@/components/AnimatedCheck";

export const metadata: Metadata = {
  title: "Demande envoyée",
  description: "Votre demande a bien été envoyée à Léman Auto Clean.",
  robots: { index: false, follow: false },
};

const whatsappMessage =
  "Bonjour, je viens d'envoyer une demande sur le site Léman Auto Clean. Voici les photos de mon véhicule :";

export default function MerciPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative mx-auto flex min-h-[78svh] max-w-3xl items-center px-5 pb-14 pt-28 sm:px-6 sm:pt-32">
        <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-3xl" />

        <div className="relative w-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-center shadow-2xl shadow-blue-500/10 backdrop-blur-xl sm:p-10">
          <AnimatedCheck />

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

          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-blue-400/25 bg-blue-500/[0.08] p-4 text-left shadow-lg shadow-blue-500/10 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-500/15 text-xl text-blue-400">
                <FiCamera aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                  Prenez les devants
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  Envoyez-moi dès maintenant quelques{" "}
                  <span className="font-semibold text-white">photos de votre véhicule</span>{" "}
                  (intérieur, extérieur et zones à traiter) sur WhatsApp : je pourrai
                  vous confirmer un tarif plus précis, plus rapidement.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`${business.whatsappHref}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-green-500 px-6 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-green-400 sm:text-base"
            >
              <FaWhatsapp aria-hidden="true" className="text-lg" />
              Envoyer mes photos
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
