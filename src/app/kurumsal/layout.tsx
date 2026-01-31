import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurumsal Çözümler | Axiom",
  description: "Okullar, klinikler ve rehabilitasyon merkezleri için özel Axiom çözümleri. Toplu lisans avantajları ve kurumsal destek.",
};

export default function KurumsalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
