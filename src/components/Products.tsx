"use client";

import { useState } from "react";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  shortName: string;
  description: string;
  targetAudience: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  restricted?: boolean;
}

const products: Product[] = [
  {
    id: "gelisim-takipcisi",
    name: "Axiom Gelişim Takipçisi",
    shortName: "Gelişim Takipçisi",
    description: "Çocuğun bilişsel, dil, psikososyal ve motor becerilerini tarar. Riskli alanlar için 'Bireysel Destek Planı' oluşturur.",
    targetAudience: "2-18 yaş arası çocukların ebeveynleri",
    features: ["Bilişsel beceri analizi", "Dil gelişimi takibi", "Motor beceri değerlendirmesi", "Bireysel destek planı"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    id: "davranis-analisti",
    name: "Axiom Davranış ve Duygu Analisti",
    shortName: "Davranış ve Duygu Analisti",
    description: "Anksiyete, depresyon, DEHB, saldırganlık gibi hassas konuları tarar. Etik sınırları korumak için sadece uzmanlara açıktır.",
    targetAudience: "Psikolog ve Psikiyatrlar",
    features: ["Davranış Problemi Tarama", "Duygusal Problem Tarama", "Detaylı Rapor", "Bireysel Destek Planı"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "from-purple-500/20 to-purple-600/20",
    restricted: true,
  },
  {
    id: "ogrenme-mimari",
    name: "Axiom Öğrenme Mimarı",
    shortName: "Öğrenme Mimarı",
    description: "Öğrenme engellerini ve öğrenme stilini belirler. Motivasyon eksikliği problemini ortadan kaldırır.",
    targetAudience: "Ebeveynler ve Eğitim Kurumları",
    features: ["Öğrenme Engellerinin Tespiti", "Öğrenme Stili Analizi", "Bireysel Destek Planı", "Öğrenme Önerileri"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "from-green-500/20 to-green-600/20",
  },
  {
    id: "kariyer-pusulasi",
    name: "Axiom Kariyer Pusulası",
    shortName: "Kariyer Pusulası",
    description: "Çocuğun sanat, spor, teknik veya sosyal alanlara olan ilgisini ölçer ve geleceğe yönelik mesleki eşleştirme yapar.",
    targetAudience: "11-18 yaş arası gençler ve ebeveynleri",
    features: ["İlgi Alanı Tespiti", "Yetenek Haritası", "Kariyer Planı", "Detaylı Rapor"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    id: "aile-kocu",
    name: "Axiom Aile Koçu",
    shortName: "Aile Koçu",
    description: "Aile içi iletişim, rol dağılımı ve disiplin yöntemlerini analiz eder. 'Aile Eğitim Programı' ile ebeveynlere özel reçeteler sunar.",
    targetAudience: "Aileler",
    features: ["İletişim analizi", "Rol dağılımı", "Disiplin yöntemleri", "Aile eğitim programı"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: "from-pink-500/20 to-rose-500/20",
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="urunler" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Modüllerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            MODÜLLER
          </h2>
          <p className="text-lg text-muted">
            Her biri farklı ihtiyaçlara özelleşmiş, bilimsel temelli yapay zeka analiz çözümleri.
          </p>
        </div>

        {/* Product Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`relative group cursor-pointer bg-card rounded-2xl border border-border p-6 hover:border-accent/50 hover:shadow-xl transition-all duration-300 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${
                product.restricted ? "ring-2 ring-purple-500/20" : ""
              }`}
            >
              {/* Restricted Badge */}
              {product.restricted && (
                <div className="absolute -top-3 right-4 px-3 py-1 bg-purple-500 text-white text-xs font-medium rounded-full">
                  Sadece Uzmanlar
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform`}>
                {product.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-2 pr-10">{product.shortName}</h3>
              <p className="text-muted text-sm mb-4 line-clamp-2 pr-10">{product.description}</p>

              {/* Arrow */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Powered by */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted">
            Tüm modüller <span className="font-semibold text-primary">Axiom AI</span> teknolojisi tarafından desteklenmektedir.
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-lg bg-card rounded-2xl shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background flex items-center justify-center text-muted hover:text-foreground transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Icon */}
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedProduct.color} flex items-center justify-center text-primary mb-4`}>
              {selectedProduct.icon}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-primary mb-2">{selectedProduct.name}</h3>
            <p className="text-muted mb-6">{selectedProduct.description}</p>


            {/* Features */}
            <div className="mb-6">
              <h4 className="font-semibold text-primary mb-3">Özellikler</h4>
              <ul className="space-y-2">
                {selectedProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/analiz"
                className="flex-1 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl text-center transition-colors"
              >
                Analizi Başlat
              </Link>
              <Link
                href={`/urunler/${selectedProduct.id}`}
                className="flex-1 px-6 py-3 border border-border hover:border-accent text-foreground font-medium rounded-xl text-center transition-colors"
              >
                Detaylı İncele
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
