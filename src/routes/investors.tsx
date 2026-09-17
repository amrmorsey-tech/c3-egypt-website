import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { Marquee } from "@/components/fc3/Marquee";
import { AnimatedButton, SectionLabel } from "@/components/fc3/primitives";
import { site, timeline } from "@/content/site";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investors — C3 Retail Network growth pipeline" },
      { name: "description", content: "C3 Retail Network: 8 active locations, growing to 20 by 2030. Institutional-grade community retail infrastructure across Egypt." },
    ],
  }),
  component: Investors,
});

const investorStats = [
  { value: "8", label: "Active branches" },
  { value: "15", label: "Branches by 2028" },
  { value: "20", label: "Branches by 2030" },
  { value: "200K+", label: "SQM GLA managed" },
];

const advantages = [
  {
    title: "Multi-location platform",
    desc: "A single investment gives exposure to a diversified portfolio across Egypt's fastest-growing urban zones — not a single-asset risk.",
  },
  {
    title: "Anchor tenant stability",
    desc: "Long-term leases with Majid Al Futtaim (Carrefour) and 60+ established brands provide predictable, stable income streams.",
  },
  {
    title: "Community-first positioning",
    desc: "C3 targets underserved communities with high purchasing power — a segment with significantly less competition than premium city centres.",
  },
  {
    title: "Scalable infrastructure",
    desc: "Our operating platform — leasing, marketing, facilities — is built to scale. Each new location adds to the platform without rebuilding from zero.",
  },
  {
    title: "Revenue share models",
    desc: "Flexible lease structures including fixed rent and revenue share give the network direct upside from tenant performance.",
  },
  {
    title: "Institutional-grade partners",
    desc: "Strategic partnership with Majid Al Futtaim, one of the Middle East's largest retail developers, validates the C3 model.",
  },
];

function Investors() {
  return (
    <>
      <PageHero
        index="05 — Investors"
        title="Investors"
        lines={["Egypt's retail", "growth story."]}
        intro="C3 Retail Network is building Egypt's first national community retail platform — 8 active locations, growing to 20 by 2030."
        breadcrumb={[{ label: "Investors", to: "/investors" }]}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <AnimatedButton to="/contact" tone="paper">Request investor deck</AnimatedButton>
          <AnimatedButton to="/locations" tone="paper">View all locations</AnimatedButton>
        </div>
      </PageHero>

      {/* Key metrics */}
      <div className="bg-gold">
        <div className="fc3-shell grid grid-cols-2 gap-px md:grid-cols-4">
          {investorStats.map((s) => (
            <div key={s.label} className="px-6 py-6 bg-gold">
              <div className="font-display text-[2rem] font-bold text-ink leading-none">{s.value}</div>
              <div className="fc3-label mt-2 text-ink/70 uppercase tracking-widest text-[0.5625rem]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Investment case */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell">
          <SectionLabel>The Investment Case</SectionLabel>
          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div>
              <h2 className="font-display text-[clamp(2rem,4.6vw,4.25rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em]">
                <span className="block overflow-hidden"><span data-reveal className="block">Community retail</span></span>
                <span className="block overflow-hidden"><span data-reveal data-reveal-delay="90" className="block">at national scale<span className="text-gold-deep">.</span></span></span>
              </h2>
              <div data-reveal data-reveal-delay="180" className="mt-8 space-y-5 text-base leading-relaxed text-ink/70">
                <p>Egypt's retail market is growing — but growth is concentrated in Cairo's premium city-centre destinations that are already expensive and well-served.</p>
                <p>C3 Retail Network targets a different segment: Egypt's fast-growing secondary urban zones — Obour, 6th of October, 15th of May, Badr, 10th of Ramadan — areas with high population density, rising incomes, and almost no quality retail infrastructure.</p>
                <p>By being first in these markets and anchoring with Carrefour hypermarkets, C3 creates dominant, defensible retail positions that are difficult to replicate.</p>
              </div>
            </div>
            <ul className="grid gap-6 md:grid-cols-2">
              {advantages.map((a, i) => (
                <li key={a.title} data-reveal data-reveal-delay={i * 60} className="border-t border-ink/12 pt-6">
                  <h3 className="font-display text-base font-bold uppercase tracking-[-0.02em]">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{a.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Marquee className="bg-ink text-paper" items={["8 active locations", "15 by 2028", "20 by 2030", "Carrefour partnership", "Majid Al Futtaim", "60+ brands", "5,000+ daily visitors"]} />

      {/* Growth timeline */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell">
          <SectionLabel>Growth Roadmap</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            From 8 to 20<span className="text-gold-deep">.</span>
          </h2>
          <div className="mt-16 space-y-0">
            {timeline.map((phase, i) => (
              <div
                key={phase.year}
                data-reveal
                data-reveal-delay={i * 80}
                className="grid gap-6 border-t border-ink/12 py-8 md:grid-cols-[200px_1fr_1fr] md:items-start md:gap-12"
              >
                <div>
                  <p className="font-display text-2xl font-bold text-gold-deep leading-none">{phase.year}</p>
                  <p className="fc3-label mt-2 text-ink/50">{phase.title}</p>
                </div>
                <ul className="space-y-3 md:col-span-2">
                  {phase.events.map((ev) => (
                    <li key={ev} className="flex items-start gap-3 text-sm text-ink/70">
                      <span className="h-1.5 w-1.5 shrink-0 mt-1.5 bg-gold" aria-hidden="true" />
                      {ev}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key partners */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="fc3-shell">
          <SectionLabel tone="ink">Strategic Partners</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            Backed by the best<span className="text-gold">.</span>
          </h2>
          <ul className="mt-16 grid gap-px border border-paper/10 md:grid-cols-3">
            {[
              {
                name: "Majid Al Futtaim",
                role: "Anchor Hypermarket Partner",
                desc: "One of the Middle East's largest retail and real estate developers, operating Carrefour and Supeco across the C3 network.",
              },
              {
                name: "Carrefour Egypt",
                role: "Primary Anchor Tenant",
                desc: "France's leading global hypermarket brand providing the daily-visit anchor that drives consistent footfall to every C3 location.",
              },
              {
                name: "LC Waikiki",
                role: "Fashion Anchor Partner",
                desc: "International fashion retailer with 20+ stores across Egypt, providing fashion-category anchor presence in the C3 network.",
              },
            ].map((p, i) => (
              <li key={p.name} data-reveal data-reveal-delay={i * 80} className="flex flex-col gap-4 bg-ink p-8 md:p-10">
                <span className="h-2 w-2 bg-gold" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-[-0.02em]">{p.name}</h3>
                  <p className="fc3-label mt-1 text-gold">{p.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-paper/60">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-24 text-ink md:py-28">
        <div className="fc3-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Request the investor deck<span className="text-gold-deep">.</span>
            </h2>
            <p className="mt-5 max-w-md text-base text-ink/65 leading-relaxed">
              Full financial details, location maps, tenant mix analysis and growth projections available under NDA for qualified investors.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link to="/contact" className="inline-flex items-center gap-4 bg-ink px-8 py-4 fc3-label text-paper hover:bg-gold hover:text-ink transition-colors">
              <span className="h-2 w-2 bg-paper" aria-hidden="true" />
              Request investor materials
            </Link>
            <Link to="/about" className="inline-flex items-center gap-4 border border-ink/30 px-8 py-4 fc3-label hover:border-ink transition-colors">
              About C3
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
