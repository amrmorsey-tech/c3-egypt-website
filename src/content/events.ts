import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import panelExperiences from "@/assets/panel-experiences.jpg";

export type Event = {
  slug: string;
  title: string;
  kicker: string;
  category: "Fashion" | "Family" | "Music" | "Seasonal" | "Opening";
  startDate: string;
  endDate?: string;
  dateLabel: string;
  timeLabel: string;
  location: string;
  price: string;
  image: string;
  imageAlt: string;
  summary: string;
  description: string;
};

export const events: Event[] = [
  {
    slug: "fc3-fashion-nights",
    title: "C3 Retail Summit",
    kicker: "This week at FC3",
    category: "Fashion",
    startDate: "2026-08-13T19:00:00+03:00",
    endDate: "2026-08-15T23:00:00+03:00",
    dateLabel: "13 — 15 AUG",
    timeLabel: "19:00 — 23:00",
    location: "Central Atrium, Ground",
    price: "Free entry",
    image: event1,
    imageAlt: "Model walking a runway in a mall atrium under dramatic lighting",
    summary: "Three evenings of runway shows, styling sessions and late openings.",
    description:
      "The atrium becomes a runway for three nights. Twelve FC3 brands show their autumn edits, stylists take walk-in appointments between shows, and every store on the Boulevard Wing stays open until midnight.",
  },
  {
    slug: "family-weekend",
    title: "Family Weekend",
    kicker: "Every weekend",
    category: "Family",
    startDate: "2026-08-08T11:00:00+03:00",
    endDate: "2026-08-09T18:00:00+03:00",
    dateLabel: "08 — 09 AUG",
    timeLabel: "11:00 — 18:00",
    location: "Plaza & Family Wing, Level 2",
    price: "Free, drop in",
    image: event2,
    imageAlt: "Parents and children at an outdoor craft workshop table",
    summary: "Workshops, storytelling and open play across the Family Wing.",
    description:
      "Craft tables on the plaza, storytelling in the reading room at Pagina, and free supervised play sessions at Little City on the hour. No booking — just arrive.",
  },
  {
    slug: "live-at-the-atrium",
    title: "Live at the Atrium",
    kicker: "Thursdays",
    category: "Music",
    startDate: "2026-08-13T20:30:00+03:00",
    dateLabel: "EVERY THU",
    timeLabel: "20:30 — 23:00",
    location: "Central Atrium, Ground",
    price: "Free entry",
    image: event3,
    imageAlt: "Jazz trio performing on a small stage in a modern atrium at night",
    summary: "A rotating programme of jazz, soul and city sessions.",
    description:
      "Every Thursday a trio or quartet takes the atrium stage. Dining on Level 3 runs a late menu on the same night, so most people eat after the second set.",
  },
  {
    slug: "boulevard-night-market",
    title: "Boulevard Night Market",
    kicker: "Seasonal",
    category: "Seasonal",
    startDate: "2026-08-20T18:00:00+03:00",
    endDate: "2026-08-30T00:00:00+03:00",
    dateLabel: "20 — 30 AUG",
    timeLabel: "18:00 — 00:00",
    location: "Boulevard & Plaza",
    price: "Free entry",
    image: panelExperiences,
    imageAlt: "Evening crowd at an outdoor plaza event with string lights",
    summary: "Independent makers, street food and live sets under string lights.",
    description:
      "Forty independent makers take over the Boulevard for ten evenings, with street food from FC3 kitchens and DJ sets from 21:00.",
  },
  {
    slug: "kenzai-opening",
    title: "Kenzai Opens",
    kicker: "New opening",
    category: "Opening",
    startDate: "2026-08-11T13:00:00+03:00",
    dateLabel: "11 AUG",
    timeLabel: "From 13:00",
    location: "Dining Terrace, Level 3",
    price: "Reservations open",
    image: event1,
    imageAlt: "Interior of a new restaurant on opening evening",
    summary: "A nine-seat sushi counter joins the Dining Terrace.",
    description:
      "Kenzai opens with two counter seatings a night and an à la carte room alongside. The first week is reservation-only; the side room takes walk-ins from the second week.",
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);

export type Offer = {
  slug: string;
  title: string;
  store: string;
  storeSlug?: string;
  detail: string;
  validUntil: string;
  category: string;
};

export const offers: Offer[] = [
  {
    slug: "atelier-nord-tailoring",
    title: "Complimentary tailoring",
    store: "Atelier Nord",
    storeSlug: "atelier-nord",
    detail: "Free alterations on any suiting purchase, finished within 48 hours.",
    validUntil: "31 Aug 2026",
    category: "Fashion",
  },
  {
    slug: "corso-second-pair",
    title: "Second pair, 30% off",
    store: "Corso Denim",
    storeSlug: "corso-denim",
    detail: "Buy any denim and take 30% off a second pair, hemming included.",
    validUntil: "24 Aug 2026",
    category: "Fashion",
  },
  {
    slug: "aurum-skin-reading",
    title: "Skin reading, on the house",
    store: "Aurum Beauty",
    storeSlug: "aurum-beauty",
    detail: "A 20-minute diagnostic consultation, no purchase required.",
    validUntil: "Ongoing",
    category: "Beauty",
  },
  {
    slug: "forno-family-table",
    title: "Family table set menu",
    store: "Forno Tre",
    storeSlug: "forno-tre",
    detail: "Four pizzas, two sides and dessert for four, weekdays before 18:00.",
    validUntil: "30 Sep 2026",
    category: "Dining",
  },
  {
    slug: "cinema-early-shows",
    title: "Early shows, half price",
    store: "FC3 Cinema",
    storeSlug: "fc3-cinema",
    detail: "All screenings before 14:00, Sunday to Wednesday.",
    validUntil: "Ongoing",
    category: "Entertainment",
  },
  {
    slug: "pin-lane-late-lanes",
    title: "Late lanes",
    store: "Pin & Lane",
    storeSlug: "pin-lane",
    detail: "Two hours of bowling for the price of one after 22:00.",
    validUntil: "31 Aug 2026",
    category: "Entertainment",
  },
];
