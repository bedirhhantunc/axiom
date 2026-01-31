import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Technology from "@/components/Technology";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Bölüm 1: Hero - CTA burada zaten var */}
      <Hero />

      {/* Bölüm 2: Sorun ve Empati */}
      <Problem />

      {/* Bölüm 3: Çözüm ve Ürünler */}
      <Products />

      {/* Bölüm 4: Nasıl Çalışır? */}
      <HowItWorks />

      {/* Bölüm 5: Teknoloji ve Güven */}
      <Technology />

      {/* Bölüm 6: Fiyatlandırma */}
      <Pricing />

      {/* Bölüm 7: İletişim */}
      <Contact />
    </>
  );
}
