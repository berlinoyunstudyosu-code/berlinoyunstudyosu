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
  featured?: boolean;
  image: string;
};
export type Partner = { name: string; logo: string; url?: string };

export const withBasePath = (path: string) => path.startsWith("/") ? path : `/${path}`;

export const siteConfig = {
  name: "Berlin Oyun Stüdyosu",
  siteUrl: "https://berlinoyunstudyosu.com",
  description:
    "Öner Erkan, Pınar Göktaş ve Berlin Oyun Stüdyosu ekibiyle Berlin'de Türkçe doğaçlama komedi gösterileri, kurumsal etkinlikler ve workshoplar.",
  instagram: {
    label: "@berlinoyunstudyosu",
    url: "https://www.instagram.com/berlinoyunstudyosu/",
  },
  email: "iletisim@berlinoyunstudyosu.com",
  nav: [
    { label: "Gösteriler", href: "#gosteriler" },
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
      location: "Naunynstraße 63 · Kreuzberg",
      note: "Biletler bağış usulü",
      ticketUrl: "https://www.yesticket.org/",
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
      bio: "Oyunculuk deneyimini güçlü karakterler, keskin gözlem ve sahnedeki anlık oyunla buluşturuyor.",
    },
    {
      name: "Okan Çetin",
      slug: "okan-cetin",
      initials: "OÇ",
      image: "/images/players/okan-cetin.webp",
      bio: "Doğaçlamada merakın ve ekip oyunundaki sürprizlerin peşinden gidiyor.",
    },
    {
      name: "Emir Akköse",
      slug: "emir-akkose",
      initials: "EA",
      image: "/images/players/emir-akkose.webp",
      bio: "Yüksek enerjisi ve anlık hikâye kurma refleksiyle sahnenin yönünü değiştirmeyi seviyor.",
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
      bio: "",
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
      bio: "",
    },
    {
      name: "Gizem Kilic",
      slug: "gizem",
      initials: "GK",
      image: "/images/players/gizem.webp",
      bio: "",
    },
  ] satisfies Player[],
} as const;
