import type { EventItem } from "@/content/site";
import { siteConfig } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function UpcomingShows({ events }: { events: readonly EventItem[] }) {
  return (
    <section id="gosteriler" className="section paper-section">
      <div className="shell">
        <SectionHeading title="Yaklaşan gösteriler" intro="Bir kelime verin; gerisini o gece birlikte yazalım." />
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
      </div>
    </section>
  );
}
