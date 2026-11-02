import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import { FiEye, FiMail } from "react-icons/fi";
import { business } from "@/data/business";
import { formatDate, formatGiftAmount } from "@/data/giftCard";

/**
 * Page réservée à Matthieu (lien dans le mail de commande) :
 * une fois le paiement vérifié sur Revolut, elle prépare l'envoi de la carte au client.
 */
export const metadata: Metadata = {
  title: "Envoyer une carte cadeau",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<Record<string, string | undefined>>;
};

function whatsappNumber(raw: string) {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("00")) digits = digits.slice(2);
  else if (digits.startsWith("0") && digits.length === 10) digits = `33${digits.slice(1)}`;
  return digits;
}

export default async function EnvoyerPage({ searchParams }: Props) {
  const params = await searchParams;
  const lang = params.lang === "en" ? "en" : "fr";
  const currency = params.devise === "CHF" ? "CHF" : "EUR";
  const amount = Math.max(0, Math.round(Number(params.montant) || 0));
  const code = (params.code ?? "").replace(/[^A-Z0-9-]/gi, "").slice(0, 20);
  const ref = (params.ref ?? "").replace(/[^A-Z0-9-]/gi, "").slice(0, 20);
  const email = (params.email ?? "").slice(0, 120);
  const phone = whatsappNumber(params.tel ?? "");
  const buyer = (params.de ?? "").slice(0, 60);
  const recipient = (params.pour ?? "").slice(0, 60);
  const validUntil = params.validite ? formatDate(params.validite.slice(0, 10), lang) : "";

  const cardQuery = new URLSearchParams();
  for (const key of ["code", "montant", "devise", "pour", "de", "message", "validite", "lang"]) {
    const value = params[key];
    if (value) cardQuery.set(key, value.slice(0, 200));
  }
  const cardLink = `${business.siteUrl}/carte-cadeau/carte?${cardQuery.toString()}`;
  const amountText = formatGiftAmount(amount, currency).replace(" ", " ");

  const subject =
    lang === "en"
      ? `Your Léman Auto Clean gift card (${code})`
      : `Votre carte cadeau Léman Auto Clean (${code})`;

  const body =
    lang === "en"
      ? `Hello ${buyer},\n\nThank you, your payment has been received!\n\nHere is your ${amountText} gift card for ${recipient}:\n${cardLink}\n\nOpen the link and tap “Download as PDF” to save it.\nCode: ${code} – valid until ${validUntil}.\n\nTo book, simply reply to this email or message me on WhatsApp.\n\nMatthieu – Léman Auto Clean\n${business.phoneDisplay}`
      : `Bonjour ${buyer},\n\nMerci, votre paiement a bien été reçu !\n\nVoici votre carte cadeau de ${amountText} pour ${recipient} :\n${cardLink}\n\nOuvrez le lien puis appuyez sur « Télécharger en PDF » pour l'enregistrer.\nCode : ${code} – valable jusqu'au ${validUntil}.\n\nPour réserver, il suffit de répondre à cet e-mail ou de m'écrire sur WhatsApp.\n\nMatthieu – Léman Auto Clean\n${business.phoneDisplay}`;

  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const whatsapp = phone ? `https://wa.me/${phone}?text=${encodeURIComponent(body)}` : "";

  return (
    <main className="min-h-screen overflow-x-hidden bg-black px-5 pb-16 pt-28 text-white sm:pt-32">
      <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-blue-500/10 sm:p-8">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-blue-400">Envoi de la carte</p>
        <h1 className="text-2xl font-black uppercase sm:text-3xl">
          {code} · {amountText}
        </h1>

        <div className="mt-5 space-y-1 text-sm text-zinc-300">
          <p>
            Acheteur : <span className="font-semibold text-white">{buyer}</span>
          </p>
          <p>
            Bénéficiaire : <span className="font-semibold text-white">{recipient}</span>
          </p>
          <p>E-mail : {email}</p>
        </div>

        <p className="mt-5 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-4 text-sm leading-relaxed text-amber-100">
          Vérifie d&apos;abord sur Revolut que le paiement de <strong>{amountText}</strong> est
          bien arrivé, avec la référence <strong>{ref}</strong> en note si possible.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={mailto}
            className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-blue-500 px-6 font-semibold shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
          >
            <FiMail aria-hidden="true" /> Envoyer la carte par e-mail
          </a>
          {whatsapp && (
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-green-500 px-6 font-semibold transition hover:bg-green-400"
            >
              <FaWhatsapp aria-hidden="true" /> Envoyer par WhatsApp
            </a>
          )}
          <a
            href={cardLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm font-semibold text-zinc-200 transition hover:border-blue-400 hover:text-blue-300"
          >
            <FiEye aria-hidden="true" /> Voir la carte
          </a>
        </div>
      </div>
    </main>
  );
}
