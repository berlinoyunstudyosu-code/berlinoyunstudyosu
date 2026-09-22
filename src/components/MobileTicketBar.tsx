"use client";

import { useEffect, useState } from "react";
import { formatEventDate, formatEventTime } from "@/lib/events";

export function MobileTicketBar({ ticketUrl, date }: { ticketUrl: string; date: string }) {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.05 });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  return <aside className={`mobile-ticket ${hidden ? "mobile-ticket--hidden" : ""}`} aria-label="Yaklaşan gösteri bileti"><span><small>{formatEventDate(date).toLocaleUpperCase("tr-TR")} · {formatEventTime(date)}</small>Kreuzberg</span><a href={ticketUrl} target="_blank" rel="noopener noreferrer">Biletini Ayır ↗</a></aside>;
}
