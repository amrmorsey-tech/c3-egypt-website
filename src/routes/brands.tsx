import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { Marquee } from "@/components/fc3/Marquee";
import { AnimatedButton, SectionLabel } from "@/components/fc3/primitives";
import { brands, ecosystem } from "@/content/site";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands — C3 Retail Network partners" },
      { name: "description", content: "60+ leading local and international brands operating inside the C3 Retail Network across Egypt." },
    ],
  }),
  component: Brands,
});

const categories = ["All", "Fashion", "Hypermarket", "F&B", "Café & Restaurant", "Restaurant", "Market", "Retail", "Developer Partner"] as const;
type Category = (typeof categories)[number];

function Brands() {
  return (
    <>
      <PageHero
        index="03 — Brands"
        title="Brands"
        lines={["60+ leading", "brands."]}
        intro="From international fashion giants to Egypt's most-loved F&B concepts — the C3 network is home to the brands Egyptians trust every day."
        breadcrumb={[{ label: "Brands", to: "/brands" }]}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <AnimatedButton to="/contact" tone="paper">Lease a space</AnimatedButton>
          <AnimatedButton to="/locations" tone="paper">Our locations</AnimatedButton>
        </div>
      </PageHero>

      {/* Brand categories intro */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell">
          <SectionLabel index="01">What's Inside</SectionLabel>
          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <h2 className="font-display text-[clamp(2rem,4.6vw,4.25rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em]">
              <span className="block overflow-hidden">
                <span data-reveal className="block">Every category,</span>
              </span>
              <span className="block overflow-hidden">
                <span data-reveal data-reveal-delay="90" className="block">every location<span className="text-gold">.</span></span>
              </span>
            </h2>
            <div data-reveal data-reveal-delay="180" className="space-y-5 text-base leading-relaxed text-ink/70">
              <p>C3 Retail Network is built around a complete ecosystem — every location offers the full mix of retail, F&B, entertainment and services that a modern Egyptian community needs.</p>
              <p>Our brand mix is curated to maximize footfall for every tenant — anchor hypermarkets drive daily visits, fashion and lifestyle brands capture dwell time, and F&B keeps customers on site longer.</p>
            </div>
          </div>

          {/* Ecosystem categories */}
          <ul className="mt-16 grid gap-px border border-ink/10 md:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((cat, i) => (
              <li key={cat.label} data-reveal data-reveal-delay={i * 60} className="flex flex-col gap-3 bg-paper p-8 border border-ink/8">
                <span className="fc3-label text-gold">0{i + 1}</span>
                <h3 className="font-display text-xl font-bold uppercase tracking-[-0.02em]">{cat.label}</h3>
                <p className="text-sm leading-relaxed text-ink/60">{cat.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Marquee className="bg-ink text-paper" items={brands.map((b) => b.name)} />

      {/* Partner brands */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="fc3-shell">
          <SectionLabel index="02">Partner Brands</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            Trusted by the best<span className="text-gold">.</span>
          </h2>
          <ul className="mt-16 divide-y divide-paper/10 border-y border-paper/10">
            {brands.map((brand, i) => (
              <li key={brand.name} data-reveal data-reveal-delay={i * 50} className="group flex items-start gap-6 py-6 md:py-8">
                <span className="fc3-label w-24 shrink-0 pt-1 text-gold">{brand.category}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl font-bold uppercase tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-2">
                    {brand.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/55">{brand.description}</p>
                </div>
                <span className="h-2 w-2 shrink-0 mt-2 bg-gold opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </li>
            ))}
          </ul>
          <p className="mt-10 fc3-label text-paper/40">+ 50 more brands across the network. Full directory available on request.</p>
        </div>
      </section>

      {/* Become a brand partner */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <SectionLabel index="03">Join the Network</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Become a C3 brand partner<span className="text-gold">.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/65">
              Join Egypt's most trusted multi-location retail network. We offer fixed rent and revenue-share structures, 360° marketing support, and access to 5,000+ daily visitors across 8 locations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-4 bg-ink px-8 py-4 fc3-label text-paper hover:bg-gold hover:text-ink transition-colors">
                <span className="h-2 w-2 bg-paper" aria-hidden="true" />
                Start a leasing conversation
              </Link>
            </div>
          </div>
          <ul className="space-y-6">
            {[
              { title: "Multi-location entry", desc: "One partnership gives your brand instant presence across 8 active malls." },
              { title: "Flexible leasing terms", desc: "Fixed rent or revenue share — structured around your business model." },
              { title: "Built-in marketing", desc: "Your brand benefits from C3's network-wide digital and on-ground campaigns." },
              { title: "Operational support", desc: "Security, facilities, parking and mall management handled by C3." },
            ].map((item, i) => (
              <li key={item.title} data-reveal data-reveal-delay={i * 80} className="flex gap-5 border-t border-ink/10 pt-6">
                <span className="h-2 w-2 shrink-0 mt-2 bg-gold" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
