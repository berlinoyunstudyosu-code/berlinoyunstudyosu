import { translator, type LocaleProps } from "@/content/i18n";
import Image from "next/image";
import { withBasePath } from "@/content/site";
import { ContactLink } from "./ContactLink";

const values = ["Etkinlik partnerliği", "İçerik işbirliği", "Sezon sponsorluğu"];

export function Partners({ locale }: LocaleProps) {
  const t = translator(locale);
  return (
    <section id="partners" className="section dark-section partners-section">
      <div className="shell split-grid split-grid--reverse">
        <div className="split-copy reveal">
          <p className="eyebrow">{t("PARTNERS & SPONSORSHIP")}</p>
          <h2>{t("Aynı sahnede daha büyük bir etki.")}</h2>
          <p>{t("Berlin Oyun Stüdyosu ile işbirliği yapın. Berlin'deki Türkçe konuşan topluluğa canlı etkinlikler, yaratıcı içerikler ve markaya özel deneyimler üzerinden ulaşın.")}</p>
          <div className="value-list">{values.map((value, index) => <div key={value}><span>0{index + 1}</span><strong>{t(value)}</strong></div>)}</div>
          <ContactLink className="button">{t("İşbirliğini konuşalım")} <span aria-hidden="true">→</span></ContactLink>
        </div>
        <div className="media-frame media-frame--dark reveal">
          <Image src={withBasePath("/images/partnership-stage.png")} fill sizes="(min-width: 900px) 50vw, 100vw" quality={90} alt={t("Spot ışıklarıyla aydınlanan tiyatro sahnesi")} />
        </div>
      </div>
    </section>
  );
}
