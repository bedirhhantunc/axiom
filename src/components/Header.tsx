"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  const getLink = (anchor: string) => (isHomePage ? anchor : `/${anchor}`);

  const navItems = [
    { label: "Anasayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Modüller", href: getLink("#urunler") },
    { label: "Paketler", href: getLink("#fiyatlandirma") },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-4 px-4">
      <motion.div
        className="flex items-center justify-between px-8 py-3 bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-border/50 w-full max-w-5xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center -space-x-1 cursor-default"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src="/logo/axiom-icon-light.svg"
            alt="AXIOM"
            className="h-8 w-8"
          />
          <span className="text-xl font-bold text-primary">AXIOM</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={item.href}
                className="text-sm text-primary hover:text-accent transition-colors font-medium"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/kurumsal"
              className="text-sm text-primary hover:text-accent transition-colors font-medium"
            >
              Kurumsal İşbirlikleri
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/analiz"
              className="inline-flex items-center justify-center px-5 py-2 text-sm text-white bg-accent hover:bg-accent-hover rounded-full transition-colors font-medium shadow-md shadow-accent/20"
            >
              Değerlendirme Talebi
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          aria-label="Menüyü aç/kapat"
        >
          <Menu className="h-6 w-6 text-primary" />
        </motion.button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              aria-label="Menüyü kapat"
            >
              <X className="h-6 w-6 text-primary" />
            </motion.button>

            {/* Mobile Logo */}
            <motion.div
              className="absolute top-6 left-6 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <img
                src="/logo/axiom-icon-light.svg"
                alt="AXIOM"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-primary">AXIOM</span>
            </motion.div>

            {/* Mobile Nav Items */}
            <div className="flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <Link
                    href={item.href}
                    className="text-lg text-primary font-medium hover:text-accent transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6 flex flex-col gap-3"
              >
                <Link
                  href="/kurumsal"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-primary border-2 border-primary/20 rounded-full hover:border-primary transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  Kurumsal İşbirlikleri
                </Link>
                <Link
                  href="/analiz"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white bg-accent hover:bg-accent-hover rounded-full transition-colors font-medium shadow-md shadow-accent/20"
                  onClick={toggleMenu}
                >
                  Değerlendirme Talebi
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
