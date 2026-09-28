"use client";

import { languageTags, translator, type LocaleProps } from "@/content/i18n";

import { useEffect, useState } from "react";
import { formatEventDate, formatEventTime } from "@/lib/events";

export function MobileTicketBar({ ticketUrl, date, locale }: { ticketUrl: string; date: string } & LocaleProps) {
  const t = translator(locale);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.05 });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  return <aside className={`mobile-ticket ${hidden ? "mobile-ticket--hidden" : ""}`} aria-label={t("Yaklaşan gösteri bileti")}><span><small>{formatEventDate(date, locale).toLocaleUpperCase(languageTags[locale])} · {formatEventTime(date, locale)}</small>Kreuzberg</span><a href={ticketUrl} target="_blank" rel="noopener noreferrer">{t("Biletini Ayır")} ↗</a></aside>;
}
