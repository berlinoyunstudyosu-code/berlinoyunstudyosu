import { translator, type LocaleProps } from "@/content/i18n";
import { SectionHeading } from "./SectionHeading";

const stats = [["0", "yazılı senaryo"], ["100%", "o anda"], ["1", "benzersiz gece"]] as const;

export function About({ locale }: LocaleProps) {
  const t = translator(locale);
  return (
    <section id="biz-kimiz" className="section dark-section">
      <div className="shell about-grid">
        <div>
          <SectionHeading eyebrow={t("BİZ KİMİZ?")} title={t("Senaryo yok. Tekrarı yok.")} light />
          <div className="body-copy reveal"><p>{t("Berlin Oyun Stüdyosu, Berlin'de Türkçe doğaçlama komediyi seyircisiyle birlikte kuran bir sahne topluluğu. Karakterler, ilişkiler ve hikâyeler seyirciden gelen fikirlerle o anda doğuyor.")}</p><p>{t("Her oyun yalnızca o salonda, o seyirciyle ve bir kez yaşanıyor. Biz hazırız; hikâyenin ilk kelimesi sizden.")}</p></div>
        </div>
        <div className="stats reveal" aria-label={t("Doğaçlama manifestosu")}>
          {stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{t(label)}</span></div>)}
        </div>
      </div>
    </section>
  );
}
