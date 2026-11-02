import type { Metadata } from "next";
import Image from "next/image";
import { FiGift } from "react-icons/fi";
import PrintButton from "@/components/PrintButton";
import { business } from "@/data/business";
import { formatDate, formatGiftAmount } from "@/data/giftCard";

export const metadata: Metadata = {
  title: "Carte cadeau",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{
    code?: string;
    montant?: string;
    devise?: string;
    pour?: string;
    de?: string;
    message?: string;
    validite?: string;
    lang?: string;
  }>;
};

const texts = {
  fr: {
    label: "Carte cadeau",
    for: "Pour",
    from: "De la part de",
    code: "Code",
    valid: "Valable jusqu'au",
    terms:
      "Valable une seule fois sur toutes les prestations Léman Auto Clean, à domicile et sur rendez-vous. Non remboursable, non échangeable contre espèces.",
    book: "Réservation",
    print: "Télécharger en PDF",
    help: "Sur téléphone : « Télécharger en PDF » puis choisissez « Enregistrer en PDF ».",
  },
  en: {
    label: "Gift card",
    for: "For",
    from: "From",
    code: "Code",
    valid: "Valid until",
    terms:
      "Valid once on all Léman Auto Clean services, at home and by appointment. Non-refundable, not exchangeable for cash.",
    book: "Booking",
    print: "Download as PDF",
    help: "On a phone: tap “Download as PDF”, then choose “Save as PDF”.",
  },
};

function clean(value: string | undefined, max: number) {
  return (value ?? "").slice(0, max);
}

export default async function CartePage({ searchParams }: Props) {
  const params = await searchParams;
  const lang = params.lang === "en" ? "en" : "fr";
  const t = texts[lang];
  const currency = params.devise === "CHF" ? "CHF" : "EUR";
  const amount = Math.max(0, Math.round(Number(params.montant) || 0));
  const code = clean(params.code, 20).replace(/[^A-Z0-9-]/gi, "");
  const recipient = clean(params.pour, 60);
  const from = clean(params.de, 60);
  const message = clean(params.message, 160);
  const validUntil = params.validite ? formatDate(clean(params.validite, 10), lang) : "";

  return (
    <main lang={lang} className="gift-print min-h-screen bg-black px-4 pb-16 pt-28 text-white sm:pt-32">
      <style>{`
        @page { size: A5 landscape; margin: 0; }
        @media print {
          html, body { background: #fff !important; }
          header, footer, [role="dialog"], .no-print { display: none !important; }
          .gift-print { padding: 0 !important; min-height: 0 !important; }
          .gift-card { width: 210mm !important; height: 148mm !important; max-width: none !important; border-radius: 0 !important; margin: 0 !important; box-shadow: none !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>

      <div className="no-print mx-auto mb-6 flex max-w-3xl flex-col items-center gap-3 text-center">
        <PrintButton label={t.print} />
        <p className="text-xs text-zinc-500">{t.help}</p>
      </div>

      <article className="gift-card relative mx-auto aspect-[210/148] w-full max-w-3xl overflow-hidden rounded-[2rem] border-2 border-blue-500 bg-white text-zinc-900 shadow-2xl shadow-blue-500/25">
        {/* Filet décoratif léger (peu d'encre à l'impression) */}
        <div className="absolute inset-[2.2%] rounded-[1.4rem] border border-blue-200" />
        <div className="absolute -right-[12%] -top-[30%] h-[70%] w-[45%] rounded-full bg-blue-50" />

        <div className="relative flex h-full flex-col justify-between p-[5.5%]">
          <div className="flex items-start justify-between gap-4">
            <div className="rounded-2xl bg-black px-[3%] py-[2%]">
              <Image
                src="/logo.png"
                alt="Léman Auto Clean"
                width={340}
                height={128}
                unoptimized
                className="h-auto w-[clamp(90px,22vw,170px)]"
              />
            </div>
            <div className="text-right">
              <p className="flex items-center justify-end gap-2 text-[clamp(8px,1.6vw,13px)] font-semibold uppercase tracking-[0.35em] text-blue-600">
                <FiGift aria-hidden="true" /> {t.label}
              </p>
              <p className="mt-1 text-[clamp(28px,8vw,64px)] font-black leading-none text-blue-600">
                {formatGiftAmount(amount, currency)}
              </p>
            </div>
          </div>

          <div className="grid gap-[3%] sm:grid-cols-2">
            <div className="min-w-0 space-y-[4%]">
              {recipient && (
                <p className="text-[clamp(11px,2.2vw,18px)] text-zinc-700">
                  <span className="block text-[0.7em] uppercase tracking-[0.25em] text-zinc-400">{t.for}</span>
                  <span className="font-bold text-zinc-900">{recipient}</span>
                </p>
              )}
              {from && (
                <p className="text-[clamp(11px,2.2vw,18px)] text-zinc-700">
                  <span className="block text-[0.7em] uppercase tracking-[0.25em] text-zinc-400">{t.from}</span>
                  <span className="font-semibold text-zinc-900">{from}</span>
                </p>
              )}
              {message && (
                <p className="text-[clamp(10px,1.8vw,15px)] italic leading-snug text-zinc-600">« {message} »</p>
              )}
            </div>

            <div className="min-w-0 self-end rounded-2xl border border-blue-200 bg-blue-50/60 p-[4%] sm:text-right">
              <p className="text-[clamp(8px,1.4vw,11px)] uppercase tracking-[0.25em] text-zinc-500">{t.code}</p>
              <p className="font-mono text-[clamp(14px,3vw,24px)] font-bold tracking-[0.12em] text-zinc-900">{code}</p>
              {validUntil && (
                <p className="mt-1 text-[clamp(9px,1.6vw,13px)] text-blue-700">
                  {t.valid} {validUntil}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1 border-t border-zinc-200 pt-[2%] text-[clamp(7px,1.25vw,10px)] leading-snug text-zinc-500 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <p className="max-w-[60%]">{t.terms}</p>
            <p className="shrink-0 sm:text-right">
              {t.book} : {business.phoneDisplay} · leman-autoclean.com
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
