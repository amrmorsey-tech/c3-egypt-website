import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { Marquee } from "@/components/fc3/Marquee";
import { AnimatedButton, SectionLabel } from "@/components/fc3/primitives";
import { site } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About C3 Retail Network — Egypt's First Retail Mall Network" },
      { name: "description", content: "A growing system of 8 active malls across Egypt's top new urban zones — offering a unified experience for both brands and consumers." },
    ],
  }),
  component: About,
});

const differentiators = [
  { label: "Multi-location growth platform", desc: "A single partnership unlocks presence across 8 branches in Egypt's fastest-growing urban zones." },
  { label: "Trusted by 60+ leading brands", desc: "From LC Waikiki to Carrefour — Egypt's most recognized local and international retailers operate inside C3." },
  { label: "Trusted by Market Leaders", desc: "Majid Al Futtaim, one of the region's largest retail developers, chose C3 as their preferred community network." },
  { label: "5,000+ daily visitors", desc: "Network-wide average footfall that delivers consistent traffic to every brand in the ecosystem." },
  { label: "Marketing & operational support", desc: "360° support covering digital campaigns, in-mall activation, and full facility management." },
  { label: "Flexible leasing", desc: "Fixed rent and revenue-share structures designed to fit brands of every size and growth stage." },
];

const services = [
  "Retail & F&B Leasing",
  "Brand & Marketing Support",
  "Security & Facility Management",
  "Entertainment Zones",
  "Parking Areas",
];

const values = [
  { label: "Flexibility", sub: "That Fits Your Business", desc: "We design lease structures and spaces around your brand's reality — not a one-size-fits-all template." },
  { label: "Network Power", sub: "Across Egypt", desc: "Every brand in C3 benefits from cross-location visibility and a shared customer base spanning millions of Egyptians." },
  { label: "360° Marketing", sub: "Support Included", desc: "From social media to in-mall events, every tenant gets the full weight of C3's marketing machine." },
  { label: "Trusted by", sub: "Top Brands", desc: "Our partners include Egypt's most established retail and F&B names — proof that C3 delivers results." },
];

function About() {
  return (
    <>
      <PageHero
        index="01 — About"
        title="About C3"
        lines={["Egypt's first", "retail network."]}
        intro="A growing system of 8 active malls across Egypt's top new urban zones — offering a unified experience for both brands and consumers."
        breadcrumb={[{ label: "About", to: "/about" }]}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <AnimatedButton to="/investors" tone="paper">Investor relations</AnimatedButton>
          <AnimatedButton to="/contact" tone="paper">Partner with us</AnimatedButton>
        </div>
      </PageHero>

      {/* Who We Are */}
      <section className="bg-paper py-24 text-ink md:py-36">
        <div className="fc3-shell">
          <SectionLabel index="01">Who We Are</SectionLabel>
          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <h2 className="font-display text-[clamp(2rem,4.6vw,4.25rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em]">
              <span className="block overflow-hidden">
                <span data-reveal className="block">Built for Egypt's</span>
              </span>
              <span className="block overflow-hidden">
                <span data-reveal data-reveal-delay="90" className="block">communities<span className="text-gold">.</span></span>
              </span>
            </h2>
            <div data-reveal data-reveal-delay="200" className="space-y-5 text-base leading-relaxed text-ink/70">
              <p>C3 Retail Network is Egypt's first multi-location community retail network — operating 8 active malls across Cairo, Giza, Qalyubia and Sharkia governorates.</p>
              <p>We are not a single destination. We are a platform — giving leading brands instant multi-city presence, and giving communities access to the retail, F&B and services they deserve.</p>
              <p>Founded on a simple idea: every Egyptian urban community deserves a world-class retail experience within reach.</p>
            </div>
          </div>

          {/* Stats */}
          <dl className="mt-20 grid grid-cols-2 gap-y-10 border-t border-ink/10 pt-12 md:grid-cols-4">
            {site.stats.map((stat, i) => (
              <div key={stat.label} data-reveal data-reveal-delay={i * 80}>
                <dt className="fc3-label text-ink/50">{stat.label}</dt>
                <dd className="mt-3 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-none tracking-[-0.04em]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What Makes C3 Different */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="fc3-shell">
          <SectionLabel index="02">What Makes C3 Different</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            Why brands choose<br />C3<span className="text-gold">.</span>
          </h2>
          <ul className="mt-16 grid gap-px border border-paper/10 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <li key={d.label} data-reveal data-reveal-delay={i * 60} className="flex flex-col gap-4 bg-ink p-8 md:p-10">
                <span className="h-2 w-2 bg-gold" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold uppercase tracking-[-0.02em] leading-tight">{d.label}</h3>
                <p className="text-sm leading-relaxed text-paper/60">{d.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Marquee
        className="bg-paper text-ink"
        items={["Multi-location platform", "60+ leading brands", "5,000+ daily visitors", "Marketing support", "Flexible leasing", "8 active locations"]}
      />

      {/* Our Services */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
          <div>
            <SectionLabel index="03">Our Services</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Everything your brand needs<span className="text-gold">.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/65">
              C3 is not just a landlord. Every tenant gets the full support of our operational, marketing and facilities teams from day one.
            </p>
            <AnimatedButton to="/contact" className="mt-10">Enquire about leasing</AnimatedButton>
          </div>
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {services.map((s, i) => (
              <li key={s} data-reveal data-reveal-delay={i * 70} className="flex items-center justify-between gap-6 py-6">
                <span className="font-display text-lg font-semibold uppercase tracking-[-0.02em]">{s}</span>
                <span className="h-2 w-2 shrink-0 bg-gold" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="fc3-shell">
          <SectionLabel index="04">Core Values</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            What we stand for<span className="text-gold">.</span>
          </h2>
          <ul className="mt-16 grid gap-8 md:grid-cols-2">
            {values.map((v, i) => (
              <li key={v.label} data-reveal data-reveal-delay={i * 80} className="border-t border-paper/15 pt-8">
                <p className="fc3-label text-gold">{v.sub}</p>
                <h3 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold uppercase leading-none tracking-[-0.03em]">
                  {v.label}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/60">{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-20 text-ink md:py-28">
        <div className="fc3-shell text-center">
          <h2 className="font-display text-[clamp(2rem,6vw,5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            Ready to be part<br />of the network<span className="text-gold">?</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-4 bg-ink px-8 py-4 fc3-label text-paper transition-colors hover:bg-gold hover:text-ink">
              <span className="h-2 w-2 bg-paper" aria-hidden="true" />
              Become a partner
            </Link>
            <Link to="/investors" className="inline-flex items-center gap-4 border border-ink/30 px-8 py-4 fc3-label transition-colors hover:border-ink">
              Investor relations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
