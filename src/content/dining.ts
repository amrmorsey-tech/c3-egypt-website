export type Restaurant = {
  slug: string;
  name: string;
  kind: string;
  cuisine: string;
  priceRange: string;
  unit: string;
  hours: string;
  summary: string;
  image: string;
  imageAlt: string;
};

export const restaurants: Restaurant[] = [
  {
    slug: "elena",
    name: "Elena",
    kind: "Café & Restaurant",
    cuisine: "Egyptian & International",
    priceRange: "££",
    unit: "Ground Floor",
    hours: "10:00 — 23:00",
    summary: "Egyptian café concept known for its warm ambiance and diverse menu of food and beverages.",
    image: "/c3-logo.png",
    imageAlt: "Elena café interior",
  },
  {
    slug: "pastacup",
    name: "PastaCup",
    kind: "Quick Service",
    cuisine: "Italian",
    priceRange: "£",
    unit: "Food Court",
    hours: "10:00 — 23:00",
    summary: "Quick-service pasta concept with customizable fresh pasta dishes made to order.",
    image: "/c3-logo.png",
    imageAlt: "PastaCup restaurant",
  },
  {
    slug: "not",
    name: "Not!",
    kind: "Casual Dining",
    cuisine: "International",
    priceRange: "££",
    unit: "Level 1",
    hours: "10:00 — 01:00",
    summary: "Popular casual dining concept with a bold menu and energetic atmosphere.",
    image: "/c3-logo.png",
    imageAlt: "Not! restaurant",
  },
];

export function getRestaurant(slug: string) {
  return restaurants.find((r) => r.slug === slug);
}
