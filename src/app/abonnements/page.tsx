import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { FiArrowRight, FiCheckCircle, FiClock, FiMapPin, FiRefreshCw } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Abonnements nettoyage auto mensuel",
  description:
    "Abonnements mensuels Léman Auto Clean pour garder votre véhicule propre toute l'année : entretien intérieur ou intérieur + extérieur, sur rendez-vous dans le Chablais, Genève et Haute-Savoie.",
  alternates: {
    canonical: "/abonnements",
  },
  openGraph: {
    title: "Abonnements mensuels | Léman Auto Clean",
    description:
      "Un entretien mensuel simple pour maintenir votre véhicule propre après une première prestation standard.",
    url: "/abonnements",
  },
};

const plans = [
  {
    name: "Entretien intérieur",
    target: "Idéal habitacle du quotidien",
    note: "Parfait pour les trajets quotidiens, les familles ou les véhicules de fonction.",
    items: [
      "Aspiration habitacle",
      "Dépoussiérage des plastiques",
      "Nettoyage des tapis",
      "Vitres intérieures",
      "Parfum habitacle",
    ],
    href: "/contact?formule=Abonnement%20int%C3%A9rieur",
  },
  {
    name: "Entretien intérieur + extérieur",
    target: "Idéal véhicule régulier ou professionnel",
    note: "La solution la plus complète pour garder un véhicule propre dedans comme dehors.",
    items: [
      "Entretien intérieur",
      "Lavage extérieur",
      "Nettoyage des jantes",
      "Vitres extérieures",
      "Brillance pneus",
    ],
    featured: true,
    href: "/contact?formule=Abonnement%20int%C3%A9rieur%20%2B%20ext%C3%A9rieur",
  },
];

const conditions = [
  {
    icon: FiRefreshCw,
    title: "Base propre obligatoire",
    text: "Avant de démarrer un abonnement, une prestation standard est réalisée afin de remettre le véhicule à niveau. L'abonnement sert ensuite à maintenir le véhicule propre.",
  },
  {
    icon: FiClock,
    title: "Engagement flexible",
    text: "Engagement minimum conseillé de 3 mois. Une formule sans engagement peut être proposée, avec un tarif mensuel légèrement plus élevé.",
  },
  {
    icon: FiMapPin,
    title: "Déplacement",
    text: "Déplacement inclus dans le secteur d'intervention habituel. Un supplément peut être appliqué au-delà selon la distance.",
  },
];

const notes = [
  "Abonnement réservé à un entretien régulier, pas à une remise en état complète chaque mois.",
  "Options disponibles en supplément : poils d'animaux, shampoing sièges, coffre, cuirs, décontamination ou protection.",
  "Créneau mensuel défini ensemble, uniquement sur rendez-vous.",
  "Tarif adapté selon le véhicule, le lieu d'intervention et les options souhaitées.",
];

export default function AbonnementsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative px-5 pb-14 pt-32 sm:px-6 sm:pt-36 md:pb-20 md:pt-44">
        <div className="absolute left-1/2 top-24 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl md:h-[420px] md:w-[420px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
              Entretien mensuel
            </p>

            <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl">
              Abonnements nettoyage auto
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Une solution simple pour garder votre véhicule propre toute
              l&apos;année, avec un passage mensuel sur rendez-vous. Pas du
              detailing, pas une remise en état complète : un vrai entretien
              régulier pour conserver une voiture agréable au quotidien.
            </p>
          </div>

        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-12 sm:px-6 md:py-18">
        <div className="absolute left-[-140px] top-10 h-[360px] w-[360px] rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute right-[-140px] bottom-0 h-[340px] w-[340px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-5">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative overflow-visible rounded-3xl border p-5 sm:p-7 ${
                plan.featured
                  ? "border-blue-400/45 bg-blue-500/[0.1] shadow-2xl shadow-blue-500/15 backdrop-blur-sm md:backdrop-blur-xl"
                  : "border-white/10 bg-zinc-950/85 shadow-2xl shadow-blue-500/5 backdrop-blur-sm md:backdrop-blur-xl"
              }`}
            >
              {plan.featured && (
                <div className="absolute left-1/2 top-0 z-10 inline-flex -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 px-5 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-500/25">
                  Le plus complet
                </div>
              )}

              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-blue-400">
                1 passage / mois
              </p>

              <h2 className="text-2xl font-black uppercase sm:text-3xl">
                {plan.name}
              </h2>

              <p className="mt-3 text-sm text-zinc-400 sm:text-base">
                {plan.target}
              </p>

              <div className="mt-6 space-y-3">
                {plan.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-zinc-200">
                    <FiCheckCircle className="shrink-0 text-lg text-blue-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/35 p-4 text-sm leading-relaxed text-zinc-300">
                {plan.note}
              </div>

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-sm leading-relaxed text-zinc-400">
                  Tarif mensuel personnalisé selon le véhicule, la distance et
                  les options. Devis clair avant mise en place.
                </p>

                <Link
                  href={plan.href}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
                >
                  Demander un devis
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-12 sm:px-6 md:py-18">
        <div className="absolute left-1/2 top-20 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl md:mb-12">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
              Conditions
            </p>

            <h2 className="text-3xl font-black uppercase sm:text-4xl md:text-5xl">
              Un cadre clair, sans mauvaise surprise
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {conditions.map((condition) => {
              const Icon = condition.icon;

              return (
                <article
                  key={condition.title}
                  className="rounded-3xl border border-white/10 bg-zinc-950/85 p-5 shadow-2xl shadow-blue-500/5 backdrop-blur-sm transition hover:border-blue-400/40 sm:p-6 md:backdrop-blur-xl"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-blue-500/15 text-2xl text-blue-400">
                    <Icon aria-hidden="true" />
                  </div>

                  <h3 className="mb-3 text-lg font-black uppercase">
                    {condition.title}
                  </h3>

                  <p className="leading-relaxed text-zinc-400">
                    {condition.text}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm sm:p-7 md:backdrop-blur-xl">
            <div className="grid gap-4 md:grid-cols-2">
              {notes.map((note) => (
                <div key={note} className="flex gap-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-lg text-blue-400" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 pt-8 sm:px-6 md:pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-400/25 bg-blue-500/[0.08] p-6 text-center shadow-2xl shadow-blue-500/10 sm:p-8 md:p-10">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-300 md:text-sm">
            Mise en place
          </p>

          <h2 className="text-3xl font-black uppercase sm:text-4xl">
            On définit le rythme ensemble
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-zinc-300">
            Envoyez le modèle du véhicule, votre localisation et le type
            d&apos;abonnement souhaité. Je vous réponds avec une proposition
            adaptée et un premier rendez-vous de remise à niveau.
          </p>

          <Link
            href="/contact?formule=Abonnement%20mensuel"
            className="mt-7 inline-flex rounded-full bg-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
          >
            Demander mon abonnement
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
