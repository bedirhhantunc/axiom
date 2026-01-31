export interface ProductDetail {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  targetAudience: string;
  users: string[];
  ageRange: string;
  features: string[];
  reportContents: {
    category: string;
    icon: string;
    items: string[];
  }[];
  outcomes: string[];
  price: {
    bireysel: string;
    oldPrice?: string;
    kurumsal: string;
  };
  color: string;
  colorSolid: string;
  restricted?: boolean;
}

export const products: ProductDetail[] = [
  {
    id: "gelisim-takipcisi",
    slug: "gelisim-takipcisi",
    name: "Gelişimsel Tarama ve Beceri Analizi",
    shortName: "Gelişim Takipçisi",
    tagline: "Çocuğunuzun gelişim yolculuğunu bütüncül bir yaklaşımla takip edin",
    description: "Çocuğun gelişimsel süreçlerini bütüncül bir yaklaşımla analiz eder. 4 temel gelişim alanını ve alt başlıklarını detaylıca tarar.",
    longDescription: "Gelişimsel Tarama ve Beceri Analizi, 2-18 yaş arası çocukların tüm gelişim alanlarını kapsamlı bir şekilde değerlendirir. Çocuğunuzun bilişsel becerilerini, dil gelişimini, psikososyal-duygusal durumunu ve fiziksel-psikomotor becerilerini analiz ederek size net bir gelişim haritası sunar. Sadece tespit yapmakla kalmaz, riskli alanlar için 'Bireysel Destek Planı' oluşturarak size somut adımlar önerir.",
    targetAudience: "Uzman, Öğretmen, Aile",
    users: ["Uzmanlar", "Öğretmenler", "Aileler"],
    ageRange: "2-18 yaş",
    features: [
      "Bütüncül gelişim taraması",
      "4 temel gelişim alanı analizi",
      "Riskli alan tespiti",
      "Bireysel Destek Planı",
      "Gelişim önerileri",
      "Detaylı raporlama"
    ],
    reportContents: [
      {
        category: "Bilişsel Gelişim",
        icon: "🧠",
        items: ["Algı becerileri", "Dikkat kapasitesi", "Hafıza becerileri", "Akıcılık becerileri"]
      },
      {
        category: "Dil Gelişimi",
        icon: "🗣️",
        items: ["Alıcı dil", "İfade edici dil", "Akıcı konuşma", "Görsel hafıza"]
      },
      {
        category: "Psikososyal-Duygusal Gelişim",
        icon: "❤️",
        items: ["Sosyal ilişkiler", "Yaşam becerileri", "Duygusal düzenleme", "Empati gelişimi"]
      },
      {
        category: "Fiziksel-Psikomotor Gelişim",
        icon: "🏃",
        items: ["Boy-kilo kontrolü", "Hareket şekli ve performans", "Hız ve tepki hızı", "Denge, kuvvet ve koordinasyon"]
      }
    ],
    outcomes: [
      "Riskli gelişim alanlarının ve becerilerin tespiti",
      "Çocuğa özel 'Bireysel Destek Planı'",
      "Gelişim önerileri ve yol haritası",
      "Uzman yönlendirme tavsiyeleri"
    ],
    price: {
      bireysel: "9.999 TL",
      oldPrice: "16.000 TL",
      kurumsal: "Kuruma Özel"
    },
    color: "from-blue-500 to-blue-600",
    colorSolid: "bg-blue-500"
  },
  {
    id: "davranis-analisti",
    slug: "davranis-analisti",
    name: "Davranışsal ve Duygusal Problem Tarama",
    shortName: "Davranış Analisti",
    tagline: "Davranışsal ve duygusal riskleri tespit edin",
    description: "Çocuklarda gözlemlenen davranışsal ve duygusal riskleri tespit eder. Etik sınırları korumak için sadece uzmanlara açıktır.",
    longDescription: "Davranışsal ve Duygusal Problem Tarama, Axiom'un en hassas ve kapsamlı modülüdür. Anksiyete, depresyon, saldırganlık, dikkat eksikliği gibi kritik davranışsal ve duygusal konuları derinlemesine analiz eder. Etik değerlere bağlılığımız gereği, bu modül yalnızca lisanslı uzmanlara açıktır. Problemlerin ortadan kaldırılmasına yönelik çocuğa özel 'Bireysel Destek Planı' sunar.",
    targetAudience: "Sadece Uzman",
    users: ["Sadece Uzmanlar"],
    ageRange: "2-18 yaş",
    features: [
      "Duygusal durum analizi",
      "Davranışsal sorun tespiti",
      "Alışkanlık ve rutin analizi",
      "Sosyal/bilişsel değerlendirme",
      "Bireysel Destek Planı",
      "Uzman odaklı raporlama"
    ],
    reportContents: [
      {
        category: "Duygusal Durum",
        icon: "😔",
        items: ["Anksiyete belirtileri", "Depresyon göstergeleri", "Korku ve endişe", "Obsesif düşünce şemaları"]
      },
      {
        category: "Davranışsal Sorunlar",
        icon: "⚡",
        items: ["Saldırganlık (sözel/fiziksel)", "Aşırı hareketlilik", "İnatçılık", "Karşılanmamış beklenti sorunları"]
      },
      {
        category: "Alışkanlık ve Rutinler",
        icon: "🔄",
        items: ["Uyku bozuklukları", "Yeme bozuklukları", "Parmak emme, tırnak yeme", "Altını ıslatma"]
      },
      {
        category: "Sosyal/Bilişsel",
        icon: "🧩",
        items: ["Dikkat eksikliği", "İçe kapanıklık", "Konuşma bozuklukları", "İzinsiz eşya alma"]
      }
    ],
    outcomes: [
      "Riskli davranışsal ve duygusal problemlerin tespiti",
      "Problemlerin ortadan kaldırılmasına yönelik 'Bireysel Destek Planı'",
      "Detaylı rapor",
      "Tedavi takip önerileri"
    ],
    price: {
      bireysel: "14.999 TL",
      oldPrice: "22.000 TL",
      kurumsal: "Kuruma Özel"
    },
    color: "from-purple-500 to-purple-600",
    colorSolid: "bg-purple-500",
    restricted: true
  },
  {
    id: "ogrenme-mimari",
    slug: "ogrenme-mimari",
    name: "Öğrenme Engelleri ve Öğrenme Stili Analizi",
    shortName: "Öğrenme Mimarı",
    tagline: "Başarının önündeki engelleri kaldırın",
    description: "Akademik ve bilişsel süreçlerdeki engelleri ve en uygun öğrenme yöntemini belirler.",
    longDescription: "Öğrenme Engelleri ve Öğrenme Stili Analizi, çocuğunuzun eğitim hayatını etkileyen faktörleri derinlemesine inceler. Motivasyon düşüklüğü, zihinsel organizasyon yetersizliği, iletişim sorunları ve öğrenme profilini analiz eder. Her çocuğun farklı öğrendiğini bilerek, en uygun öğrenme yöntemini belirler ve engelleri kaldırmaya yönelik 'Bireysel Destek Planı' oluşturur.",
    targetAudience: "Uzman, Öğretmen",
    users: ["Uzmanlar", "Öğretmenler"],
    ageRange: "2-18 yaş",
    features: [
      "Akademik zorluk analizi",
      "İletişim ve uyum değerlendirmesi",
      "Öğrenme profili tespiti",
      "Öğrenme stili belirleme",
      "Bireysel Destek Planı",
      "Eğitim önerileri"
    ],
    reportContents: [
      {
        category: "Akademik Zorluklar",
        icon: "📚",
        items: ["Motivasyon düşüklüğü", "Sıkılma eğilimi", "Zihinsel organizasyon yetersizliği", "Zihinsel karmaşıklık"]
      },
      {
        category: "İletişim ve Uyum",
        icon: "🤝",
        items: ["Aile ile iletişim sorunları", "Öğretmen ile iletişim sorunları", "Eğitim ortamından rahatsızlık", "Korku ve kaygı"]
      },
      {
        category: "Öğrenme Profili",
        icon: "🎯",
        items: ["Bilgi alma stili", "Bilgi işleme stili", "Görsel/işitsel/kinestetik tercih", "Öğrenme hızı"]
      }
    ],
    outcomes: [
      "Öğrenme engellerinin tespiti",
      "Öğrenme stilinin belirlenmesi",
      "Engelleri kaldırmaya yönelik 'Bireysel Destek Planı'",
      "Öğrenme önerileri"
    ],
    price: {
      bireysel: "11.999 TL",
      oldPrice: "18.000 TL",
      kurumsal: "Kuruma Özel"
    },
    color: "from-yellow-500 to-orange-500",
    colorSolid: "bg-yellow-500"
  },
  {
    id: "kariyer-pusulasi",
    slug: "kariyer-pusulasi",
    name: "İlgi Alanı ve Yetenek Analizi",
    shortName: "Kariyer Pusulası",
    tagline: "Gelecek gelmeden yeteneğinizi bugünden keşfedin",
    description: "Çocuğun yeteneklerini ve gelecekteki potansiyel meslek eğilimlerini keşfeder.",
    longDescription: "İlgi Alanı ve Mesleki Yönelim Analizi, çocuğunuzun ilgi alanlarını ve mesleki yönelimlerini iki ana eksende değerlendirir. Sanat, müzik, teknoloji, spor gibi ilgi alanlarını ve Teknik/Fen, Sosyal Bilimler, Tıp/Sağlık gibi mesleki yönelimleri analiz eder. Baskın yetenekleri geliştirmeye yönelik 'Bireysel Destek Planı' ile geleceğe yönelik net bir yol haritası sunar.",
    targetAudience: "Uzman, Öğretmen, Aile",
    users: ["Uzmanlar", "Öğretmenler", "Aileler"],
    ageRange: "2-18 yaş",
    features: [
      "İlgi alanı analizi",
      "Mesleki yönelim tespiti",
      "Yetenek haritası",
      "Potansiyel keşfi",
      "Bireysel Destek Planı",
      "Kariyer yol haritası"
    ],
    reportContents: [
      {
        category: "İlgi Alanları",
        icon: "🎨",
        items: ["Sanat ve müzik", "Teknoloji ve tasarım", "Spor (takım/bireysel)", "Doğa ve çevre", "Yabancı diller", "Araştırma yapma"]
      },
      {
        category: "Mesleki Yönelim",
        icon: "🧑‍⚕️",
        items: ["Teknik/Fen Bilimleri", "Sosyal Bilimler", "Tıp/Sağlık", "İdari/Ekonomi", "Dil/Edebiyat", "Güzel Sanatlar", "Ticaret"]
      }
    ],
    outcomes: [
      "Baskın ilgi alanlarının tespiti",
      "Mesleki yönelimlerin belirlenmesi",
      "Yetenekleri geliştirmeye yönelik 'Bireysel Destek Planı'",
      "Kariyer yol haritası ve öneriler"
    ],
    price: {
      bireysel: "11.999 TL",
      oldPrice: "18.000 TL",
      kurumsal: "Kuruma Özel"
    },
    color: "from-orange-500 to-red-500",
    colorSolid: "bg-orange-500"
  },
  {
    id: "aile-kocu",
    slug: "aile-kocu",
    name: "Aile İşlevselliği Analizi",
    shortName: "Aile Koçu",
    tagline: "İşlevsel aile, mutlu çocuk",
    description: "Aile içi dinamikleri ve ebeveynlik süreçlerini analiz ederek daha sağlıklı bir aile yapısı hedefler.",
    longDescription: "Aile İşlevselliği Analizi, aile yapısını kritik başlıklarla değerlendirir. İletişim ve ilişkiler, roller ve kurallar, duygusal tepki mekanizmalarını analiz eder. Riskli aile işlevlerinin tespiti ve iyileştirilmesine yönelik aileye özel 'Aile Eğitim Programı' sunar. Çünkü sağlıklı bir aile ortamı, çocuğun gelişiminin temelidir.",
    targetAudience: "Uzman, Öğretmen, Aile",
    users: ["Uzmanlar", "Öğretmenler", "Aileler"],
    ageRange: "Aileler için",
    features: [
      "İletişim ve ilişki analizi",
      "Rol ve kural değerlendirmesi",
      "Duygusal tepki analizi",
      "Problem çözme becerisi",
      "Aile Eğitim Programı",
      "İyileştirme önerileri"
    ],
    reportContents: [
      {
        category: "İletişim ve İlişkiler",
        icon: "💬",
        items: ["Problem çözme becerisi", "Karar alma süreçleri", "Duygusal ilişki kalitesi", "Aile içi destek"]
      },
      {
        category: "Roller ve Kurallar",
        icon: "📋",
        items: ["Sağlıklı rol dağılımı", "Kurallar ve disiplin", "Davranış kontrolü", "Sorumluluk paylaşımı"]
      },
      {
        category: "Duygusal Tepkiler",
        icon: "💭",
        items: ["Duygusal tepki mekanizmaları", "Stresle başa çıkma", "Empati düzeyi", "Duygusal ifade"]
      }
    ],
    outcomes: [
      "Riskli aile işlevlerinin tespiti",
      "Aileye özel 'Aile Eğitim Programı'",
      "İyileştirme önerileri",
      "Uygulama planı"
    ],
    price: {
      bireysel: "11.999 TL",
      oldPrice: "18.000 TL",
      kurumsal: "Kuruma Özel"
    },
    color: "from-green-500 to-teal-500",
    colorSolid: "bg-green-500"
  }
];

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return products.find(p => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map(p => p.slug);
}
