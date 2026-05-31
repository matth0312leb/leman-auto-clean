import Link from "next/link";
import Footer from "@/components/Footer";
import OptionsMultiSelect from "@/components/OptionsMultiSelect";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

type ContactPageProps = {
  searchParams?: Promise<{
    formule?: string;
  }>;
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

const options = [
  "Poils d'animaux",
  "Shampoing des sièges, 5 places",
  "Nourrissage des cuirs",
  "Nettoyage approfondi du coffre",
  "Décontamination carrosserie",
  "Cire hydrophobe / protectrice",
];

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const selectedFormula = params?.formule ?? "";

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative mx-auto max-w-5xl px-5 py-10 sm:px-6 md:py-14">
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
              Réponse rapide pour organiser votre nettoyage automobile à domicile.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  className="group flex min-w-0 items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition hover:border-blue-400/50"
                >
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

          <form
            action="https://formsubmit.co/lemanautoclean@gmail.com"
            method="POST"
            className="mt-10 rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl sm:p-7 md:p-8"
          >
            <input type="hidden" name="_subject" value="Nouvelle demande Léman Auto Clean" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="mb-8">
              <p className="mb-3 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
                FORMULAIRE
              </p>

              <h2 className="text-2xl font-black uppercase sm:text-3xl md:text-4xl">
                Demande de contact
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col">
                <span className="mb-2 block text-sm font-semibold text-zinc-300">
                  Nom *
                </span>
                <input
                  required
                  name="Nom"
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
                  placeholder="Votre nom"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-2 block text-sm font-semibold text-zinc-300">
                  Prénom
                </span>
                <input
                  name="Prénom"
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
                  placeholder="Votre prénom"
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
                  placeholder="votre@email.com"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-zinc-300">
                  Numéro de téléphone
                </span>
                <input
                  name="Numéro de téléphone"
                  type="tel"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
                  placeholder="+33 6 ..."
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-zinc-300">
                  Type de véhicule *
                </span>
                <select
                  required
                  name="Type de véhicule"
                  className="h-[50px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-blue-400"
                  defaultValue=""
                >
                  <option value="" disabled>
                    À choisir
                  </option>
                  <option value="Citadine">Citadine</option>
                  <option value="Berline">Berline</option>
                  <option value="SUV / Break">SUV / Break</option>
                  <option value="Monospace">Monospace</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-zinc-300">
                  Nombre de véhicules
                </span>
                <input
                  name="Nombre de véhicules"
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-2 block text-sm font-semibold text-zinc-300">
                  Prestation souhaitée *
                </span>
                <select
                  required
                  name="Prestation souhaitée"
                  defaultValue={selectedFormula}
                  className="h-[50px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-blue-400"
                >
                  <option value="" disabled>
                    À choisir
                  </option>
                  <option value="Essentiel">Essentiel</option>
                  <option value="Équilibre">Équilibre</option>
                  <option value="Élégance">Élégance</option>
                </select>
              </label>

              <OptionsMultiSelect options={options} />
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold text-zinc-300">
                Commentaire
              </span>
              <textarea
                name="Commentaire"
                rows={5}
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
                placeholder="Décrivez votre véhicule, son état actuel, les options souhaitées... Si vous avez plusieurs véhicules, précisez les modèles et prestations souhaitées pour chacun."
              />
            </label>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-blue-500 px-8 py-4 font-semibold text-white transition hover:bg-blue-400 sm:w-auto"
            >
              Envoyer ma demande
            </button>

            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              * Champs obligatoires. Vos données ne sont jamais revendues.
              Réponse sous 24h.
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
