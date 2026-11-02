import Image from "next/image";
import { FiCalendar, FiCheck, FiGift, FiMail } from "react-icons/fi";
import Footer from "@/components/Footer";
import GiftCardForm from "@/components/GiftCardForm";
import WhatsappButton from "@/components/WhatsappButton";
import { giftCard } from "@/data/giftCard";

const texts = {
  fr: {
    eyebrow: "Carte cadeau",
    title1: "Offrez une voiture",
    title2: "comme neuve",
    intro:
      "Le cadeau idéal pour un passionné d'automobile, un parent ou un conjoint : une prestation de nettoyage premium à domicile, à utiliser quand il le souhaite.",
    perks: [
      `Valable ${giftCard.validityMonths} mois sur toutes les prestations`,
      "Code unique, carte PDF envoyée par e-mail",
      "Prestation à domicile, sur rendez-vous",
    ],
    steps: [
      { icon: FiGift, title: "Choisissez", text: "Le montant et le nom du bénéficiaire." },
      { icon: FiMail, title: "Payez", text: "Par Revolut, en quelques secondes." },
      { icon: FiCalendar, title: "Offrez", text: "Recevez la carte en PDF, prête à offrir." },
    ],
    cardLabel: "CARTE CADEAU",
  },
  en: {
    eyebrow: "Gift card",
    title1: "Give a car that",
    title2: "looks brand new",
    intro:
      "The perfect gift for a car lover, a parent or a partner: a premium car cleaning service at home, to be used whenever they like.",
    perks: [
      `Valid for ${giftCard.validityMonths} months on all services`,
      "Unique code, PDF card sent by email",
      "At-home service, by appointment",
    ],
    steps: [
      { icon: FiGift, title: "Choose", text: "The amount and the recipient's name." },
      { icon: FiMail, title: "Pay", text: "With Revolut, in a few seconds." },
      { icon: FiCalendar, title: "Give", text: "Receive the PDF card, ready to give." },
    ],
    cardLabel: "GIFT CARD",
  },
};

export default function GiftCardPage({ lang }: { lang: "fr" | "en" }) {
  const t = texts[lang];

  return (
    <main lang={lang} className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative px-5 pb-12 pt-28 sm:px-6 sm:pt-32 md:pb-16 md:pt-40">
        <div className="absolute left-[-120px] top-24 h-[280px] w-[280px] rounded-full bg-blue-500/20 blur-3xl md:left-[15%] md:h-[420px] md:w-[420px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.9)] sm:w-16" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-300 sm:text-xs md:text-sm md:tracking-[0.4em]">
                {t.eyebrow}
              </p>
            </div>

            <h1 className="text-[clamp(2.3rem,9.5vw,4.5rem)] font-black uppercase leading-[0.92]">
              {t.title1}
              <br />
              <span className="bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
                {t.title2}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-200 sm:text-lg">{t.intro}</p>

            <ul className="mt-6 space-y-2.5 text-sm text-zinc-300 sm:text-base">
              {t.perks.map((perk) => (
                <li key={perk} className="flex gap-3">
                  <FiCheck aria-hidden="true" className="mt-1 shrink-0 text-blue-400" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          {/* Aperçu de la carte */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-6 rounded-[2rem] bg-blue-500/30 blur-3xl" />
            <div className="relative aspect-[1.6/1] overflow-hidden rounded-[1.75rem] border border-blue-400/40 bg-gradient-to-br from-zinc-900 via-black to-blue-950 p-6 shadow-2xl shadow-blue-500/25">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <Image src="/logo.png" alt="Léman Auto Clean" width={170} height={64} className="h-10 w-auto sm:h-12" />
                  <FiGift aria-hidden="true" className="text-2xl text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.4em] text-blue-300">{t.cardLabel}</p>
                  <p className="mt-1 font-mono text-sm tracking-[0.2em] text-zinc-400">LAC-XXXX-XXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-6 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-3">
          {t.steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-500/15 text-xl text-blue-400">
                  <Icon aria-hidden="true" />
                </span>
                <p className="text-sm leading-snug text-zinc-400">
                  <span className="block font-semibold text-white">
                    {index + 1}. {step.title}
                  </span>
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="commande" className="scroll-mt-24 px-5 pb-16 pt-6 sm:px-6 md:pb-24">
        <div className="mx-auto max-w-3xl">
          <GiftCardForm lang={lang} />
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
