import { translator, type LocaleProps } from "@/content/i18n";
import Image from "next/image";
import { withBasePath } from "@/content/site";
import { ContactLink } from "./ContactLink";

const items = [
  "Şirkete özel Türkçe veya İngilizce gösteri",
  "Takım iletişimi ve yaratıcılık workshop'u",
  "Offsite, kutlama ve networking geceleri",
  "İhtiyaca göre 60–90 dakikalık formatlar",
];

export function Corporate({ locale }: LocaleProps) {
  const t = translator(locale);
  return (
    <section id="kurumsal" className="section paper-section split-section">
      <div className="shell split-grid">
        <div className="media-frame media-frame--team reveal">
          <Image src={withBasePath("/images/team.jpeg")} fill sizes="(min-width: 960px) 50vw, 100vw" quality={90} alt={t("Berlin Oyun Stüdyosu ekibi seyircilerin önünde doğaçlama yaparken")} />
          <span className="image-label">{t("BİRLİKTE / ŞİMDİ")}</span>
        </div>
        <div className="split-copy reveal">
          <p className="eyebrow">{t("CORPORATE EVENTS")}</p>
          <h2>{t("Ekibiniz için sahnede yeni bir alan açın.")}</h2>
          <p>{t("Şirketiniz için özel doğaçlama gösterileri ve workshoplar. İletişim, spontanlık, birlikte üretme ve güveni eğlenceli, katılımcı bir formatta deneyimleyin.")}</p>
          <ul>{items.map((item) => <li key={item}><span aria-hidden="true">+</span>{t(item)}</li>)}</ul>
          <ContactLink className="button button--dark">{t("Kurumsal etkinliği konuşalım")} <span aria-hidden="true">→</span></ContactLink>
        </div>
      </div>
    </section>
  );
}
