import { notFound } from "next/navigation";
import { SiteDocument } from "@/components/SiteDocument";
import { isLocale } from "@/content/i18n";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }>; children: React.ReactNode };
export const dynamicParams = false;
export function generateStaticParams() { return [{ locale: "de" }, { locale: "en" }]; }
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "tr") notFound();
  return pageMetadata(locale);
}
export default async function TranslatedLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "tr") notFound();
  return <SiteDocument locale={locale}>{children}</SiteDocument>;
}
