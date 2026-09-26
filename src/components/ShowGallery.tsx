"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig, withBasePath } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

const photos = siteConfig.showPhotos;
const photoUrl = (slug: string, width: number) => withBasePath(`/images/shows/${slug}-${width}.webp`);

export function ShowGallery() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const isOpen = active !== null;
  const photo = active === null ? null : photos[active];

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  const move = (direction: number) => setActive((index) => index === null ? null : (index + direction + photos.length) % photos.length);

  return (
    <section id="sahneden" className="section dark-section gallery-section" aria-label="Sahneden fotoğraflar">
      <div className="shell">
        <div className="gallery-heading">
          <SectionHeading eyebrow="SAHNEDEN ANLAR" title="O gece, o salonda." intro="Seyirciden bir fikir, sahnede yepyeni bir hikâye. İşte birlikte yaşadığımız anlardan birkaçı." light />
          <p className="gallery-hint">{photos.length} kare <span aria-hidden="true">·</span> Büyütmek için dokunun <span aria-hidden="true">↗</span></p>
        </div>
        <div className="gallery-grid">
          {photos.map((item, index) => (
            <button
              type="button"
              className={`gallery-photo ${index === 0 ? "gallery-photo--lead" : ""}`}
              key={item.slug}
              aria-label={`${item.caption} — fotoğrafı büyüt (${index + 1}/${photos.length})`}
              aria-haspopup="dialog"
              onClick={(event) => { triggerRef.current = event.currentTarget; setActive(index); }}
            >
              {/* Explicit sources keep responsive images working on the static export. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photoUrl(item.slug, 640)} srcSet={`${photoUrl(item.slug, 640)} 640w, ${photoUrl(item.slug, 1280)} 1280w`} sizes={index === 0 ? "(min-width: 960px) 620px, calc(100vw - 40px)" : "(min-width: 960px) 310px, 50vw"} width={1280} height={960} loading="lazy" decoding="async" alt={item.alt} />
              <span className="gallery-caption"><span>{item.caption}</span><span className="gallery-expand" aria-hidden="true">↗</span></span>
            </button>
          ))}
        </div>
        <a className="gallery-link" href="#gosteriler">Bir sonraki gecede sen de ol <span aria-hidden="true">↗</span></a>
      </div>
      <dialog ref={dialogRef} className="gallery-dialog" aria-label="Sahneden fotoğraflar" onCancel={() => setActive(null)} onClose={() => setActive(null)} onClick={(event) => { if (event.target === event.currentTarget) setActive(null); }} onKeyDown={(event) => {
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      }}>
        {photo && active !== null ? (
          <div className="gallery-viewer">
            <div className="gallery-toolbar"><span>SAHNEDEN ANLAR</span><button type="button" autoFocus onClick={() => setActive(null)} aria-label="Fotoğrafı kapat">Kapat <span aria-hidden="true">×</span></button></div>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photoUrl(photo.slug, 2048)} width={2048} height={1536} alt={photo.alt} />
              <figcaption aria-live="polite" aria-atomic="true"><span>{photo.caption}</span><span>{active + 1} / {photos.length}</span></figcaption>
            </figure>
            <div className="gallery-controls"><button type="button" onClick={() => move(-1)} aria-label="Önceki fotoğraf">← <span>Önceki</span></button><button type="button" onClick={() => move(1)} aria-label="Sonraki fotoğraf"><span>Sonraki</span> →</button></div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
