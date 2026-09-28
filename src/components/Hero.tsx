import { languageTags, translator, type LocaleProps } from "@/content/i18n";
import Image from "next/image";
import { withBasePath, type EventItem } from "@/content/site";
import { formatEventDate, formatEventTime } from "@/lib/events";

export function Hero({ event, locale }: { event?: EventItem } & LocaleProps) {
  const t = translator(locale);
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image className="hero-image" src={withBasePath("/images/hero-stage.png")} fill sizes="100vw" priority quality={92} alt={t("Spot ışığı altında boş mikrofon ve sahne")} />
      <div className="hero-shade" />
      <div className="shell hero-content">
        <p className="eyebrow hero-eyebrow">{t("BERLİN'DE TÜRKÇE DOĞAÇLAMA KOMEDİ")}</p>
        <h1 id="hero-title"><span>{t("İlk kelime senden.")}</span><span>{t("Sonrasını biz de bilmiyoruz.")}</span></h1>
        <p className="hero-copy">{t("O anda doğan, bir daha tekrarlanmayacak Türkçe komedi.")}</p>
        <p className="hero-proof">Berlin Oyun Stüdyosu</p>
        <div className="button-row">
          {event ? <a className="button" href={event.ticketUrl || "#gosteriler"} target={event.ticketUrl ? "_blank" : undefined} rel={event.ticketUrl ? "noopener noreferrer" : undefined}>{locale === "tr" ? `${formatEventDate(event.date, locale)} gecesine katıl` : t("Tarihte bize katıl: {date}").replace("{date}", formatEventDate(event.date, locale))} <span aria-hidden="true">↗</span></a> : null}
        </div>
      </div>
      <div className="shell hero-meta" aria-label={t("Gösteri özeti")}>
        <span>{event ? `${formatEventDate(event.date, locale).toLocaleUpperCase(languageTags[locale])} · ${formatEventTime(event.date, locale)}` : t("YENİ GÖSTERİLER ÇOK YAKINDA")}</span><i aria-hidden="true" /><span>KREUZBERG</span><i aria-hidden="true" /><span>{t("BİLETLER BAĞIŞ USULÜ")}</span>
      </div>
    </section>
  );
}
