"use client";

import { useEffect, useMemo, useState } from "react";
import { FiArrowRight, FiGift } from "react-icons/fi";
import { business } from "@/data/business";
import {
  addMonths,
  formatGiftAmount,
  generateGiftCode,
  generateOrderRef,
  giftCard,
} from "@/data/giftCard";
import { useCurrency } from "@/hooks/useCurrency";

const texts = {
  fr: {
    eyebrow: "Votre commande",
    title: "Choisissez votre carte",
    amount: "Montant",
    other: "Autre",
    otherPlaceholder: "Montant libre",
    minimum: (min: string) => `Minimum ${min}`,
    buyer: "Votre nom *",
    email: "Votre e-mail *",
    phone: "Votre téléphone *",
    recipient: "Nom du bénéficiaire *",
    message: "Petit message (facultatif)",
    messagePlaceholder: "Joyeux Noël ! Ta voiture va adorer…",
    total: "Montant de la carte",
    submit: "Commander et payer avec Revolut",
    sending: "Envoi de la commande…",
    note:
      "Après validation, vous réglez avec Revolut. Votre carte cadeau vous est envoyée en PDF par e-mail dès réception du paiement.",
    subject: "Nouvelle carte cadeau",
  },
  en: {
    eyebrow: "Your order",
    title: "Choose your gift card",
    amount: "Amount",
    other: "Other",
    otherPlaceholder: "Custom amount",
    minimum: (min: string) => `Minimum ${min}`,
    buyer: "Your name *",
    email: "Your email *",
    phone: "Your phone *",
    recipient: "Recipient's name *",
    message: "Short message (optional)",
    messagePlaceholder: "Merry Christmas! Your car will love it…",
    total: "Gift card amount",
    submit: "Order and pay with Revolut",
    sending: "Sending your order…",
    note:
      "After confirming, you pay with Revolut. Your gift card is emailed to you as a PDF as soon as payment is received.",
    subject: "New gift card (English)",
  },
};

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400";

export default function GiftCardForm({ lang }: { lang: "fr" | "en" }) {
  const t = texts[lang];
  const currency = useCurrency();
  const [selected, setSelected] = useState<number | "other">(100);
  const [custom, setCustom] = useState("");
  const [recipient, setRecipient] = useState("");
  const [buyer, setBuyer] = useState("");
  const [message, setMessage] = useState("");
  const [code, setCode] = useState("");
  const [orderRef, setOrderRef] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);

  // Code créé dans le navigateur (évite tout décalage avec le rendu serveur).
  useEffect(() => {
    setCode(generateGiftCode());
    setOrderRef(generateOrderRef());
  }, []);

  const amount = selected === "other" ? Math.round(Number(custom) || 0) : selected;
  const validAmount = amount >= giftCard.minAmount;

  const order = useMemo(() => {
    const validUntil = addMonths(new Date(), giftCard.validityMonths).toISOString().slice(0, 10);
    const base = business.siteUrl;
    const cardParams = new URLSearchParams({
      code,
      montant: String(amount),
      devise: currency,
      pour: recipient,
      de: buyer,
      message,
      validite: validUntil,
      lang,
    });

    const cardLink = `${base}/carte-cadeau/carte?${cardParams.toString()}`;
    const payParams = new URLSearchParams({
      ref: orderRef,
      montant: String(amount),
      devise: currency,
      lang,
    });
    const sendParams = new URLSearchParams(cardParams);
    sendParams.set("ref", orderRef);
    sendParams.set("email", email);
    sendParams.set("tel", phone);

    return {
      validUntil,
      // La page de paiement ne reçoit que la référence : le code de la carte reste secret.
      nextPath: `/carte-cadeau/paiement?${payParams.toString()}`,
      cardLink,
      sendLink: `${base}/carte-cadeau/envoyer?${sendParams.toString()}`,
    };
  }, [amount, buyer, code, currency, email, lang, message, orderRef, phone, recipient]);

  // Envoi en arrière-plan puis ouverture de la page de paiement par le site lui-même
  // (ne dépend plus de la redirection du service de formulaire).
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;
    setSending(true);

    // Envoi « simple » (format formulaire) : compatible avec keepalive sur tous les navigateurs.
    const data = new URLSearchParams();
    new FormData(event.currentTarget).forEach((value, key) => {
      if (typeof value === "string") data.append(key, value);
    });

    // « keepalive » : l'envoi continue même après le changement de page,
    // on n'attend donc que quelques secondes au maximum.
    const request = fetch("https://formsubmit.co/ajax/lemanautoclean@gmail.com", {
      method: "POST",
      keepalive: true,
      headers: { Accept: "application/json" },
      body: data,
    }).catch(() => undefined);
    await Promise.race([request, new Promise((resolve) => setTimeout(resolve, 3000))]);

    window.location.href = order.nextPath;
  };

  return (
    <form
      action="https://formsubmit.co/lemanautoclean@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-blue-500/10 backdrop-blur-xl sm:p-7 md:p-8"
    >
      <input type="hidden" name="_subject" value={`${t.subject} ${orderRef} – ${formatGiftAmount(amount, currency)}`} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <input type="hidden" name="Type de demande" value="Carte cadeau" />
      <input type="hidden" name="Référence de commande (note Revolut)" value={orderRef} />
      <input type="hidden" name="Code carte cadeau (secret)" value={code} />
      <input type="hidden" name="Montant" value={formatGiftAmount(amount, currency)} />
      <input type="hidden" name="Valable jusqu'au" value={order.validUntil} />
      <input type="hidden" name="Langue" value={lang === "en" ? "Anglais" : "Français"} />
      <input type="hidden" name="Lien de la carte (PDF)" value={order.cardLink} />
      <input type="hidden" name="➜ Envoyer la carte au client (après paiement)" value={order.sendLink} />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <p className="mb-3 text-xs uppercase tracking-[0.32em] text-blue-400">{t.eyebrow}</p>
      <h2 className="mb-6 text-2xl font-black uppercase sm:text-3xl">{t.title}</h2>

      <p className="mb-3 text-sm font-semibold text-zinc-300">{t.amount}</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {giftCard.amounts.map((value) => {
          const active = selected === value;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={active}
              onClick={() => setSelected(value)}
              className={`h-14 rounded-2xl border text-lg font-black transition ${
                active
                  ? "border-blue-400 bg-blue-500/20 text-white shadow-lg shadow-blue-500/20"
                  : "border-white/10 bg-black/30 text-zinc-300 hover:border-blue-400/60"
              }`}
            >
              {formatGiftAmount(value, currency)}
            </button>
          );
        })}
        <button
          type="button"
          aria-pressed={selected === "other"}
          onClick={() => setSelected("other")}
          className={`col-span-2 h-14 rounded-2xl border text-sm font-semibold transition sm:col-span-1 ${
            selected === "other"
              ? "border-blue-400 bg-blue-500/20 text-white"
              : "border-white/10 bg-black/30 text-zinc-300 hover:border-blue-400/60"
          }`}
        >
          {t.other}
        </button>
      </div>

      {selected === "other" && (
        <div className="mt-3">
          <input
            type="number"
            inputMode="numeric"
            min={giftCard.minAmount}
            step={5}
            value={custom}
            onChange={(event) => setCustom(event.target.value)}
            className={inputClass}
            placeholder={`${t.otherPlaceholder} (${currency === "CHF" ? "CHF" : "€"})`}
          />
          <p className="mt-2 text-xs text-zinc-500">
            {t.minimum(formatGiftAmount(giftCard.minAmount, currency))}
          </p>
        </div>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col">
          <span className="mb-2 text-sm font-semibold text-zinc-300">{t.buyer}</span>
          <input
            required
            name="Acheteur"
            type="text"
            autoComplete="name"
            value={buyer}
            onChange={(event) => setBuyer(event.target.value)}
            className={inputClass}
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-2 text-sm font-semibold text-zinc-300">{t.recipient}</span>
          <input
            required
            name="Bénéficiaire"
            type="text"
            value={recipient}
            onChange={(event) => setRecipient(event.target.value)}
            className={inputClass}
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-2 text-sm font-semibold text-zinc-300">{t.email}</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={inputClass}
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-2 text-sm font-semibold text-zinc-300">{t.phone}</span>
          <input
            required
            name="Numéro de téléphone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className={inputClass}
          />
        </label>
        <label className="flex flex-col sm:col-span-2">
          <span className="mb-2 text-sm font-semibold text-zinc-300">{t.message}</span>
          <textarea
            name="Message pour le bénéficiaire"
            rows={3}
            maxLength={160}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={`${inputClass} resize-none`}
            placeholder={t.messagePlaceholder}
          />
        </label>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 rounded-3xl border border-blue-400/25 bg-blue-500/[0.08] p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-blue-500/15 text-xl text-blue-400">
            <FiGift aria-hidden="true" />
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">{t.total}</p>
        </div>
        <p className="text-3xl font-black text-blue-400">
          {validAmount ? formatGiftAmount(amount, currency) : "—"}
        </p>
      </div>

      <button
        type="submit"
        disabled={!validAmount || !code || !orderRef || sending}
        className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {sending ? t.sending : t.submit}
        {!sending && <FiArrowRight aria-hidden="true" />}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-zinc-500">{t.note}</p>
    </form>
  );
}
