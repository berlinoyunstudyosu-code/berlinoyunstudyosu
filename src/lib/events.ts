import { languageTags, type Locale } from "@/content/i18n";
import type { EventItem } from "@/content/site";

export function formatEventDate(date: string, locale: Locale = "tr") {
  return new Intl.DateTimeFormat(languageTags[locale], { day: "numeric", month: "long", timeZone: "Europe/Berlin" }).format(new Date(date));
}

export function formatEventTime(date: string, locale: Locale = "tr") {
  return new Intl.DateTimeFormat(languageTags[locale], { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin" }).format(new Date(date));
}

export function getUpcomingEvents(events: readonly EventItem[], now = new Date()) {
  return events
    .filter((event) => new Date(event.date).getTime() >= now.getTime())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getPastEvents(events: readonly EventItem[], now = new Date()) {
  return events
    .filter((event) => new Date(event.date).getTime() < now.getTime())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
