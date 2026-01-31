import Link from "next/link";

interface CTAProps {
  variant?: "default" | "minimal" | "banner";
}

export default function CTA({ variant = "default" }: CTAProps) {
  if (variant === "minimal") {
    return (
      <div className="py-8 text-center">
        <Link
          href="#analiz"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
        >
          Analizi Başlat
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Çocuğunuzun Geleceğini Şekillendirin
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Kuşkularınızı kesinliğe dönüştürün. Bilimsel veriye dayalı analiz ile çocuğunuzun potansiyelini keşfedin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#analiz"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-white hover:bg-gray-100 rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              Analizi Başlat
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="#iletisim"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:border-white hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl border border-accent/20 p-8 sm:p-12 text-center shadow-xl shadow-accent/5">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Kurumsal Teklif Alın
          </h3>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Çocuğunuzun gelişimini bilimsel verilerle takip edin. İlk adımı atın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#analiz"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Analizi Başlat
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="#urunler"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary border-2 border-primary/20 hover:border-primary hover:bg-primary/5 rounded-xl transition-all duration-300"
            >
              Ürünleri İncele
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
