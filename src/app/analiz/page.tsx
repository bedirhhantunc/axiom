"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import { products } from "@/data/products";
import analizAnimation from "../../../public/animations/analiz-ani.json";

// Modül ikonları
const moduleIcons: Record<string, React.ReactNode> = {
  "gelisim-takipcisi": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  "davranis-analisti": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  "ogrenme-mimari": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  "kariyer-pusulasi": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  "aile-kocu": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
};

export default function AnalizPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-primary via-primary/95 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-white">
                  <li>
                    <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
                  </li>
                  <li>/</li>
                  <li className="text-white font-medium">Değerlendirme Talebi</li>
                </ol>
              </nav>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Gelişim
                <span className="block text-white">Yolculuğunuz Başlıyor</span>
              </h1>
              <p className="text-xl text-white mb-8 max-w-xl font-medium">
                İhtiyacınıza uygun modülü seçin ve çocuğunuzun gelişimini bilimsellik ilkesiyle keşfedin.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <Lottie
                animationData={analizAnimation}
                loop={true}
                className="w-full max-w-2xl scale-150"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Module Selection */}
      <section id="moduller" className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className={`relative bg-card rounded-2xl border p-6 hover:shadow-xl transition-all w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${
                  product.restricted
                    ? "border-purple-500/30 ring-2 ring-purple-500/10"
                    : "border-border hover:border-accent/50"
                }`}
              >
                {/* Restricted Badge */}
                {product.restricted && (
                  <div className="absolute -top-3 right-4 px-3 py-1 bg-purple-500 text-white text-xs font-medium rounded-full">
                    Sadece Uzmanlar
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white mb-4`}>
                  {moduleIcons[product.id]}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary mb-2">{product.shortName}</h3>
                <p className="text-muted text-sm mb-4">{product.description}</p>


                {/* Price */}
                <div className="mb-4">
                  {product.price.oldPrice && (
                    <span className="text-lg text-muted line-through mr-2">{product.price.oldPrice}</span>
                  )}
                  <span className="text-2xl font-bold text-primary">{product.price.bireysel}</span>
                </div>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-xl font-medium transition-colors ${
                    product.restricted
                      ? "bg-purple-500 hover:bg-purple-600 text-white"
                      : "bg-accent hover:bg-accent-hover text-white"
                  }`}
                >
                  Satın Al
                </button>

                {/* Detail Link */}
                <Link
                  href={`/urunler/${product.slug}`}
                  className="block text-center text-sm text-muted hover:text-accent mt-3 transition-colors"
                >
                  Detayları İncele →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Nasıl Çalışır?
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent text-white flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h3 className="font-semibold text-primary mb-2">Modül Seçin</h3>
                <p className="text-sm text-muted">İhtiyacınıza uygun analiz modülünü seçin ve satın alın.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent text-white flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h3 className="font-semibold text-primary mb-2">Formu Doldurun</h3>
                <p className="text-sm text-muted">Çocuğunuzla ilgili soruları yanıtlayın.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent text-white flex items-center justify-center font-bold mb-4">
                  3
                </div>
                <h3 className="font-semibold text-primary mb-2">Rapor Alın</h3>
                <p className="text-sm text-muted">Detaylı rapor ve eylem planınızı hemen görün.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted mb-4">Güvenli Ödeme</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-muted">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">256-bit SSL</span>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">KVKK Uyumlu</span>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Anında Erişim</span>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help */}
      <section className="py-12 lg:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Hangi Modülü Seçeceğinizden Emin Değil misiniz?</h2>
          <p className="text-white mb-6">
            Size yardımcı olmaktan mutluluk duyarız. Bize ulaşın, ihtiyacınıza uygun modülü birlikte belirleyelim.
          </p>
          <Link
            href="/#iletisim"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-accent hover:bg-accent-hover rounded-xl transition-colors"
          >
            Bize Ulaşın
          </Link>
        </div>
      </section>
    </div>
  );
}
