import { Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/fc3/primitives";
import imgBrands from "@/assets/panel-shop.jpg";
import imgInvestors from "@/assets/visit-aerial.jpg";
import imgCommunity from "@/assets/ent-kids.jpg";

const propositions = [
  {
    kicker: "For Brands",
    title: "Prime retail\nreal estate.",
    copy: "C3 locations sit at the heart of Egypt's fastest-growing communities. High footfall, modern anchor tenants, and a network effect that drives discovery across every location.",
    detail: "60+ brands already in the network",
    to: "/brands",
    cta: "Explore brand opportunities",
    image: imgBrands,
  },
  {
    kicker: "For Investors",
    title: "Scalable retail\ninfrastructure.",
    copy: "A proven portfolio across 5 Egyptian cities with expanding pipeline. Transparent operations, stable anchor tenancies, and institutional-grade asset management.",
    detail: "200K+ SQM GLA under management",
    to: "/investors",
    cta: "Investor relations",
    image: imgInvestors,
  },
  {
    kicker: "For Communities",
    title: "Where Egypt\ngathers.",
    copy: "Every C3 location is designed as a community destination — family-friendly environments, local events, and the brands Egyptians trust, all within reach.",
    detail: "5,000+ daily visitors network-wide",
    to: "/about",
    cta: "Our community story",
    image: imgCommunity,
  },
];

export function EntertainmentSection() {
  return (
    <section className="bg-ink py-24 text-paper md:py-32">
      <div className="fc3-shell">
        <SectionLabel index="04">Why C3</SectionLabel>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
          Built for brands,
          <br />
          investors, communities<span className="text-gold">.</span>
        </h2>

        <ul className="mt-16 space-y-16 md:mt-24 md:space-y-28">
          {propositions.map((item, i) => (
            <li
              key={item.kicker}
              className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Visual block */}
              <div data-reveal-mask className="group relative aspect-[4/3] overflow-hidden bg-ink">
                <img
                  src={item.image}
                  alt={item.kicker}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink/40" />
                <div className="absolute right-6 top-6 h-5 w-5 bg-gold" aria-hidden="true" />
              </div>

              {/* Text block */}
              <div data-reveal data-reveal-delay="120">
                <p className="fc3-label text-gold">{item.kicker}</p>
                <h3 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/65">{item.copy}</p>
                <p className="fc3-label mt-6 text-paper/40">{item.detail}</p>
                <Link
                  to={item.to}
                  className="fc3-underline fc3-label mt-6 inline-flex items-center gap-3"
                >
                  <span className="h-2 w-2 bg-gold" aria-hidden="true" />
                  {item.cta}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
