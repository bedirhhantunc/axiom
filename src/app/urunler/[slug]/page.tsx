import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug, getAllProductSlugs } from "@/data/products";
import type { Metadata } from "next";
import ProductHeroCard from "@/components/ProductHeroCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Ürün Bulunamadı | Axiom" };
  }

  return {
    title: `${product.name} | Axiom`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className={`pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br ${product.color} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-white">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/#urunler" className="hover:text-accent transition-colors">Modüller</Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium">{product.shortName}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              {product.restricted && (
                <span className="inline-block px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-full mb-4">
                  Sadece Uzmanlar İçin
                </span>
              )}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
                {product.name}
              </h1>

              <p className="text-xl text-white mb-6 font-medium">
                {product.tagline}
              </p>

              <p className="text-lg text-white mb-8">
                {product.longDescription}
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                  <span className="text-white text-sm">Hedef Kitle</span>
                  <p className="font-bold text-white">2-18 yaş</p>
                </div>
              </div>

              {/* Users */}
              <div className="mb-8">
                <span className="text-white text-sm block mb-2 font-medium">Kullanıcılar</span>
                <div className="flex flex-wrap gap-2">
                  {product.users.map((user, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user === "Sadece Uzmanlar"
                          ? "bg-purple-400/30 text-white"
                          : "bg-white/20 text-white"
                      }`}
                    >
                      {user}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#satin-al"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-accent hover:bg-accent-hover text-white rounded-xl transition-colors shadow-lg shadow-accent/30 border-2 border-white"
                >
                  Analizi Satın Al
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="#detaylar"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white/20 border-2 border-white text-white hover:bg-white/30 rounded-xl transition-colors"
                >
                  Detayları İncele
                </Link>
              </div>
            </div>

            {/* Visual */}
            <ProductHeroCard />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="detaylar" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Ne Sunuyor?
            </h2>
            <p className="text-lg text-muted">
              {product.shortName} ile elde edeceğiniz kapsamlı analiz özellikleri
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Contents Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Rapor ve Analiz İçeriği
            </h2>
            <p className="text-lg text-muted">
              Analiz sonucunda alacağınız detaylı raporda neler var?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {product.reportContents.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-muted">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Rapor
              </h2>
              <p className="text-lg text-muted mb-8">
                Axiom sadece test yapmaz, size uygulanabilir bir eylem planı sunar.
              </p>
              <ul className="space-y-4">
                {product.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center text-white flex-shrink-0`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
                <div className="text-center">
                  <p className="text-sm text-muted mb-2">Fiyatlandırma</p>
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-xl border border-border">
                      <p className="text-sm text-muted mb-1">Web (Bireysel)</p>
                      {product.price.oldPrice && (
                        <p className="text-lg text-muted line-through">{product.price.oldPrice}</p>
                      )}
                      <p className="text-3xl font-bold text-primary mb-3">{product.price.bireysel}</p>
                      <Link
                        href="/analiz"
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-colors"
                      >
                        Satın Al
                      </Link>
                    </div>
                    <div className="p-4 bg-accent/10 rounded-xl border border-accent/20">
                      <p className="text-sm text-accent mb-1">Kurumsal</p>
                      <p className="text-3xl font-bold text-accent mb-3">{product.price.kurumsal}</p>
                      <Link
                        href="/kurumsal"
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-accent border-2 border-accent hover:bg-accent hover:text-white rounded-xl transition-colors"
                      >
                        Teklif Al
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
            Diğer Modüllerimiz
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.slug !== product.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/urunler/${p.slug}`}
                  className="group bg-card rounded-xl border border-border p-6 hover:border-accent/50 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{p.shortName}</h3>
                  <p className="text-sm text-muted line-clamp-2">{p.description}</p>
                  {p.restricted && (
                    <span className="inline-block mt-2 px-2 py-0.5 bg-purple-100 text-purple-600 text-xs rounded-full">
                      Sadece Uzmanlar
                    </span>
                  )}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
