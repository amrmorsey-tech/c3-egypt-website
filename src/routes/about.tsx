import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { SectionLabel } from "@/components/fc3/primitives";
import { site, timeline } from "@/content/site";
import locNewCapital from "@/assets/loc-new-capital.jpg";
import locObour from "@/assets/loc-obour.jpg";
import introArch from "@/assets/intro-architecture.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — C3 Retail Network" },
      {
        name: "description",
        content:
          "C3 Retail Network is Egypt's first unified community mall network — 8 active destinations built and operated by MRG for Egypt's growing urban communities.",
      },
    ],
  }),
  component: About,
});

const facilities = [
  {
    icon: "🔒",
    label: "Security",
    desc: "24/7 on-site security teams, CCTV coverage, and access-control systems across every branch.",
  },
  {
    icon: "🏦",
    label: "Bank Services",
    desc: "ATMs and banking service units available for visitors at all C3 locations.",
  },
  {
    icon: "🛍️",
    label: "Mix Tenants",
    desc: "A carefully curated blend of fashion, F&B, lifestyle, and entertainment brands for every community.",
  },
  {
    icon: "🅿️",
    label: "Parking",
    desc: "Covered, secure parking at every branch — free for the first three hours with accessible bays.",
  },
  {
    icon: "🛣️",
    label: "Easy Access",
    desc: "All branches are located on major arterial roads with clear signage and public transport links.",
  },
  {
    icon: "🚻",
    label: "Clean Facilities",
    desc: "Professionally managed, well-maintained restrooms and common areas throughout.",
  },
  {
    icon: "📐",
    label: "Variety of Areas",
    desc: "Flexible unit sizes from boutique kiosks to large-format anchor stores — every brand finds its fit.",
  },
  {
    icon: "🎠",
    label: "Kids Area",
    desc: "Dedicated family and kids entertainment zones that drive dwell time and repeat visits.",
  },
];

function About() {
  return (
    <>
      <PageHero
        index="01 — About"
        title="About Us"
        lines={["Building Egypt's", "retail future."]}
        intro="C3 Retail Network operates Egypt's first unified system of community malls — 8 active destinations bringing world-class brands within everyday reach."
        breadcrumb={[{ label: "About", to: "/about" }]}
      />

      {/* Developer section */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div data-reveal>
            <SectionLabel>The Developer</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Built by MRG<span className="text-gold-deep">.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/65 max-w-lg">
              C3 Retail Network is developed and operated by MRG — a Cairo-based real estate development company with over a decade of experience building community-scale retail destinations across Egypt's fastest-growing urban zones.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/65 max-w-lg">
              MRG's approach is built on one principle: every Egyptian community deserves a world-class retail experience. From the New Administrative Capital to 10th of Ramadan City, C3 brings the same quality, the same brand mix, and the same standard of operations to every neighbourhood it enters.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-10">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <dt className="fc3-label text-ink/40 text-[0.5625rem]">{s.label}</dt>
                  <dd className="mt-1 font-display text-3xl font-bold tracking-[-0.03em]">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div data-reveal data-reveal-delay={120} className="relative aspect-[4/3] overflow-hidden">
            <img
              src={locNewCapital}
              alt="C3 New Capital Flagship"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            <span className="absolute right-5 top-5 h-6 w-6 bg-gold" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* The C3 Mall Experience */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="fc3-shell">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
            <div data-reveal>
              <SectionLabel tone="ink">The C3 Experience</SectionLabel>
              <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
                More than a mall<span className="text-gold">.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-paper/65 max-w-lg">
                A C3 Mall is designed to be the centre of its community — a destination where families shop, dine, and spend time together every week. Every branch combines a full retail tenant mix with food and beverage, family entertainment, and essential services under one roof.
              </p>
              <p className="mt-4 text-base leading-relaxed text-paper/65 max-w-lg">
                By operating as a unified network, C3 gives both brands and visitors something no single mall can: consistency. Whether you walk into C3 New Capital or C3 El Obour, you get the same experience, the same standards, and the same carefully selected brands.
              </p>
            </div>

            <div data-reveal data-reveal-delay={80} className="relative aspect-[4/3] overflow-hidden">
              <img
                src={introArch}
                alt="C3 Mall Architecture"
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell">
          <SectionLabel>Facilities</SectionLabel>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Everything<br />in one place<span className="text-gold-deep">.</span>
            </h2>
          </div>

          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f, i) => (
              <li
                key={f.label}
                data-reveal
                data-reveal-delay={i * 50}
                className="border border-ink/10 p-7"
              >
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="font-display text-lg font-bold uppercase tracking-[-0.02em] leading-tight">
                  {f.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink py-24 text-paper md:py-32 overflow-hidden">
        <div className="fc3-shell">
          <SectionLabel tone="ink">Our Journey</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            From a bold idea<br />to a growing network<span className="text-gold">.</span>
          </h2>
        </div>
        <div className="mt-16 overflow-x-auto scrollbar-none">
          <ol className="fc3-shell flex gap-0 min-w-max md:min-w-0 md:grid md:grid-cols-3 lg:grid-cols-6">
            {timeline.map((phase, i) => (
              <li
                key={phase.year}
                data-reveal
                data-reveal-delay={i * 80}
                className="relative flex-shrink-0 w-72 md:w-auto border-t-2 border-paper/20 pt-8 pr-8 md:pr-6 lg:pr-8"
              >
                <span className="absolute -top-[5px] left-0 h-2 w-2 bg-gold" aria-hidden="true" />
                <p className="font-display text-lg font-bold text-gold leading-none">{phase.year}</p>
                <p className="fc3-label mt-2 text-paper/50">{phase.title}</p>
                <ul className="mt-5 space-y-2">
                  {phase.events.map((ev) => (
                    <li key={ev} className="flex items-start gap-2 text-xs leading-relaxed text-paper/60">
                      <span className="h-1 w-1 shrink-0 mt-1.5 bg-gold/60" aria-hidden="true" />
                      {ev}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Branch visual + CTA */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div data-reveal className="relative aspect-[4/3] overflow-hidden">
            <img
              src={locObour}
              alt="C3 El Obour"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>

          <div data-reveal data-reveal-delay={100}>
            <SectionLabel>Network</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              8 locations,<br />one standard<span className="text-gold-deep">.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/65 max-w-lg">
              Our eight active branches span Cairo, Giza, Qalyubia and Sharkia governorates — covering Egypt's most underserved community retail markets with a single, unified brand.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/branches"
                className="inline-flex items-center gap-4 bg-ink px-8 py-4 fc3-label text-paper hover:bg-gold hover:text-ink transition-colors"
              >
                <span className="h-2 w-2 bg-paper group-hover:bg-ink" aria-hidden="true" />
                View all branches
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 border border-ink/20 px-8 py-4 fc3-label text-ink hover:border-ink transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
