import Image from "next/image";
import { withBasePath } from "@/content/site";
import { ContactLink } from "./ContactLink";

const values = ["Etkinlik partnerliği", "İçerik işbirliği", "Sezon sponsorluğu"];

export function Partners() {
  return (
    <section id="partners" className="section dark-section partners-section">
      <div className="shell split-grid split-grid--reverse">
        <div className="split-copy reveal">
          <p className="eyebrow">PARTNERS &amp; SPONSORSHIP</p>
          <h2>Aynı sahnede daha büyük bir etki.</h2>
          <p>Berlin Oyun Stüdyosu ile işbirliği yapın. Berlin&apos;deki Türkçe konuşan topluluğa canlı etkinlikler, yaratıcı içerikler ve markaya özel deneyimler üzerinden ulaşın.</p>
          <div className="value-list">{values.map((value, index) => <div key={value}><span>0{index + 1}</span><strong>{value}</strong></div>)}</div>
          <ContactLink className="button" subject="Partners & Sponsorship">İşbirliğini konuşalım <span aria-hidden="true">→</span></ContactLink>
        </div>
        <div className="media-frame media-frame--dark reveal">
          <Image src={withBasePath("/images/partnership-stage.png")} fill sizes="(min-width: 900px) 50vw, 100vw" quality={90} alt="Spot ışıklarıyla aydınlanan tiyatro sahnesi" />
        </div>
      </div>
    </section>
  );
}
