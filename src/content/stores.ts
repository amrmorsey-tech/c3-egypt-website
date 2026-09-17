export type StoreCategory =
  | "Fashion"
  | "Beauty"
  | "Dining"
  | "Cafés"
  | "Entertainment"
  | "Services"
  | "Kids"
  | "Lifestyle";

export const storeCategories: StoreCategory[] = [
  "Fashion",
  "Beauty",
  "Dining",
  "Cafés",
  "Entertainment",
  "Services",
  "Kids",
  "Lifestyle",
];

export type Store = {
  slug: string;
  name: string;
  category: StoreCategory;
  floor: "B1" | "G" | "L1" | "L2" | "L3";
  unit: string;
  zone: string;
  hours: string;
  phone?: string;
  summary: string;
  description: string;
  tags: string[];
};

export const stores: Store[] = [
  {
    slug: "atelier-nord",
    name: "Atelier Nord",
    category: "Fashion",
    floor: "G",
    unit: "G-104",
    zone: "Boulevard Wing",
    hours: "10:00 — 23:00",
    phone: "+20 2 1000 3104",
    summary: "Scandinavian tailoring and considered essentials.",
    description:
      "Atelier Nord builds a wardrobe from few, precise pieces: dry wool suiting, raw denim and outerwear cut for the city. The FC3 flagship carries the full men's and women's collections plus an in-store alteration studio.",
    tags: ["Tailoring", "Menswear", "Womenswear"],
  },
  {
    slug: "corso-denim",
    name: "Corso Denim",
    category: "Fashion",
    floor: "L1",
    unit: "L1-212",
    zone: "Central Atrium",
    hours: "10:00 — 23:00",
    summary: "Denim specialists with on-site customisation.",
    description:
      "Twelve fits, four washes and a hemming bar that turns any pair around in twenty minutes. Corso also runs a repair counter for older pairs on Thursdays.",
    tags: ["Denim", "Customisation", "Unisex"],
  },
  {
    slug: "maison-lumen",
    name: "Maison Lumen",
    category: "Fashion",
    floor: "L1",
    unit: "L1-240",
    zone: "Gallery Wing",
    hours: "10:00 — 23:00",
    summary: "Occasion wear and evening silhouettes.",
    description:
      "A quiet, mirrored salon for evening dressing, with private fitting suites and a made-to-measure service booked by appointment.",
    tags: ["Evening", "Made to measure", "Womenswear"],
  },
  {
    slug: "kite-sport",
    name: "Kite Sport",
    category: "Fashion",
    floor: "L2",
    unit: "L2-318",
    zone: "Active Wing",
    hours: "10:00 — 23:00",
    summary: "Performance running, training and court.",
    description:
      "Gait analysis on the in-store treadmill, a full trail wall and a weekly Thursday run club leaving from the Boulevard entrance.",
    tags: ["Running", "Training", "Footwear"],
  },
  {
    slug: "form-studio",
    name: "Form Studio",
    category: "Lifestyle",
    floor: "L2",
    unit: "L2-330",
    zone: "Design Wing",
    hours: "10:00 — 22:00",
    summary: "Objects, lighting and furniture for modern rooms.",
    description:
      "A design shop organised like a gallery: rotating lighting installations, small-batch ceramics and a library of material samples you can borrow.",
    tags: ["Design", "Home", "Lighting"],
  },
  {
    slug: "pagina",
    name: "Pagina",
    category: "Lifestyle",
    floor: "L2",
    unit: "L2-344",
    zone: "Design Wing",
    hours: "10:00 — 23:00",
    summary: "Bookshop, stationery and a reading room.",
    description:
      "Art, architecture and fiction across two levels, with a quiet reading room overlooking the atrium and author evenings most Tuesdays.",
    tags: ["Books", "Stationery", "Events"],
  },
  {
    slug: "aurum-beauty",
    name: "Aurum Beauty",
    category: "Beauty",
    floor: "G",
    unit: "G-118",
    zone: "Boulevard Wing",
    hours: "10:00 — 23:00",
    summary: "Fragrance library and skincare consultations.",
    description:
      "Over 400 fragrances arranged by family, plus a diagnostics bar where a 20-minute skin reading is complimentary.",
    tags: ["Fragrance", "Skincare", "Consultation"],
  },
  {
    slug: "the-barbershop-3",
    name: "The Barbershop 3",
    category: "Beauty",
    floor: "L1",
    unit: "L1-262",
    zone: "Central Atrium",
    hours: "10:00 — 22:00",
    summary: "Cuts, shaves and grooming, walk-ins welcome.",
    description:
      "Six chairs, hot-towel shaves and a grooming shelf curated by the team. Walk-ins before 14:00, appointments after.",
    tags: ["Grooming", "Barber", "Walk-in"],
  },
  {
    slug: "lumiere-nails",
    name: "Lumière Nails",
    category: "Beauty",
    floor: "L1",
    unit: "L1-274",
    zone: "Gallery Wing",
    hours: "10:00 — 22:00",
    summary: "Nail studio and express treatments.",
    description:
      "A calm, concrete studio for manicures, pedicures and 30-minute express sets built for busy evenings.",
    tags: ["Nails", "Express", "Studio"],
  },
  {
    slug: "ciao-caffe",
    name: "Ciao Caffè",
    category: "Cafés",
    floor: "G",
    unit: "G-101",
    zone: "Boulevard Entrance",
    hours: "07:30 — 00:00",
    summary: "The FC3 house café, open before the mall.",
    description:
      "Espresso from a house blend roasted in the city, pastries baked on site each morning and the first door to open at FC3 every day.",
    tags: ["Espresso", "Bakery", "Early opening"],
  },
  {
    slug: "north-roasters",
    name: "North Roasters",
    category: "Cafés",
    floor: "L2",
    unit: "L2-302",
    zone: "Terrace",
    hours: "08:00 — 23:00",
    summary: "Single-origin filter and slow mornings.",
    description:
      "A concrete bar with three rotating single origins, brew classes on Saturdays and a terrace facing the plaza.",
    tags: ["Filter", "Single origin", "Terrace"],
  },
  {
    slug: "sabbia",
    name: "Sabbia",
    category: "Dining",
    floor: "L3",
    unit: "L3-410",
    zone: "Dining Terrace",
    hours: "12:00 — 01:00",
    summary: "Coastal Mediterranean, wood-fire led.",
    description:
      "Charred octopus, whole fish over embers and a short natural wine list. The terrace tables face west over the plaza — book them for sunset.",
    tags: ["Mediterranean", "Wood fire", "Terrace"],
  },
  {
    slug: "kenzai",
    name: "Kenzai",
    category: "Dining",
    floor: "L3",
    unit: "L3-424",
    zone: "Dining Terrace",
    hours: "13:00 — 00:00",
    summary: "Edomae sushi and a nine-seat counter.",
    description:
      "Two seatings a night at the counter, plus an à la carte room for small plates, robata and Japanese whisky.",
    tags: ["Japanese", "Sushi", "Counter"],
  },
  {
    slug: "forno-tre",
    name: "Forno Tre",
    category: "Dining",
    floor: "L3",
    unit: "L3-402",
    zone: "Dining Terrace",
    hours: "12:00 — 00:00",
    summary: "Neapolitan pizza and family tables.",
    description:
      "A 90-second bake, long tables built for groups and a kids' dough station on weekend afternoons.",
    tags: ["Italian", "Pizza", "Family"],
  },
  {
    slug: "mezze-house",
    name: "Mezze House",
    category: "Dining",
    floor: "L3",
    unit: "L3-436",
    zone: "Dining Terrace",
    hours: "11:00 — 01:00",
    summary: "Levantine mezze, grills and late nights.",
    description:
      "Thirty cold and hot mezze, charcoal grills and a late kitchen that keeps going until closing.",
    tags: ["Levantine", "Grill", "Late night"],
  },
  {
    slug: "fc3-cinema",
    name: "FC3 Cinema",
    category: "Entertainment",
    floor: "L3",
    unit: "L3-500",
    zone: "Cinema Wing",
    hours: "10:00 — 02:00",
    phone: "+20 2 1000 3500",
    summary: "18 screens including two premium laser halls.",
    description:
      "Recliner seating throughout, Dolby Atmos in every hall, and a late programme on Thursday and Friday nights.",
    tags: ["Cinema", "Premium", "Late shows"],
  },
  {
    slug: "pin-lane",
    name: "Pin & Lane",
    category: "Entertainment",
    floor: "L3",
    unit: "L3-520",
    zone: "Play Wing",
    hours: "12:00 — 02:00",
    summary: "Bowling, arcade and a long bar.",
    description:
      "Sixteen lanes, a curated arcade of restored cabinets and a bar that stays open after the last frame.",
    tags: ["Bowling", "Arcade", "Groups"],
  },
  {
    slug: "orbit-vr",
    name: "Orbit VR",
    category: "Entertainment",
    floor: "L3",
    unit: "L3-534",
    zone: "Play Wing",
    hours: "12:00 — 00:00",
    summary: "Free-roam virtual reality arenas.",
    description:
      "Two 120m² free-roam arenas for teams of up to six, plus single-player pods for shorter sessions.",
    tags: ["VR", "Teams", "Booking"],
  },
  {
    slug: "little-city",
    name: "Little City",
    category: "Kids",
    floor: "L2",
    unit: "L2-360",
    zone: "Family Wing",
    hours: "10:00 — 21:00",
    summary: "Soft-architecture play world for under-8s.",
    description:
      "A miniature city of ramps, tunnels and role-play workshops, staffed by play leaders with parent seating throughout.",
    tags: ["Play", "Under 8", "Supervised"],
  },
  {
    slug: "atlas-toys",
    name: "Atlas Toys",
    category: "Kids",
    floor: "L2",
    unit: "L2-352",
    zone: "Family Wing",
    hours: "10:00 — 22:00",
    summary: "Wooden toys, models and building sets.",
    description:
      "A toy shop for makers: construction sets, science kits and a demo table where everything can be tried first.",
    tags: ["Toys", "Building", "Gifts"],
  },
  {
    slug: "junior-atelier",
    name: "Junior Atelier",
    category: "Kids",
    floor: "L2",
    unit: "L2-368",
    zone: "Family Wing",
    hours: "10:00 — 22:00",
    summary: "Childrenswear from newborn to twelve.",
    description:
      "Durable, plainly cut childrenswear with a shoe-fitting station and a name-tag embroidery service.",
    tags: ["Childrenswear", "Shoes", "Newborn"],
  },
  {
    slug: "city-bank",
    name: "City Bank",
    category: "Services",
    floor: "G",
    unit: "G-140",
    zone: "North Entrance",
    hours: "09:00 — 21:00",
    summary: "Full branch, ATMs and currency exchange.",
    description:
      "Personal and business banking, 24-hour ATMs in the North lobby and a currency desk open until 21:00.",
    tags: ["Banking", "ATM", "Exchange"],
  },
  {
    slug: "fc3-concierge",
    name: "FC3 Concierge",
    category: "Services",
    floor: "G",
    unit: "G-100",
    zone: "Central Atrium",
    hours: "10:00 — 23:00",
    phone: "+20 2 1000 3000",
    summary: "Information, gift cards and lost property.",
    description:
      "The centre of the destination: wayfinding, gift cards, wheelchair and stroller loan, tourist tax-free forms and lost property.",
    tags: ["Information", "Gift cards", "Accessibility"],
  },
  {
    slug: "swift-tech-care",
    name: "Swift Tech Care",
    category: "Services",
    floor: "L1",
    unit: "L1-288",
    zone: "Central Atrium",
    hours: "10:00 — 22:00",
    summary: "Device repair while you shop.",
    description:
      "Screen and battery replacement in under an hour, data transfer and accessory fitting.",
    tags: ["Repair", "Devices", "Express"],
  },
  {
    slug: "verde-market",
    name: "Verde Market",
    category: "Lifestyle",
    floor: "B1",
    unit: "B1-010",
    zone: "Market Hall",
    hours: "08:00 — 00:00",
    summary: "Food hall, grocer and deli counters.",
    description:
      "A market hall of independent counters — bakery, fishmonger, cheese, produce — with a grocery for the full weekly shop.",
    tags: ["Grocery", "Deli", "Market"],
  },
  {
    slug: "optic-three",
    name: "Optic Three",
    category: "Beauty",
    floor: "L1",
    unit: "L1-296",
    zone: "Gallery Wing",
    hours: "10:00 — 22:00",
    summary: "Eyewear and same-day lenses.",
    description:
      "Independent frames alongside an in-store lab that cuts most prescriptions the same day.",
    tags: ["Eyewear", "Optician", "Same day"],
  },
  {
    slug: "studio-move",
    name: "Studio Move",
    category: "Lifestyle",
    floor: "L2",
    unit: "L2-380",
    zone: "Active Wing",
    hours: "07:00 — 23:00",
    summary: "Boutique fitness classes by the hour.",
    description:
      "Reformer, strength and mobility classes on the hour, with towels and lockers included and a drop-in rate.",
    tags: ["Fitness", "Classes", "Drop-in"],
  },
  {
    slug: "casa-linea",
    name: "Casa Linea",
    category: "Fashion",
    floor: "G",
    unit: "G-126",
    zone: "Boulevard Wing",
    hours: "10:00 — 23:00",
    summary: "Leather goods, bags and accessories.",
    description:
      "Vegetable-tanned leather bags and small goods, monogrammed at the counter while you wait.",
    tags: ["Leather", "Accessories", "Monogram"],
  },
];

export const getStore = (slug: string) => stores.find((s) => s.slug === slug);
