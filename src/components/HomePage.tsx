import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Corporate } from "@/components/Corporate";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ShowGallery } from "@/components/ShowGallery";
import { MobileTicketBar } from "@/components/MobileTicketBar";
import { Partners } from "@/components/Partners";
import { Players } from "@/components/Players";
import { UpcomingShows } from "@/components/UpcomingShows";
import { localizedSite, localePath, translator, type LocaleProps } from "@/content/i18n";
import { getPastEvents, getUpcomingEvents } from "@/lib/events";

export function HomePage({ locale }: LocaleProps) {
  const siteConfig = localizedSite(locale);
  const t = translator(locale);
  const now = new Date();
  const events = getUpcomingEvents(siteConfig.events, now);
  const pastEvents = getPastEvents(siteConfig.events, now);
  const event = events[0];
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "PerformingGroup",
      name: siteConfig.name,
      url: `${siteConfig.siteUrl}${localePath(locale)}`,
      logo: `${siteConfig.siteUrl}/images/berlin-oyun-studyosu-logo.png`,
      sameAs: [siteConfig.instagram.url],
      description: siteConfig.description,
    },
    ...(event
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Event",
            name: event.title,
            startDate: event.date,
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            description: event.description,
            location: {
              "@type": "Place",
              name: "Naunynstraße 63",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Naunynstraße 63",
                postalCode: "10997",
                addressLocality: "Berlin",
                addressCountry: "DE",
              },
            },
            performer: { "@type": "PerformingGroup", name: siteConfig.name },
            organizer: {
              "@type": "PerformingGroup",
              name: siteConfig.name,
              url: `${siteConfig.siteUrl}${localePath(locale)}`,
            },
            ...(event.ticketUrl ? { offers: { "@type": "Offer", url: event.ticketUrl, availability: "https://schema.org/InStock" } } : {}),
          },
        ]
      : []),
  ];

  return (
    <>
      <a className="skip-link" href="#ana-icerik">{t("İçeriğe geç")}</a>
      <Header locale={locale} ticketUrl={event?.ticketUrl} />
      <main id="ana-icerik">
        <Hero locale={locale} event={event} />
        <UpcomingShows locale={locale} events={events} pastEvents={pastEvents} />
        <ShowGallery locale={locale} />
        <About locale={locale} />
        <Players locale={locale} />
        <Corporate locale={locale} />
        <Partners locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
      {event?.ticketUrl ? <MobileTicketBar locale={locale} ticketUrl={event.ticketUrl} date={event.date} /> : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
