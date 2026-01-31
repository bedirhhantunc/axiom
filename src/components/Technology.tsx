"use client";

import { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import brainAnimation from "../../public/animations/brain-tech.json";

export default function Technology() {
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

  const features = [
    {
      title: "Pedagojik AI Motor",
      description: "7 milyar parametre ile eğitilmiş, çocuk gelişimi ve pedagoji alanında uzmanlaşmış yapay zeka.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Bilimsel Temelli Analiz",
      description: "Kanıta dayalı metodoloji, insan hatasından arındırılmış objektif değerlendirmeler.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Kişiselleştirilmiş Çıktılar",
      description: "Sadece test sonucu değil, uygulanabilir eylem planları ve bireysel destek programları.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: "Etik Sınırlar",
      description: "Hassas modüller sadece yetkili uzmanlara açık. Veri güvenliği ve gizlilik öncelikli.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="teknoloji" className="py-20 lg:py-32 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent text-white text-sm font-semibold rounded-full mb-4">
              Arkasındaki Bilim
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
              Axiom AI
              <span className="block text-white mt-2">Pedagojik AI Teknolojisi</span>
            </h2>

            <p className="text-lg text-white mb-8">
              Çocuk gelişimi ve eğitim alanında uzmanlaşmış, bilimsel veriye dayalı yeni nesil yapay zeka teknolojisi.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-2 sm:p-4 bg-[#1a2a3a] rounded-lg sm:rounded-xl border sm:border-2 border-white hover:border-accent transition-colors"
                >
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-accent flex items-center justify-center text-white mb-1 sm:mb-3">
                    <div className="scale-75 sm:scale-100">{feature.icon}</div>
                  </div>
                  <h3 className="font-bold mb-1 text-white text-xs sm:text-base">{feature.title}</h3>
                  <p className="text-xs text-white hidden sm:block">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative" ref={containerRef}>
            <div className="relative bg-[#1a2a3a] rounded-3xl p-8 lg:p-12 border-2 border-white">
              {/* Brain Animation */}
              <div className="relative w-full max-w-2xl mx-auto min-h-[300px]">
                {isVisible && (
                  <Lottie
                    animationData={brainAnimation}
                    loop={true}
                    className="w-full scale-[1.75]"
                  />
                )}
              </div>

              {/* Dr. Emre Bozdemir */}
              <div className="mt-8 pt-8 border-t border-white flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  EB
                </div>
                <div>
                  <p className="font-semibold text-white">Öğr. Gör. Dr. Emre Bozdemir</p>
                  <p className="text-sm text-white">Çocuk Gelişimi Uzmanı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
