import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { Marquee } from "@/components/fc3/Marquee";
import { AnimatedButton, SectionLabel } from "@/components/fc3/primitives";
import { ecosystem, site } from "@/content/site";
import panelShop from "@/assets/panel-shop.jpg";
import panelDine from "@/assets/panel-dine.jpg";
import panelEnt from "@/assets/panel-entertainment.jpg";
import panelExp from "@/assets/panel-experiences.jpg";
import panelHyper from "@/assets/dining-1.jpg";
import panelFamily from "@/assets/ent-kids.jpg";

const ecoImages = [panelShop, panelDine, panelEnt, panelExp, panelHyper, panelFamily];

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "Ecosystem — C3 Retail Network" },
      { name: "description", content: "The complete C3 retail ecosystem — retail, F&B, entertainment, hypermarkets, services and family experiences across 8 locations." },
    ],
  }),
  component: Ecosystem,
});

const panelGradients = [
  "from-[#2a1f08] to-[#1a1208]",
  "from-[#081a12] to-[#051208]",
  "from-[#0d0a1a] to-[#0a0820]",
  "from-[#1a0a0a] to-[#120606]",
  "from-[#081218] to-[#060d14]",
  "from-[#121a08] to-[#0a1206]",
];

const details = [
  {
    label: "Retail",
    points: ["Fashion & lifestyle", "Electronics & tech", "Sportswear", "Kids & toys", "Beauty & personal care"],
    highlight: "60+ brands across the network",
  },
  {
    label: "Food & Beverage",
    points: ["International café chains", "Fast-casual dining", "Regional cuisine concepts", "Juice bars & dessert spots", "Family restaurants"],
    highlight: "F&B drives 40% of dwell time",
  },
  {
    label: "Entertainment",
    points: ["Family entertainment centres", "Fitness & wellness clubs", "Kids play zones", "Indoor activities", "Community events spaces"],
    highlight: "Entertainment anchors weekend visits",
  },
  {
    label: "Hypermarkets",
    points: ["Carrefour hypermarkets", "Supeco discount format", "Fresh produce sections", "Household essentials", "Electronics departments"],
    highlight: "Majid Al Futtaim partnership",
  },
  {
    label: "Services",
    points: ["Banking & exchange", "Medical clinics & pharmacies", "Telecom operators", "Government services", "Dry cleaning & alterations"],
    highlight: "Services create daily repeat visits",
  },
  {
    label: "Family Experiences",
    points: ["Indoor playgrounds", "Seasonal events", "Community activations", "Ramadan & Eid programmes", "School holiday programmes"],
    highlight: "Community events drive 20% more footfall",
  },
];

function Ecosystem() {
  return (
    <>
      <PageHero
        index="04 — Ecosystem"
        title="Ecosystem"
        lines={["Built for", "everyday life."]}
        intro="Six categories working together to create a complete destination — retail, dining, entertainment, groceries, services and family experiences."
        breadcrumb={[{ label: "Ecosystem", to: "/ecosystem" }]}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <AnimatedButton to="/brands" tone="paper">Our brand partners</AnimatedButton>
          <AnimatedButton to="/contact" tone="paper">Lease a space</AnimatedButton>
        </div>
      </PageHero>

      {/* Overview panels */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="fc3-shell">
          <SectionLabel index="01">Six Categories</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            Everything in one place<span className="text-gold">.</span>
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((cat, i) => (
              <div
                key={cat.label}
                data-reveal
                data-reveal-delay={i * 70}
                className="relative overflow-hidden"
              >
                <img
                  src={ecoImages[i % ecoImages.length]}
                  alt={cat.label}
                  className="absolute inset-0 h-full w-full object-cover opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink/70" />
                <div className="absolute right-5 top-5 h-5 w-5 bg-gold" />
                <div className="relative p-8">
                  <span className="fc3-label text-gold">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-[-0.03em] leading-tight">{cat.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/60">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee className="bg-paper text-ink" items={["Community · Convenience · Connection", "Retail", "F&B", "Entertainment", "Hypermarkets", "Services", "Family Experiences"]} />

      {/* Detailed breakdown */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell">
          <SectionLabel index="02">Inside Each Category</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            The full picture<span className="text-gold">.</span>
          </h2>
          <ul className="mt-16 grid gap-12 md:grid-cols-2">
            {details.map((cat, i) => (
              <li key={cat.label} data-reveal data-reveal-delay={i * 70} className="border-t border-ink/12 pt-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-[-0.03em]">{cat.label}</h3>
                  <span className="fc3-label text-gold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-2 fc3-label text-gold">{cat.highlight}</p>
                <ul className="mt-5 space-y-2">
                  {cat.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-ink/65">
                      <span className="h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats + CTA */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="fc3-shell grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel index="03">The Numbers</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              A network that delivers<span className="text-gold">.</span>
            </h2>
            <dl className="mt-12 grid grid-cols-2 gap-8">
              {site.stats.map((s) => (
                <div key={s.label} className="border-t border-paper/15 pt-6">
                  <dt className="fc3-label text-paper/50">{s.label}</dt>
                  <dd className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-bold text-gold leading-none">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-paper/65">
              The C3 ecosystem is designed so each category feeds the others. Hypermarkets drive daily visits. Retail captures dwell time. F&B extends stays. Entertainment brings families on weekends. Services create weekday repeat visits.
            </p>
            <p className="text-base leading-relaxed text-paper/65">
              Together, these six categories produce a destination that Egyptians visit not once but multiple times every week — creating sustained, predictable footfall for every brand in the network.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/brands" className="inline-flex items-center gap-4 bg-paper px-8 py-4 fc3-label text-ink hover:bg-gold transition-colors">
                <span className="h-2 w-2 bg-ink" aria-hidden="true" />
                View brand partners
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-4 border border-paper/30 px-8 py-4 fc3-label hover:border-paper transition-colors">
                Lease enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
