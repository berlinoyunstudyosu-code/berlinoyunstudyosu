"use client";

import { locales, localePath, translator, type LocaleProps } from "@/content/i18n";

const names = { tr: "Türkçe", de: "Deutsch", en: "English" };
export function LanguageSwitcher({ locale }: LocaleProps) {
  return <nav className="language-switcher" aria-label={translator(locale)("Dil seçimi")}>
    {locales.map((language) => <a key={language} href={localePath(language)} lang={language} hrefLang={language} aria-label={names[language]} title={names[language]} aria-current={locale === language ? "page" : undefined} onClick={(event) => {
      // The same section IDs exist in every language, so retain the reading position.
      event.currentTarget.href = `${localePath(language)}${window.location.hash}`;
    }}>{language.toUpperCase()}</a>)}
  </nav>;
}
