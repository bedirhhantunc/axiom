"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";

type PricingType = "bireysel" | "kurumsal";

interface PricingItem {
  name: string;
  bireysel: number;
  oldPrice?: number;
  kurumsal: string;
  description: string;
  popular?: boolean;
  restricted?: boolean;
  features: string[];
}

const pricingData: PricingItem[] = [
  {
    name: "Gelişim Takipçisi",
    bireysel: 9999,
    oldPrice: 16000,
    kurumsal: "Kuruma Özel",
    description: "Bilişsel, dil, psikososyal ve motor beceri taraması",
    popular: true,
    features: [
      "4 temel gelişim alanı analizi",
      "Bireysel Destek Planı",
      "Detaylı PDF rapor",
      "Uzman yönlendirme tavsiyeleri",
    ],
  },
  {
    name: "Davranış Analisti",
    bireysel: 14999,
    oldPrice: 22000,
    kurumsal: "Kuruma Özel",
    description: "Anksiyete, DEHB, davranış analizi",
    restricted: true,
    features: [
      "Duygusal durum analizi",
      "Davranışsal sorun tespiti",
      "Detaylı rapor",
      "Tedavi takip önerileri",
    ],
  },
  {
    name: "Öğrenme Mimarı",
    bireysel: 11999,
    oldPrice: 18000,
    kurumsal: "Kuruma Özel",
    description: "Öğrenme engelleri ve stil analizi",
    features: [
      "Akademik zorluk analizi",
      "Öğrenme profili tespiti",
      "Kişiselleştirilmiş öneriler",
      "Eğitim yol haritası",
    ],
  },
  {
    name: "Kariyer Pusulası",
    bireysel: 11999,
    oldPrice: 18000,
    kurumsal: "Kuruma Özel",
    description: "İlgi alanı ve yetenek analizi",
    features: [
      "İlgi alanı analizi",
      "Yetenek tespiti",
      "Yetenek haritası",
      "Kariyer yol haritası",
    ],
  },
  {
    name: "Aile Koçu",
    bireysel: 11999,
    oldPrice: 18000,
    kurumsal: "Kuruma Özel",
    description: "Aile içi iletişim ve eğitim programı",
    features: [
      "İletişim ve ilişki analizi",
      "Rol ve kural değerlendirmesi",
      "Aile Eğitim Programı",
      "Uygulama planı",
    ],
  },
];

const PricingSwitch = ({
  onSwitch,
  selected,
}: {
  onSwitch: (value: PricingType) => void;
  selected: PricingType;
}) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="relative z-10 mx-auto flex w-fit rounded-xl bg-card border border-border p-1">
        <button
          onClick={() => onSwitch("bireysel")}
          className={`relative z-10 w-fit cursor-pointer h-14 rounded-xl px-6 py-2 font-medium transition-colors text-sm ${
            selected === "bireysel"
              ? "text-white"
              : "text-muted hover:text-foreground"
          }`}
        >
          {selected === "bireysel" && (
            <motion.span
              layoutId="pricing-switch"
              className="absolute top-0 left-0 h-14 w-full rounded-xl border-2 shadow-lg shadow-accent/30 border-accent bg-gradient-to-t from-accent to-accent/80"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex flex-col">
            <span>Bireysel</span>
            <span className="text-xs opacity-70">Ebeveynler için</span>
          </span>
        </button>

        <button
          onClick={() => onSwitch("kurumsal")}
          className={`relative z-10 w-fit cursor-pointer h-14 rounded-xl px-6 py-2 font-medium transition-colors text-sm ${
            selected === "kurumsal"
              ? "text-white"
              : "text-muted hover:text-foreground"
          }`}
        >
          {selected === "kurumsal" && (
            <motion.span
              layoutId="pricing-switch"
              className="absolute top-0 left-0 h-14 w-full rounded-xl border-2 shadow-lg shadow-accent/30 border-accent bg-gradient-to-t from-accent to-accent/80"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex flex-col">
            <span className="flex items-center gap-2">
              Kurumsal
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                selected === "kurumsal"
                  ? "bg-white/90 text-accent"
                  : "bg-accent/20 text-accent"
              }`}>
                Avantajlı
              </span>
            </span>
            <span className="text-xs opacity-70">Okul & Klinikler</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function Pricing() {
  const [selectedType, setSelectedType] = useState<PricingType>("bireysel");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("tr-TR").format(price);
  };

  return (
    <section id="fiyatlandirma" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left max-w-2xl mb-8">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Fiyatlandırma
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            İhtiyacınıza uygun planı seçin
          </h2>
          <p className="text-lg text-muted">
            Her modül bağımsız olarak satın alınabilir. Kurumsal çözümler için özel teklifler sunuyoruz.
          </p>
        </div>

        {/* Toggle */}
        <PricingSwitch onSwitch={setSelectedType} selected={selectedType} />

        {/* Pricing Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {pricingData.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-xl sm:rounded-2xl border p-3 sm:p-6 ${
                item.popular
                  ? "ring-2 ring-accent bg-accent/5 border-accent/30"
                  : item.restricted
                  ? "ring-2 ring-purple-500/30 bg-purple-50 border-purple-200"
                  : "bg-card border-border hover:border-accent/50"
              } transition-all duration-300 hover:shadow-xl`}
            >
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg shadow-accent/30">
                    Popüler
                  </span>
                </div>
              )}

              {/* Restricted Badge */}
              {item.restricted && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Sadece Uzmanlar
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-2 sm:mb-4">
                <h3 className="text-sm sm:text-xl font-bold text-primary mb-1 sm:mb-2">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted hidden sm:block">{item.description}</p>
              </div>

              {/* Price */}
              <div className="flex flex-col mb-3 sm:mb-6">
                {selectedType === "bireysel" && item.oldPrice && (
                  <span className="text-sm sm:text-lg text-muted line-through mb-1">
                    {formatPrice(item.oldPrice)} ₺
                  </span>
                )}
                <div className="flex items-baseline flex-wrap">
                  <motion.span
                    key={`${item.name}-${selectedType}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-lg sm:text-3xl font-bold text-primary"
                  >
                    {selectedType === "bireysel"
                      ? `${formatPrice(item.bireysel)} ₺`
                      : item.kurumsal}
                  </motion.span>
                  <span className="text-muted text-xs sm:text-sm ml-1 sm:ml-2">/ analiz</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full mb-3 sm:mb-6 p-2 sm:p-4 text-xs sm:text-base font-semibold rounded-lg sm:rounded-xl transition-all ${
                  item.popular
                    ? "bg-gradient-to-t from-accent to-accent/90 shadow-lg shadow-accent/30 border border-accent text-white hover:shadow-xl"
                    : item.restricted
                    ? "bg-gradient-to-t from-purple-600 to-purple-500 shadow-lg shadow-purple-500/30 border border-purple-400 text-white hover:shadow-xl"
                    : "bg-gradient-to-t from-primary to-primary/90 shadow-lg shadow-primary/20 border border-primary/50 text-white hover:shadow-xl"
                }`}
              >
                {selectedType === "kurumsal"
                  ? "Teklif Alın"
                  : "Satın Al"}
              </button>

              {/* Features - Hidden on mobile */}
              <div className="hidden sm:block space-y-3 pt-4 border-t border-border/50">
                <h4 className="font-semibold text-sm text-primary mb-3">
                  Paket içeriği:
                </h4>
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span
                        className={`h-5 w-5 rounded-full grid place-content-center mt-0.5 mr-3 flex-shrink-0 ${
                          item.popular
                            ? "bg-accent/20 border border-accent"
                            : item.restricted
                            ? "bg-purple-100 border border-purple-400"
                            : "bg-white border border-accent"
                        }`}
                      >
                        <CheckCheck
                          className={`h-3 w-3 ${
                            item.popular
                              ? "text-accent"
                              : item.restricted
                              ? "text-purple-500"
                              : "text-accent"
                          }`}
                        />
                      </span>
                      <span className="text-sm text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted max-w-2xl mx-auto">
            Kurumsal lisanslar toplu kullanım için uygundur. Okullar,
            rehabilitasyon merkezleri ve klinikler için özel teklifler almak
            üzere{" "}
            <a href="/kurumsal" className="text-accent hover:underline font-medium">
              bizimle iletişime geçin
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
