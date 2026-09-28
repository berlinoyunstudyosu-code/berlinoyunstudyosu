import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/manrope";
import "@/app/globals.css";
import type { LocaleProps } from "@/content/i18n";

export function SiteDocument({ locale, children }: LocaleProps & { children: React.ReactNode }) {
  return <html lang={locale}><body>{children}</body></html>;
}
