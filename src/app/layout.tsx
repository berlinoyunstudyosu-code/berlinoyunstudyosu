import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/manrope";
import "./globals.css";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Berlin Oyun Stüdyosu | Berlin'de Türkçe Doğaçlama Komedi",
  description: siteConfig.description,
  alternates: { canonical: siteConfig.siteUrl },
  openGraph: {
    title: "Berlin Oyun Stüdyosu | Berlin'de Türkçe Doğaçlama Komedi",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
    images: [{ url: `${siteConfig.siteUrl}/opengraph-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berlin Oyun Stüdyosu",
    description: siteConfig.description,
    images: [`${siteConfig.siteUrl}/opengraph-image.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
