"use client";

import { translator, type LocaleProps } from "@/content/i18n";

import { useEffect, useRef, useState } from "react";

export function LegalDialog({ label, locale }: { label: "Impressum" | "Datenschutz" } & LocaleProps) {
  const t = translator(locale);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return <>
    <button className="text-button" type="button" onClick={() => setOpen(true)}>{t(label)}</button>
    {open ? <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}><div className="legal-dialog" role="dialog" aria-modal="true" aria-labelledby={`legal-${label}`}><button ref={closeRef} type="button" className="dialog-close" onClick={() => setOpen(false)} aria-label={t("Pencereyi kapat")}>×</button><p className="eyebrow">{t("YASAL")}</p><h2 id={`legal-${label}`}>{t(label)}</h2><p>{t("Yayın öncesi doldurulacaktır.")}</p></div></div> : null}
  </>;
}
