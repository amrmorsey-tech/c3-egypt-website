import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/fc3/Marquee";
import { SectionLabel } from "@/components/fc3/primitives";
import { site, timeline, locations } from "@/content/site";
import { newsItems } from "@/content/news";
import locObour from "@/assets/loc-obour.jpg";
import locOctober from "@/assets/loc-october.jpg";
import locNasrCity from "@/assets/loc-nasr-city.jpg";
import locNewCapital from "@/assets/loc-new-capital.jpg";
import svcRetail from "@/assets/panel-shop.jpg";
import svcMarketing from "@/assets/event-2.jpg";
import svcSecurity from "@/assets/intro-architecture.jpg";
import svcEntertainment from "@/assets/ent-cinema.jpg";
import svcParking from "@/assets/visit-aerial.jpg";

const title = "C3 Retail Network | Egypt's Growing Retail Network";
const description =
  "C3 Retail Network operates 8+ community retail destinations across Egypt — connecting brands, investors, and communities.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

const featuredBranches = [
  { id: "new-capital", img: locNewCapital, shortName: "New Capital", tag: "Flagship", gla: "28,000 m²", brands: "40+", city: "New Administrative Capital" },
  { id: "obour",       img: locObour,      shortName: "El Obour",    tag: "Established", gla: "22,000 m²", brands: "35+", city: "El Obour City" },
  { id: "october",     img: locOctober,    shortName: "6th of October", tag: "Growing", gla: "25,000 m²", brands: "38+", city: "6th of October City" },
  { id: "nasr-city",   img: locNasrCity,   shortName: "Nasr City",   tag: "Community", gla: "18,000 m²", brands: "30+", city: "Nasr City, Cairo" },
];

const homeServices = [
  { label: "Retail & F&B Leasing", img: svcRetail },
  { label: "Brand & Marketing Support", img: svcMarketing },
  { label: "Security & Facility Management", img: svcSecurity },
  { label: "Entertainment Zones", img: svcEntertainment },
  { label: "Parking Areas", img: svcParking },
];


const partnerNames = ["Majid Al Futtaim", "Carrefour", "LC Waikiki", "Supeco", "Elena", "Grand Market", "Not!", "PastaCup"];

function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* 1 — Video hero */}
      <Hero />

      {/* 3 — Timeline */}
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

      {/* 4 — Services */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell">
          <SectionLabel>What We Offer</SectionLabel>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Full support<span className="text-gold-deep">.</span>
            </h2>
            <Link
              to="/services"
              className="fc3-label flex items-center gap-2 text-ink/50 hover:text-ink transition-colors"
            >
              All services <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {homeServices.map((s, i) => (
              <li key={s.label} data-reveal data-reveal-delay={i * 70}>
                <Link to="/services" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.label}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <p className="font-display text-sm font-bold text-paper uppercase tracking-[-0.01em] leading-tight">
                        {s.label}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 — Selected branches */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="fc3-shell">
          <SectionLabel tone="ink">Our Branches</SectionLabel>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              8 locations,<br />one network<span className="text-gold">.</span>
            </h2>
            <Link
              to="/branches"
              className="fc3-label flex items-center gap-2 text-paper/50 hover:text-paper transition-colors"
            >
              All branches <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredBranches.map((loc, i) => (
              <li key={loc.id} data-reveal data-reveal-delay={i * 80}>
                <Link to="/branches" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={loc.img}
                      alt={loc.shortName}
                      className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                    <span className="absolute left-4 top-4 bg-gold px-3 py-1.5 fc3-label text-[0.5625rem] text-ink">{loc.tag}</span>
                    <div className="absolute bottom-0 inset-x-0 p-5">
                      <p className="fc3-label text-paper/60 text-[0.5625rem]">{loc.city}</p>
                      <h3 className="mt-1 font-display text-xl font-bold uppercase tracking-[-0.02em] leading-tight transition-transform duration-500 group-hover:translate-x-1">
                        {loc.shortName}
                      </h3>
                      <div className="mt-3 flex items-center gap-4 fc3-label text-[0.5625rem] text-paper/60">
                        <span>GLA {loc.gla}</span>
                        <span>{loc.brands} brands</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 — Partners bar */}
      <div className="bg-paper border-y border-ink/8">
        <div className="fc3-shell py-6">
          <p className="fc3-label text-ink/40 text-center mb-4">Strategic partners</p>
        </div>
        <Marquee
          className="bg-paper text-ink border-t border-ink/8"
          items={partnerNames}
        />
      </div>

      {/* 7 — News */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell">
          <SectionLabel>Newsroom</SectionLabel>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Latest news<span className="text-gold-deep">.</span>
            </h2>
            <Link
              to="/news"
              className="fc3-label flex items-center gap-2 text-ink/50 hover:text-ink transition-colors"
            >
              All news <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {newsItems.filter((n) => n.featured).slice(0, 3).map((item, i) => (
              <li key={item.id} data-reveal data-reveal-delay={i * 70}>
                <Link
                  to="/news"
                  className="group flex flex-col h-full"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-ink">
                    <img
                      src={item.image}
                      alt={item.headlineEn}
                      className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-ink/20" />
                    <span className="absolute left-4 top-4 bg-gold px-3 py-1.5 fc3-label text-[0.5625rem] text-ink">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 border border-t-0 border-ink/10 p-5">
                    <p className="fc3-label text-ink/40 text-[0.5625rem] mb-3">{item.source}</p>
                    <h3 className="font-display text-lg font-bold uppercase tracking-[-0.02em] leading-tight transition-transform duration-500 group-hover:translate-x-0.5 flex-1">
                      {item.headlineEn}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/60 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4">
                      <span className="fc3-label text-ink/35 text-[0.5625rem]">
                        {new Date(item.date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                      </span>
                      <span className="fc3-label text-gold-deep flex items-center gap-1 text-[0.5625rem] opacity-0 group-hover:opacity-100 transition-opacity">
                        Read <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8 — Get in touch form */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="fc3-shell grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-24">
          <div>
            <SectionLabel tone="ink">Get in Touch</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Let's start the conversation<span className="text-gold">.</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-paper/65">
              Leasing, investment relations, brand partnerships and general enquiries — our team covers all 8 branches across Egypt.
            </p>
            <dl className="mt-10 space-y-4 border-t border-paper/10 pt-8">
              <div>
                <dt className="fc3-label text-paper/50">Phone</dt>
                <dd className="mt-1 text-sm"><a href={`tel:${site.phone.replace(/\s/g,"")}`} className="fc3-underline">{site.phone}</a></dd>
              </div>
              <div>
                <dt className="fc3-label text-paper/50">Email</dt>
                <dd className="mt-1 text-sm"><a href={`mailto:${site.email}`} className="fc3-underline">{site.email}</a></dd>
              </div>
            </dl>
          </div>

          {submitted ? (
            <div className="flex flex-col items-start justify-center gap-6 border-t border-paper/10 pt-12 min-h-[320px]">
              <span className="h-4 w-4 bg-gold" aria-hidden="true" />
              <h3 className="font-display text-3xl font-bold uppercase tracking-[-0.03em]">Message sent.</h3>
              <p className="text-sm leading-relaxed text-paper/65 max-w-sm">
                Thank you — we'll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 border-t border-paper/10 pt-12">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="fc3-label text-paper/60">Full name *</span>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="border-b border-paper/20 bg-transparent py-3 text-sm focus:border-paper focus:outline-none placeholder:text-paper/30"
                    placeholder="Your full name"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="fc3-label text-paper/60">Email address *</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="border-b border-paper/20 bg-transparent py-3 text-sm focus:border-paper focus:outline-none placeholder:text-paper/30"
                    placeholder="your@email.com"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="fc3-label text-paper/60">Phone number</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="border-b border-paper/20 bg-transparent py-3 text-sm focus:border-paper focus:outline-none placeholder:text-paper/30"
                  placeholder="+20 1xx xxx xxxx"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="fc3-label text-paper/60">Message *</span>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="border-b border-paper/20 bg-transparent py-3 text-sm focus:border-paper focus:outline-none resize-none placeholder:text-paper/30"
                  placeholder="Tell us about your enquiry…"
                />
              </label>
              <button
                type="submit"
                className="group inline-flex items-center gap-4 bg-paper px-8 py-4 fc3-label text-ink hover:bg-gold transition-colors"
              >
                <span className="h-2 w-2 bg-ink transition-colors group-hover:bg-ink" aria-hidden="true" />
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
