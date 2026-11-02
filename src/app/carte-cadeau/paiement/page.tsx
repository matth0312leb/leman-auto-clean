import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiCopy, FiDownload } from "react-icons/fi";
import Footer from "@/components/Footer";
import { formatGiftAmount, giftCard } from "@/data/giftCard";

export const metadata: Metadata = {
  title: "Paiement de la carte cadeau",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<Record<string, string | undefined>>;
};

const texts = {
  fr: {
    eyebrow: "Commande enregistrée",
    title: "Votre carte cadeau",
    amount: "Montant à payer",
    code: "Votre code",
    how: "Sur la page Revolut, saisissez le montant ci-dessus et indiquez votre code en note du paiement.",
    button: "1. Payer avec Revolut",
    card: "2. Télécharger ma carte (PDF)",
    valid: "La carte est valable une fois le paiement reçu. Vous avez aussi reçu ce lien par e-mail.",
    alt: "Pas de compte Revolut ? Vous pouvez payer par carte bancaire, Apple Pay ou Google Pay directement sur la page Revolut.",
  },
  en: {
    eyebrow: "Order received",
    title: "Your gift card",
    amount: "Amount to pay",
    code: "Your code",
    how: "On the Revolut page, enter the amount above and add your code as the payment note.",
    button: "1. Pay with Revolut",
    card: "2. Download my card (PDF)",
    valid: "The card is valid once payment has been received. You have also received this link by email.",
    alt: "No Revolut account? You can pay by card, Apple Pay or Google Pay directly on the Revolut page.",
  },
};

export default async function PaiementPage({ searchParams }: Props) {
  const params = await searchParams;
  const lang = params.lang === "en" ? "en" : "fr";
  const t = texts[lang];
  const currency = params.devise === "CHF" ? "CHF" : "EUR";
  const amount = Math.max(0, Math.round(Number(params.montant) || 0));
  const code = (params.code ?? "").replace(/[^A-Z0-9-]/gi, "").slice(0, 20);

  const cardQuery = new URLSearchParams();
  for (const key of ["code", "montant", "devise", "pour", "de", "message", "validite", "lang"]) {
    const value = params[key];
    if (value) cardQuery.set(key, value.slice(0, 200));
  }

  return (
    <main lang={lang} className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative mx-auto flex min-h-[80svh] max-w-2xl items-center px-5 pb-14 pt-28 sm:px-6 sm:pt-32">
        <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-3xl" />

        <div className="relative w-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-center shadow-2xl shadow-blue-500/10 backdrop-blur-xl sm:p-10">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm">{t.eyebrow}</p>
          <h1 className="text-3xl font-black uppercase leading-tight sm:text-4xl">{t.title}</h1>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-400/30 bg-blue-500/[0.1] p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-blue-300">{t.amount}</p>
              <p className="mt-1 text-4xl font-black text-blue-400">{formatGiftAmount(amount, currency)}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.22em] text-zinc-400">
                <FiCopy aria-hidden="true" /> {t.code}
              </p>
              <p className="mt-2 select-all font-mono text-xl font-bold tracking-[0.12em] text-white">{code}</p>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-zinc-300 sm:text-base">{t.how}</p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={giftCard.revolutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-blue-500 px-7 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
            >
              {t.button}
              <FiArrowRight aria-hidden="true" />
            </a>

            <Link
              href={`/carte-cadeau/carte?${cardQuery.toString()}`}
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-black/40 px-7 text-base font-semibold text-white transition hover:border-blue-400 hover:text-blue-300"
            >
              <FiDownload aria-hidden="true" />
              {t.card}
            </Link>
          </div>

          <p className="mx-auto mt-5 max-w-md text-xs leading-relaxed text-zinc-400">{t.valid}</p>
          <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-zinc-500">{t.alt}</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
