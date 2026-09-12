import { SectionHeading } from "./SectionHeading";

const stats = [["0", "yazılı senaryo"], ["100%", "o anda"], ["1", "benzersiz gece"]] as const;

export function About() {
  return (
    <section id="biz-kimiz" className="section dark-section">
      <div className="shell about-grid">
        <div>
          <SectionHeading eyebrow="BİZ KİMİZ?" title="Senaryo yok. Tekrarı yok." light />
          <div className="body-copy reveal"><p>Berlin Oyun Stüdyosu, Berlin&apos;de Türkçe doğaçlama komediyi seyircisiyle birlikte kuran bir sahne topluluğu. Karakterler, ilişkiler ve hikâyeler seyirciden gelen fikirlerle o anda doğuyor.</p><p>Her oyun yalnızca o salonda, o seyirciyle ve bir kez yaşanıyor. Biz hazırız; hikâyenin ilk kelimesi sizden.</p></div>
        </div>
        <div className="stats reveal" aria-label="Doğaçlama manifestosu">
          {stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </div>
    </section>
  );
}
