import dining1 from "@/assets/dining-1.jpg";
import dining2 from "@/assets/dining-2.jpg";
import dining3 from "@/assets/dining-3.jpg";
import dining4 from "@/assets/dining-4.jpg";
import panelDine from "@/assets/panel-dine.jpg";

export type Restaurant = {
  slug: string;
  name: string;
  cuisine: string;
  kind: "Restaurant" | "Café" | "Fast casual";
  floor: string;
  unit: string;
  hours: string;
  priceRange: "$" | "$$" | "$$$";
  image: string;
  imageAlt: string;
  summary: string;
  description: string;
  signature: string[];
  storeSlug?: string;
};

export const restaurants: Restaurant[] = [
  {
    slug: "sabbia",
    name: "Sabbia",
    cuisine: "Coastal Mediterranean",
    kind: "Restaurant",
    floor: "Level 3",
    unit: "L3-410",
    hours: "12:00 — 01:00",
    priceRange: "$$$",
    image: dining1,
    imageAlt: "Charred octopus on hummus, plated on dark stoneware",
    summary: "Wood fire, whole fish and a west-facing terrace.",
    description:
      "Sabbia cooks the coast over embers: whole fish, charred octopus, blistered vegetables. The dining room is stone and linen; the terrace faces west, so the last tables of the evening get the sunset.",
    signature: ["Charred octopus", "Whole sea bass over embers", "Natural wine list"],
    storeSlug: "sabbia",
  },
  {
    slug: "kenzai",
    name: "Kenzai",
    cuisine: "Japanese",
    kind: "Restaurant",
    floor: "Level 3",
    unit: "L3-424",
    hours: "13:00 — 00:00",
    priceRange: "$$$",
    image: dining4,
    imageAlt: "Edomae sushi selection arranged on a dark ceramic board",
    summary: "A nine-seat counter and two seatings a night.",
    description:
      "Edomae technique, aged fish and rice seasoned to the day's temperature. Sit at the counter for the omakase, or in the side room for robata and Japanese whisky.",
    signature: ["Omakase, 16 courses", "Robata grill", "Whisky flights"],
    storeSlug: "kenzai",
  },
  {
    slug: "forno-tre",
    name: "Forno Tre",
    cuisine: "Italian",
    kind: "Restaurant",
    floor: "Level 3",
    unit: "L3-402",
    hours: "12:00 — 00:00",
    priceRange: "$$",
    image: dining3,
    imageAlt: "Chef finishing a plate in an open restaurant kitchen",
    summary: "Neapolitan dough, ninety-second bake, long tables.",
    description:
      "A 480°C oven at the centre of the room and dough proved for 48 hours. Long tables make it the easiest table at FC3 for a group of eight.",
    signature: ["Margherita DOP", "Weekend dough station for kids", "Amaro trolley"],
    storeSlug: "forno-tre",
  },
  {
    slug: "mezze-house",
    name: "Mezze House",
    cuisine: "Levantine",
    kind: "Restaurant",
    floor: "Level 3",
    unit: "L3-436",
    hours: "11:00 — 01:00",
    priceRange: "$$",
    image: panelDine,
    imageAlt: "Friends sharing plates at a warmly lit restaurant table",
    summary: "Thirty mezze, charcoal grills, a late kitchen.",
    description:
      "Built for sharing and for staying late. Cold and hot mezze arrive in waves, the charcoal grill runs until closing, and the room gets louder as the night goes on.",
    signature: ["Mixed mezze for the table", "Charcoal mixed grill", "Late kitchen until 01:00"],
    storeSlug: "mezze-house",
  },
  {
    slug: "north-roasters",
    name: "North Roasters",
    cuisine: "Specialty coffee",
    kind: "Café",
    floor: "Level 2",
    unit: "L2-302",
    hours: "08:00 — 23:00",
    priceRange: "$",
    image: dining2,
    imageAlt: "Barista pouring latte art in a minimal concrete coffee bar",
    summary: "Three rotating single origins and a plaza terrace.",
    description:
      "Filter first: three single origins on rotation, brewed on the bar and explained if you ask. Saturday morning brew classes are free with a bag of beans.",
    signature: ["Rotating filter flight", "Saturday brew class", "Terrace seating"],
    storeSlug: "north-roasters",
  },
  {
    slug: "ciao-caffe",
    name: "Ciao Caffè",
    cuisine: "Café & bakery",
    kind: "Café",
    floor: "Ground",
    unit: "G-101",
    hours: "07:30 — 00:00",
    priceRange: "$",
    image: dining2,
    imageAlt: "Coffee being prepared at the FC3 house café bar",
    summary: "The first door to open at FC3, every day.",
    description:
      "The house café at the Boulevard entrance: espresso from a city-roasted blend, pastries out of the oven at 07:30, and the meeting point everyone defaults to.",
    signature: ["House espresso blend", "Morning pastry counter", "Opens at 07:30"],
    storeSlug: "ciao-caffe",
  },
];

export const getRestaurant = (slug: string) => restaurants.find((r) => r.slug === slug);
