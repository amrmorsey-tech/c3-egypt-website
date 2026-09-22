import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { SectionLabel } from "@/components/fc3/primitives";
import { site, timeline, locations } from "@/content/site";
import { newsItems } from "@/content/news";
import locObour from "@/assets/loc-obour.jpg";
import locOctober from "@/assets/loc-october.jpg";
import locNasrCity from "@/assets/loc-nasr-city.jpg";
import locNewCapital from "@/assets/loc-new-capital.jpg";
import locMay from "@/assets/loc-15-may.jpg";
import locBadr from "@/assets/loc-badr.jpg";
import locShorouk from "@/assets/loc-shorouk.jpg";
import locRamadan from "@/assets/loc-10-ramadan.jpg";
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

const allBranches = [
  { id: "new-capital",  img: locNewCapital, shortName: "New Capital",     tag: "Flagship",   gla: "12,853 m²", brands: "40+", city: "New Administrative Capital" },
  { id: "obour",        img: locObour,      shortName: "El Obour",        tag: "Established",gla: "11,566 m²", brands: "35+", city: "El Obour City" },
  { id: "october",      img: locOctober,    shortName: "6th of October",  tag: "Growing",    gla: "10,982 m²", brands: "38+", city: "6th of October City" },
  { id: "nasr-city",    img: locNasrCity,   shortName: "Nasr City",       tag: "Community",  gla: "13,841 m²", brands: "30+", city: "Nasr City, Cairo" },
  { id: "15-may",       img: locMay,        shortName: "15th of May",     tag: "Community",  gla: "10,098 m²", brands: "28+", city: "15th of May City" },
  { id: "badr",         img: locBadr,       shortName: "Badr City",       tag: "Expanding",  gla: "10,055 m²", brands: "32+", city: "Badr City" },
  { id: "shorouk",      img: locShorouk,    shortName: "El Shorouk",      tag: "Active",     gla: "11,519 m²", brands: "30+", city: "El Shorouk City" },
  { id: "10-ramadan",   img: locRamadan,    shortName: "10th of Ramadan", tag: "Active",     gla: "11,800 m²", brands: "32+", city: "10th of Ramadan City" },
];

const homeServices = [
  { label: "Retail & F&B Leasing", img: svcRetail },
  { label: "Brand & Marketing Support", img: svcMarketing },
  { label: "Security & Facility Management", img: svcSecurity },
  { label: "Entertainment Zones", img: svcEntertainment },
  { label: "Parking Areas", img: svcParking },
];


// Main anchors shown larger at top of brands section
const anchorBrands = [
  { src: "/brands/majid.png",       alt: "Majid Al Futtaim" },
  { src: "/brands/lc-waikiki.png",  alt: "LC Waikiki" },
  { src: "/brands/supeco.png",      alt: "Supeco" },
  { src: "/brands/carrefour.png",   alt: "Carrefour" },
  { src: "/brands/grand-market.png",alt: "Grand Market" },
];

const tenantBrands = [
  { src: "/brands/elena.png",       alt: "Elena Cakes & Sweets" },
  { src: "/brands/koya.png",        alt: "Koya" },
  { src: "/brands/athena.png",      alt: "Athena" },
  { src: "/brands/nfrt.png",        alt: "NFRT" },
  { src: "/brands/on-off.png",      alt: "On Off" },
  { src: "/brands/rockets.png",     alt: "Rockets" },
  { src: "/brands/coffee-maker.png",alt: "Coffee Maker" },
  { src: "/brands/kasa-burger.png", alt: "Kasa Burger" },
  { src: "/brands/drpt.png",        alt: "DRPT." },
  { src: "/brands/full-cup.png",    alt: "Full Cup" },
  { src: "/brands/gosips.png",      alt: "Go & Sips" },
  { src: "/brands/ai-cha.png",      alt: "Ai-Cha" },
  { src: "/brands/npd.png",         alt: "New Pizza Dept" },
  { src: "/brands/amr-effendi.png", alt: "Amr Effendi" },
  { src: "/brands/daj.png",         alt: "DAJ" },
  { src: "/brands/360-cafe.png",    alt: "360 Café" },
];

function BrandsSection() {
  return (
    <section className="bg-paper py-20 text-ink md:py-28">
      <div className="fc3-shell">

        {/* Strategic partners — dark pill cards so white logos stay visible */}
        <div className="border-b border-ink/10 pb-16">
          <p data-reveal className="fc3-label text-center text-ink/40 mb-12">Strategic partners</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
            {anchorBrands.map((b) => (
              <div
                key={b.alt}
                className="flex h-20 items-center justify-center rounded bg-ink px-5 py-4 opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={b.src}
                  alt={b.alt}
                  className="h-full w-full object-contain"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tenant brands — light bg, mix-blend-mode removes white halos */}
        <div className="pt-16">
          <p data-reveal className="fc3-label text-center text-ink/40 mb-12">Our brands</p>
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {tenantBrands.map((b, i) => (
              <div
                key={b.alt}
                data-reveal
                data-reveal-delay={i * 40}
                className="flex h-24 items-center justify-center rounded border border-ink/8 bg-ink/[0.03] p-4 opacity-75 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={b.src}
                  alt={b.alt}
                  className="h-full w-full object-contain"
                  style={{ mixBlendMode: "multiply" }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function BranchesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const cardW = useCallback(() => {
    const el = trackRef.current?.children[0] as HTMLElement | undefined;
    return el ? el.offsetWidth + 24 : 320; // card width + gap
  }, []);

  const scrollTo = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(idx, allBranches.length - 1));
    setActive(clamped);
    trackRef.current?.scrollTo({ left: clamped * cardW(), behavior: "smooth" });
  }, [cardW]);

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = startX.current - e.clientX;
    if (trackRef.current) trackRef.current.scrollLeft = scrollStart.current + dx;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const dx = startX.current - e.clientX;
    if (Math.abs(dx) > 40) {
      scrollTo(active + (dx > 0 ? 1 : -1));
    } else {
      scrollTo(active);
    }
  };

  const onScroll = () => {
    if (isDragging.current) return;
    const sl = trackRef.current?.scrollLeft ?? 0;
    setActive(Math.round(sl / cardW()));
  };

  return (
    <section className="bg-ink py-24 text-paper md:py-32">
      <div className="fc3-shell">
        <SectionLabel tone="ink">Our Branches</SectionLabel>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
          <h2 data-reveal className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            8 locations,<br />one network<span className="text-gold">.</span>
          </h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollTo(active - 1)}
                disabled={active === 0}
                aria-label="Previous"
                className="flex h-10 w-10 items-center justify-center border border-paper/20 text-paper/60 hover:border-paper hover:text-paper transition-colors disabled:opacity-25"
              >
                ←
              </button>
              <button
                onClick={() => scrollTo(active + 1)}
                disabled={active === allBranches.length - 1}
                aria-label="Next"
                className="flex h-10 w-10 items-center justify-center border border-paper/20 text-paper/60 hover:border-paper hover:text-paper transition-colors disabled:opacity-25"
              >
                →
              </button>
            </div>
            <Link
              to="/branches"
              className="fc3-label flex items-center gap-2 text-paper/50 hover:text-paper transition-colors"
            >
              All branches <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Track — full bleed, scrolls outside shell */}
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onScroll={onScroll}
        className="mt-10 flex gap-6 overflow-x-auto scroll-smooth scrollbar-none cursor-grab active:cursor-grabbing select-none pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] pr-8"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {allBranches.map((loc, i) => (
          <Link
            key={loc.id}
            to="/branches"
            draggable={false}
            className="group flex-shrink-0 w-[clamp(260px,38vw,360px)]"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={loc.img}
                alt={loc.shortName}
                className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                loading={i < 3 ? "eager" : "lazy"}
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <span className="absolute left-4 top-4 bg-gold px-3 py-1.5 fc3-label text-[0.5625rem] text-ink">
                {loc.tag}
              </span>
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
        ))}
        {/* right padding spacer */}
        <div className="flex-shrink-0 w-8" aria-hidden="true" />
      </div>

      {/* Dot indicators */}
      <div className="fc3-shell mt-8 flex items-center gap-2">
        {allBranches.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to ${allBranches[i].shortName}`}
            className={`h-1.5 transition-all duration-300 ${i === active ? "w-6 bg-gold" : "w-1.5 bg-paper/25 hover:bg-paper/50"}`}
          />
        ))}
        <span className="ml-auto fc3-label text-paper/40 text-[0.5625rem]">
          {active + 1} / {allBranches.length}
        </span>
      </div>
    </section>
  );
}

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

      {/* 5 — All 8 branches carousel */}
      <BranchesCarousel />

      {/* 6 — Brands & Partners */}
      <BrandsSection />

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
