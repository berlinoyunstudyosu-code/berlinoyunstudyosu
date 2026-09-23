import { siteConfig } from "@/content/site";

export function Contact() {
  return (
    <section id="iletisim" className="section contact-section">
      <div className="shell contact-grid">
        <div className="contact-intro reveal">
          <p className="eyebrow">İLETİŞİM</p><p>Gösteriler, kurumsal etkinlikler ve işbirlikleri için bize ulaşın.</p>
          <div className="contact-links">
            <a href={`mailto:${siteConfig.email}`}><span>E-POSTA</span><strong>{siteConfig.email}</strong><i aria-hidden="true">↗</i></a>
            <a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer"><span>INSTAGRAM</span><strong>{siteConfig.instagram.label}</strong><i aria-hidden="true">↗</i></a>
          </div>
        </div>
      </div>
    </section>
  );
}
