/**
 * C3 RETAIL NETWORK — single source of truth for all site content.
 */

export const site = {
  name: "C3 Retail Network",
  tagline: "Community · Convenience · Connection",
  claim: "Egypt's First Retail Mall Network",
  description:
    "A growing system of 8 active malls across Egypt's top new urban zones — offering a unified experience for both brands and consumers.",
  address: {
    street: "New Administrative Capital",
    district: "Central Business District",
    city: "Cairo",
    country: "Egypt",
    postalCode: "11865",
  },
  geo: { lat: 30.0131, lng: 31.7469 },
  phone: "+20 111 700 0031",
  email: "info@c3-egypt.com",
  mapsUrl: "https://maps.google.com/?q=C3+Mall+Egypt",
  hours: [
    { days: "Sunday — Wednesday", time: "10:00 — 23:00" },
    { days: "Thursday — Saturday", time: "10:00 — 01:00" },
    { days: "Public holidays", time: "10:00 — 01:00" },
  ],
  parking: [
    { label: "Covered parking", value: "Available at all locations — free for the first 3 hours." },
    { label: "Security", value: "24/7 security and facility management across the network." },
    { label: "Accessibility", value: "Dedicated accessible parking bays and ramps at all branches." },
  ],
  social: [
    { label: "Facebook", href: "https://facebook.com/C3Mall" },
    { label: "Instagram", href: "https://instagram.com/C3Mall3" },
    { label: "TikTok", href: "https://tiktok.com/@C3Mall22" },
    { label: "YouTube", href: "https://youtube.com/@C3Mall" },
  ],
  stats: [
    { value: "8+", label: "Active locations" },
    { value: "5,000+", label: "Daily footfall" },
    { value: "60+", label: "Leading brands" },
    { value: "200K+", label: "SQM GLA" },
  ],
} as const;

export const navigation = [
  { index: "01", label: "About", to: "/about" },
  { index: "02", label: "Locations", to: "/locations" },
  { index: "03", label: "Brands", to: "/brands" },
  { index: "04", label: "Ecosystem", to: "/ecosystem" },
  { index: "05", label: "Investors", to: "/investors" },
  { index: "06", label: "Contact", to: "/contact" },
] as const;

export const quickAccess = [
  { label: "Locations", to: "/locations" },
  { label: "Brands", to: "/brands" },
  { label: "Investors", to: "/investors" },
  { label: "Contact", to: "/contact" },
] as const;

export const locations = [
  {
    id: "new-capital",
    name: "C3 Mall — New Capital",
    shortName: "New Capital",
    tag: "Flagship",
    gla: "28,000 m²",
    brands: "40+",
    footfall: "6,000+",
    city: "New Administrative Capital",
    governorate: "Cairo",
    mapUrl: "https://maps.google.com/?q=C3+Mall+New+Capital+Egypt",
    description: "Our flagship destination in Egypt's new administrative heart — a landmark retail experience anchored by Egypt's leading international and local brands.",
  },
  {
    id: "obour",
    name: "C3 Mall — El Obour",
    shortName: "El Obour",
    tag: "Established",
    gla: "22,000 m²",
    brands: "35+",
    footfall: "5,000+",
    city: "El Obour City",
    governorate: "Qalyubia",
    mapUrl: "https://maps.google.com/?q=C3+Mall+Obour+Egypt",
    description: "Serving El Obour's fast-growing residential community with a full mix of retail, F&B, and everyday essentials.",
  },
  {
    id: "october",
    name: "C3 Mall — 6th of October",
    shortName: "6th of October",
    tag: "Growing",
    gla: "25,000 m²",
    brands: "38+",
    footfall: "5,500+",
    city: "6th of October City",
    governorate: "Giza",
    mapUrl: "https://maps.google.com/?q=C3+Mall+6th+October+Egypt",
    description: "A major retail hub in West Cairo's largest city, combining community convenience with top-tier brand offerings.",
  },
  {
    id: "nasr-city",
    name: "C3 Mall — Nasr City",
    shortName: "Nasr City",
    tag: "Community",
    gla: "18,000 m²",
    brands: "30+",
    footfall: "4,500+",
    city: "Nasr City",
    governorate: "Cairo",
    mapUrl: "https://maps.google.com/?q=C3+Mall+Nasr+City+Egypt",
    description: "Embedded in one of Cairo's most densely populated districts, bringing premium retail within daily reach.",
  },
  {
    id: "15-may",
    name: "C3 Mall — 15th of May",
    shortName: "15th of May",
    tag: "Community",
    gla: "15,000 m²",
    brands: "28+",
    footfall: "4,000+",
    city: "15th of May City",
    governorate: "Cairo",
    mapUrl: "https://maps.google.com/?q=C3+Mall+15+May+Egypt",
    description: "A community-first destination serving 15th of May City's residents with essential retail and dining.",
  },
  {
    id: "badr",
    name: "C3 Mall — Badr City",
    shortName: "Badr City",
    tag: "Expanding",
    gla: "20,000 m²",
    brands: "32+",
    footfall: "4,000+",
    city: "Badr City",
    governorate: "Cairo",
    mapUrl: "https://maps.google.com/?q=C3+Mall+Badr+City+Egypt",
    description: "Currently expanding in East Cairo's Badr City — bringing the full C3 experience to an underserved market.",
  },
  {
    id: "shorouk",
    name: "C3 Mall — El Shorouk",
    shortName: "El Shorouk",
    tag: "Coming Soon",
    gla: "18,000 m²",
    brands: "30+",
    footfall: "3,500+",
    city: "El Shorouk City",
    governorate: "Cairo",
    mapUrl: "https://maps.google.com/?q=C3+Mall+Shorouk+Egypt",
    description: "Opening soon in El Shorouk City — our next community retail destination in Greater Cairo's eastern corridor.",
  },
  {
    id: "10-ramadan",
    name: "C3 Mall — 10th of Ramadan",
    shortName: "10th of Ramadan",
    tag: "Coming Soon",
    gla: "20,000 m²",
    brands: "32+",
    footfall: "3,500+",
    city: "10th of Ramadan City",
    governorate: "Sharkia",
    mapUrl: "https://maps.google.com/?q=C3+Mall+10+Ramadan+Egypt",
    description: "Coming to Sharkia's 10th of Ramadan City — expanding the C3 network beyond Greater Cairo into Egypt's industrial heartland.",
  },
] as const;

export const ecosystem = [
  { label: "Retail", desc: "Fashion, lifestyle, electronics and everyday essentials from 60+ leading brands." },
  { label: "Food & Beverage", desc: "Cafés, fast-casual dining, regional concepts and international chains." },
  { label: "Entertainment", desc: "Family entertainment, fitness, wellness and leisure concepts." },
  { label: "Hypermarkets", desc: "Anchor grocery destinations — Carrefour and Supeco across the network." },
  { label: "Services", desc: "Banking, clinics, pharmacies, telecom and daily community services." },
  { label: "Family Experiences", desc: "Kids zones, playgrounds, events and community gathering spaces." },
] as const;

export const brands = [
  { name: "LC Waikiki", category: "Fashion", description: "International fashion brand offering affordable quality clothing for the whole family." },
  { name: "Carrefour", category: "Hypermarket", description: "France's leading hypermarket — fresh groceries, electronics, and household essentials." },
  { name: "Majid Al Futtaim", category: "Developer Partner", description: "Strategic anchor partner operating Carrefour and Supeco hypermarkets across the network." },
  { name: "Supeco", category: "Hypermarket", description: "Carrefour's discount hypermarket format — everyday essentials at unbeatable prices." },
  { name: "Elena", category: "Café & Restaurant", description: "Egyptian café concept known for its warm ambiance and diverse menu of food and beverages." },
  { name: "Not!", category: "Restaurant", description: "Popular casual dining concept with a bold menu and energetic atmosphere." },
  { name: "Grand Market", category: "Market", description: "A fresh-produce and specialty market concept offering a curated shopping experience." },
  { name: "PastaCup", category: "F&B", description: "Quick-service pasta concept with customizable fresh pasta dishes." },
  { name: "Koya", category: "Retail", description: "Lifestyle and fashion brand serving the modern Egyptian consumer." },
  { name: "Gossips", category: "F&B", description: "Casual dining and café concept popular with Egypt's urban communities." },
  { name: "Hashville", category: "F&B", description: "A vibrant F&B concept bringing international street food flavors to Egyptian malls." },
] as const;

export const timeline = [
  {
    year: "2022 — 2023",
    title: "Foundation",
    events: [
      "7 branches opened across Cairo, Giza, Qalyubia and Sharkia governorates",
      "Strategic rental agreement signed for 6 hypermarkets with Al-Futtaim Group (Carrefour)",
      "Network covers Egypt's fastest-growing urban zones",
    ],
  },
  {
    year: "2024",
    title: "Construction & Upgrade",
    events: [
      "Full construction and renovation at El Obour and Nasr City branches",
      "Brand mix upgraded with new anchor tenants across the network",
    ],
  },
  {
    year: "2025 — 2026",
    title: "Major Brand Arrivals",
    events: [
      "Flagship brands arriving at Obour, October, Nasr City, Badr, El Shorouk, 15 May, New Capital and 10th of Ramadan",
      "International and regional brands completing the C3 retail ecosystem",
    ],
  },
  {
    year: "2027",
    title: "Full Network",
    events: [
      "All 8 branches fully operational with complete brand and F&B mix",
      "Network-wide marketing platform launched for cross-brand campaigns",
    ],
  },
  {
    year: "2028",
    title: "Scale to 15",
    events: [
      "15 C3 Mall branches operational across Egypt",
      "Expansion into new governorates beyond Greater Cairo",
    ],
  },
  {
    year: "2030",
    title: "National Vision",
    events: [
      "20 branches covering all major Egyptian urban markets",
      "C3 becomes Egypt's dominant community retail network",
    ],
  },
] as const;
