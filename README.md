# Berlin Oyun Stüdyosu

Berlin Oyun Stüdyosu için Next.js App Router, TypeScript ve Tailwind CSS ile hazırlanmış statik landing page.

## Yerel geliştirme

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Kalite kontrolleri

```bash
npm run lint
npm run build
```

Statik çıktı `out/` klasörüne oluşturulur.

## İçerik güncelleme

Tüm temel içerik ve bağlantılar `src/content/site.ts` dosyasındadır.

- Etkinlik eklemek veya güncellemek için `events` dizisini düzenleyin. Tarihi ISO 8601 ve Berlin saat dilimiyle yazın (ör. `2026-09-19T20:00:00+02:00`). Geçmiş etkinlikler otomatik olarak yaklaşan gösterilerden çıkarılır.
- İletişim e-postasını `email`, canonical domaini `siteUrl` alanından güncelleyin.
- Oyuncu fotoğraflarını `public/images/players/{slug}.webp` yoluna ekleyin. Önerilen oran `4:5`, minimum boyut `1200×1500 px`, format WebP. Fotoğraf yoksa monogramlı fallback otomatik gösterilir.
- Partner logoları için `siteConfig` içinde ileride doldurulabilecek bir veri dizisi kullanılmalı; doğrulanmamış logo eklemeyin.

## Yayınlama

### GitHub Pages

Proje, `.github/workflows/deploy-pages.yml` üzerinden GitHub Pages'e, `https://berlinoyunstudyosu.com` özel domaininin kök dizinine yayınlanır.

1. Projeyi GitHub'da bir repository'ye gönderin. Varsayılan branch `main` olmalıdır.
2. Repository'de **Settings → Pages → Build and deployment → Source** alanından **GitHub Actions** seçin.
3. `main` branch'ine push yapın veya **Actions → Deploy Next.js site to GitHub Pages → Run workflow** ile elle çalıştırın.
4. Workflow tamamlandığında yayın adresi deployment özetinde görünür.

Next.js `basePath` ve `assetPrefix` kullanmaz; tüm yerel asset yolları `/` kökünden başlar. Canonical, sosyal paylaşım, sitemap ve robots adresleri `siteConfig.siteUrl` içindeki `https://berlinoyunstudyosu.com` adresini kullanır. `public/CNAME` build sırasında `out/CNAME` olarak kopyalanır ve workflow bu dosyayı doğrulayıp `out/` klasörünü olduğu gibi yayınlar. `public/.nojekyll`, Next.js'in `_next` klasörünün GitHub Pages tarafından eksiksiz servis edilmesini sağlar.

Workflow `main` branch'ini izler. Farklı bir varsayılan branch kullanılıyorsa `.github/workflows/deploy-pages.yml` içindeki branch adını değiştirin.

Alternatif olarak Vercel veya statik site barındıran başka bir servis de kullanılabilir. Yayınlamadan önce production domainini doğrulayın.

## Yayın öncesi checklist

- [ ] Geçici iletişim e-postasını gerçek kurumsal e-posta ile değiştirin.
- [ ] `siteUrl` değerini gerçek domain ile doğrulayın.
- [ ] Oyuncu fotoğraflarının kullanım izinlerini alın.
- [ ] Öner Erkan ve Pınar Göktaş isim/fotoğraf kullanım onaylarını alın.
- [ ] Etkinlik tarihi, mekânı ve YesTicket bağlantısını doğrulayın.
- [ ] Impressum ve Datenschutz için gerçek hukuki metinleri hukuk danışmanıyla tamamlayın.
- [ ] Analytics eklenecekse gerekli cookie consent çözümünü de ekleyin. Varsayılan projede analytics yoktur.
