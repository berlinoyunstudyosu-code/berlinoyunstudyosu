import type { Metadata } from "next";
import { localizedSite, localePath, translator, type Locale } from "@/content/i18n";

export function pageMetadata(locale: Locale): Metadata {
  const site = localizedSite(locale);
  const title = `${site.name} | ${translator(locale)("Berlin'de Türkçe Doğaçlama Komedi")}`;
  const url = `${site.siteUrl}${localePath(locale)}`;
  return {
    metadataBase: new URL(site.siteUrl), title, description: site.description,
    alternates: { canonical: url, languages: { tr: "/", de: "/de/", en: "/en/", "x-default": "/" } },
    icons: { icon: { url: "/images/berlin-oyun-studyosu-logo.png", type: "image/png" }, apple: "/images/berlin-oyun-studyosu-logo.png" },
    openGraph: { title, description: site.description, url, siteName: site.name, locale: { tr: "tr_TR", de: "de_DE", en: "en_GB" }[locale], type: "website", images: [{ url: `${site.siteUrl}/opengraph-image.png`, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: site.name, description: site.description, images: [`${site.siteUrl}/opengraph-image.png`] },
  };
}
