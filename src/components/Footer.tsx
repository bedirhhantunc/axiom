import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center -space-x-1 mb-4">
              <img
                src="/logo/axiom-icon-dark.svg"
                alt="AXIOM"
                className="h-[46px] w-[46px]"
              />
              <h3 className="text-2xl font-bold text-white">AXIOM</h3>
            </div>
            <p className="text-white text-sm mb-4 font-bold">
              Kuşkudan Kesinliğe
            </p>
            <p className="text-white text-sm leading-relaxed">
              2-18 yaş arası çocuklar ve aileleri için yapay zeka destekli pedagojik ürünler.
            </p>
          </div>

          {/* Modüller */}
          <div>
            <h4 className="font-bold mb-4 text-white">Modüller</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link href="/urunler/gelisim-takipcisi" className="hover:text-accent transition-colors">
                  Gelişim Takipçisi
                </Link>
              </li>
              <li>
                <Link href="/urunler/davranis-analisti" className="hover:text-accent transition-colors">
                  Davranış Analisti
                </Link>
              </li>
              <li>
                <Link href="/urunler/ogrenme-mimari" className="hover:text-accent transition-colors">
                  Öğrenme Mimarı
                </Link>
              </li>
              <li>
                <Link href="/urunler/kariyer-pusulasi" className="hover:text-accent transition-colors">
                  Kariyer Pusulası
                </Link>
              </li>
              <li>
                <Link href="/urunler/aile-kocu" className="hover:text-accent transition-colors">
                  Aile Koçu
                </Link>
              </li>
            </ul>
          </div>

          {/* Şirket */}
          <div>
            <h4 className="font-bold mb-4 text-white">Şirket</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link href="/hakkimizda" className="hover:text-accent transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/teknoloji" className="hover:text-accent transition-colors">
                  Teknoloji
                </Link>
              </li>
              <li>
                <Link href="/kurumsal" className="hover:text-accent transition-colors">
                  Kurumsal
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-accent transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Yasal */}
          <div>
            <h4 className="font-bold mb-4 text-white">Yasal</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link href="/gizlilik" className="hover:text-accent transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/kvkk" className="hover:text-accent transition-colors">
                  KVKK
                </Link>
              </li>
              <li>
                <Link href="/kullanim-sartlari" className="hover:text-accent transition-colors">
                  Kullanım Şartları
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white text-center">
          <p className="text-sm text-white">
            © 2026 Axiom. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
