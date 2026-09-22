import Image from "next/image";
import { withBasePath, type EventItem } from "@/content/site";
import { formatEventDate, formatEventTime } from "@/lib/events";

export function Hero({ event }: { event?: EventItem }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image className="hero-image" src={withBasePath("/images/hero-stage.png")} fill sizes="100vw" priority quality={92} alt="Spot ışığı altında boş mikrofon ve sahne" />
      <div className="hero-shade" />
      <div className="shell hero-content">
        <p className="eyebrow hero-eyebrow">BERLİN&apos;DE TÜRKÇE DOĞAÇLAMA KOMEDİ</p>
        <h1 id="hero-title"><span>İlk kelime senden.</span><span>Sonrasını biz de bilmiyoruz.</span></h1>
        <p className="hero-copy">O anda doğan, bir daha tekrarlanmayacak Türkçe komedi.</p>
        <p className="hero-proof">Berlin Oyun Stüdyosu</p>
        <div className="button-row">
          {event ? <a className="button" href={event.ticketUrl || "#gosteriler"} target={event.ticketUrl ? "_blank" : undefined} rel={event.ticketUrl ? "noopener noreferrer" : undefined}>{formatEventDate(event.date)} gecesine katıl <span aria-hidden="true">↗</span></a> : null}
        </div>
      </div>
      <div className="shell hero-meta" aria-label="Gösteri özeti">
        <span>{event ? `${formatEventDate(event.date).toLocaleUpperCase("tr-TR")} · ${formatEventTime(event.date)}` : "YENİ GÖSTERİLER ÇOK YAKINDA"}</span><i aria-hidden="true" /><span>KREUZBERG</span><i aria-hidden="true" /><span>BİLETLER BAĞIŞ USULÜ</span>
      </div>
    </section>
  );
}
