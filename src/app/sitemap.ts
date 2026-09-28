import type { MetadataRoute } from "next";
import { locales, localePath } from "@/content/i18n";
import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({ url: `${siteConfig.siteUrl}${localePath(locale)}`, lastModified: new Date(), changeFrequency: "monthly", priority: locale === "tr" ? 1 : 0.9, alternates: { languages: { tr: `${siteConfig.siteUrl}/`, de: `${siteConfig.siteUrl}/de/`, en: `${siteConfig.siteUrl}/en/` } } }));
}
