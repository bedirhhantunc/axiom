import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Değerlendirme Talebi | Axiom",
  description: "Axiom analiz modülünü seçin ve çocuğunuzun gelişim yolculuğunu başlatın.",
};

export default function AnalizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
