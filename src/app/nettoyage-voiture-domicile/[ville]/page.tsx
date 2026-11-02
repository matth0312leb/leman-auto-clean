import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiCheck, FiMapPin, FiNavigation } from "react-icons/fi";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import { business } from "@/data/business";
import { prestations } from "@/data/prestations";
import { getVille, villes } from "@/data/villes";
import Prix, { CurrencyToggle } from "@/components/Prix";

type VillePageProps = {
  params: Promise<{ ville: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return villes.map((ville) => ({ ville: ville.slug }));
}

export async function generateMetadata({ params }: VillePageProps): Promise<Metadata> {
  const { ville: slug } = await params;
  const ville = getVille(slug);
  if (!ville) return {};

  const title = `Nettoyage voiture à domicile à ${ville.name}`;
  const description = `Nettoyage auto à domicile à ${ville.name} : intérieur, lavage extérieur et detailing premium sur rendez-vous. Formules dès 60€, devis gratuit.`;
  const path = `/nettoyage-voiture-domicile/${ville.slug}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Léman Auto Clean`,
      description,
      url: path,
    },
  };
}

export default async function VillePage({ params }: VillePageProps) {
  const { ville: slug } = await params;
  const ville = getVille(slug);
  if (!ville) notFound();

  const autresVilles = villes.filter((item) => item.slug !== ville.slug);

  const faq = [
    {
      question: `Intervenez-vous à ${ville.name} ?`,
      answer: `Oui. Léman Auto Clean se déplace à ${ville.name} et dans les communes voisines (${ville.communes
        .slice(0, 3)
        .join(", ")}…), à domicile ou sur votre lieu de travail, uniquement sur rendez-vous.`,
    },
    {
      question: "Le déplacement est-il facturé ?",
      answer:
        "Le déplacement est inclus jusqu'à 30 km de Sciez. Au-delà de 30 km, il est facturé 0,50 €/km.",
    },
    {
      question: "De quoi avez-vous besoin sur place ?",
      answer:
        "Idéalement d'une prise électrique à moins de 20 mètres du véhicule et, pour un lavage extérieur, d'un robinet d'eau accessible.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* En-tête */}
      <section className="relative px-5 pb-12 pt-28 sm:px-6 sm:pt-32 md:pb-16 md:pt-40">
        <div className="absolute left-[-120px] top-24 h-[280px] w-[280px] rounded-full bg-blue-500/20 blur-3xl md:left-[15%] md:h-[420px] md:w-[420px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-12 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.9)] sm:w-16" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-300 sm:text-xs md:text-sm md:tracking-[0.4em]">
              Nettoyage auto à domicile
            </p>
          </div>

          <h1 className="text-[clamp(2.1rem,8.5vw,4.25rem)] font-black uppercase leading-[0.95]">
            Nettoyage voiture à
            <br />
            <span className="inline-block whitespace-nowrap bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-[clamp(1.6rem,7.2vw,4.25rem)] text-transparent">
              {ville.name}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-200 sm:text-lg">
            {ville.intro}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {ville.context}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-500/25 transition hover:bg-blue-400 sm:py-4 sm:text-base"
            >
              Demander un devis gratuit
              <FiArrowRight aria-hidden="true" className="transition group-hover:translate-x-1" />
            </Link>

            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-black/40 px-6 py-3.5 text-sm font-semibold transition hover:border-green-400/70 hover:text-green-300 sm:py-4 sm:text-base"
            >
              <FaWhatsapp aria-hidden="true" className="text-lg text-green-400" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Formules */}
      <section className="relative px-5 py-14 sm:px-6 md:py-20">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
            Formules
          </p>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-black uppercase sm:text-4xl">
              Nos prestations à {ville.shortName}
            </h2>
            <CurrencyToggle className="w-fit" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {prestations.map((item) => {
              const isHighlighted = "highlighted" in item && item.highlighted;

              return (
                <div
                  key={item.title}
                  className={`flex min-w-0 flex-col rounded-3xl p-5 sm:p-6 ${
                    isHighlighted
                      ? "border border-blue-400/70 bg-blue-500/[0.12] shadow-2xl shadow-blue-500/20"
                      : "border border-white/10 bg-white/[0.06]"
                  }`}
                >
                  <span className="mb-4 w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-[10px] font-semibold tracking-[0.22em] text-blue-300">
                    {item.badge}
                  </span>
                  <h3 className="text-2xl font-black uppercase">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>

                  <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                    {item.details.slice(0, 3).map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <FiCheck aria-hidden="true" className="mt-0.5 shrink-0 text-blue-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">À partir de</p>
                    <p className="text-3xl font-black text-blue-400">
                      <Prix>{item.price}</Prix>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-blue-400/25 bg-blue-500/[0.08] px-4 py-3">
              <FiMapPin aria-hidden="true" className="shrink-0 text-xl text-blue-400" />
              <p className="text-sm leading-snug text-zinc-300 sm:text-base">
                <span className="block font-semibold text-white">Jusqu&apos;à 30 km de Sciez</span>
                Déplacement inclus
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3">
              <FiNavigation aria-hidden="true" className="shrink-0 text-xl text-blue-400" />
              <p className="text-sm leading-snug text-zinc-300 sm:text-base">
                <span className="block font-semibold text-white">Au-delà de 30 km</span>
                <Prix>{"Facturation de 0,50\u00a0€/km"}</Prix>
              </p>
            </div>
          </div>

          <Link
            href="/#prestations"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
          >
            Voir le détail des tarifs et des options
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Secteur + FAQ */}
      <section className="px-5 pb-16 sm:px-6 md:pb-24">
        <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-blue-400">Secteur</p>
            <h2 className="mb-5 text-2xl font-black uppercase">
              {ville.name} et alentours
            </h2>
            <div className="flex flex-wrap gap-2">
              {[ville.name, ...ville.communes].map((commune) => (
                <span
                  key={commune}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-semibold text-blue-200"
                >
                  {commune}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-blue-400">FAQ</p>
            <div className="space-y-5">
              {faq.map((item) => (
                <div key={item.question}>
                  <h3 className="font-semibold text-white">{item.question}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                    <Prix>{item.answer}</Prix>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
            Également à domicile
          </p>
          <div className="flex flex-wrap gap-2">
            {autresVilles.map((item) => (
              <Link
                key={item.slug}
                href={`/nettoyage-voiture-domicile/${item.slug}`}
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:border-blue-400 hover:text-blue-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
