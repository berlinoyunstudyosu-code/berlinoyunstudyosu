import Image from "next/image";
import { withBasePath } from "@/content/site";

export function Hero({ ticketUrl }: { ticketUrl?: string }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image className="hero-image" src={withBasePath("/images/hero-stage.png")} fill sizes="100vw" priority quality={92} alt="Spot ışığı altında boş mikrofon ve sahne" />
      <div className="hero-shade" />
      <div className="shell hero-content">
        <p className="eyebrow hero-eyebrow">BERLİN&apos;DE TÜRKÇE DOĞAÇLAMA KOMEDİ</p>
        <h1 id="hero-title"><span>İlk kelime senden.</span><span>Sonrasını biz de bilmiyoruz.</span></h1>
        <p className="hero-copy">O anda doğan, bir daha tekrarlanmayacak Türkçe komedi.</p>
        <p className="hero-proof"><i aria-hidden="true" /> <i aria-hidden="true" /> Berlin Oyun Stüdyosu</p>
        <div className="button-row">
          {ticketUrl ? <a className="button" href={ticketUrl} target="_blank" rel="noopener noreferrer">19 Eylül gecesine katıl <span aria-hidden="true">↗</span></a> : null}
        </div>
      </div>
      <div className="shell hero-meta" aria-label="Gösteri özeti">
        <span>19 EYLÜL · 20:00</span><i aria-hidden="true" /><span>KREUZBERG</span><i aria-hidden="true" /><span>BİLETLER BAĞIŞ USULÜ</span>
      </div>
    </section>
  );
}
