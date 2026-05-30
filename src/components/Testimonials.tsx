"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Lucas M.",
    text: "Résultat incroyable. Ma voiture était comme neuve après la prestation.",
  },
  {
    name: "Sarah D.",
    text: "Très professionnel, ponctuel et travail ultra soigné.",
  },
  {
    name: "Thomas R.",
    text: "Le meilleur detailing du Chablais sans hésitation.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black px-6 py-32 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="mb-20 text-center">

          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-blue-400">
            AVIS CLIENTS
          </p>

          <h2 className="text-5xl font-black uppercase">
            Ils nous font confiance
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="mb-6 flex gap-1 text-blue-400">
                ★★★★★
              </div>

              <p className="mb-8 text-zinc-300">
                "{review.text}"
              </p>

              <h3 className="font-semibold text-white">
                {review.name}
              </h3>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}