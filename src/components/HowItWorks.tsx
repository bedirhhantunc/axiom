export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Formu Doldurun",
      description: "Çocuğunuzla ilgili temel bilgileri ve gözlemlerinizi paylaşın. Form, seçtiğiniz modüle göre özelleştirilir.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "AI Analiz Eder",
      description: "Axiom AI, verilerinizi bilimsel metodoloji ile analiz eder ve kanıta dayalı değerlendirme yapar.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Rapor Oluşur",
      description: "Detaylı rapor hazırlanır: Sayısal ve sözel analiz, güçlü ve gelişime açık alanlar belirlenir.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Eylem Planı Alın",
      description: "Kişiselleştirilmiş yol haritası: Çocuklar için 'Bireysel Destek Planı', aileler için 'Eğitim Programı'.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="nasil-calisir" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Süreç
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nasıl Çalışır?
          </h2>
          <p className="text-lg text-muted">
            Kuşkudan kesinliğe giden yolculuğunuz dört basit adımda tamamlanır.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="relative bg-card rounded-xl sm:rounded-2xl border border-border p-3 sm:p-4 lg:p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-3 left-3 sm:left-6 px-2 sm:px-3 py-0.5 sm:py-1 bg-accent text-white text-xs sm:text-sm font-bold rounded-full">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-2 sm:mb-4 mt-2">
                    <div className="scale-75 sm:scale-100">{step.icon}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-primary mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-muted text-xs sm:text-sm hidden sm:block">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#analiz"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
          >
            Hemen Başla
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
