"use client";

import { FormEvent, useEffect, useState } from "react";
import { siteConfig } from "@/content/site";

const subjects = ["Gösteriler", "Corporate Event", "Partners & Sponsorship", "Diğer"] as const;
type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [subject, setSubject] = useState<(typeof subjects)[number]>("Gösteriler");
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    const handler = (event: Event) => {
      const value = (event as CustomEvent<string>).detail;
      if (subjects.includes(value as (typeof subjects)[number])) setSubject(value as (typeof subjects)[number]);
    };
    window.addEventListener("contact-subject", handler);
    return () => window.removeEventListener("contact-subject", handler);
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const nextErrors: Errors = {};
    if (name.length < 2) nextErrors.name = "Lütfen adınızı ve soyadınızı yazın.";
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Lütfen geçerli bir e-posta adresi yazın.";
    if (message.length < 10) nextErrors.message = "Mesajınız en az 10 karakter olmalı.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    const body = `Ad soyad: ${name}\nE-posta: ${email}\n\n${message}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`[${subject}] Berlin Oyun Stüdyosu iletişim`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="iletisim" className="section contact-section">
      <div className="shell contact-grid">
        <div className="contact-intro reveal">
          <p className="eyebrow">İLETİŞİM</p><p>Gösteriler, kurumsal etkinlikler ve işbirlikleri için bize ulaşın.</p>
          <div className="contact-links">
            <a href={`mailto:${siteConfig.email}`}><span>E-POSTA</span><strong>{siteConfig.email}</strong><i aria-hidden="true">↗</i></a>
            <a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer"><span>INSTAGRAM</span><strong>{siteConfig.instagram.label}</strong><i aria-hidden="true">↗</i></a>
          </div>
        </div>
        <form className="contact-form reveal" noValidate onSubmit={submit}>
          <div className="field"><label htmlFor="name">Ad soyad</label><input id="name" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name ? <p id="name-error" className="field-error">{errors.name}</p> : null}</div>
          <div className="field"><label htmlFor="email">E-posta</label><input id="email" name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email ? <p id="email-error" className="field-error">{errors.email}</p> : null}</div>
          <div className="field"><label htmlFor="subject">Konu</label><select id="subject" name="subject" value={subject} onChange={(event) => setSubject(event.target.value as (typeof subjects)[number])}>{subjects.map((item) => <option key={item}>{item}</option>)}</select></div>
          <div className="field"><label htmlFor="message">Mesaj</label><textarea id="message" name="message" rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message ? <p id="message-error" className="field-error">{errors.message}</p> : null}</div>
          <button className="button" type="submit">E-posta oluştur <span aria-hidden="true">→</span></button>
          <p className="form-note">Gönder butonu, mesajınızı e-posta uygulamanızda hazırlar.</p>
        </form>
      </div>
    </section>
  );
}
