export type NewsItem = {
  id: string;
  headlineEn: string;
  headlineAr?: string;
  source: string;
  category: string;
  date: string;
  url: string;
  image: string;
  excerpt: string;
  featured?: boolean;
};

export const newsItems: NewsItem[] = [
  {
    id: "new-capital-flagship",
    headlineEn: "C3 Retail Network Opens Flagship Mall in Egypt's New Administrative Capital",
    source: "Egypt Today",
    category: "Opening",
    date: "2026-03-15",
    url: "https://egypttoday.com",
    image: "/news-thumb-1.jpg",
    excerpt:
      "C3 Egypt inaugurates its largest destination to date — a 28,000 m² flagship retail experience in the New Administrative Capital, anchored by Egypt's top international and homegrown brands.",
    featured: true,
  },
  {
    id: "october-expansion",
    headlineEn: "C3 6th of October Completes Phase Two Expansion, Now Egypt's Largest Community Mall",
    source: "Al-Mal News",
    category: "Expansion",
    date: "2025-11-08",
    url: "https://almalnews.com",
    image: "/news-thumb-2.jpg",
    excerpt:
      "Phase two at C3 6th of October City has reached completion, bringing GLA to 25,000 m² and adding 15 new brand units to one of West Cairo's fastest-growing retail hubs.",
    featured: true,
  },
  {
    id: "maf-partnership",
    headlineEn: "Majid Al Futtaim Signs Strategic Agreement to Anchor All C3 Network Locations",
    source: "Daily News Egypt",
    category: "Partnership",
    date: "2025-06-20",
    url: "https://dailynewsegypt.com",
    image: "/news-thumb-3.jpg",
    excerpt:
      "C3 Egypt and Majid Al Futtaim Group formalise a long-term partnership placing Carrefour and Supeco hypermarkets as anchor tenants at all eight C3 Mall destinations across Egypt.",
    featured: true,
  },
  {
    id: "obour-renovation",
    headlineEn: "C3 El Obour Completes Full Renovation and Re-opens with Updated Brand Mix",
    source: "Enterprise Egypt",
    category: "Renovation",
    date: "2024-09-12",
    url: "https://enterprise.press",
    image: "/news-thumb-4.jpg",
    excerpt:
      "El Obour branch undergoes a complete interior and façade renovation, welcoming 25 new retail and F&B units to serve the city's rapidly expanding residential communities.",
  },
  {
    id: "lc-waikiki-signing",
    headlineEn: "LC Waikiki Confirms Multi-Branch Roll-Out Across C3 Retail Network",
    source: "Business Monthly",
    category: "Brand News",
    date: "2024-04-03",
    url: "https://businessmonthly.net",
    image: "/news-thumb-5.jpg",
    excerpt:
      "Turkey's leading fashion retailer LC Waikiki signs a multi-site agreement to open stores at four C3 Mall locations — marking one of the network's largest brand acquisitions to date.",
  },
];
