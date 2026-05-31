import Link from "next/link";
import Footer from "@/components/Footer";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalPageProps = {
  title: string;
  description: string;
  sections: LegalSection[];
};

export default function LegalPage({ title, description, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative mx-auto max-w-4xl px-5 py-10 sm:px-6 md:py-14">
        <div className="absolute left-1/2 top-40 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative">
          <Link
            href="/"
            className="mb-10 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-blue-400 hover:text-blue-400"
          >
            Retour au site
          </Link>

          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
            INFORMATIONS
          </p>

          <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {description}
          </p>

          <div className="mt-10 space-y-5">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl sm:p-7"
              >
                <h2 className="mb-4 text-xl font-black uppercase sm:text-2xl">
                  {section.title}
                </h2>

                <div className="space-y-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
