"use client";

import { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import dusunceAnimation from "../../public/animations/dusunce.json";

export default function Problem() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const concerns = [
    {
      module: "Gelişim Takipçisi",
      questions: [
        "Çocuğumun/öğrencimin/danışanımın gelişimi normal mi?",
        "Çocuğum/öğrencim/danışanım hangi gelişim alanında, hangi becerilere sahip?"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      module: "Davranış ve Duygu Analisti",
      questions: [
        "Çocuğumun/öğrencimin/danışanımın davranışsal ya da duygusal problemi var mı?"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      module: "Öğrenme Mimarı",
      questions: [
        "Çocuğumun/öğrencimin/danışanımın öğrenme engeli var mı?",
        "Çocuğum/öğrencim/danışanım nasıl öğreniyor?"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      module: "Kariyer Pusulası",
      questions: [
        "Çocuğumun/öğrencimin/danışanımın ilgi alanları neler?",
        "Çocuğumu/öğrencimi/danışanımı ilgi alanlarına göre nasıl yönlendirmeliyim?"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      module: "Aile Koçu",
      questions: [
        "Ebeveynlik becerilerimiz ve aile içi iletişimimiz normal mi?"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Header Content + Animation */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              Neden Buradasınız?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
              Gelecek Varsayımlarla İnşa Edilemez
            </h2>

            <p className="text-lg text-muted mb-8">
              Ebeveynlik ve eğitim yolculuğu soru işaretleriyle doludur. Bu belirsizlik, doğru kararlar almanızı zorlaştırır.
            </p>

            {/* Lottie Animation */}
            <div className="relative" ref={containerRef}>
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-4 lg:p-8 border border-border/50">
                {isVisible && (
                  <Lottie
                    animationData={dusunceAnimation}
                    loop={true}
                    className="w-full max-w-sm mx-auto"
                  />
                )}
              </div>
            </div>

          </div>

          {/* Right - Concerns Cards */}
          <div className="space-y-4">
            {concerns.map((concern, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border hover:border-accent/30 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                  {concern.icon}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wide">{concern.module}</span>
                  <div className="mt-1 space-y-1">
                    {concern.questions.map((question, qIndex) => (
                      <p key={qIndex} className="text-foreground font-medium">{question}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Solution teaser */}
            <div className="mt-4 p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl border border-accent/20">
              <p className="text-lg font-semibold text-primary flex items-center gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                AXIOM mevcut durumu tarar, analiz eder ve bu belirsizlikleri ortadan kaldırır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
