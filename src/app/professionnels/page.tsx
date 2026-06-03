import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { FiArrowRight, FiBriefcase, FiCheckCircle, FiClock, FiMapPin } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Nettoyage automobile pour professionnels",
  description:
    "Léman Auto Clean accompagne garages, concessions, vendeurs auto et entreprises pour le nettoyage automobile premium à domicile ou sur site dans le Chablais, Genève et Haute-Savoie.",
  alternates: {
    canonical: "/professionnels",
  },
  openGraph: {
    title: "Professionnels | Léman Auto Clean",
    description:
      "Nettoyage automobile premium pour garages, concessions, vendeurs auto, flottes et véhicules de direction.",
    url: "/professionnels",
  },
};

const audiences = [
  "Garages et concessions",
  "Vendeurs automobiles",
  "Mandataires auto",
  "Flottes d'entreprise",
  "VTC, taxis et véhicules de service",
  "Véhicules de direction",
];

const services = [
  {
    title: "Préparation avant vente",
    text: "Mise en valeur intérieure et extérieure avant livraison, reprise, annonce ou présentation client.",
  },
  {
    title: "Entretien régulier",
    text: "Interventions ponctuelles ou récurrentes pour maintenir une flotte propre et présentable.",
  },
  {
    title: "Remise en état ciblée",
    text: "Nettoyage approfondi selon l'état du véhicule : habitacle, coffre, jantes, plastiques, vitres et finitions.",
  },
];

const advantages = [
  {
    icon: FiClock,
    title: "Organisation flexible",
    text: "Créneaux définis selon vos contraintes, uniquement sur rendez-vous.",
  },
  {
    icon: FiMapPin,
    title: "Intervention sur site",
    text: "Déplacement dans le Chablais, Genève et Haute-Savoie selon le volume et le besoin.",
  },
  {
    icon: FiBriefcase,
    title: "Devis personnalisé",
    text: "Tarif adapté au nombre de véhicules, à la fréquence et au niveau de finition attendu.",
  },
];

export default function ProfessionnelsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative px-5 pb-14 pt-32 sm:px-6 sm:pt-36 md:pb-20 md:pt-44">
        <div className="absolute left-1/2 top-24 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl md:h-[420px] md:w-[420px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <div className="min-w-0">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
              Offres professionnelles
            </p>

            <h1 className="max-w-4xl text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl">
              Nettoyage automobile pour professionnels
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Léman Auto Clean accompagne les professionnels de l&apos;automobile et
              les entreprises pour l&apos;entretien, la préparation et la remise en
              état de véhicules, avec un service soigné, fiable et adapté à vos
              contraintes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
              >
                Demander un devis pro
                <FiArrowRight aria-hidden="true" />
              </Link>

              <a
                href="tel:+33604475205"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-4 font-semibold text-zinc-200 transition hover:border-blue-400 hover:text-blue-400"
              >
                Appeler directement
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm sm:p-7 md:backdrop-blur-xl">
            <h2 className="mb-5 text-xl font-black uppercase sm:text-2xl">
              Pour qui ?
            </h2>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {audiences.map((audience) => (
                <div
                  key={audience}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-200"
                >
                  <FiCheckCircle className="shrink-0 text-lg text-blue-400" />
                  <span>{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-12 sm:px-6 md:py-18">
        <div className="absolute left-[-120px] top-12 h-[320px] w-[320px] rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute right-[-160px] bottom-0 h-[360px] w-[360px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl md:mb-12">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
              Solutions
            </p>

            <h2 className="text-3xl font-black uppercase sm:text-4xl md:text-5xl">
              Des prestations adaptées à votre activité
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-white/10 bg-zinc-950/85 p-5 shadow-2xl shadow-blue-500/5 backdrop-blur-sm transition hover:border-blue-400/40 sm:p-6 md:backdrop-blur-xl"
              >
                <h3 className="mb-4 text-xl font-black uppercase">
                  {service.title}
                </h3>

                <p className="leading-relaxed text-zinc-400">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 md:py-18">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {advantages.map((advantage) => {
            const Icon = advantage.icon;

            return (
              <article
                key={advantage.title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm sm:p-6 md:backdrop-blur-xl"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-blue-500/15 text-2xl text-blue-400">
                  <Icon aria-hidden="true" />
                </div>

                <h3 className="mb-3 text-lg font-black uppercase">
                  {advantage.title}
                </h3>

                <p className="leading-relaxed text-zinc-400">{advantage.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-5 pb-16 pt-8 sm:px-6 md:pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-400/25 bg-blue-500/[0.08] p-6 text-center shadow-2xl shadow-blue-500/10 sm:p-8 md:p-10">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-300 md:text-sm">
            Devis professionnel
          </p>

          <h2 className="text-3xl font-black uppercase sm:text-4xl">
            Besoin d&apos;une intervention régulière ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-zinc-300">
            Indiquez le type de véhicules, le volume, la fréquence souhaitée et
            le lieu d&apos;intervention. Je vous réponds avec une proposition claire
            et adaptée.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
          >
            Contacter Léman Auto Clean
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
