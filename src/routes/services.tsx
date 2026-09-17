import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { SectionLabel } from "@/components/fc3/primitives";
import svcRetail from "@/assets/panel-shop.jpg";
import svcMarketing from "@/assets/event-2.jpg";
import svcSecurity from "@/assets/intro-architecture.jpg";
import svcEntertainment from "@/assets/ent-cinema.jpg";
import svcParking from "@/assets/visit-aerial.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — C3 Retail Network" },
      { name: "description", content: "Retail leasing, marketing support, security, entertainment zones and parking across 8 C3 Mall locations in Egypt." },
    ],
  }),
  component: Services,
});

const services = [
  {
    index: "01",
    label: "Retail & F&B Leasing",
    img: svcRetail,
    desc: "Flexible retail and food & beverage leasing across 8 active C3 branches — fixed rent and revenue-share structures designed for brands of every scale.",
    features: ["Fixed rent & revenue-share options", "Multi-location entry in one deal", "Anchor hypermarket co-location", "Flexible fit-out periods"],
  },
  {
    index: "02",
    label: "Brand & Marketing Support",
    img: svcMarketing,
    desc: "360° marketing across digital channels, in-mall activations, and network-wide campaigns — our team drives footfall to every brand in the ecosystem.",
    features: ["Social media & digital campaigns", "In-mall event activation", "Network-wide brand exposure", "Seasonal campaign integration"],
  },
  {
    index: "03",
    label: "Security & Facility Management",
    img: svcSecurity,
    desc: "24/7 security and professional facility management at every C3 location — so tenants can focus on business, not operations.",
    features: ["24/7 on-site security teams", "CCTV and access control", "Cleaning & maintenance crews", "Emergency response protocols"],
  },
  {
    index: "04",
    label: "Entertainment Zones",
    img: svcEntertainment,
    desc: "Family entertainment and experience zones that drive dwell time and repeat visits — keeping customers on site longer and increasing spend for every brand.",
    features: ["Kids entertainment & play areas", "Family experience concepts", "Events and seasonal activations", "Community gathering spaces"],
  },
  {
    index: "05",
    label: "Parking Areas",
    img: svcParking,
    desc: "Covered parking at every C3 branch — free for the first three hours, with 24/7 security and dedicated accessible bays.",
    features: ["Free for first 3 hours", "Covered & secure", "Accessibility bays at all branches", "24/7 parking management"],
  },
];

function Services() {
  return (
    <>
      <PageHero
        index="02 — Services"
        title="Services"
        lines={["Everything your", "brand needs."]}
        intro="C3 is not just a landlord. Every tenant gets the full support of our operational, marketing and facilities teams from day one."
        breadcrumb={[{ label: "Services", to: "/services" }]}
      />

      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            Full support,<br />from day one<span className="text-gold-deep">.</span>
          </h2>

          <ul className="mt-20 space-y-24">
            {services.map((s, i) => (
              <li
                key={s.index}
                data-reveal
                data-reveal-delay={0}
                className={`grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.label}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute right-5 top-5 h-6 w-6 bg-gold" aria-hidden="true" />
                  <span className="absolute left-5 bottom-5 fc3-label text-paper/70 text-[0.5625rem]">{s.index} / {String(services.length).padStart(2, "0")}</span>
                </div>

                {/* Content */}
                <div>
                  <p className="fc3-label flex items-center gap-3 text-gold-deep">
                    <span className="h-2 w-2 bg-gold" aria-hidden="true" />
                    {s.index}
                  </p>
                  <h3 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold uppercase leading-none tracking-[-0.03em]">
                    {s.label}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-ink/65">{s.desc}</p>
                  <ul className="mt-8 space-y-3 border-t border-ink/10 pt-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-4 text-sm text-ink/70">
                        <span className="h-1.5 w-1.5 shrink-0 mt-1.5 bg-gold" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-paper">
        <div className="fc3-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Ready to lease<span className="text-gold">?</span>
            </h2>
            <p className="mt-5 max-w-md text-base text-paper/65 leading-relaxed">
              Our leasing team covers all 8 active branches. Get in touch for availability, pricing and tour bookings.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link to="/contact" className="inline-flex items-center gap-4 bg-paper px-8 py-4 fc3-label text-ink hover:bg-gold transition-colors">
              <span className="h-2 w-2 bg-ink" aria-hidden="true" />
              Start a conversation
            </Link>
            <Link to="/branches" className="inline-flex items-center gap-4 border border-paper/30 px-8 py-4 fc3-label hover:border-paper transition-colors">
              View all branches
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
