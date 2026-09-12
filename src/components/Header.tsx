"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteConfig, withBasePath } from "@/content/site";

export function Header({ ticketUrl }: { ticketUrl?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const focusable = menuRef.current?.querySelectorAll<HTMLElement>("a, button");
    focusable?.[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (event.key === "Tab" && focusable?.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={`site-header ${scrolled || open ? "site-header--solid" : ""}`}>
      <div className="header-inner">
        <a href="#ana-icerik" className="brand" aria-label="Berlin Oyun Stüdyosu ana sayfa">
          <Image src={withBasePath("/images/berlin-oyun-studyosu-logo.png")} width={718} height={712} sizes="64px" priority alt="Berlin Oyun Stüdyosu" />
        </a>
        <nav className="desktop-nav" aria-label="Ana navigasyon">
          {siteConfig.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          {ticketUrl ? <a className="button button--small" href={ticketUrl} target="_blank" rel="noopener noreferrer">Biletini Ayır</a> : null}
        </nav>
        <button ref={buttonRef} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Menüyü kapat" : "Menüyü aç"} onClick={() => setOpen((value) => !value)}>
          <span /><span />
        </button>
      </div>
      <div ref={menuRef} id="mobile-menu" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobil navigasyon">
          {siteConfig.nav.map((item) => <a key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{item.label}</a>)}
          {ticketUrl ? <a className="button" href={ticketUrl} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>Biletini Ayır</a> : null}
        </nav>
      </div>
    </header>
  );
}
