import type { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiGift,
  FiMapPin,
  FiNavigation,
  FiPhone,
  FiStar,
} from "react-icons/fi";
import Footer from "@/components/Footer";
import Prix from "@/components/Prix";
import WhatsappButton from "@/components/WhatsappButton";
import { business } from "@/data/business";
import { faqEn, formulesEn, optionsEn, vehiculesEn } from "@/data/english";
import { options, prestations } from "@/data/prestations";

export const metadata: Metadata = {
  title: { absolute: "Léman Auto Clean | Premium mobile car detailing in Geneva" },
  description:
    "Premium mobile car cleaning and detailing at your home or office in Geneva and around Lake Geneva. Interior, exterior or complete packages, by appointment.",
  alternates: {
    canonical: "/en",
    languages: { fr: "/", en: "/en" },
  },
  openGraph: {
    title: "Léman Auto Clean | Premium mobile car detailing in Geneva",
    description:
      "Premium car cleaning at your home or office in Geneva and around Lake Geneva, by appointment.",
    url: "/en",
    locale: "en_GB",
  },
};

const whatsappMessage =
  "Hello, I found Léman Auto Clean on your website and would like a quote for my car.";

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400";

const steps = [
  {
    icon: FiCalendar,
    title: "Book",
    text: "Send a request or a WhatsApp message. Photos of your car help me give you an accurate price.",
  },
  {
    icon: FiMapPin,
    title: "I come to you",
    text: "At your home or workplace, with professional equipment. You keep your day free.",
  },
  {
    icon: FiStar,
    title: "Enjoy",
    text: "Your car is returned spotless, inside and out, with a meticulous finish.",
  },
];

export default function EnglishPage() {
  return (
    <main lang="en" className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* Hero */}
      <section className="relative px-5 pb-14 pt-28 sm:px-6 sm:pt-32 md:pb-20 md:pt-40">
        <div className="absolute left-[-120px] top-24 h-[280px] w-[280px] rounded-full bg-blue-500/20 blur-3xl md:left-[15%] md:h-[420px] md:w-[420px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-12 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.9)] sm:w-16" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-300 sm:text-xs md:text-sm md:tracking-[0.4em]">
              Premium mobile car detailing
            </p>
          </div>

          <h1 className="text-[clamp(2.3rem,9.5vw,4.75rem)] font-black uppercase leading-[0.92]">
            Your car, spotless
            <br />
            <span className="bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
              without moving
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-200 sm:text-lg">
            High-end car cleaning at your home or office in Geneva and around
            Lake Geneva. Interior, exterior or complete packages, by
            appointment only.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-500/25 transition hover:bg-blue-400 sm:py-4 sm:text-base"
            >
              Get a free quote
              <FiArrowRight aria-hidden="true" className="transition group-hover:translate-x-1" />
            </a>

            <div className="grid grid-cols-2 gap-3 sm:flex">
              <a
                href={`${business.whatsappHref}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-black/40 px-5 py-3.5 text-sm font-semibold transition hover:border-green-400/70 hover:text-green-300 sm:py-4"
              >
                <FaWhatsapp aria-hidden="true" className="text-lg text-green-400" />
                WhatsApp
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-black/40 px-5 py-3.5 text-sm font-semibold transition hover:border-blue-400/70 hover:text-blue-300 sm:py-4"
              >
                <FiPhone aria-hidden="true" className="text-blue-400" />
                Call
              </a>
            </div>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              [`${business.googleRating?.rating ?? "5"}/5 ★`, `${business.googleRating?.count ?? ""} Google reviews`],
              ["By appointment", "At your place"],
              ["Area", "Geneva / Chablais"],
            ].map(([strong, text]) => (
              <p
                key={strong}
                className="border-l border-blue-400/45 pl-4 text-xs uppercase leading-relaxed tracking-widest text-zinc-300"
              >
                <span className="block font-bold text-white">{strong}</span>
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="services" className="relative scroll-mt-24 px-5 py-14 sm:px-6 md:py-20">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
            Packages
          </p>
          <h2 className="mb-8 text-3xl font-black uppercase sm:text-4xl">Our services</h2>

          <div className="grid gap-4 md:grid-cols-3">
            {prestations.map((item) => {
              const en = formulesEn[item.title];
              const isHighlighted = "highlighted" in item && item.highlighted;

              return (
                <div
                  key={item.title}
                  className={`relative flex min-w-0 flex-col rounded-3xl p-5 sm:p-6 ${
                    isHighlighted
                      ? "border border-blue-400/70 bg-blue-500/[0.12] shadow-2xl shadow-blue-500/20"
                      : "border border-white/10 bg-white/[0.06]"
                  }`}
                >
                  {isHighlighted && (
                    <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-blue-500 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] shadow-lg shadow-blue-500/40 ring-4 ring-black">
                      Most popular
                    </span>
                  )}

                  <span className="mb-4 w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-[10px] font-semibold tracking-[0.22em] text-blue-300">
                    {en?.badge ?? item.badge}
                  </span>
                  <h3 className="text-2xl font-black uppercase">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {en?.description ?? item.description}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                    {(en?.details ?? item.details).map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <FiCheck aria-hidden="true" className="mt-0.5 shrink-0 text-blue-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 grid grid-cols-2 gap-2">
                    {item.vehiclePrices.map((vehicle) => (
                      <div
                        key={vehicle.type}
                        className="rounded-xl border border-white/10 bg-black/40 px-2 py-2.5 text-center"
                      >
                        <p className="text-[11px] text-zinc-400">
                          {vehiculesEn[vehicle.type] ?? vehicle.type}
                        </p>
                        <p className="mt-1 font-black text-blue-400">
                          <Prix>{vehicle.price}</Prix>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            href="/en/gift-card"
            className="group relative mt-6 block overflow-hidden rounded-3xl border border-blue-400/50 bg-gradient-to-r from-blue-950/80 via-blue-600/25 to-blue-950/80 p-5 shadow-2xl shadow-blue-500/15 transition hover:border-blue-300 sm:p-7"
          >
            <div className="promo-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-500 text-2xl text-white shadow-lg shadow-blue-500/40">
                  <FiGift aria-hidden="true" className="promo-gift" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-300 sm:text-xs">Gift idea</p>
                  <h3 className="text-xl font-black uppercase sm:text-2xl">Gift card</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                    Give a car that looks brand new. Valid for 12 months on all services.
                  </p>
                </div>
              </div>
              <span className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-blue-700 shadow-lg shadow-blue-900/40 transition group-hover:bg-blue-50">
                Give a gift card
                <FiArrowRight aria-hidden="true" className="transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Options + travel */}
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400">Add-ons</p>
              <ul className="space-y-3 text-sm text-zinc-300">
                {options.map((option) => (
                  <li key={option.label} className="flex items-center justify-between gap-4">
                    <span>{optionsEn[option.label] ?? option.label}</span>
                    <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 font-semibold text-white">
                      <Prix>{option.price}</Prix>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-blue-400/25 bg-blue-500/[0.08] px-4 py-4">
                <FiMapPin aria-hidden="true" className="shrink-0 text-xl text-blue-400" />
                <p className="text-sm leading-snug text-zinc-300 sm:text-base">
                  <span className="block font-semibold text-white">Up to 30 km from Sciez</span>
                  Travel included
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                <FiNavigation aria-hidden="true" className="shrink-0 text-xl text-blue-400" />
                <p className="text-sm leading-snug text-zinc-300 sm:text-base">
                  <span className="block font-semibold text-white">Beyond 30 km</span>
                  <Prix>{"Charged at 0,50 €/km"}</Prix>
                </p>
              </div>
              <p className="px-1 text-xs leading-relaxed text-zinc-500">
                Prices are indicative and confirmed with your quote, depending on the
                actual condition of the vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-24 px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
            How it works
          </p>
          <h2 className="mb-8 text-3xl font-black uppercase sm:text-4xl">Simple and hassle-free</h2>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-blue-500/15 text-xl text-blue-400">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-black uppercase">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ + quote form */}
      <section id="quote" className="scroll-mt-28 px-5 pb-16 sm:px-6 md:pb-24">
        <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div id="faq" className="scroll-mt-24 rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-blue-400">FAQ</p>
            <div className="space-y-5">
              {faqEn.map((item) => (
                <div key={item.question}>
                  <h3 className="font-semibold text-white">{item.question}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                    <Prix>{item.answer}</Prix>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <form
            action="https://formsubmit.co/lemanautoclean@gmail.com"
            method="POST"
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-blue-500/10 backdrop-blur-xl sm:p-7"
          >
            <input type="hidden" name="_subject" value="New request (English) – Léman Auto Clean" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={`${business.siteUrl}/en/thank-you`} />
            <input type="hidden" name="Type de demande" value="Particulier (anglais)" />
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-blue-400">Free quote</p>
            <h2 className="mb-6 text-2xl font-black uppercase sm:text-3xl">Request a quote</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col">
                <span className="mb-2 text-sm font-semibold text-zinc-300">Name *</span>
                <input required name="Nom" type="text" autoComplete="name" className={inputClass} placeholder="Your name" />
              </label>
              <label className="flex flex-col">
                <span className="mb-2 text-sm font-semibold text-zinc-300">Phone *</span>
                <input required name="Numéro de téléphone" type="tel" autoComplete="tel" className={inputClass} placeholder="+41 …" />
              </label>
              <label className="flex flex-col sm:col-span-2">
                <span className="mb-2 text-sm font-semibold text-zinc-300">Email *</span>
                <input required name="E-mail" type="email" autoComplete="email" className={inputClass} placeholder="you@example.com" />
              </label>
              <label className="flex flex-col">
                <span className="mb-2 text-sm font-semibold text-zinc-300">Vehicle type *</span>
                <select required name="Type de véhicule" defaultValue="" className={`${inputClass} h-[50px] py-0`}>
                  <option value="" disabled>Choose</option>
                  {Object.entries(vehiculesEn).map(([fr, en]) => (
                    <option key={fr} value={fr}>{en}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col">
                <span className="mb-2 text-sm font-semibold text-zinc-300">Package *</span>
                <select required name="Prestation souhaitée" defaultValue="" className={`${inputClass} h-[50px] py-0`}>
                  <option value="" disabled>Choose</option>
                  {prestations.map((item) => (
                    <option key={item.title} value={item.title}>
                      {item.title} – {formulesEn[item.title]?.badge.toLowerCase() ?? ""}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col sm:col-span-2">
                <span className="mb-2 text-sm font-semibold text-zinc-300">Town / area</span>
                <input name="Ville d'intervention" type="text" autoComplete="address-level2" className={inputClass} placeholder="e.g. Cologny" />
              </label>
              <label className="flex flex-col sm:col-span-2">
                <span className="mb-2 text-sm font-semibold text-zinc-300">Message</span>
                <textarea
                  name="Commentaire"
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Car model, condition, add-ons you would like…"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
            >
              Send my request
            </button>
            <p className="mt-4 text-xs leading-relaxed text-zinc-500">
              * Required. Your details are never shared. Reply within 24 hours.{" "}
              <Link href="/" className="text-blue-300 hover:text-blue-200">Version française</Link>
            </p>
          </form>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
