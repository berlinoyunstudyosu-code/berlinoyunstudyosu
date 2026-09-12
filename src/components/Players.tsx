import { siteConfig } from "@/content/site";
import { PlayerCard } from "./PlayerCard";
import { SectionHeading } from "./SectionHeading";
import { existsSync } from "node:fs";
import { join } from "node:path";

export function Players() {
  return (
    <section id="oyuncular" className="section paper-section players-section">
      <div className="shell">
        <SectionHeading title="Sahnede kimler var?" intro="Farklı oyunculuk deneyimleri, tek bir ortak refleks: anda kalmak." />
        <div className="players-grid">{siteConfig.players.map((player) => <PlayerCard player={player} hasImage={existsSync(join(process.cwd(), "public", player.image))} key={player.slug} />)}</div>
      </div>
    </section>
  );
}
