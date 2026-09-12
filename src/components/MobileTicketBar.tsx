"use client";

import { useEffect, useState } from "react";

export function MobileTicketBar({ ticketUrl }: { ticketUrl: string }) {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.05 });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  return <aside className={`mobile-ticket ${hidden ? "mobile-ticket--hidden" : ""}`} aria-label="Yaklaşan gösteri bileti"><span><small>19 EYLÜL · 20:00</small>Kreuzberg</span><a href={ticketUrl} target="_blank" rel="noopener noreferrer">Biletini Ayır ↗</a></aside>;
}
