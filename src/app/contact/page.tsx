import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

type ContactPageProps = {
  searchParams?: Promise<{
    formule?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Réserver un nettoyage auto à domicile",
  description:
    "Contactez Léman Auto Clean pour réserver un nettoyage automobile premium, un lavage voiture à domicile ou un detailing à domicile dans le Chablais, Douvaine, Thonon-les-Bains, Genève et Haute-Savoie.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Réserver Léman Auto Clean | Nettoyage auto à domicile",
    description:
      "Demande de devis pour nettoyage automobile premium à domicile dans le Chablais, Genève et Haute-Savoie.",
    url: "/contact",
  },
};

const contacts = [
  {
    label: "Téléphone",
    value: "+33 6 04 47 52 05",
    href: "tel:+33604475205",
    icon: FiPhone,
  },
  {
    label: "WhatsApp",
    value: "Envoyer un message",
    href: "https://wa.me/33604475205",
    icon: FaWhatsapp,
    highlight: "Réponse rapide",
  },
  {
    label: "Email",
    value: "lemanautoclean@gmail.com",
    href: "mailto:lemanautoclean@gmail.com",
    icon: FiMail,
  },
  {
    label: "Instagram",
    value: "@LemanAutoClean",
    href: "https://instagram.com/LemanAutoClean",
    icon: FaInstagram,
  },
];

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const selectedFormula = params?.formule ?? "";

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative mx-auto max-w-5xl px-5 pb-10 pt-28 sm:px-6 sm:pt-32 md:pb-14 md:pt-36">
        <div className="absolute left-1/2 top-48 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative">
          <Link
            href="/"
            className="mb-10 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-blue-400 hover:text-blue-400"
          >
            Retour au site
          </Link>

          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
              CONTACT
            </p>

            <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl">
              Réserver une prestation
            </h1>

            <p className="mt-6 max-w-2xl leading-relaxed text-zinc-400">
              Contactez Léman Auto Clean par le canal qui vous convient le mieux.
              Réponse rapide pour organiser votre prestation à domicile, selon
              votre véhicule, vos besoins et vos disponibilités.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              const isHighlighted = "highlight" in contact;

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  className={`group relative flex min-w-0 items-center gap-4 rounded-3xl border p-5 backdrop-blur-sm transition md:backdrop-blur-xl ${
                    isHighlighted
                      ? "border-green-400/45 bg-green-500/[0.08] shadow-lg shadow-green-500/10 hover:border-green-400/70"
                      : "border-white/10 bg-white/[0.06] hover:border-blue-400/50"
                  }`}
                >
                  {isHighlighted && (
                    <span className="absolute right-4 top-4 rounded-full border border-green-400/30 bg-green-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-green-300">
                      {contact.highlight}
                    </span>
                  )}

                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-500/15 text-2xl text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                    <Icon />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                      {contact.label}
                    </p>

                    <p className="mt-1 break-words font-semibold text-white">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <ContactForm selectedFormula={selectedFormula} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
