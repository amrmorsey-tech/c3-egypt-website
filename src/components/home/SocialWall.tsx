import { socialWall } from "@/content/experience";
import { SectionLabel, AnimatedButton } from "@/components/fc3/primitives";
import { site } from "@/content/site";

export function SocialWall() {
  return (
    <section className="bg-ink py-24 text-paper md:py-32">
      <div className="fc3-shell">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel tone="ink">Community</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              #C3Egypt
            </h2>
          </div>
          <AnimatedButton href={site.social[0]?.href ?? "https://instagram.com"} tone="paper">
            Follow along
          </AnimatedButton>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {socialWall.map((item, i) => (
            <li
              key={item.handle}
              data-reveal
              data-reveal-delay={i * 90}
              className={`group relative overflow-hidden ${i % 2 === 1 ? "md:translate-y-8" : ""}`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
              <span className="absolute bottom-3 left-3 flex items-center justify-center rounded-sm bg-ink/50 p-1.5 backdrop-blur-sm" aria-label={item.handle}>
                {/* Instagram icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-paper" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
                </svg>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
