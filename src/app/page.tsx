import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Technology from "@/components/Technology";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Bölüm 1: Hero - CTA burada zaten var */}
      <Hero />

      {/* Bölüm 2: Sorun ve Empati */}
      <Problem />

      {/* Bölüm 3: Nasıl Çalışır? */}
      <HowItWorks />

      {/* Bölüm 4: Teknoloji ve Güven */}
      <Technology />

      {/* Bölüm 5: İletişim */}
      <Contact />
    </>
  );
}
