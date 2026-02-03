"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamic import for Three.js scene (no SSR)
const Scene = dynamic(() => import("./Scene").then((mod) => mod.Scene), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full absolute inset-0 z-0 bg-gradient-to-br from-primary/5 to-accent/5" />
  ),
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Scene />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background/50 via-background/30 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-transparent to-background/20" />

      {/* Content - Centered with 3D Text Effects */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Main Heading with Text Stroke */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary leading-tight mb-8 max-w-5xl"
            style={{
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.9)",
              paintOrder: "stroke fill",
            }}
          >
            Kuşkudan, Kesinliğe...
          </motion.h1>

          {/* Subheading with Border */}
          <motion.div
            variants={itemVariants}
            className="px-8 py-5 border-2 border-accent rounded-2xl bg-accent mb-10 max-w-3xl shadow-2xl"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold leading-relaxed text-center">
              2-18 Yaş Arası Çocuklar ve Aileleri İçin Yapay Zeka Destekli Pedagojik Çözümler.
            </p>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}
