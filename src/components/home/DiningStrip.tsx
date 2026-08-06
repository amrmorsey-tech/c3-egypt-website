import { Link } from "@tanstack/react-router";
import { locations } from "@/content/site";
import { SectionLabel, AnimatedButton } from "@/components/fc3/primitives";
import dining1 from "@/assets/dining-1.jpg";
import dining2 from "@/assets/dining-2.jpg";
import dining3 from "@/assets/dining-3.jpg";
import dining4 from "@/assets/dining-4.jpg";
import visitAerial from "@/assets/visit-aerial.jpg";
import storesHero from "@/assets/stores-hero.jpg";
import introArch from "@/assets/intro-architecture.jpg";
import panelShop from "@/assets/panel-shop.jpg";

const locationImages = [dining1, dining2, dining3, dining4, visitAerial, storesHero, introArch, panelShop];

export function DiningStrip() {
  return (
    <section className="bg-paper py-24 text-ink md:py-32">
      <div className="fc3-shell flex flex-wrap items-end justify-between gap-8">
        <div>
          <SectionLabel>Locations</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            Across Egypt<span className="text-gold-deep">.</span>
          </h2>
        </div>
        <AnimatedButton to="/locations">All locations</AnimatedButton>
      </div>

      <div className="mt-12 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex w-max gap-6 px-5 md:px-10 xl:px-16">
          {locations.map((loc, i) => (
            <li
              key={loc.id}
              data-reveal
              data-reveal-delay={i * 70}
              className="w-[76vw] shrink-0 sm:w-[42vw] lg:w-[27vw]"
            >
              <Link to="/locations" className="group block">
                {/* Visual card — real photo */}
                <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                  <img
                    src={locationImages[i % locationImages.length]}
                    alt={loc.shortName}
                    className="h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink/30" />
                  {/* Gold accent corner */}
                  <div className="absolute right-5 top-5 h-5 w-5 bg-gold transition-transform duration-500 group-hover:scale-110" />
                  {/* Tag badge */}
                  <span className="absolute left-4 top-4 bg-paper px-3 py-2 fc3-label text-[0.5625rem]">
                    {loc.tag}
                  </span>
                  {/* GLA bottom info */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/80 to-transparent p-5">
                    <p className="fc3-label text-paper/70 text-[0.5625rem]">GLA {loc.gla}</p>
                    <p className="font-display text-lg font-bold text-paper uppercase tracking-[-0.02em] leading-none mt-1">
                      {loc.brands} brands
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-ink/15 pt-4">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1">
                    {loc.name.split("—")[1]?.trim() ?? loc.name}
                  </h3>
                  <span className="fc3-label shrink-0 text-ink/40">{loc.footfall}/day</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{loc.city}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
