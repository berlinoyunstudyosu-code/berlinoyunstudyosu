# Claude Code Prompt — Berlin Oyun Stüdyosu Landing Page

Bu klasördeki görsel dosyalarını kullanarak Berlin Oyun Stüdyosu için production-ready, tek sayfalık bir web sitesi oluştur. Aşağıdaki talimatları baştan sona uygula. Eksik küçük kararları kendin ver; kullanıcıdan onay bekleme. Siteyi deploy etme ve DNS ayarlarına dokunma.

## 1. Rolün ve hedef

Sen deneyimli bir creative developer, ürün tasarımcısı ve frontend mühendisisin. Berlin merkezli Türkçe doğaçlama komedi topluluğu **Berlin Oyun Stüdyosu** için yalın, modern, karakterli ve güven veren bir landing page geliştir.

Site iki kitleye aynı anda hizmet etmeli:

1. Gösteriye gelmek ve bilet ayırmak isteyen Berlin'deki Türkçe konuşan seyirci.
2. Kurumsal etkinlik, workshop, işbirliği veya sponsorluk görüşmek isteyen şirket ve kurumlar.

Ünlü oyuncuların isimleri güçlü bir güven unsuru olsun; fakat marka her zaman **Berlin Oyun Stüdyosu** olarak kalsın. Site bir “Öner Erkan kişisel sitesi” gibi görünmesin.

## 2. Kaynaklar ve değişmez bilgiler

- Instagram: `https://www.instagram.com/berlinoyunstudyosu/`
- Yaklaşan gösteri bilet bağlantısı: `https://www.yesticket.org/event/en/tuerke-doalama-komedi-19-09-26/`
- Gösteri: **19 Eylül 2026, Cumartesi, 20:00**
- Mekân: **Naunynstraße 63, Kreuzberg, Berlin**
- Bilet bilgisi: **Biletler bağış usulü**
- Ekip: **Öner Erkan, Pınar Göktaş, Okan Çetin, Emir Akköse, Yücel Çeşmeli**
- İletişim e-postası henüz kesinleşmedi. Tek bir merkezi ayar alanında `iletisim@berlinoyunstudyosu.de` geçici değeri kullanılmalı ve yanına geliştirici yorumu olarak `TODO: yayın öncesi gerçek e-posta ile değiştir` eklenmeli. E-postayı bileşenlere tekrar tekrar hard-code etme.

Instagram'ı scrape etme, giriş yapmaya çalışma ve Instagram görsellerini hotlink etme. Gerçek oyuncu fotoğrafları verilmemişse kişilerin yapay portrelerini üretme veya internetten izinsiz fotoğraf indirme. Bunun yerine aşağıda belirtilen zarif fallback kartlarını kullan.

## 3. Bu klasörde verilen görseller

Önce mevcut çalışma dizinini incele ve bu prompt dosyasının yanındaki `assets/` klasörünü bul. Aşağıdaki dosyaları projenin uygun `public/images/` yapısına kopyala; anlamlı isimleri koru. Görselleri yeniden üretme.

- `assets/berlin-oyun-studyosu-logo.png` — kullanıcının verdiği orijinal logo. Değiştirme, yeniden çizme, üzerine efekt bindirme veya tipografisini taklit etmeye çalışma.
- `assets/hero-stage.png` — hero arka planı.
- `assets/corporate-workshop.png` — Corporate Events bölümü.
- `assets/partnership-stage.png` — Partners & Sponsorship bölümü.

Görselleri Next.js `Image` ile kullan. Doğru `sizes`, boyut ve öncelik ayarlarını ekle. Hero için `priority`; alt görseller için lazy-loading kullan. Kaliteyi gözle görülür biçimde bozma. `object-position` değerlerini kompozisyona göre belirle.

## 4. Teknik temel

- Eğer mevcut bir proje varsa yapısını ve package manager'ını koru. Yoksa **Next.js App Router + TypeScript + Tailwind CSS** ile yeni proje oluştur.
- Tek sayfalık, statik olarak render edilebilir bir site yap. Backend, veritabanı, CMS veya authentication ekleme.
- İçerikleri `src/content/site.ts` benzeri tek bir typed config dosyasında topla: navigasyon, etkinlikler, oyuncular, iletişim bilgileri ve sosyal linkler.
- UI bileşenlerini küçük ve okunabilir tut: `Header`, `Hero`, `UpcomingShows`, `About`, `Players`, `Corporate`, `Partners`, `Contact`, `Footer` gibi.
- Gereksiz UI kütüphanesi kullanma. İkon gerekirse `lucide-react` kullanılabilir.
- Framer Motion ekleme. Hafif reveal/hover hareketlerini CSS ile yap; `prefers-reduced-motion` ayarına saygı göster.
- Site JS olmadan da temel içeriği ve bağlantıları göstermeli.
- Kodda `any`, anlamsız placeholder lorem ipsum veya console error bırakma.
- Son aşamada `npm run lint` ve `npm run build` çalıştır; oluşan hataları düzelt.

## 5. Tasarım yönü

Marka dili logodan türesin: Berlin gecesi, black-box tiyatro, sıcak spot ışığı, spontane enerji. Site premium ama mesafeli değil; eğlenceli ama çocukça değil.

### Renk paleti

CSS değişkenleri/tasarım tokenları oluştur:

- `--ink: #080B0D` — ana zemin
- `--ink-soft: #11161A` — kart/alternatif zemin
- `--paper: #F5F1E8` — açık bölüm ve ana metin
- `--white: #FFFFFF`
- `--amber: #E8A44A` — logodaki küçük sıcak vurgu ve ana CTA
- `--amber-soft: #F1C27A`
- `--line: rgba(255,255,255,.14)`
- `--muted: #A9AFB3`

Turuncuyu vurgu olarak kontrollü kullan. Kırmızı tiyatro perdesi klişesine, neon estetiğe, komedi maskelerine ve rastgele çok renkli degradelere başvurma.

### Tipografi

- Display başlıkları için güçlü, geometrik, çağdaş bir grotesk font kullan; örneğin **Space Grotesk Variable**.
- Gövde için okunaklı bir sans font; örneğin **Manrope Variable**.
- Fontları mümkünse npm üzerinden self-host edilen `@fontsource-variable/*` paketleriyle yükle; build sırasında Google Fonts ağına bağımlı olma.
- Hero başlığı desktop'ta güçlü ve büyük, mobilde taşmadan 3 satırda okunmalı.
- Türkçe karakterleri kusursuz göster.

### Görsel detaylar

- Grid-temelli, geniş boşluklu ve asimetrik kompozisyon.
- İnce çizgiler, küçük uppercase eyebrow metinleri ve amber tarih rozetleri kullanılabilir.
- Kartlarda aşırı radius, glassmorphism veya yoğun shadow kullanma. Radius yaklaşık 16–20 px yeterli.
- Masaüstünde içerik genişliği yaklaşık 1200–1280 px; mobilde güvenli yatay padding 20–24 px.
- Focus ring görünür ve amber tonunda olsun.

## 6. Sayfa yapısı ve kesin metinler

### A. Header

- Sol tarafta logo. Logo görselini koyu arka plan üzerinde kullan; okunabilir boyutta olsun.
- Sağda anchor navigasyon: `Gösteriler`, `Biz Kimiz?`, `Oyuncular`, `Kurumsal`, `İletişim`.
- Son öğe belirgin amber CTA: `Biletini Ayır`.
- Header başlangıçta saydam olabilir; scroll sonrası koyu, hafif blur'lu sabit header'a dönüşsün.
- Mobilde erişilebilir menü butonu kullan: doğru `aria-expanded`, `aria-controls`, Escape ile kapanma ve link seçilince menüyü kapatma.

### B. Hero

Hero tam ekran hissi versin; görsel üzerinde okunabilirliği garanti eden soldan sağa koyu overlay kullan.

Eyebrow:

`BERLİN'DE TÜRKÇE DOĞAÇLAMA KOMEDİ`

Ana başlık:

`Sen söyle.`  
`Biz oynayalım.`

Alt metin:

`Seyirciden bir kelime, sahnede o anda doğan hikâyeler. Öner Erkan, Pınar Göktaş ve Berlin Oyun Stüdyosu ekibiyle her gösteri tek seferlik.`

CTA'lar:

- Birincil: `19 Eylül Gösterisi` → etkinlik/bilet URL'si, yeni sekme.
- İkincil: `Kurumsal Etkinlikler` → `#kurumsal`.

Hero'nun alt bölümünde küçük bir bilgi satırı:

`19 EYLÜL · 20:00` — `KREUZBERG` — `BİLETLER BAĞIŞ USULÜ`

### C. Yaklaşan Gösteriler — `#gosteriler`

Başlık: `Yaklaşan gösteriler`

Alt metin: `Bir kelime verin; gerisini o gece birlikte yazalım.`

Tek güçlü etkinlik kartı oluştur:

- Tarih rozeti: `19 / EYL`
- Başlık: `Berlin'de Türkçe Doğaçlama Komedi`
- Gün/saat: `Cumartesi · 20:00`
- Konum: `Naunynstraße 63 · Kreuzberg`
- Not: `Biletler bağış usulü`
- CTA: `Biletini ayır` → YesTicket linki.

Etkinlikleri config dizisinden render et. ISO tarih alanı kullan. Tarih geçmişse kartı otomatik olarak “geçmiş etkinlik” görünümüne düşürmek yerine yaklaşanlar listesinden çıkar; yaklaşan etkinlik kalmadığında şu zarif boş durum çıksın:

`Yeni gösteriler çok yakında.`  
`Tarihleri kaçırmamak için bizi Instagram'da takip edin.`

### D. Berlin Oyun Stüdyosu — `#biz-kimiz`

Eyebrow: `BİZ KİMİZ?`

Başlık: `Senaryo yok. Tekrarı yok.`

Metin:

`Berlin Oyun Stüdyosu, Berlin'de Türkçe doğaçlama komediyi seyircisiyle birlikte kuran bir sahne topluluğu. Karakterler, ilişkiler ve hikâyeler seyirciden gelen fikirlerle o anda doğuyor.`

`Her oyun yalnızca o salonda, o seyirciyle ve bir kez yaşanıyor. Biz hazırız; hikâyenin ilk kelimesi sizden.`

Yanında küçük bir tipografik istatistik/manifesto bloğu kullan:

- `0` yazılı senaryo
- `100%` o anda
- `1` benzersiz gece

### E. Oyuncular — `#oyuncular`

Başlık: `Sahnede kimler var?`

Alt metin: `Farklı oyunculuk deneyimleri, tek bir ortak refleks: anda kalmak.`

Oyuncu sırası:

1. Öner Erkan — featured kart
2. Pınar Göktaş — featured kart
3. Okan Çetin
4. Emir Akköse
5. Yücel Çeşmeli

Kısa bio metinleri:

- **Öner Erkan:** `Tiyatro, sinema ve televizyon çalışmalarının yanında doğaçlamanın canlı riskini Berlin Oyun Stüdyosu sahnesine taşıyor.`
- **Pınar Göktaş:** `Oyunculuk deneyimini güçlü karakterler, keskin gözlem ve sahnedeki anlık oyunla buluşturuyor.`
- **Okan Çetin:** `Doğaçlamada merakın ve ekip oyunundaki sürprizlerin peşinden gidiyor.`
- **Emir Akköse:** `Yüksek enerjisi ve anlık hikâye kurma refleksiyle sahnenin yönünü değiştirmeyi seviyor.`
- **Yücel Çeşmeli:** `Sakin görünen anlardan beklenmedik karakterler ve komik kırılmalar çıkarıyor.`

Gerçek fotoğraf sistemi:

- Bileşen `public/images/players/{slug}.webp` dosyalarını desteklesin.
- Bu dosyalar yoksa build kırılmasın; her oyuncu için koyu zeminde dev tipografik baş harf/monogram, amber ışık dokusu ve isim gösteren zarif fallback kartı render et.
- Sahte/yapay yüz kullanma.
- Featured kartlar masaüstünde biraz daha büyük olabilir ama diğer oyuncuları ikincil veya değersiz göstermesin.

### F. Corporate Events — `#kurumsal`

İki kolonlu bölüm. `corporate-workshop.png` görselini kullan.

Eyebrow: `CORPORATE EVENTS`

Başlık: `Ekibiniz için sahnede yeni bir alan açın.`

Ana metin:

`Şirketiniz için özel doğaçlama gösterileri ve workshoplar. İletişim, spontanlık, birlikte üretme ve güveni eğlenceli, katılımcı bir formatta deneyimleyin.`

Maddeler:

- `Şirkete özel Türkçe veya İngilizce gösteri`
- `Takım iletişimi ve yaratıcılık workshop'u`
- `Offsite, kutlama ve networking geceleri`
- `İhtiyaca göre 60–90 dakikalık formatlar`

CTA: `Kurumsal etkinliği konuşalım` → iletişim bölümüne gider ve konu seçimini `Corporate Event` olarak önceden ayarlar.

### G. Partners & Sponsorship — `#partners`

Koyu zemin üzerinde `partnership-stage.png` ile dengeli iki kolonlu bölüm.

Eyebrow: `PARTNERS & SPONSORSHIP`

Başlık: `Aynı sahnede daha büyük bir etki.`

Metin:

`Berlin Oyun Stüdyosu ile işbirliği yapın. Berlin'deki Türkçe konuşan topluluğa canlı etkinlikler, yaratıcı içerikler ve markaya özel deneyimler üzerinden ulaşın.`

Üç kısa değer önerisi:

- `Etkinlik partnerliği`
- `İçerik işbirliği`
- `Sezon sponsorluğu`

CTA: `İşbirliğini konuşalım` → iletişim bölümüne gider ve konu seçimini `Partners & Sponsorship` olarak önceden ayarlar.

Logo wall için uydurma sponsor logoları ekleme. İleride logo eklemeye uygun erişilebilir boş bir data yapısı bırak ama kullanıcıya “sponsor yok” gibi görünen boş grid render etme.

### H. İletişim — `#iletisim`

Başlık: `Perde açılmadan konuşalım.`

Metin: `Gösteriler, kurumsal etkinlikler ve işbirlikleri için bize ulaşın.`

İki büyük iletişim seçeneği:

- E-posta → merkezi config'teki geçici adresle `mailto:`.
- Instagram → `@berlinoyunstudyosu`.

Basit bir istemci tarafı iletişim formu ekle:

- Ad soyad
- E-posta
- Konu select: `Gösteriler`, `Corporate Event`, `Partners & Sponsorship`, `Diğer`
- Mesaj
- Gönder butonu

Backend olmadığı için form submit edildiğinde doğrulanmış alanlarla doğru konu ve mesajı içeren URL-encoded bir `mailto:` açsın. Kullanıcıyı kandıracak “mesaj gönderildi” durumu gösterme. Form erişilebilir label'lara, Türkçe hata mesajlarına ve klavye kullanımına sahip olsun.

### I. Footer

- Küçük logo/wordmark.
- `Berlin'de Türkçe doğaçlama komedi.`
- Anchor linkler.
- Instagram.
- Dinamik yıl.
- `Impressum` ve `Datenschutz` linkleri için footer'da yer ayır. Almanya'da yayına çıkmadan önce gerçek hukuki metin gerektiğini README'deki launch checklist'e yaz. Uydurma hukuki içerik üretme; linkleri yayında kırık bırakma. Geçici olarak açılan erişilebilir modal/panel içinde `Yayın öncesi doldurulacaktır.` mesajı göster.

## 7. Responsive ve etkileşim davranışı

- Mobile-first geliştir; 360 px'den geniş ekranlara kadar yatay taşma olmasın.
- Hero desktop'ta yaklaşık `min-height: 90svh`, mobilde içerik yüksekliğine uyumlu olsun.
- Mobilde alt kısımda yalnızca yaklaşan etkinlik varsa küçük sticky `Biletini Ayır` CTA göster; footer'a yaklaşınca rahatsız etmemesi için gizlenebilir.
- Anchor scroll, sticky header yüksekliğini hesaba katsın (`scroll-margin-top`).
- Hover durumları touch cihazlarda işlev için zorunlu olmasın.
- Animasyonlar: başlık ve kartlarda hafif opacity/translate reveal; yoğun parallax, cursor efekti veya sürekli hareket kullanma.
- `prefers-reduced-motion: reduce` durumunda smooth scroll ve animasyonları kapat.

## 8. SEO, paylaşım ve semantik

- HTML dili `tr`.
- Title: `Berlin Oyun Stüdyosu | Berlin'de Türkçe Doğaçlama Komedi`
- Description: `Öner Erkan, Pınar Göktaş ve Berlin Oyun Stüdyosu ekibiyle Berlin'de Türkçe doğaçlama komedi gösterileri, kurumsal etkinlikler ve workshoplar.`
- Canonical domain net olmadığı için merkezi `siteUrl` config'i kullan; varsayılan olarak `https://berlinoyunstudyosu.de` ayarla ve README'de doğrulama notu düş.
- Open Graph ve Twitter metadata ekle. Logo ve hero görseliyle markalı bir `opengraph-image` üret; metin güvenli sınırlar içinde olsun.
- `Organization` veya uygun `PerformingGroup` JSON-LD ekle. Etkinlik yaklaşan durumdaysa `Event` JSON-LD üret; fiyat bilinmediği için uydurma fiyat yazma. Biletlerin bağış usulü olduğunu açıklamada belirt.
- `robots.ts` ve `sitemap.ts` ekle.
- Başlık hiyerarşisi doğru olsun; sayfada tek bir `h1`.
- Dış bağlantılarda `rel="noopener noreferrer"`.

## 9. Erişilebilirlik ve kalite

- WCAG AA kontrastını hedefle.
- Tüm etkileşimli öğelerde görünür focus state.
- Dekoratif görsellerde boş `alt`; anlam taşıyan görsellerde kısa Türkçe `alt`.
- `aria-label` yalnızca gerekli yerde; semantik HTML'yi tercih et.
- Skip link: `İçeriğe geç`.
- Mobil menü açıldığında focus davranışını düzgün yönet.
- Form hata mesajlarını alanlarla ilişkilendir.
- 200% zoom'da içerik kullanılabilir kalsın.

## 10. Dosya ve içerik mimarisi

Tercih edilen yaklaşık yapı:

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    robots.ts
    sitemap.ts
    opengraph-image.tsx
  components/
    Header.tsx
    Hero.tsx
    UpcomingShows.tsx
    About.tsx
    Players.tsx
    Corporate.tsx
    Partners.tsx
    Contact.tsx
    Footer.tsx
    MobileTicketBar.tsx
  content/
    site.ts
  lib/
    events.ts
public/
  images/
    berlin-oyun-studyosu-logo.png
    hero-stage.png
    corporate-workshop.png
    partnership-stage.png
    players/
```

Yapı mevcut projenin konvansiyonlarıyla çelişiyorsa aynı sorumluluk ayrımını koruyarak adapte et.

## 11. README ve yayın öncesi kontrol listesi

README'de şunları açıkça yaz:

- Kurulum ve local geliştirme komutları.
- Build/lint komutları.
- Etkinlik ekleme/güncelleme yeri.
- Oyuncu fotoğraflarının beklenen dosya adları ve önerilen oranı (`4:5`, en az 1200×1500 px, WebP).
- İletişim e-postasının ve `siteUrl` değerinin nereden güncellendiği.
- Deploy önerisi (Vercel olabilir), ancak deployment yapma.
- Yayın öncesi checklist:
  - gerçek kurumsal e-posta
  - gerçek domain
  - oyuncu fotoğrafları için kullanım izni
  - Öner Erkan ve Pınar Göktaş isim/fotoğraf kullanım onayı
  - etkinlik ve YesTicket linki doğrulaması
  - Impressum ve Datenschutz hukuki metinleri
  - analytics/cookie consent ancak gerçekten analytics eklenirse

Analytics'i varsayılan olarak ekleme.

## 12. Son kabul kriterleri

İşi tamamlamadan önce aşağıdakilerin hepsini doğrula:

1. Site 360 px, 768 px, 1440 px genişliklerde düzenli görünüyor.
2. Logo net, bozulmamış ve doğru oranda.
3. Hero metni görsel üzerinde her breakpoint'te okunuyor.
4. YesTicket ve Instagram bağlantıları doğru.
5. Geçmiş etkinlik mantığı ve boş durum çalışıyor.
6. Oyuncu fotoğrafları yokken build kırılmıyor ve zarif fallback görünüyor.
7. Corporate/partner CTA'ları iletişim formunun konusunu doğru seçiyor.
8. Mobil menü ve klavye navigasyonu çalışıyor.
9. `prefers-reduced-motion` destekleniyor.
10. Metadata, JSON-LD, sitemap ve robots mevcut.
11. `npm run lint` başarılı.
12. `npm run build` başarılı.
13. README eksiksiz.
14. Son çıktında oluşturduğun dosyaları, doğrulama sonuçlarını ve yayın öncesi kalan gerçek içerik ihtiyaçlarını kısa biçimde raporla.

Tasarımı sıradan bir hazır tema gibi bırakma. Logonun siyah–beyaz–amber dili, büyük tipografi, tiyatro ışığı ve dengeli boşluklar sayesinde Berlin Oyun Stüdyosu'na ait olduğu ilk bakışta anlaşılmalı.
