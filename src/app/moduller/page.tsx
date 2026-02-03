import Products from "@/components/Products";
import Pricing from "@/components/Pricing";

export const metadata = {
  title: "Modüller | AXIOM",
  description:
    "AXIOM'un 5 kapsamlı analiz modülünü ve fiyatlandırma seçeneklerini inceleyin. Çocuk gelişimi için yapay zeka destekli değerlendirme çözümleri.",
};

export default function ModullerPage() {
  return (
    <main className="pt-24">
      <Products />
      <Pricing />
    </main>
  );
}
