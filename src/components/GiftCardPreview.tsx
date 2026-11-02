"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { FiGift } from "react-icons/fi";

/** Aperçu de la carte cadeau : flotte doucement et s'incline en 3D sous la souris / le doigt. */
export default function GiftCardPreview({ label }: { label: string }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 160, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), { stiffness: 160, damping: 18 });
  const shineX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);

  const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative mx-auto w-full max-w-md [perspective:1100px]">
      <div className="absolute inset-6 rounded-[2rem] bg-blue-500/30 blur-3xl" />

      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          onPointerMove={onMove}
          onPointerLeave={reset}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative aspect-[1.6/1] overflow-hidden rounded-[1.75rem] border border-blue-400/40 bg-gradient-to-br from-zinc-900 via-black to-blue-950 p-6 shadow-2xl shadow-blue-500/25"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl" />
          {/* Reflet qui suit le mouvement */}
          <motion.div
            aria-hidden="true"
            style={{ left: shineX }}
            className="pointer-events-none absolute -top-1/2 h-[200%] w-1/3 -translate-x-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />

          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-start justify-between">
              <Image src="/logo.png" alt="Léman Auto Clean" width={170} height={64} className="h-10 w-auto sm:h-12" />
              <FiGift aria-hidden="true" className="promo-gift text-2xl text-blue-400" />
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.4em] text-blue-300">{label}</p>
              <p className="mt-1 font-mono text-sm tracking-[0.2em] text-zinc-400">LAC-XXXX-XXXX</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
