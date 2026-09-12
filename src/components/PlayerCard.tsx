"use client";

import Image from "next/image";
import { useState } from "react";
import { withBasePath, type Player } from "@/content/site";

export function PlayerCard({ player, hasImage }: { player: Player; hasImage: boolean }) {
  const [failed, setFailed] = useState(!hasImage);
  return (
    <article className={`player-card reveal ${player.featured ? "player-card--featured" : ""}`}>
      <div className="player-portrait">
        {!failed ? <Image src={withBasePath(player.image)} fill sizes={player.featured ? "(min-width: 900px) 38vw, 92vw" : "(min-width: 900px) 25vw, 92vw"} alt={`${player.name} portresi`} onError={() => setFailed(true)} /> : null}
        <div className="player-fallback" aria-hidden="true"><span>{player.initials}</span></div>
      </div>
      <div className="player-content"><h3>{player.name}</h3><p>{player.bio}</p></div>
    </article>
  );
}
