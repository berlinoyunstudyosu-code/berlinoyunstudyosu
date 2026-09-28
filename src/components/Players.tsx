import { translator, type LocaleProps } from "@/content/i18n";
import { siteConfig } from "@/content/site";
import { PlayerCard } from "./PlayerCard";
import { SectionHeading } from "./SectionHeading";
import { existsSync } from "node:fs";
import { join } from "node:path";

export function Players({ locale }: LocaleProps) {
  const t = translator(locale);
  return (
    <section id="oyuncular" className="section paper-section players-section">
      <div className="shell">
        <SectionHeading title={t("Sahnede kimler var?")} intro={t("Farklı oyunculuk deneyimleri, tek bir ortak refleks: anda kalmak.")} />
        <div className="players-grid">{siteConfig.players.map((player) => <PlayerCard locale={locale} player={player} hasImage={existsSync(join(process.cwd(), "public", player.image))} key={player.slug} />)}</div>
      </div>
    </section>
  );
}
