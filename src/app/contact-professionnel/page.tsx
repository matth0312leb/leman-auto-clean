import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiBriefcase, FiMail, FiPhone } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Devis professionnel nettoyage automobile",
  description:
    "Demande de devis professionnel pour nettoyage automobile sur site : garages, concessions, flottes, vendeurs auto et véhicules d'entreprise dans le Chablais, Genève et Haute-Savoie.",
  alternates: {
    canonical: "/contact-professionnel",
  },
  openGraph: {
    title: "Devis professionnel | Léman Auto Clean",
    description:
      "Contact dédié aux professionnels pour nettoyage automobile sur site, entretien régulier, préparation avant vente et remise en état ciblée.",
    url: "/contact-professionnel",
  },
};

const contacts = [
  {
    label: "WhatsApp pro",
    value: "Réponse rapide",
    href: "https://wa.me/33604475205",
    icon: FaWhatsapp,
    highlight: true,
  },
  {
    label: "Téléphone",
    value: "+33 6 04 47 52 05",
    href: "tel:+33604475205",
    icon: FiPhone,
  },
  {
    label: "Email",
    value: "lemanautoclean@gmail.com",
    href: "mailto:lemanautoclean@gmail.com",
    icon: FiMail,
  },
];

export default function ContactProfessionnelPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative px-5 pb-12 pt-28 sm:px-6 sm:pt-32 md:pb-16 md:pt-40">
        <div className="absolute left-1/2 top-28 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-blue-500/12 blur-3xl md:h-[460px] md:w-[460px]" />
        <div className="absolute right-[-120px] top-72 h-[300px] w-[300px] rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/professionnels"
            className="mb-10 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-blue-400 hover:text-blue-400"
          >
            Retour aux offres pro
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="min-w-0">
              <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
                Contact professionnel
              </p>

              <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl">
                Demande de devis pro
              </h1>

              <p className="mt-6 max-w-xl leading-relaxed text-zinc-300">
                Une page dédiée aux garages, concessions, vendeurs auto, flottes
                et entreprises. Précisez votre volume, votre fréquence et le type
                d'intervention souhaité pour recevoir une proposition claire.
              </p>

              <div className="mt-8 grid gap-3">
                {contacts.map((contact) => {
                  const Icon = contact.icon;

                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      className={`group relative flex min-w-0 items-center gap-4 rounded-3xl border p-5 transition ${
                        contact.highlight
                          ? "border-green-400/45 bg-green-500/[0.08] shadow-lg shadow-green-500/10 hover:border-green-400/70"
                          : "border-white/10 bg-white/[0.06] hover:border-blue-400/50"
                      }`}
                    >
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-500/15 text-2xl text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                        <Icon aria-hidden="true" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
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
            </div>

            <form
              action="https://formsubmit.co/lemanautoclean@gmail.com"
              method="POST"
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-blue-500/10 backdrop-blur-sm sm:p-7 md:p-8 md:backdrop-blur-xl"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nouvelle demande professionnelle Léman Auto Clean"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="Type de demande" value="Professionnel" />

              <div className="mb-8">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-blue-500/15 text-2xl text-blue-400">
                  <FiBriefcase aria-hidden="true" />
                </div>

                <p className="mb-3 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
                  Formulaire pro
                </p>

                <h2 className="text-2xl font-black uppercase sm:text-3xl md:text-4xl">
                  Votre besoin professionnel
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-zinc-300">
                    Entreprise *
                  </span>
                  <input
                    required
                    name="Entreprise"
                    type="text"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
                    placeholder="Nom de l'entreprise"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-zinc-300">
                    Nom du contact *
                  </span>
                  <input
                    required
                    name="Nom du contact"
                    type="text"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
                    placeholder="Votre nom"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-zinc-300">
                    E-mail *
                  </span>
                  <input
                    required
                    name="E-mail"
                    type="email"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
                    placeholder="contact@entreprise.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-zinc-300">
                    Téléphone *
                  </span>
                  <input
                    required
                    name="Téléphone"
                    type="tel"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
                    placeholder="+33 6 ..."
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-zinc-300">
                    Type d'activité *
                  </span>
                  <select
                    required
                    name="Type d'activité"
                    defaultValue=""
                    className="h-[50px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-blue-400"
                  >
                    <option value="" disabled>
                      À choisir
                    </option>
                    <option value="Garage / concession">Garage / concession</option>
                    <option value="Vendeur automobile">Vendeur automobile</option>
                    <option value="Flotte d'entreprise">Flotte d'entreprise</option>
                    <option value="VTC / taxi">VTC / taxi</option>
                    <option value="Autre professionnel">Autre professionnel</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-zinc-300">
                    Nombre de véhicules *
                  </span>
                  <input
                    required
                    name="Nombre de véhicules"
                    type="number"
                    min="1"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
                    placeholder="Ex : 3, 10, 25..."
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-zinc-300">
                    Fréquence souhaitée *
                  </span>
                  <select
                    required
                    name="Fréquence souhaitée"
                    defaultValue=""
                    className="h-[50px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-blue-400"
                  >
                    <option value="" disabled>
                      À choisir
                    </option>
                    <option value="Ponctuel">Ponctuel</option>
                    <option value="Hebdomadaire">Hebdomadaire</option>
                    <option value="Mensuel">Mensuel</option>
                    <option value="Selon arrivage / besoin">Selon arrivage / besoin</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-zinc-300">
                    Lieu d'intervention *
                  </span>
                  <input
                    required
                    name="Lieu d'intervention"
                    type="text"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
                    placeholder="Ville / adresse du site"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-semibold text-zinc-300">
                  Besoin souhaité *
                </span>
                <textarea
                  required
                  name="Besoin professionnel"
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
                  placeholder="Préparation avant vente, entretien régulier, remise en état ciblée, véhicules de direction, flotte... Précisez le type de véhicules et le niveau de finition attendu."
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 sm:w-auto"
              >
                Envoyer ma demande pro
                <FiArrowRight aria-hidden="true" />
              </button>

              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                * Champs obligatoires. Demande réservée aux professionnels.
                Réponse rapide avec proposition adaptée au volume et à la fréquence.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
