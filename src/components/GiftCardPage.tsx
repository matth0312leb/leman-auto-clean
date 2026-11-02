import { FiCalendar, FiCheck, FiGift, FiMail } from "react-icons/fi";
import Footer from "@/components/Footer";
import GiftCardForm from "@/components/GiftCardForm";
import GiftCardPreview from "@/components/GiftCardPreview";
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
    seoEyebrow: "Idée cadeau locale",
    seoTitle: "Une carte cadeau nettoyage auto, du Chablais à Genève",
    seoText: [
      "Vous cherchez une idée cadeau originale pour Noël, un anniversaire ou une fête des pères ? La carte cadeau Léman Auto Clean offre un nettoyage automobile premium réalisé directement au domicile ou sur le lieu de travail du bénéficiaire.",
      "Elle est utilisable à Thonon-les-Bains, Évian-les-Bains, Douvaine, Sciez, Annemasse, Genève et dans tout le Chablais, jusqu'à Morzine et Abondance. Le bénéficiaire choisit librement sa prestation : nettoyage intérieur, lavage extérieur ou formule complète.",
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      { q: "Comment offrir la carte cadeau ?", a: "Choisissez le montant, indiquez le nom du bénéficiaire et réglez avec Revolut (carte bancaire, Apple Pay ou Google Pay acceptés). La carte vous est envoyée en PDF par e-mail dès réception du paiement, prête à imprimer ou à transférer." },
      { q: "Combien de temps est-elle valable ?", a: "La carte cadeau est valable 12 mois à compter de son achat, sur toutes les prestations Léman Auto Clean." },
      { q: "Où peut-elle être utilisée ?", a: "À domicile ou sur le lieu de travail, dans le Chablais, à Thonon, Évian, Douvaine, Annemasse, Genève et en Haute-Savoie. Le déplacement est inclus jusqu'à 30 km de Sciez." },
      { q: "Et si la prestation coûte plus cher que la carte ?", a: "La carte est déduite du prix de la prestation et le complément est réglé sur place. Elle s'utilise en une seule fois." },
    ],
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
    seoEyebrow: "Local gift idea",
    seoTitle: "A car cleaning gift card, from Geneva to the Chablais",
    seoText: [
      "Looking for an original gift for Christmas, a birthday or Father's Day? The Léman Auto Clean gift card offers a premium car cleaning service carried out at the recipient's home or workplace.",
      "It can be used in Geneva and its surroundings, as well as Thonon-les-Bains, Évian-les-Bains, Douvaine, Annemasse and the whole Chablais, up to Morzine and Abondance. The recipient freely chooses the service: interior, exterior or complete package.",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "How do I give the gift card?", a: "Choose the amount, enter the recipient's name and pay with Revolut (card, Apple Pay or Google Pay accepted). The card is emailed to you as a PDF as soon as payment is received, ready to print or forward." },
      { q: "How long is it valid?", a: "The gift card is valid for 12 months from purchase, on all Léman Auto Clean services." },
      { q: "Where can it be used?", a: "At home or at the workplace, in Geneva, Thonon, Évian, Douvaine, Annemasse, the Chablais and Haute-Savoie. Travel is included up to 30 km from Sciez." },
      { q: "What if the service costs more than the card?", a: "The card is deducted from the price of the service and the difference is paid on site. It can be used once." },
    ],
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
          <GiftCardPreview label={t.cardLabel} />
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

      {/* Texte local + FAQ (référencement Google) */}
      <section className="px-5 pb-16 sm:px-6 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-blue-400">{t.seoEyebrow}</p>
            <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl">{t.seoTitle}</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              {t.seoText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-blue-400">FAQ</p>
            <h2 className="mb-5 text-2xl font-black uppercase sm:text-3xl">{t.faqTitle}</h2>
            <div className="space-y-5">
              {t.faq.map((item) => (
                <div key={item.q}>
                  <h3 className="font-semibold text-white">{item.q}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              inLanguage: lang,
              mainEntity: t.faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: lang === "en" ? "Léman Auto Clean gift card" : "Carte cadeau Léman Auto Clean",
              serviceType: lang === "en" ? "Car cleaning gift card" : "Carte cadeau nettoyage automobile",
              provider: { "@id": "https://www.leman-autoclean.com/#localbusiness" },
              areaServed: ["Genève", "Thonon-les-Bains", "Évian-les-Bains", "Douvaine", "Annemasse", "Chablais", "Haute-Savoie"],
              offers: giftCard.amounts.map((value) => ({
                "@type": "Offer",
                price: value,
                priceCurrency: "EUR",
                url: `https://www.leman-autoclean.com${lang === "en" ? "/en/gift-card" : "/carte-cadeau"}`,
              })),
            },
          ]),
        }}
      />

      <Footer />
      <WhatsappButton />
    </main>
  );
}
