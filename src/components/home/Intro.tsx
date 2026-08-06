import introArchitecture from "@/assets/intro-architecture.jpg";
import { site } from "@/content/site";
import { useParallax } from "@/lib/motion";
import { SectionLabel, AnimatedButton } from "@/components/fc3/primitives";

export function Intro() {
  const parallax = useParallax<HTMLDivElement>(0.1);

  return (
    <section className="relative bg-paper py-24 text-ink md:py-36">
      <div className="fc3-shell">
        <SectionLabel index="01">Our Network</SectionLabel>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <h2 className="font-display text-[clamp(2rem,4.6vw,4.25rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em]">
            <span className="block overflow-hidden">
              <span data-reveal className="block">
                Egypt's community
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-reveal data-reveal-delay="90" className="block">
                retail network<span className="text-gold">.</span>
              </span>
            </span>
          </h2>

          <div data-reveal data-reveal-delay="200" className="max-w-md">
            <p className="text-base leading-relaxed text-ink/70">
              C3 Retail Network builds and operates community retail destinations across Egypt's
              fastest growing cities — connecting leading brands, ambitious investors, and
              millions of daily visitors.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              From flagship malls in the New Administrative Capital to established centres in
              Cairo's key districts, every C3 location is designed around community.
            </p>
            <AnimatedButton to="/about" className="mt-8">
              Our story
            </AnimatedButton>
          </div>
        </div>

        {/* Visual block — architecture photo */}
        <div data-reveal-mask className="relative mt-16 aspect-[16/7] overflow-hidden md:mt-24">
          <div ref={parallax} className="absolute inset-0 h-[118%] w-full">
            <img
              src={introArchitecture}
              alt="C3 Retail Network architecture"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-ink/30" />
          </div>
          <span className="absolute bottom-6 left-6 h-3.5 w-3.5 bg-gold" aria-hidden="true" />
          <div className="absolute bottom-8 right-8 text-right">
            <p className="fc3-label text-paper/70 text-[0.5rem]">8+ LOCATIONS</p>
            <p className="fc3-label text-paper/70 text-[0.5rem] mt-1">ACROSS EGYPT</p>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-y-10 border-t border-ink/10 pt-12 md:grid-cols-4">
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
  );
}
