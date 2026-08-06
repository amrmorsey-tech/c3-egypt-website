import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/fc3/PageHero";
import { Marquee } from "@/components/fc3/Marquee";
import { SectionLabel } from "@/components/fc3/primitives";
import { site, locations } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — C3 Retail Network" },
      { name: "description", content: "Partner with C3 Retail Network — leasing, investor relations and general enquiries. 8 locations across Egypt." },
    ],
  }),
  component: Contact,
});

const enquiryTypes = [
  "Leasing — retail space",
  "Leasing — F&B space",
  "Investment enquiry",
  "Brand partnership",
  "Media & press",
  "General enquiry",
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", location: "", type: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        index="06 — Contact"
        title="Contact"
        lines={["Be a partner", "with us."]}
        intro="Leasing, investment relations, brand partnerships and general enquiries — our team covers all 8 locations across Egypt."
        breadcrumb={[{ label: "Contact", to: "/contact" }]}
      />

      {/* Contact info blocks */}
      <section className="bg-paper py-16 text-ink md:py-24">
        <div className="fc3-shell grid gap-8 md:grid-cols-3 md:gap-12">
          {[
            {
              label: "Call us",
              lines: [site.phone, "Sun — Thu: 9:00 — 17:00"],
              href: `tel:${site.phone.replace(/\s/g, "")}`,
              cta: "Call now",
            },
            {
              label: "Email us",
              lines: [site.email, "leasing@c3-egypt.com"],
              href: `mailto:${site.email}`,
              cta: "Send email",
            },
            {
              label: "Head office",
              lines: [site.address.street, `${site.address.district}`, site.address.city],
              href: site.mapsUrl,
              cta: "Open in maps",
            },
          ].map((block) => (
            <div key={block.label} className="border-t-2 border-gold pt-8">
              <p className="fc3-label text-gold-deep">{block.label}</p>
              <ul className="mt-4 space-y-1">
                {block.lines.map((line) => (
                  <li key={line} className="text-sm text-ink/70">{line}</li>
                ))}
              </ul>
              <a
                href={block.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 fc3-label text-ink hover:text-gold transition-colors"
              >
                <span className="h-1.5 w-1.5 bg-gold" aria-hidden="true" />
                {block.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <Marquee className="bg-ink text-paper" items={["Be a partner with us", "Leasing", "Investment", "Brand partnerships", "8 locations across Egypt"]} />

      {/* Contact form */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-24">
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Start the conversation<span className="text-gold-deep">.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65">
              Fill in the form and our team will get back to you within one business day. All enquiry types welcome — leasing, investment, brand partnerships and press.
            </p>

            <div className="mt-12 space-y-3">
              <p className="fc3-label text-gold-deep">Follow us</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {site.social.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" className="fc3-label text-ink/70 hover:text-gold-deep transition-colors uppercase tracking-[0.08em]">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {submitted ? (
            <div className="flex flex-col items-start justify-center gap-6 border-t border-ink/12 pt-12 min-h-[400px]">
              <span className="h-4 w-4 bg-gold" aria-hidden="true" />
              <h3 className="font-display text-3xl font-bold uppercase tracking-[-0.03em]">Message sent.</h3>
              <p className="text-sm leading-relaxed text-ink/65 max-w-sm">
                Thank you — we'll be in touch within one business day. Our leasing and partnership team covers all 8 locations.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 border-t border-ink/12 pt-12">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="fc3-label text-ink/70">Full name *</span>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="border-b border-ink/20 bg-transparent py-3 text-sm focus:border-ink focus:outline-none placeholder:text-ink/30"
                    placeholder="Your full name"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="fc3-label text-ink/70">Email address *</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="border-b border-ink/20 bg-transparent py-3 text-sm focus:border-ink focus:outline-none placeholder:text-ink/30"
                    placeholder="your@email.com"
                  />
                </label>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="fc3-label text-ink/70">Phone number</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="border-b border-ink/20 bg-transparent py-3 text-sm focus:border-ink focus:outline-none placeholder:text-ink/30"
                    placeholder="+20 1xx xxx xxxx"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="fc3-label text-ink/70">Enquiry type</span>
                  <select
                    value={form.type}
                    onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
                    className="border-b border-ink/20 bg-transparent py-3 text-sm focus:border-ink focus:outline-none text-ink/70"
                  >
                    <option value="">Select type</option>
                    {enquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="fc3-label text-ink/50">Preferred location</span>
                <select
                  value={form.location}
                  onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                  className="border-b border-ink/20 bg-transparent py-3 text-sm focus:border-ink focus:outline-none text-ink/70"
                >
                  <option value="">Any / multiple locations</option>
                  {locations.map((l) => <option key={l.id} value={l.shortName}>{l.name}</option>)}
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="fc3-label text-ink/50">Message *</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="border-b border-ink/20 bg-transparent py-3 text-sm focus:border-ink focus:outline-none resize-none placeholder:text-ink/30"
                  placeholder="Tell us about your brand, investment interest or enquiry…"
                />
              </label>
              <button
                type="submit"
                className="group inline-flex items-center gap-4 bg-ink px-8 py-4 fc3-label text-paper hover:bg-gold hover:text-ink transition-colors"
              >
                <span className="h-2 w-2 bg-paper transition-colors group-hover:bg-ink" aria-hidden="true" />
                Send enquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Locations map pins */}
      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="fc3-shell">
          <SectionLabel tone="ink">All Locations</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            Find us<span className="text-gold">.</span>
          </h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc, i) => (
              <li key={loc.id} data-reveal data-reveal-delay={i * 50}>
                <a href={loc.mapUrl} target="_blank" rel="noreferrer" className="group block border-t border-paper/15 pt-5">
                  <span className={`inline-block px-2 py-1 fc3-label text-[0.5625rem] ${loc.tag === "Coming Soon" ? "bg-paper/10 text-paper/50" : "bg-gold text-ink"}`}>
                    {loc.tag}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1">
                    {loc.shortName}
                  </h3>
                  <p className="mt-1 fc3-label text-paper/55">{loc.city}</p>
                  <p className="mt-3 fc3-label text-paper/50 flex items-center gap-1.5">
                    Open in maps <span aria-hidden="true">↗</span>
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
