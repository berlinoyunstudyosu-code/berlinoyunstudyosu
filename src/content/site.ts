export type NavItem = { label: string; href: `#${string}` };
export type EventItem = {
  id: string;
  date: string;
  badge: string;
  title: string;
  timeLabel: string;
  location: string;
  note: string;
  ticketUrl: string;
  description: string;
};
export type Player = {
  name: string;
  slug: string;
  initials: string;
  bio: string;
  showBio?: boolean;
  fullBio?: readonly string[];
  featured?: boolean;
  image: string;
};
export type Partner = { name: string; logo: string; url?: string };

export const withBasePath = (path: string) => path.startsWith("/") ? path : `/${path}`;

export const siteConfig = {
  name: "Berlin Oyun Stüdyosu",
  siteUrl: "https://berlinoyunstudyosu.com",
  description:
    "Öner Erkan, Pınar Göktaş, Emir Akköse, Okan Çetin, Yücel Çeşmeli, Ahmet Ozer, Elif Oguz, Alperen Derin, Ozgecan Cincik, Yelda Gulsoy, Gizem Kilic ve Kaan Songün'den oluşan Berlin Oyun Stüdyosu ekibiyle Berlin'de Türkçe doğaçlama komedi gösterileri, kurumsal etkinlikler ve workshoplar.",
  instagram: {
    label: "@berlinoyunstudyosu",
    url: "https://www.instagram.com/berlinoyunstudyosu/",
  },
  email: "iletisim@berlinoyunstudyosu.com",
  nav: [
    { label: "Gösteriler", href: "#gosteriler" },
    { label: "Sahneden", href: "#sahneden" },
    { label: "Biz Kimiz?", href: "#biz-kimiz" },
    { label: "Oyuncular", href: "#oyuncular" },
    { label: "Kurumsal", href: "#kurumsal" },
    { label: "İletişim", href: "#iletisim" },
  ] satisfies NavItem[],
  events: [
    {
      id: "turkce-dogaclama-2026-09-26",
      date: "2026-09-26T20:00:00+02:00",
      badge: "26 / EYL",
      title: "Berlin'de Türkçe Doğaçlama Komedi",
      timeLabel: "Cumartesi · 20:00",
      location: "Kreuzberg · Naunynstraße 63, 10997 Berlin",
      note: "Biletler bağış usulü",
      ticketUrl: "https://www.yesticket.org/event/en/berlinde-tuerke-doalama-komedi-26-09-26/",
      description:
        "Seyircinin fikirleriyle o anda doğan Türkçe doğaçlama komedi gösterisi. Biletler bağış usulü.",
    },
    {
      id: "turkce-dogaclama-2026-09-19",
      date: "2026-09-19T20:00:00+02:00",
      badge: "19 / EYL",
      title: "Berlin'de Türkçe Doğaçlama Komedi",
      timeLabel: "Cumartesi · 20:00",
      location: "Naunynstraße 63 · Kreuzberg",
      note: "Biletler bağış usulü",
      ticketUrl: "https://www.yesticket.org/event/en/tuerke-doalama-komedi-19-09-26/",
      description:
        "Seyircinin fikirleriyle o anda doğan Türkçe doğaçlama komedi gösterisi. Biletler bağış usulü.",
    },
  ] satisfies EventItem[],
  showPhotos: [
    { slug: "seyirciyle-ic-ice", caption: "Seyirciyle iç içe", alt: "Seyircilerin hemen önünde farklı ifadelerle doğaçlama yapan oyuncular" },
    { slug: "sahnede-dogaclama", caption: "Bir fikir, yeni bir sahne", alt: "Siyah perde önünde el hareketleriyle bir sahne canlandıran beş oyuncu" },
    { slug: "birlikte-oynarken", caption: "O anda, birlikte", alt: "Sahnede birbirlerinin oyununa karşılık veren doğaçlama ekibi" },
    { slug: "salondan-bir-an", caption: "Salonun içinden", alt: "Seyirci sıralarının arkasından görünen aydınlatılmış sahne ve oyuncular" },
    { slug: "sahne-ve-seyirci", caption: "Aynı gecenin parçası", alt: "Dolu salonda sahneyi izleyen seyirciler ve birlikte duran beş oyuncu" },
  ],
  partners: [] as Partner[],
  players: [
    {
      name: "Öner Erkan",
      slug: "oner-erkan",
      initials: "ÖE",
      featured: true,
      image: "/images/players/oner-erkan.webp",
      bio: "Tiyatro, sinema ve televizyon çalışmalarının yanında doğaçlamanın canlı riskini Berlin Oyun Stüdyosu sahnesine taşıyor.",
    },
    {
      name: "Pınar Göktaş",
      slug: "pinar-goktas",
      initials: "PG",
      featured: true,
      image: "/images/players/pinar-goktas.webp",
      bio: "Haliç Konservatuvarı Tiyatro Yüksek Lisans Programı’ndan mezun oldu. Sektörde uzun yıllardır tiyatro, televizyon, sinema ve reklam projelerinde oyunculuk yapıyor. Son yıllarda kendi oyunlarını yazıp sahneliyor ve özellikle komediyle ilgileniyor. Oyunculuk dışında jazz dansı eğitmenliği ve jazz vokalliği yapıyor.",
      showBio: true,
    },
    {
      name: "Emir Akköse",
      slug: "emir-akkose",
      initials: "EA",
      image: "/images/players/emir-akkose.webp",
      bio: "2014 yılında Selçuk Üniversitesi Sinema-TV Bölümü’nü bitirdikten sonra, “Nasıl daha nitelikli bir işsiz olurum?” diye düşünerek Müjdat Gezen Sanat Merkezi Tiyatro Bölümü’ne girdi. 2016 yılında buradan mezun olunca, “Bu iş böyle olmayacak,” diye düşünerek Almanya’ya göç etti.\n\nTiyatro ve sinema çalışmalarına burada devam edebileceğine ikna olmuşken işlerin hiç de öyle olmadığı ortaya çıktı. Bunun üzerine Çocuk Gelişimi okumaya ve garanti bir mesleğe sahip olmaya karar verdi. Ve yaptı da.\n\nSonra tüm bunların saçmalığından malzeme çıkarıp stand-up komedi yapmaya başladı. Doğaçlama komedi ve stand-up’ta, özgüvensiz ve efendi kimliğiyle dışadönüklere meydan okuyor. Pedagojik yaklaşımlarla bezeli şakalarını, De Niro gibi sahici bir aktör tavrıyla ve bir kayısı işçisi hassasiyetiyle sunuyor.",
      showBio: true,
    },
    {
      name: "Okan Çetin",
      slug: "okan-cetin",
      initials: "OÇ",
      image: "/images/players/okan-cetin.webp",
      bio: "Doğaçlamada merakın ve ekip oyunundaki sürprizlerin peşinden gidiyor.",
    },
    {
      name: "Yücel Çeşmeli",
      slug: "yucel-cesmeli",
      initials: "YÇ",
      image: "/images/players/yucel-cesmeli.webp",
      bio: "Sakin görünen anlardan beklenmedik karakterler ve komik kırılmalar çıkarıyor.",
    },
    {
      name: "Ahmet Ozer",
      slug: "ahmet-ozer",
      initials: "AO",
      image: "/images/players/ahmet-ozer.webp",
      bio: "1998’den bu yana oyuncu, yönetmen ve eğitmen olarak tiyatro çalışmalarını sürdürüyor. İzmir ve İstanbul’daki çalışmalarının ardından 2020’de Berlin’e taşındı; Ballhaus Prinzenallee, Berliner Ensemble ve Maxim Gorki Theater’da sahne aldı. Tiyatro çalışmalarının yanı sıra sinema ve televizyon projelerinde yer aldı. Sanatsal çalışmalarını Theater Kompanie ve Berlin Oyun Stüdyosu ile sürdürüyor.",
      showBio: true,
      fullBio: [
        "1985 yılında İzmir’de doğdu. Tiyatroya 1998 yılında başladı. 2000 yılında birkaç arkadaşıyla birlikte Tiyatro Kordelya’nın kuruluşunda yer aldı. Tiyatro Kordelya ekibiyle Karşıyaka 1. ve 2. Amatör Tiyatro Günlerini düzenledi.",
        "2003–2005 yılları arasında Karşıyaka Mavişehir İlköğretim Okulu’nda yaratıcı drama ve tiyatro eğitmeni olarak çalıştı. 2005 yılında Tiyatro Kordelya’nın dağılmasıyla Dönüşüm Atölyesi Oyuncuları’nın kuruluşunda yer aldı. 2004–2008 yılları arasında Dokuz Eylül Üniversitesi Torbalı Meslek Yüksekokulu Tiyatro Topluluğu’nu kurdu ve burada eğitmen ve oyuncu olarak görev yaptı. 2007–2013 yılları arasında Karşıyaka Anadolu Lisesi tiyatro topluluğunda eğitmenlik yaptı.",
        "2013–2015 yılları arasında İstanbul’da Mekân Artı’da tiyatro çalışmalarını sürdürdü. Bu dönemde oyunculuğun yanı sıra yönetmenlik, eğitmenlik ve sahne arkası çalışmalarında görev aldı; aynı zamanda tiyatro mekânının yönetiminde çalıştı. Müzik alanında da kendisini geliştirerek çeşitli tiyatro oyunlarının müzik tasarımlarını ve uygulamalarını gerçekleştirdi. Yurtiçi ve yurtdışında farklı tiyatro topluluklarıyla çalıştı.",
        "2015 yılında İzmir’e ve Dönüşüm Atölyesi Oyuncuları’na geri döndü. Karşıyaka Anadolu Lisesi’ndeki eğitmenlik görevini sürdürürken İSEM İzmir Sanat Etkinlikleri Merkezi ve Konak Belediyesi Tiyatro Konak’ta oyuncu olarak görev aldı.",
        "2018–2019 sezonunda Dönüşüm Atölyesi Oyuncuları ile sahnelediği Cambazın Cenazesi oyunuyla 2. Özdemir Nutku Tiyatro Ödülleri’nde En İyi Yardımcı Erkek Oyuncu ve En İyi Dramaturgi dallarında aday gösterildi. Aynı oyunla 19. Direklerarası Tiyatro Ödülleri’nde Umut Veren Tiyatro Ödülü’ne layık görüldü. 2018–2019 sezonunda Çağdaş Drama Derneği İzmir Şubesi’nden yaratıcı drama liderliği eğitimi aldı ve özel bir okulda drama öğretmeni olarak çalışmaya başladı.",
        "2020 yılının Kasım ayında Berlin’e taşındı. 2021–2022 sezonunda Ballhaus Prinzenallee’de Migraaaanten adlı oyunda oyuncu olarak yer aldı. 2021 yılında Tiyatro Berlin’in kuruluşunda görev aldı ve 2024 yılına kadar ekip bünyesinde çeşitli oyunlarda yer aldı. 2022 yılında Berlin’de tiyatro pedagojisi eğitimi aldı.",
        "2023–2025 yılları arasında Berliner Ensemble’da Ich habe die Nacht geträumt adlı oyunda yer aldı. 2023 yılında Maxim Gorki Theater’da “Gezi Festivali” kapsamında Üftade adlı oyunda sahne aldı.",
        "Sanatsal çalışmalarını 2025 yılından itibaren Theater Kompanie ile 2026 yılından itibaren de Berlin Oyun Stüdyosu ile sürdürmektedir.",
        "1998 yılından bu yana farklı tiyatro topluluklarında oyuncu, yönetmen ve eğitmen olarak görev aldı; eğitim verdiği kurumlarda tiyatro toplulukları kurdu ve çeşitli oyunlar sahneledi. Rol aldığı oyunlardan bazıları Deli Aklı, Kör Padişah, Yuppi Hayat, Balkon, Kuşlar, Gişe ve Cambazın Cenazesi’dir.",
        "Kamera önü çalışmalarından bazıları ise Emanet (kısa film), Gece (kısa film), Cinayet (dizi), Beni Böyle Sev (dizi), Sardunya (uzun metraj film) ve Açık Kapılar Ardında (uzun metraj film)dır."
],
    },
    {
      name: "Elif Oguz",
      slug: "elif-oguz",
      initials: "EO",
      image: "/images/players/elif-oguz.webp",
      bio: "",
    },
    {
      name: "Alperen Derin",
      slug: "alperen-derin",
      initials: "AD",
      image: "/images/players/alperen-derin.webp",
      bio: "",
    },
    {
      name: "Ozgecan Cincik",
      slug: "ozgecan-cincik",
      initials: "OC",
      image: "/images/players/ozgecan-cincik.webp",
      bio: "",
    },
    {
      name: "Yelda Gulsoy",
      slug: "yelda",
      initials: "YG",
      image: "/images/players/yelda.webp",
      bio: "Yelda Gülsoy, doğaçlama tiyatro alanında çalışan bir tiyatro sanatçısı ve eğitmendir. 2011 yılından bu yana kendini doğaçlama tiyatroya adamış. Türkiye’de YOTA doğaçlama tiyatro topluluğunun bir parçası olarak sahne almıştır. Doğaçlama tiyatro gösterilerinin yanı sıra, şirket ve kurumlara yönelik doğaçlama tiyatro atölyeleri ve özel gösteriler gerçekleştirmektedir. Berlin’de Notausgang Improtheater, Play and Work, F*Impro, 6 Frauen, Berlin Oyun Stüdyosu ve 90+ Improv topluluklarında Türkçe ve Almanca olarak sahne almaktadır.",
      showBio: true,
    },
    {
      name: "Gizem Kilic",
      slug: "gizem",
      initials: "GK",
      image: "/images/players/gizem.webp",
      bio: "",
    },
    {
      name: "Kaan Songün",
      slug: "kaan-songun",
      initials: "KS",
      image: "/images/players/kaan-songun.webp",
      bio: "",
    },
  ] satisfies Player[],
} as const;
