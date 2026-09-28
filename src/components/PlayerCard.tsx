"use client";

import { translator, type LocaleProps } from "@/content/i18n";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { withBasePath, type Player } from "@/content/site";

export function PlayerCard({ player, hasImage, locale }: { player: Player; hasImage: boolean } & LocaleProps) {
  const t = translator(locale);
  const [failed, setFailed] = useState(!hasImage);
  const [bioOpen, setBioOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!bioOpen) return;
    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    const overflow = document.body.style.overflow;
    dialog?.showModal();
    if (dialog) dialog.scrollTop = 0;
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = overflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [bioOpen]);
  return (
    <>
    <article className={`player-card reveal ${player.featured ? "player-card--featured" : ""} ${player.showBio ? "player-card--with-bio" : ""} ${player.fullBio?.length ? "player-card--full-bio" : ""}`}>
      <div className="player-portrait">
        {!failed ? <Image src={withBasePath(player.image)} fill sizes={player.featured ? "(min-width: 900px) 38vw, 92vw" : "(min-width: 900px) 25vw, 92vw"} alt={`${player.name} ${t("portresi")}`} onError={() => setFailed(true)} /> : null}
        <div className="player-fallback" aria-hidden="true"><span>{player.initials}</span></div>
      </div>
      <div className="player-content">
        <h3>{player.name}</h3>
        {player.showBio && player.bio ? <div className="player-bio">{t(player.bio).split("\n\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div> : null}
        {player.fullBio?.length ? <button ref={triggerRef} className="biography-trigger" type="button" aria-haspopup="dialog" onClick={() => setBioOpen(true)}>{t("Biyografinin tamamı")} <span aria-hidden="true">↗</span></button> : null}
      </div>
    </article>
    {player.fullBio?.length ? (
      <dialog ref={dialogRef} className="biography-dialog" aria-labelledby={`biography-${player.slug}`} onCancel={() => setBioOpen(false)} onClose={() => setBioOpen(false)} onClick={(event) => {
        if (event.target === event.currentTarget) {
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setBioOpen(false);
        }
      }}>
        <div className="biography-toolbar"><h2 id={`biography-${player.slug}`}>{player.name}</h2><button autoFocus type="button" aria-label={t("Biyografiyi kapat")} onClick={() => setBioOpen(false)}>{t("Kapat")} <span aria-hidden="true">×</span></button></div>
        <div className="biography-copy">{player.fullBio.map((paragraph, index) => <p key={index}>{t(paragraph)}</p>)}</div>
      </dialog>
    ) : null}
    </>
  );
}
