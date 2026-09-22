import type { EventItem } from "@/content/site";

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
