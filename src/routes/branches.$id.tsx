import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { AnimatedButton, SectionLabel } from "@/components/fc3/primitives";
import { locations } from "@/content/site";

import locNewCapital from "@/assets/loc-new-capital.jpg";
import locObour from "@/assets/loc-obour.jpg";
import locOctober from "@/assets/loc-october.jpg";
import locNasrCity from "@/assets/loc-nasr-city.jpg";
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

function getLocation(id: string) {
  return locations.find((l) => l.id === id);
}

export const Route = createFileRoute("/branches/$id")({
  loader: ({ params }) => {
    const loc = getLocation(params.id);
    if (!loc) throw notFound();
    return { loc };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Branch not found — C3 Mall" }] };
    const { loc } = loaderData;
    return {
      meta: [
        { title: `C3 Mall ${loc.shortName} — Branch Details` },
        { name: "description", content: loc.description },
      ],
    };
  },
  component: BranchPage,
});

function BranchPage() {
  const { loc } = Route.useLoaderData();
  const img = locImages[loc.id] ?? locNewCapital;

  // get prev/next for navigation
  const idx = locations.findIndex((l) => l.id === loc.id);
  const prev = idx > 0 ? locations[idx - 1] : null;
  const next = idx < locations.length - 1 ? locations[idx + 1] : null;

  type LocWithExtras = typeof loc & {
    totalArea?: string;
    retail?: string;
    fnb?: string;
    fnbUnits?: number;
    hypermarket?: string;
    parking?: string;
    address?: string;
    landmarks?: readonly string[];
  };
  const l = loc as LocWithExtras;

  const stats = [
    { label: "Total Area", value: l.totalArea ?? l.gla },
    { label: "Retail", value: l.retail ?? "—" },
    { label: "Food & Beverage", value: l.fnb ?? "—" },
    { label: "F&B Units", value: l.fnbUnits ? `${l.fnbUnits} units` : "—" },
    { label: "Hypermarket", value: l.hypermarket ?? "—" },
    { label: "Parking", value: l.parking ?? "—" },
  ];

  return (
    <>
      {/* Hero — full-bleed location photo */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden bg-ink">
        <img
          src={img}
          alt={loc.shortName}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute left-0 right-0 top-0 fc3-shell pt-8">
          <nav className="fc3-label flex items-center gap-2 text-paper/60 text-[0.5625rem]">
            <Link to="/" className="hover:text-paper transition-colors">Home</Link>
            <span>/</span>
            <Link to="/branches" className="hover:text-paper transition-colors">Branches</Link>
            <span>/</span>
            <span className="text-paper">{loc.shortName}</span>
          </nav>
        </div>

        {/* Title overlay */}
        <div className="absolute inset-x-0 bottom-0 fc3-shell pb-16 md:pb-20">
          <span className="fc3-label text-gold text-[0.5625rem]">{loc.tag}</span>
          <h1 className="mt-3 font-display text-[clamp(2.5rem,7vw,6rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-paper">
            C3 Mall<br />{loc.shortName}<span className="text-gold">.</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-paper/70 leading-relaxed">{loc.city}, {loc.governorate}</p>
        </div>
      </section>

      {/* Stats grid — key numbers from PDF */}
      <div className="bg-gold">
        <div className="fc3-shell grid grid-cols-2 gap-px md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-gold px-5 py-6">
              <div className="font-display text-[1.25rem] font-bold text-ink leading-tight">{s.value}</div>
              <div className="fc3-label mt-1 text-ink/70 text-[0.5rem] uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <section className="bg-paper py-20 text-ink md:py-28">
        <div className="fc3-shell grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left — description + address */}
          <div data-reveal>
            <SectionLabel>About this branch</SectionLabel>
            <p className="mt-6 text-lg leading-relaxed text-ink/80">{loc.description}</p>

            {l.address && (
              <div className="mt-10">
                <h3 className="fc3-label text-ink/50 text-[0.5625rem] uppercase tracking-widest">Address</h3>
                <p className="mt-2 font-display text-base font-semibold">{l.address}</p>
              </div>
            )}

            {l.landmarks && l.landmarks.length > 0 && (
              <div className="mt-8">
                <h3 className="fc3-label text-ink/50 text-[0.5625rem] uppercase tracking-widest mb-4">Nearby landmarks</h3>
                <ul className="space-y-2">
                  {l.landmarks.map((lm, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink/75">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden="true" />
                      {lm}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={loc.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-ink px-6 py-3 fc3-label text-paper hover:bg-gold hover:text-ink transition-colors"
              >
                <span className="h-1.5 w-1.5 bg-paper" aria-hidden="true" />
                Open in Google Maps ↗
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-ink/30 px-6 py-3 fc3-label hover:border-ink transition-colors"
              >
                Leasing enquiry
              </Link>
            </div>
          </div>

          {/* Right — detailed floor/area breakdown */}
          <div data-reveal data-reveal-delay="120">
            <SectionLabel>Space breakdown</SectionLabel>
            <dl className="mt-6 divide-y divide-ink/10 border-t border-ink/10">
              {stats.filter(s => s.value !== "—").map((s) => (
                <div key={s.label} className="flex items-baseline justify-between py-4">
                  <dt className="fc3-label text-ink/60 text-[0.5625rem] uppercase tracking-widest">{s.label}</dt>
                  <dd className="font-display text-base font-bold">{s.value}</dd>
                </div>
              ))}
            </dl>

            {/* Daily visits */}
            <div className="mt-10 bg-ink p-8 text-paper">
              <div className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none">{loc.footfall}</div>
              <div className="mt-2 fc3-label text-paper/60 text-[0.5625rem] uppercase tracking-widest">Daily visitors</div>
              <div className="mt-4 h-px w-full bg-paper/10" />
              <div className="mt-4 font-display text-2xl font-bold">{loc.brands}</div>
              <div className="mt-1 fc3-label text-paper/60 text-[0.5625rem] uppercase tracking-widest">Active brands</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery — location image wide */}
      <div className="relative h-[50vh] overflow-hidden bg-ink">
        <img
          src={img}
          alt={`${loc.shortName} exterior`}
          className="h-full w-full object-cover opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-x-0 bottom-8 fc3-shell">
          <span className="fc3-label text-paper/50 text-[0.5625rem]">{loc.shortName} — C3 Mall Network</span>
        </div>
      </div>

      {/* Prev / Next navigation */}
      <nav className="bg-paper border-t border-ink/10 text-ink" aria-label="Other branches">
        <div className="fc3-shell grid grid-cols-2">
          {prev ? (
            <Link to="/branches/$id" params={{ id: prev.id }} className="group flex flex-col gap-1 py-8 pr-8 border-r border-ink/10 hover:bg-ink/[0.02] transition-colors">
              <span className="fc3-label text-ink/40 text-[0.5rem] uppercase tracking-widest">← Previous</span>
              <span className="font-display text-lg font-bold uppercase tracking-[-0.02em] transition-transform group-hover:-translate-x-1">{prev.shortName}</span>
              <span className="fc3-label text-ink/50 text-[0.5rem]">{prev.city}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link to="/branches/$id" params={{ id: next.id }} className="group flex flex-col items-end gap-1 py-8 pl-8 hover:bg-ink/[0.02] transition-colors">
              <span className="fc3-label text-ink/40 text-[0.5rem] uppercase tracking-widest">Next →</span>
              <span className="font-display text-lg font-bold uppercase tracking-[-0.02em] transition-transform group-hover:translate-x-1">{next.shortName}</span>
              <span className="fc3-label text-ink/50 text-[0.5rem]">{next.city}</span>
            </Link>
          ) : <div />}
        </div>
      </nav>

      {/* CTA */}
      <section className="bg-ink py-16 text-paper">
        <div className="fc3-shell flex flex-wrap items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              See all 8 branches<span className="text-gold">.</span>
            </h2>
            <p className="mt-3 text-sm text-paper/60">Active C3 Mall destinations across Egypt.</p>
          </div>
          <AnimatedButton to="/branches" tone="paper">All branches</AnimatedButton>
        </div>
      </section>
    </>
  );
}
