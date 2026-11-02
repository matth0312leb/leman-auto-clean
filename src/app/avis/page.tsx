import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiStar } from "react-icons/fi";
import Footer from "@/components/Footer";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Laisser un avis",
  description: "Partagez votre expérience Léman Auto Clean en laissant un avis sur Google.",
  robots: { index: false, follow: false },
};

export default function AvisPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative mx-auto flex min-h-[80svh] max-w-3xl items-center px-5 pb-14 pt-28 sm:px-6 sm:pt-32">
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-3xl" />

        <div className="relative w-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-center shadow-2xl shadow-blue-500/10 backdrop-blur-xl sm:p-10">
          <div className="mb-5 flex justify-center gap-1.5 text-2xl text-blue-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <FiStar key={index} aria-hidden="true" className="fill-blue-400" />
            ))}
          </div>

          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
            Votre avis compte
          </p>

          <h1 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
            Merci pour votre confiance
          </h1>

          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-zinc-300">
            Votre véhicule vous plaît ? Un avis sur Google prend moins d&apos;une
            minute et aide énormément une petite entreprise locale comme
            Léman Auto Clean.
          </p>

          <a
            href={business.googleReviewWriteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-blue-500 px-8 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400 sm:w-auto"
          >
            <FiStar aria-hidden="true" className="fill-white text-lg" />
            Laisser un avis sur Google
          </a>

          <div className="mx-auto mt-10 max-w-xs">
            <div className="rounded-3xl bg-white p-4 shadow-2xl shadow-blue-500/20">
              <Image
                src="/qr-avis-google.svg"
                alt="QR code pour laisser un avis Google à Léman Auto Clean"
                width={256}
                height={256}
                unoptimized
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-zinc-500">
              Ou scannez avec l&apos;appareil photo
            </p>
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 transition hover:text-blue-300"
          >
            <FiArrowLeft aria-hidden="true" />
            Retour au site
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
