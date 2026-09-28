import de from "./translations/de.json";
import en from "./translations/en.json";
import { siteConfig } from "./site";

export const locales = ["tr", "de", "en"] as const;
export type Locale = typeof locales[number];
export type LocaleProps = { locale: Locale };
export const languageTags = { tr: "tr-TR", de: "de-DE", en: "en-GB" } as const;
export const localePath = (locale: Locale) => locale === "tr" ? "/" : `/${locale}/`;
export const isLocale = (value: string): value is Locale => locales.some((locale) => locale === value);
export function translator(locale: Locale) {
  const messages: Record<string, string> = locale === "de" ? de : locale === "en" ? en : {};
  return (text: string) => messages[text] ?? text;
}
export function localizedSite(locale: Locale) {
  const t = translator(locale);
  return {
    ...siteConfig,
    description: locale === "tr" ? siteConfig.description : locale === "de"
      ? "Türkische Impro-Comedy in Berlin mit dem Ensemble von Berlin Oyun Stüdyosu: Öner Erkan, Pınar Göktaş, Emir Akköse, Okan Çetin, Yücel Çeşmeli, Ahmet Ozer, Elif Oguz, Mehmet Alperen Derin, Ozgecan Cincik, Yelda Gulsoy, Gizem Kilic und Kaan Songün. Shows, Firmenevents und Workshops."
      : "Turkish improv comedy in Berlin with the Berlin Oyun Stüdyosu ensemble: Öner Erkan, Pınar Göktaş, Emir Akköse, Okan Çetin, Yücel Çeşmeli, Ahmet Ozer, Elif Oguz, Mehmet Alperen Derin, Ozgecan Cincik, Yelda Gulsoy, Gizem Kilic and Kaan Songün. Shows, corporate events and workshops.",
    nav: siteConfig.nav.map((item) => ({ ...item, label: t(item.label) })),
    showPhotos: siteConfig.showPhotos.map((photo) => ({ ...photo, caption: t(photo.caption), alt: t(photo.alt) })),
    events: siteConfig.events.map((event) => ({
      ...event, title: t(event.title), note: t(event.note), description: t(event.description),
      badge: locale === "tr" ? event.badge : new Intl.DateTimeFormat(languageTags[locale], { day: "2-digit", month: "short", timeZone: "Europe/Berlin" }).format(new Date(event.date)),
      timeLabel: locale === "tr" ? event.timeLabel : `${new Intl.DateTimeFormat(languageTags[locale], { weekday: "long", timeZone: "Europe/Berlin" }).format(new Date(event.date))} · ${new Intl.DateTimeFormat(languageTags[locale], { hour: "2-digit", minute: "2-digit", hourCycle: "h23", timeZone: "Europe/Berlin" }).format(new Date(event.date))}`,
    })),
  };
}
