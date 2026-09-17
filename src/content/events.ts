export type Event = {
  slug: string;
  title: string;
  category: string;
  date: string;
  location: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const events: Event[] = [
  {
    slug: "summer-festival-2026",
    title: "C3 Summer Festival 2026",
    category: "Festival",
    date: "2026-07-15",
    location: "C3 New Capital",
    summary: "Three days of entertainment, live performances and family activities across the flagship branch.",
    description: "Egypt's community retail network hosts its biggest summer event yet — three days of live music, family entertainment, food festivals and exclusive brand activations across the C3 New Capital flagship.",
    image: "/c3-logo.png",
    imageAlt: "C3 Summer Festival 2026",
  },
];

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}
