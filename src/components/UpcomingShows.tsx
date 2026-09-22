import type { EventItem } from "@/content/site";
import { siteConfig } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function UpcomingShows({ events, pastEvents }: { events: readonly EventItem[]; pastEvents: readonly EventItem[] }) {
  return (
    <section id="gosteriler" className="section paper-section">
      <div className="shell">
        <SectionHeading eyebrow="GÜNCEL & GELECEK GÖSTERİLER" title="Sıradaki buluşmamız" intro="Bir kelime verin; gerisini o gece birlikte yazalım." />
        {events.length ? (
          <div className="events-list">
            {events.map((event) => (
              <article className="event-card reveal" key={event.id}>
                <time dateTime={event.date} className="date-badge">{event.badge}</time>
                <div className="event-main"><p className="card-kicker">CANLI · TEK SEFERLİK</p><h3>{event.title}</h3></div>
                <div className="event-details"><p>{event.timeLabel}</p><p>{event.location}</p><p className="event-note">{event.note}</p></div>
                <a className="button button--dark" href={event.ticketUrl} target="_blank" rel="noopener noreferrer">Biletini ayır <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state"><h3>Yeni gösteriler çok yakında.</h3><p>Tarihleri kaçırmamak için bizi <a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer">Instagram&apos;da takip edin.</a></p></div>
        )}
        <section className="past-shows" aria-labelledby="past-shows-heading">
          <header className="past-shows-heading">
            <h2 id="past-shows-heading">Geçmiş gösteriler</h2>
            <p>Birlikte sahneye taşıdığımız hikâyeler.</p>
          </header>
          {pastEvents.length ? (
            <div className="past-events-list">
              {pastEvents.map((event) => (
                <article className="past-event-card" key={event.id}>
                  <time dateTime={event.date}>
                    {new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Berlin" }).format(new Date(event.date))}
                  </time>
                  <div><h3>{event.title}</h3><p>{event.location}</p></div>
                  <span className="past-event-status">Gerçekleşti</span>
                </article>
              ))}
            </div>
          ) : <p className="past-shows-empty">Geçmiş gösterilerimiz burada yer alacak.</p>}
        </section>
      </div>
    </section>
  );
}
