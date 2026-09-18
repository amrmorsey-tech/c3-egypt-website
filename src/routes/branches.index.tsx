import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { Marquee } from "@/components/fc3/Marquee";
import { AnimatedButton, SectionLabel } from "@/components/fc3/primitives";
import { locations, site } from "@/content/site";
import locObour from "@/assets/loc-obour.jpg";
import locOctober from "@/assets/loc-october.jpg";
import locNasrCity from "@/assets/loc-nasr-city.jpg";
import locNewCapital from "@/assets/loc-new-capital.jpg";
import loc15May from "@/assets/loc-15-may.jpg";
import locBadr from "@/assets/loc-badr.jpg";
import locShorouk from "@/assets/loc-shorouk.jpg";
import loc10Ramadan from "@/assets/loc-10-ramadan.jpg";

const locImages: Record<string, string> = {
  "new-capital": locNewCapital,
  "obour": locObour,
  "october": locOctober,
  "nasr-city": locNasrCity,
  "15-may": loc15May,
  "badr": locBadr,
  "shorouk": locShorouk,
  "10-ramadan": loc10Ramadan,
};

export const Route = createFileRoute("/branches/")({
  head: () => ({
    meta: [
      { title: "Branches — C3 Retail Network across Egypt" },
      { name: "description", content: "8 active C3 Mall branches across Cairo, Giza, Qalyubia and Sharkia — find your nearest location." },
    ],
  }),
  component: Branches,
});

function Branches() {
  const active = locations;

  return (
    <>
      <PageHero
        index="03 — Branches"
        title="Branches"
        lines={["8 branches,", "one network."]}
        intro="Active C3 Mall destinations across Cairo, Giza, Qalyubia and Sharkia — with more opening through 2025–2026."
        breadcrumb={[{ label: "Branches", to: "/branches" }]}
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
              <div className="fc3-label mt-1.5 text-ink/70 uppercase tracking-widest text-[0.5625rem]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Branches grid */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell">
          <SectionLabel>Branches</SectionLabel>
          <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {active.map((loc, i) => {
              const locAny = loc as typeof loc & {
                totalArea?: string;
                retail?: string;
                fnb?: string;
                fnbUnits?: number;
                hypermarket?: string;
                parking?: string;
                address?: string;
                landmarks?: readonly string[];
              };
              return (
                <li key={loc.id} data-reveal data-reveal-delay={i * 70}>
                  <Link to="/branches/$id" params={{ id: loc.id }} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                      <img
                        src={locImages[loc.id]}
                        alt={loc.shortName}
                        className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-ink/20" />
                      <div className="absolute right-5 top-5 h-6 w-6 bg-gold transition-transform duration-500 group-hover:scale-110" />
                      <span className="absolute left-4 top-4 bg-paper px-3 py-1.5 fc3-label text-[0.5625rem]">{loc.tag}</span>
                    </div>
                    <div className="mt-5 border-t border-ink/15 pt-4">
                      <h3 className="font-display text-xl font-bold uppercase tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1">
                        {loc.shortName}
                      </h3>
                      <p className="mt-1 fc3-label text-ink/70">{loc.city}, {loc.governorate}</p>
                      <p className="mt-3 text-sm leading-relaxed text-ink/65">{loc.description}</p>

                      <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-ink/10 pt-4">
                        <div>
                          <dt className="fc3-label text-ink/45 text-[0.5rem] uppercase tracking-widest">Total Area</dt>
                          <dd className="mt-0.5 font-display text-sm font-bold leading-tight">{locAny.totalArea ?? loc.gla}</dd>
                        </div>
                        <div>
                          <dt className="fc3-label text-ink/45 text-[0.5rem] uppercase tracking-widest">Brands</dt>
                          <dd className="mt-0.5 font-display text-sm font-bold leading-tight">{loc.brands}</dd>
                        </div>
                        <div>
                          <dt className="fc3-label text-ink/45 text-[0.5rem] uppercase tracking-widest">Daily visits</dt>
                          <dd className="mt-0.5 font-display text-sm font-bold leading-tight">{loc.footfall}</dd>
                        </div>
                        {locAny.parking && locAny.parking !== "—" && (
                          <div>
                            <dt className="fc3-label text-ink/45 text-[0.5rem] uppercase tracking-widest">Parking</dt>
                            <dd className="mt-0.5 font-display text-sm font-bold leading-tight">{locAny.parking}</dd>
                          </div>
                        )}
                        {locAny.fnbUnits && locAny.fnbUnits > 0 && (
                          <div>
                            <dt className="fc3-label text-ink/45 text-[0.5rem] uppercase tracking-widest">F&B units</dt>
                            <dd className="mt-0.5 font-display text-sm font-bold leading-tight">{locAny.fnbUnits}</dd>
                          </div>
                        )}
                        {locAny.hypermarket && locAny.hypermarket !== "—" && (
                          <div>
                            <dt className="fc3-label text-ink/45 text-[0.5rem] uppercase tracking-widest">Hypermarket</dt>
                            <dd className="mt-0.5 font-display text-sm font-bold leading-tight">{locAny.hypermarket}</dd>
                          </div>
                        )}
                      </dl>

                      <div className="mt-4 flex items-center justify-end">
                        <span className="fc3-label text-gold-deep flex items-center gap-1 text-[0.5625rem] opacity-0 group-hover:opacity-100 transition-opacity">
                          View details <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Marquee className="bg-ink text-paper" items={["El Obour", "6th of October", "New Capital", "Nasr City", "15th of May", "Badr City", "El Shorouk", "10th of Ramadan"]} />

      {/* CTA */}
      <section className="bg-paper py-20 text-ink">
        <div className="fc3-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Interested in a space<span className="text-gold-deep">?</span>
            </h2>
            <p className="mt-5 max-w-md text-base text-ink/65 leading-relaxed">
              Our leasing team handles enquiries for all active and upcoming branches. Fixed rent and revenue-share structures available.
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
