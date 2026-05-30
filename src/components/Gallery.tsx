"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1200&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white">

      {/* Glow */}
      <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-20 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-blue-400">
            GALERIE
          </p>

          <h2 className="text-5xl font-black uppercase md:text-6xl">
            Nos réalisations
          </h2>

        </div>

        {/* Images */}
        <div className="grid gap-8 md:grid-cols-3">

          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[30px] border border-white/10"
            >

              <div className="overflow-hidden">

                <img
                  src={image}
                  alt="Léman Auto Clean"
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}