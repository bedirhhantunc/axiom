"use client";

import Link from "next/link";
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
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight mb-6 max-w-4xl"
            style={{
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.9)",
              paintOrder: "stroke fill",
            }}
          >
            Kuşkudan Kesinliğe
            <motion.span
              className="block text-accent mt-2"
              style={{
                WebkitTextStroke: "2.5px rgba(255, 255, 255, 0.95)",
                paintOrder: "stroke fill",
              }}
            >
              Çocuğunuzun Gelişimsel Haritası
            </motion.span>
          </motion.h1>

          {/* Subheading with Border */}
          <motion.div
            variants={itemVariants}
            className="px-6 py-4 border-2 border-white rounded-2xl bg-[#2C3E50] mb-10 max-w-2xl shadow-2xl"
          >
            <p className="text-lg sm:text-xl text-white font-semibold leading-relaxed text-center">
              2-18 yaş arası çocuklar ve aileleri için yapay zeka destekli pedagojik ürünler.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <Link
              href="/analiz"
              className="group inline-flex items-center justify-center px-12 py-5 text-xl font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all duration-300 shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-accent/40 hover:-translate-y-1"
            >
              Ücretsiz Değerlendirme Başlat
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}
