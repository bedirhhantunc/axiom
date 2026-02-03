import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Axiom",
  description: "Axiom'un hikayesi, yapay zeka teknolojimiz ve ekibimiz hakkında bilgi edinin.",
};

export default function HakkimizdaPage() {
  const values = [
    {
      title: "Bilimsel Temel",
      description: "Tüm analizlerimiz, kanıta dayalı bilimsel metodolojiler üzerine inşa edilmiştir.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Etik Değerler",
      description: "Hassas veriler sadece yetkili uzmanlara açıktır. KVKK ve gizlilik önceliğimizdir.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Erişilebilirlik",
      description: "Karmaşık teknolojiyi herkesin anlayabileceği ve kullanabileceği hale getiriyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Sürekli Gelişim",
      description: "AI modelimizi sürekli eğitiyor, en güncel bilimsel verilerle güncelliyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  const teamMembers = [
    {
      name: "Buğra Karaman",
      role: "Kurucu & Sistem Mimarı",
      initials: "BK",
      description: "Psikoloji, teknoloji ve tasarımın kesiştiği alanda uzmanlaşan Buğra Karaman, Axiom'un tüm modüllerini ve uygulamasını geliştiren sistem mimarıdır. Yapay zeka, davranış bilimi ve öğrenme sistemleri üzerine çalışmaktadır.",
    },
    {
      name: "Furkan Bora Murat",
      role: "Yazılım Mühendisi",
      initials: "FM",
      description: "İstanbul Teknik Üniversitesi Matematik Mühendisliği mezunu olan Furkan Bora Murat, Axiom'un sistem mimarisine hakim olup yazılım geliştirme süreçlerinde aktif rol almaktadır.",
    },
    {
      name: "Dr. Emre Bozdemir",
      role: "Bilimsel Danışman",
      initials: "EB",
      description: "Bursa Uludağ Üniversitesi Çocuk Gelişimi Bölüm Başkanı olan Dr. Emre Bozdemir, çocuk gelişimi ve eğitimi alanındaki akademik birikimini yapay zeka teknolojisiyle birleştirerek Axiom'un bilimsel altyapısının oluşturulmasına katkı sağlamaktadır.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent text-white text-sm font-semibold rounded-full mb-6">
              Hakkımızda
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Kuşkudan Kesinliğe
              <span className="block text-white mt-2">Yolculuğumuz</span>
            </h1>
            <p className="text-xl text-white">
              Axiom, ebeveynlerin ve eğitimcilerin "Acaba çocuğumda bir sorun mu var?" endişesini,
              bilimsel verilere dayalı kesinliğe dönüştürmek için doğdu.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Misyonumuz
              </h2>
              <p className="text-lg text-muted mb-6">
                Eğitim ve psikolojik danışmanlık süreçlerini dijitalleştirmek, hızlandırmak ve
                insan hatasından (subjektif yorumlardan) arındırmak.
              </p>
              <p className="text-lg text-muted mb-6">
                Her çocuğun benzersiz olduğuna inanıyoruz. Bu yüzden Axiom, sadece test yapmaz;
                her çocuk için kişiselleştirilmiş, uygulanabilir eylem planları sunar.
              </p>
              <div className="p-6 bg-accent/10 rounded-xl border border-accent/20">
                <p className="text-lg font-semibold text-primary">
                  "Çocuğunuzun geleceğiyle ilgili kuşkuları, bilimsel verilerin kesinliğine dönüştürün."
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                      <span className="text-2xl font-bold">5</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Analiz Modülü</p>
                      <p className="text-muted text-sm">Farklı ihtiyaçlara özel</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Bilimsel Temelli</p>
                      <p className="text-muted text-sm">Kanıta dayalı analiz</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-600">
                      <span className="text-2xl font-bold">2-18</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Yaş Aralığı</p>
                      <p className="text-muted text-sm">Kapsamlı kapsam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-primary rounded-3xl p-8 lg:p-12 text-white">
                <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold">AI</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Axiom AI</h3>
                <p className="text-white mb-6">
                  Pedagoji alanında uzmanlaşmış, bilimsel yöntem ve tekniklere dayalı yeni nesil yapay zeka teknolojisi.
                </p>
                <ul className="space-y-3">
                  {[
                    "Pedagojik veri seti ile özel eğitim",
                    "Türkçe dil desteği",
                    "DSM-5 uyumlu değerlendirme",
                    "Sürekli öğrenme ve güncelleme",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white">
                      <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Arkasındaki Teknoloji
              </h2>
              <p className="text-lg text-muted mb-6">
                Axiom AI, pedagoji alanında uzmanlaşmış, bilimsel yöntem ve tekniklere dayalı
                yeni nesil yapay zeka teknolojisidir.
              </p>
              <p className="text-lg text-muted mb-6">
                Geleneksel testlerin aksine, Axiom AI sadece soruları değerlendirmez;
                yanıt örüntülerini, zaman verilerini ve çapraz referansları analiz ederek
                bilimsel temelli sonuçlar üretir.
              </p>
              <p className="text-lg text-muted">
                Sonuç olarak, sadece "ne" sorusunu değil, "neden" ve "nasıl" sorularını
                da yanıtlayan kapsamlı raporlar sunar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Axiom Takım
            </h2>
            <p className="text-lg text-muted">
              Axiom'u oluşturan ekip
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center text-white text-3xl font-bold">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-4">{member.role}</p>
                <p className="text-muted text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Değerlerimiz
            </h2>
            <p className="text-lg text-muted">
              Axiom'un temelini oluşturan ilkeler
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-accent to-accent/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Kuşkularınızı Kesinliğe Dönüştürün
          </h2>
          <p className="text-xl text-white mb-8">
            Çocuğunuzun gelişim yolculuğunda size rehberlik etmeye hazırız.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#urunler"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-primary text-white hover:bg-primary/90 rounded-xl transition-colors"
            >
              Ürünleri İncele
            </Link>
            <Link
              href="/#iletisim"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white/20 border-2 border-white text-white hover:bg-white/30 rounded-xl transition-colors"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
