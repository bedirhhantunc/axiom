"use client";

import { useState } from "react";

export default function Contact() {
  const [formType, setFormType] = useState<"bireysel" | "kurumsal">("bireysel");

  return (
    <section id="iletisim" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              İletişim
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
              Sorularınız mı Var?
              <span className="block text-accent mt-2">Bize Ulaşın</span>
            </h2>

            <p className="text-lg text-muted mb-8">
              Ürünlerimiz, kurumsal işbirlikleri veya teknik konular hakkında sorularınızı yanıtlamaktan memnuniyet duyarız.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted">E-posta</p>
                  <a href="mailto:info@axiom.com.tr" className="font-medium text-primary hover:text-accent transition-colors">
                    info@axiom.com.tr
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted">Telefon</p>
                  <a href="tel:+902121234567" className="font-medium text-primary hover:text-accent transition-colors">
                    +90 (212) 123 45 67
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted">Adres</p>
                  <p className="font-medium text-primary">İstanbul, Türkiye</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
            {/* Form Type Toggle */}
            <div className="flex p-1 bg-background rounded-xl mb-6">
              <button
                onClick={() => setFormType("bireysel")}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  formType === "bireysel"
                    ? "bg-white text-primary shadow-sm"
                    : "text-muted hover:text-foreground"
                }`}
              >
                Bireysel
              </button>
              <button
                onClick={() => setFormType("kurumsal")}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  formType === "kurumsal"
                    ? "bg-white text-primary shadow-sm"
                    : "text-muted hover:text-foreground"
                }`}
              >
                Kurumsal
              </button>
            </div>

            <form className="space-y-4">
              {formType === "kurumsal" && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Kurum Adı
                  </label>
                  <input
                    type="text"
                    placeholder="Kurum adınızı girin"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    placeholder="Adınızı girin"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  placeholder="Telefon numaranız"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  İlgilendiğiniz Modül
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all">
                  <option value="">Seçiniz</option>
                  <option value="gelisim">Gelişim Takipçisi</option>
                  <option value="davranis">Davranış Analisti</option>
                  <option value="ogrenme">Öğrenme Mimarı</option>
                  <option value="kariyer">Kariyer Pusulası</option>
                  <option value="aile">Aile Koçu</option>
                  <option value="hepsi">Tüm Modüller</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mesajınız
                </label>
                <textarea
                  rows={4}
                  placeholder="Mesajınızı yazın..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors"
              >
                {formType === "kurumsal" ? "Demo Talep Et" : "Mesaj Gönder"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
