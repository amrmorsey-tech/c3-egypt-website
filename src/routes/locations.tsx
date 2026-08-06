import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { Marquee } from "@/components/fc3/Marquee";
import { AnimatedButton, SectionLabel } from "@/components/fc3/primitives";
import { locations, site } from "@/content/site";
import dining1 from "@/assets/dining-1.jpg";
import dining2 from "@/assets/dining-2.jpg";
import dining3 from "@/assets/dining-3.jpg";
import dining4 from "@/assets/dining-4.jpg";
import visitAerial from "@/assets/visit-aerial.jpg";
import storesHero from "@/assets/stores-hero.jpg";
import panelShop from "@/assets/panel-shop.jpg";
import panelDine from "@/assets/panel-dine.jpg";

const locImages = [dining1, dining2, dining3, dining4, visitAerial, storesHero, panelShop, panelDine];

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — C3 Retail Network across Egypt" },
      { name: "description", content: "8 active C3 Mall branches across Cairo, Giza, Qalyubia and Sharkia — find your nearest location." },
    ],
  }),
  component: Locations,
});

const cardGradients = [
  "from-[#1a1408] to-[#0d0a04]",
  "from-[#081a10] to-[#051208]",
  "from-[#0a0a1a] to-[#08081a]",
  "from-[#1a0808] to-[#120505]",
  "from-[#081218] to-[#050d12]",
  "from-[#1a1208] to-[#0d0a04]",
  "from-[#0a1a10] to-[#061208]",
  "from-[#100a1a] to-[#08061a]",
];

function Locations() {
  const active = locations.filter((l) => l.tag !== "Coming Soon");
  const comingSoon = locations.filter((l) => l.tag === "Coming Soon");

  return (
    <>
      <PageHero
        index="02 — Locations"
        title="Locations"
        lines={["8 branches,", "one network."]}
        intro="Active C3 Mall destinations across Cairo, Giza, Qalyubia and Sharkia — with more opening through 2025–2026."
        breadcrumb={[{ label: "Locations", to: "/locations" }]}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <AnimatedButton to="/contact" tone="paper">Find a space</AnimatedButton>
          <AnimatedButton to="/investors" tone="paper">Growth pipeline</AnimatedButton>
        </div>
      </PageHero>

      {/* Network stats bar */}
      <div className="bg-gold">
        <div className="fc3-shell grid grid-cols-2 gap-px md:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label} className="px-6 py-5 bg-gold">
              <div className="font-display text-[1.75rem] font-bold text-ink leading-none">{s.value}</div>
              <div className="fc3-label mt-1.5 text-ink/60 uppercase tracking-widest text-[0.5rem]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Active locations grid */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell">
          <SectionLabel index="01">Active Locations</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            Open now<span className="text-gold">.</span>
          </h2>
          <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {active.map((loc, i) => (
              <li key={loc.id} data-reveal data-reveal-delay={i * 70}>
                <a href={loc.mapUrl} target="_blank" rel="noreferrer" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                    <img
                      src={locImages[i % locImages.length]}
                      alt={loc.shortName}
                      className="h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-ink/30" />
                    <div className="absolute right-5 top-5 h-6 w-6 bg-gold transition-transform duration-500 group-hover:scale-110" />
                    <span className="absolute left-4 top-4 bg-paper px-3 py-1.5 fc3-label text-[0.5625rem]">{loc.tag}</span>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/90 to-transparent p-5">
                      <p className="fc3-label text-paper/70 text-[0.5rem]">GLA {loc.gla}</p>
                      <p className="font-display text-xl font-bold text-paper uppercase tracking-[-0.02em] leading-tight mt-1">{loc.brands} brands</p>
                    </div>
                  </div>
                  <div className="mt-5 border-t border-ink/15 pt-4">
                    <h3 className="font-display text-xl font-bold uppercase tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1">
                      {loc.shortName}
                    </h3>
                    <p className="mt-1 fc3-label text-ink/50">{loc.city}, {loc.governorate}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/65">{loc.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="fc3-label text-gold">{loc.footfall}/day</span>
                      <span className="fc3-label text-ink/40 flex items-center gap-1">
                        Open in maps <span aria-hidden="true">↗</span>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Marquee className="bg-ink text-paper" items={["El Obour", "6th of October", "New Capital", "Nasr City", "15th of May", "Badr City", "El Shorouk", "10th of Ramadan"]} />

      {/* Coming soon */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="fc3-shell">
          <SectionLabel index="02">Coming Soon</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            Opening 2025 — 2026<span className="text-gold">.</span>
          </h2>
          <ul className="mt-16 grid gap-8 md:grid-cols-2">
            {comingSoon.map((loc, i) => (
              <li key={loc.id} data-reveal data-reveal-delay={i * 100} className="border-t border-paper/15 pt-8">
                <span className="inline-block bg-gold px-3 py-1 fc3-label text-[0.5rem] text-ink">{loc.tag}</span>
                <h3 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold uppercase leading-none tracking-[-0.03em]">
                  {loc.shortName}
                </h3>
                <p className="mt-2 fc3-label text-paper/50">{loc.city}, {loc.governorate}</p>
                <p className="mt-4 text-sm leading-relaxed text-paper/60">{loc.description}</p>
                <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-paper/10 pt-6">
                  <div>
                    <dt className="fc3-label text-paper/40">GLA</dt>
                    <dd className="mt-1 font-display text-lg font-bold">{loc.gla}</dd>
                  </div>
                  <div>
                    <dt className="fc3-label text-paper/40">Brands</dt>
                    <dd className="mt-1 font-display text-lg font-bold">{loc.brands}</dd>
                  </div>
                  <div>
                    <dt className="fc3-label text-paper/40">Target</dt>
                    <dd className="mt-1 font-display text-lg font-bold">{loc.footfall}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-20 text-ink">
        <div className="fc3-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Interested in a space<span className="text-gold">?</span>
            </h2>
            <p className="mt-5 max-w-md text-base text-ink/65 leading-relaxed">
              Our leasing team handles enquiries for all active and upcoming locations. Fixed rent and revenue-share structures available.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link to="/contact" className="inline-flex items-center gap-4 bg-ink px-8 py-4 fc3-label text-paper hover:bg-gold hover:text-ink transition-colors">
              <span className="h-2 w-2 bg-paper" aria-hidden="true" />
              Contact leasing team
            </Link>
            <Link to="/investors" className="inline-flex items-center gap-4 border border-ink/30 px-8 py-4 fc3-label hover:border-ink transition-colors">
              Investor overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
