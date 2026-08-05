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

        {/* Visual block — gold grid motif replacing photography */}
        <div data-reveal-mask className="relative mt-16 aspect-[16/7] overflow-hidden md:mt-24 bg-ink">
          <div ref={parallax} className="absolute inset-0 h-[118%] w-full">
            {/* Architectural grid pattern */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 gap-px opacity-20">
              {Array.from({ length: 32 }).map((_, i) => (
                <div key={i} className="bg-paper/30" />
              ))}
            </div>
            {/* Gold accent squares */}
            <div className="absolute left-[12%] top-[20%] h-16 w-16 bg-gold opacity-80" />
            <div className="absolute left-[25%] top-[55%] h-8 w-8 bg-gold opacity-60" />
            <div className="absolute right-[18%] top-[30%] h-12 w-12 bg-gold opacity-70" />
            <div className="absolute right-[35%] bottom-[20%] h-6 w-6 bg-gold opacity-50" />
            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-display text-[clamp(3rem,8vw,7rem)] font-bold uppercase tracking-[-0.05em] text-paper/10 select-none">
                C3
              </p>
            </div>
          </div>
          <span className="absolute bottom-6 left-6 h-3.5 w-3.5 bg-gold" aria-hidden="true" />
          <div className="absolute bottom-8 right-8 text-right">
            <p className="fc3-label text-paper/50 text-[0.5rem]">8+ LOCATIONS</p>
            <p className="fc3-label text-paper/50 text-[0.5rem] mt-1">ACROSS EGYPT</p>
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
