import { stores, type Store, type StoreCategory } from "./stores";

export type FloorId = "B1" | "G" | "L1" | "L2" | "L3";

export const floors: { id: FloorId; label: string; name: string }[] = [
  { id: "B1", label: "B1", name: "Market Hall & Parking" },
  { id: "G", label: "G", name: "Boulevard" },
  { id: "L1", label: "L1", name: "Gallery" },
  { id: "L2", label: "L2", name: "Design, Active & Family" },
  { id: "L3", label: "L3", name: "Dining, Cinema & Play" },
];

export type AmenityKind =
  | "Entrance"
  | "Parking"
  | "Restrooms"
  | "Elevator"
  | "Restaurant"
  | "Information";

export type MapAmenity = {
  id: string;
  kind: AmenityKind;
  label: string;
  x: number;
  y: number;
  floors: FloorId[];
};

export const amenityKinds: AmenityKind[] = [
  "Entrance",
  "Parking",
  "Restrooms",
  "Elevator",
  "Restaurant",
  "Information",
];

export const amenities: MapAmenity[] = [
  { id: "ent-boulevard", kind: "Entrance", label: "Boulevard entrance", x: 8, y: 74, floors: ["G"] },
  { id: "ent-north", kind: "Entrance", label: "North entrance", x: 60, y: 4, floors: ["G"] },
  { id: "ent-plaza", kind: "Entrance", label: "Plaza entrance", x: 112, y: 40, floors: ["G"] },
  { id: "park-b1", kind: "Parking", label: "Parking B1 — 1,400 spaces", x: 14, y: 12, floors: ["B1"] },
  { id: "park-b1-ev", kind: "Parking", label: "EV charging B1", x: 30, y: 12, floors: ["B1"] },
  { id: "info-central", kind: "Information", label: "FC3 Concierge", x: 60, y: 40, floors: ["G"] },
  { id: "lift-west", kind: "Elevator", label: "West lifts", x: 34, y: 40, floors: ["B1", "G", "L1", "L2", "L3"] },
  { id: "lift-east", kind: "Elevator", label: "East lifts", x: 86, y: 40, floors: ["B1", "G", "L1", "L2", "L3"] },
  { id: "wc-west", kind: "Restrooms", label: "Restrooms & baby change", x: 26, y: 52, floors: ["G", "L1", "L2", "L3"] },
  { id: "wc-east", kind: "Restrooms", label: "Restrooms", x: 94, y: 52, floors: ["B1", "G", "L1", "L2", "L3"] },
  { id: "food-terrace", kind: "Restaurant", label: "Dining Terrace", x: 60, y: 66, floors: ["L3"] },
  { id: "food-hall", kind: "Restaurant", label: "Market Hall counters", x: 60, y: 60, floors: ["B1"] },
];

/** Unit slots arranged around the central atrium — a modular grid, like the mark. */
const slots: { x: number; y: number; w: number; h: number }[] = [
  { x: 6, y: 6, w: 18, h: 16 },
  { x: 26, y: 6, w: 18, h: 16 },
  { x: 46, y: 6, w: 16, h: 16 },
  { x: 64, y: 6, w: 18, h: 16 },
  { x: 84, y: 6, w: 18, h: 16 },
  { x: 104, y: 6, w: 12, h: 16 },
  { x: 6, y: 24, w: 12, h: 14 },
  { x: 6, y: 40, w: 12, h: 14 },
  { x: 104, y: 24, w: 12, h: 14 },
  { x: 104, y: 40, w: 12, h: 14 },
  { x: 6, y: 58, w: 18, h: 16 },
  { x: 26, y: 58, w: 18, h: 16 },
  { x: 46, y: 58, w: 16, h: 16 },
  { x: 64, y: 58, w: 18, h: 16 },
  { x: 84, y: 58, w: 18, h: 16 },
  { x: 104, y: 58, w: 12, h: 16 },
];

const fillers: { name: string; category: StoreCategory }[] = [
  { name: "Unit available", category: "Services" },
  { name: "Studio unit", category: "Lifestyle" },
  { name: "Pop-up space", category: "Fashion" },
  { name: "Seasonal unit", category: "Lifestyle" },
];

export type MapUnit = {
  id: string;
  name: string;
  category: StoreCategory;
  store?: Store;
  x: number;
  y: number;
  w: number;
  h: number;
};

export function unitsForFloor(floor: FloorId): MapUnit[] {
  const floorStores = stores.filter((s) => s.floor === floor);
  return slots.map((slot, i) => {
    const store = floorStores[i];
    if (store) {
      return { id: store.slug, name: store.name, category: store.category, store, ...slot };
    }
    const filler = fillers[i % fillers.length] ?? { name: "Unit available", category: "Services" as StoreCategory };
    return { id: `${floor}-slot-${i}`, name: filler.name, category: filler.category, ...slot };
  });

}
