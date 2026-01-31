"use client";

import { useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import kurumsalAnimation from "../../../public/animations/kurumsal-ani.json";

export default function KurumsalPage() {
  const [expandedAudience, setExpandedAudience] = useState<number | null>(null);
  const benefits = [
    {
      title: "Toplu Lisans Avantajı",
      description: "Kurumunuza özel avantajlı fiyatlandırma ile bütçenizi verimli kullanın.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Kurumsal Panel",
      description: "Tüm analizlerinizi tek bir panelden yönetin, raporlara anında erişin.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
    },
    {
      title: "Toplu Raporlama",
      description: "Sınıf, okul veya kurum bazlı karşılaştırmalı raporlar alın.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Öğretmen Erişimi",
      description: "Öğretmenlerinize sınırlı erişim verin, işbirliği içinde çalışın.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Öncelikli Destek",
      description: "7/24 teknik destek ve eğitim desteği ile yanınızdayız.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Özelleştirme",
      description: "Kurumunuza özel modüller ve raporlama seçenekleri.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const audiences = [
    {
      title: "Okullar",
      description: "İlköğretim, ortaöğretim ve liseler için kapsamlı gelişim takip çözümleri.",
      features: ["Sınıf bazlı raporlama", "Öğretmen paneli", "Veli bilgilendirme", "Yıllık gelişim takibi"],
    },
    {
      title: "Kreş ve Anaokulları",
      description: "Erken çocukluk dönemi için gelişim taraması ve takip sistemleri.",
      features: ["Gelişim taraması", "Ebeveyn raporları", "Erken müdahale önerileri", "Dönemsel karşılaştırma"],
    },
    {
      title: "Dershaneler ve Etüt Merkezleri",
      description: "Öğrenme stillerini analiz ederek akademik başarıyı destekleyin.",
      features: ["Öğrenme stili analizi", "Bireysel çalışma planı", "Kariyer yönlendirme", "Performans takibi"],
    },
    {
      title: "Sağlık Kurumları",
      description: "Rehabilitasyon merkezleri ve psikolojik danışmanlık için uzman çözümler.",
      features: ["DSM-5 uyumlu raporlar", "Klinik değerlendirme", "Tedavi takibi", "Uzman paneli"],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-accent text-white text-sm font-semibold rounded-full mb-6">
                Kurumsal Çözümler
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Her Çocuğa
                <span className="block text-white">Bilimsel Kesinlik</span>
              </h1>
              <p className="text-xl text-white mb-8">
                Eğitim kurumları ve sağlık merkezleri için özel Axiom çözümleri.
                Yapay zeka destekli gelişim analizi ile her çocuğa bireysel destek sağlayın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#teklif-formu"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-accent hover:bg-accent-hover text-white rounded-xl transition-colors"
                >
                  Demo Talep Et
                </a>
                <a
                  href="#avantajlar"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-white/30 hover:border-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  Avantajları Gör
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                  <Lottie
                    animationData={kurumsalAnimation}
                    loop={true}
                    className="w-full max-w-[340px]"
                  />
                  <div className="text-center mt-6 mb-4">
                    <p className="text-3xl font-bold text-white mb-2">Kuruma Özel</p>
                    <p className="text-white text-lg">Avantajlı Fiyatlandırma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="avantajlar" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Kurumsal Avantajlar
            </h2>
            <p className="text-lg text-muted">
              Bireysel lisanslara göre çok daha fazla özellik ve avantaj
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-3 sm:p-6 bg-background rounded-xl sm:rounded-2xl border border-border hover:border-accent/50 hover:shadow-lg transition-all"
              >
                <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-2 sm:mb-4">
                  <div className="scale-75 sm:scale-100">{benefit.icon}</div>
                </div>
                <h3 className="text-xs sm:text-xl font-bold text-primary mb-1 sm:mb-2">{benefit.title}</h3>
                <p className="text-muted text-xs sm:text-base hidden sm:block">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Kime Hitap Ediyoruz?
            </h2>
            <p className="text-lg text-muted">
              Farklı kurumlar için özelleştirilmiş çözümler
            </p>
          </div>

          {/* Mobile: Accordion */}
          <div className="sm:hidden space-y-2">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setExpandedAudience(expandedAudience === index ? null : index)}
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <h3 className="text-sm font-bold text-primary">{audience.title}</h3>
                  <svg
                    className={`w-5 h-5 text-accent transition-transform ${expandedAudience === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedAudience === index && (
                  <div className="px-4 pb-4 border-t border-border/50">
                    <p className="text-muted text-xs mt-3 mb-3">{audience.description}</p>
                    <ul className="space-y-2">
                      {audience.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-foreground text-xs">
                          <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop: Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border p-8 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{audience.title}</h3>
                <p className="text-muted mb-6">{audience.description}</p>
                <ul className="space-y-3">
                  {audience.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-foreground text-sm">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Fiyatlandırma
            </h2>
            <p className="text-lg text-muted">
              Bireysel ve kurumsal kullanıma uygun esnek fiyat seçenekleri
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 font-semibold text-primary">Modül</th>
                  <th className="text-center py-4 px-6 font-semibold text-primary">Bireysel Fiyat</th>
                  <th className="text-center py-4 px-6 font-semibold text-accent">Kurumsal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Gelişim Takipçisi", oldPrice: "16.000 ₺", newPrice: "9.999 ₺" },
                  { name: "Davranış Analisti", oldPrice: "22.000 ₺", newPrice: "14.999 ₺", restricted: true },
                  { name: "Öğrenme Mimarı", oldPrice: "18.000 ₺", newPrice: "11.999 ₺" },
                  { name: "Kariyer Pusulası", oldPrice: "18.000 ₺", newPrice: "11.999 ₺" },
                  { name: "Aile Koçu", oldPrice: "18.000 ₺", newPrice: "11.999 ₺" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border hover:bg-background/50 transition-colors">
                    <td className="py-4 px-6">
                      <span className="font-medium text-foreground">{row.name}</span>
                      {row.restricted && (
                        <span className="ml-2 px-2 py-0.5 bg-purple-100 text-purple-600 text-xs rounded-full">
                          Uzman
                        </span>
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      <span className="text-muted line-through mr-2">{row.oldPrice}</span>
                      <span className="text-primary font-semibold">{row.newPrice}</span>
                    </td>
                    <td className="text-center py-4 px-6">
                      <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-medium text-sm rounded-full">
                        Özel Teklif
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="teklif-formu" className="py-16 lg:py-24 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Demo Talep Edin
            </h2>
            <p className="text-lg text-white">
              Kurumunuza özel teklif almak için formu doldurun, size en kısa sürede dönüş yapalım.
            </p>
          </div>

          <form className="space-y-6 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Kurum Adı *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Kurum adınız"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Kurum Türü *</label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="" className="text-gray-900">Seçiniz</option>
                  <option value="okul" className="text-gray-900">Okul</option>
                  <option value="rehab" className="text-gray-900">Rehabilitasyon Merkezi</option>
                  <option value="klinik" className="text-gray-900">Psikolojik Danışmanlık</option>
                  <option value="diger" className="text-gray-900">Diğer</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Yetkili Ad Soyad *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Adınız Soyadınız"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">E-posta *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="email@kurum.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Telefon *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="+90 (___) ___ __ __"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Tahmini Kullanıcı Sayısı</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-accent">
                  <option value="" className="text-gray-900">Seçiniz</option>
                  <option value="10-50" className="text-gray-900">10-50</option>
                  <option value="50-100" className="text-gray-900">50-100</option>
                  <option value="100-500" className="text-gray-900">100-500</option>
                  <option value="500+" className="text-gray-900">500+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mesajınız</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="İhtiyaçlarınızı kısaca açıklayın..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors"
            >
              Demo Talep Et
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
