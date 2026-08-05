/**
 * C3 RETAIL NETWORK — content layer.
 */

export const site = {
  name: "C3 Retail Network",
  tagline: "Community · Convenience · Connection",
  claim: "Egypt's growing retail network.",
  description:
    "C3 Retail Network builds and operates community retail destinations across Egypt's fastest growing cities — connecting brands, investors, and communities.",
  address: {
    street: "New Administrative Capital",
    district: "Central Business District",
    city: "Cairo",
    country: "Egypt",
    postalCode: "11865",
  },
  geo: { lat: 30.0131, lng: 31.7469 },
  phone: "+20 100 222 4493",
  email: "info@c3-egypt.com",
  mapsUrl: "https://maps.google.com/?q=C3+Mall+New+Capital+Egypt",
  hours: [
    { days: "Sunday — Wednesday", time: "10:00 — 23:00" },
    { days: "Thursday — Saturday", time: "10:00 — 01:00" },
    { days: "Public holidays", time: "10:00 — 01:00" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/c3egypt" },
    { label: "Facebook", href: "https://facebook.com/c3egypt" },
    { label: "LinkedIn", href: "https://linkedin.com/company/c3egypt" },
    { label: "YouTube", href: "https://youtube.com/@c3egypt" },
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
  { id: "new-capital", name: "C3 Mall — New Capital", tag: "Flagship", gla: "28,000 m²", brands: "40+", footfall: "6,000+", city: "New Administrative Capital" },
  { id: "obour", name: "C3 Mall — Obour", tag: "Established", gla: "22,000 m²", brands: "35+", footfall: "5,000+", city: "Obour City" },
  { id: "october", name: "C3 Mall — 6th of October", tag: "Growing", gla: "25,000 m²", brands: "38+", footfall: "5,500+", city: "6th of October" },
  { id: "nasr-city", name: "C3 Mall — Nasr City", tag: "Community", gla: "18,000 m²", brands: "30+", footfall: "4,500+", city: "Nasr City" },
  { id: "badr", name: "C3 Mall — Badr City", tag: "Expanding", gla: "20,000 m²", brands: "32+", footfall: "4,000+", city: "Badr City" },
] as const;

export const ecosystem = [
  { label: "Retail", desc: "Fashion, lifestyle, electronics and everyday essentials." },
  { label: "Food & Beverage", desc: "Cafés, fast-casual dining and regional concepts." },
  { label: "Entertainment", desc: "Gyms, family entertainment and wellness concepts." },
  { label: "Hypermarkets", desc: "Anchor grocery and household destinations." },
  { label: "Services", desc: "Banking, clinics, pharmacies and community services." },
  { label: "Family Experiences", desc: "Kids zones, events and community spaces." },
] as const;
