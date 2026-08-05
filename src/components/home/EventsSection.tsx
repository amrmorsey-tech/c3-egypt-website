import { Link } from "@tanstack/react-router";
import { SectionLabel, AnimatedButton } from "@/components/fc3/primitives";
import { site } from "@/content/site";

const highlights = [
  {
    tag: "Network",
    title: "New Capital Flagship",
    summary: "C3 Mall at the New Administrative Capital — 28,000 m² of premium retail across multiple levels, anchored by Egypt's leading brands.",
    location: "New Administrative Capital, Cairo",
    category: "Flagship",
  },
  {
    tag: "Growth",
    title: "Expanding to 8+ sites",
    summary: "Pipeline of new C3 locations across Egypt's secondary cities, targeting underserved communities with established purchasing power.",
    location: "Multiple governorates",
    category: "Pipeline",
  },
  {
    tag: "Community",
    title: "60+ leading brands",
    summary: "Fashion, F&B, entertainment, hypermarkets and services — every C3 location is a complete destination for daily life.",
    location: "Network-wide",
    category: "Tenants",
  },
];

const latestItems = [
  {
    dateLabel: "2025",
    title: "C3 Obour — Full renovation complete",
    location: "Obour City",
    category: "Development",
  },
  {
    dateLabel: "2025",
    title: "New anchor tenant signed at C3 October",
    location: "6th of October City",
    category: "Leasing",
  },
  {
    dateLabel: "2024",
    title: "C3 Nasr City reaches 100% occupancy",
    location: "Nasr City, Cairo",
    category: "Milestone",
  },
];

export function EventsSection() {
  const lead = highlights[0];

  return (
    <section className="bg-paper py-24 text-ink md:py-32">
      <div className="fc3-shell">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel index="05">Latest</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Always growing<span className="text-gold">.</span>
            </h2>
          </div>
          <AnimatedButton to="/locations">View all locations</AnimatedButton>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Featured card */}
          <Link to="/locations" className="group block">
            <div data-reveal-mask className="relative aspect-[16/11] overflow-hidden bg-ink">
              {/* Grid texture */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-px opacity-10">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="bg-paper" />
                ))}
              </div>
              {/* Gold accents */}
              <div className="absolute right-8 top-8 h-10 w-10 bg-gold opacity-80 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute left-12 bottom-16 h-5 w-5 bg-gold opacity-50" />
              {/* Tag badge */}
              <span className="absolute left-5 top-5 bg-gold px-3 py-2 fc3-label text-[0.5625rem] text-ink">
                {lead.tag}
              </span>
              {/* Stat overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/90 to-transparent p-8">
                <p className="font-display text-[3rem] font-bold text-paper leading-none">
                  {site.stats[0].value}
                </p>
                <p className="fc3-label text-paper/60 mt-1 text-[0.5rem]">ACTIVE LOCATIONS</p>
              </div>
            </div>
            <h3 className="mt-6 font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold uppercase leading-none tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-1">
              {lead.title}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink/65">{lead.summary}</p>
          </Link>

          {/* List */}
          <ul className="divide-y divide-ink/12 border-y border-ink/12">
            {latestItems.map((item, i) => (
              <li key={item.title} data-reveal data-reveal-delay={i * 80}>
                <Link
                  to="/locations"
                  className="group flex items-start gap-6 py-6"
                >
                  <span className="fc3-label w-20 shrink-0 pt-1 text-gold">{item.dateLabel}</span>
                  <span className="flex-1">
                    <span className="block font-display text-xl font-semibold uppercase tracking-[-0.02em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                      {item.title}
                    </span>
                    <span className="mt-2 block text-sm text-ink/55">{item.location}</span>
                  </span>
                  <span className="fc3-label shrink-0 pt-1 text-ink/35">{item.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
