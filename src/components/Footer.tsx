import { translator, localizedSite, type LocaleProps } from "@/content/i18n";
import Image from "next/image";
import { withBasePath } from "@/content/site";
import { LegalDialog } from "./LegalDialog";

export function Footer({ locale }: LocaleProps) {
  const t = translator(locale);
  const siteConfig = localizedSite(locale);
  return <footer id="site-footer" className="site-footer"><div className="shell footer-grid">
    <div className="footer-brand"><Image src={withBasePath("/images/berlin-oyun-studyosu-logo.png")} width={718} height={712} sizes="72px" alt="Berlin Oyun Stüdyosu" /><p>{t("Berlin'de Türkçe doğaçlama komedi.")}</p></div>
    <nav aria-label={t("Alt navigasyon")}>{siteConfig.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    <div className="footer-social"><a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer">Instagram ↗</a><div><LegalDialog locale={locale} label="Impressum" /><LegalDialog locale={locale} label="Datenschutz" /></div></div>
  </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Berlin Oyun Stüdyosu</span><span>{t("Berlin · Almanya")}</span></div></footer>;
}
