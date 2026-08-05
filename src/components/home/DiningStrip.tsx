import { Link } from "@tanstack/react-router";
import { locations } from "@/content/site";
import { SectionLabel, AnimatedButton } from "@/components/fc3/primitives";

const locationAccents = [
  "from-[#2a1f08] to-[#1a1208]",
  "from-[#081a10] to-[#051208]",
  "from-[#0a0a1a] to-[#08081a]",
  "from-[#1a0808] to-[#120505]",
  "from-[#081218] to-[#050d12]",
];

export function DiningStrip() {
  return (
    <section className="bg-paper py-24 text-ink md:py-32">
      <div className="fc3-shell flex flex-wrap items-end justify-between gap-8">
        <div>
          <SectionLabel index="03">Locations</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            Across Egypt<span className="text-gold">.</span>
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
                {/* Visual card — gradient with grid overlay */}
                <div className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${locationAccents[i % locationAccents.length]}`}>
                  {/* Grid texture */}
                  <div className="absolute inset-0 grid grid-cols-5 grid-rows-7 gap-px opacity-15">
                    {Array.from({ length: 35 }).map((_, j) => (
                      <div key={j} className="bg-paper" />
                    ))}
                  </div>
                  {/* Gold accent corner */}
                  <div className="absolute right-5 top-5 h-5 w-5 bg-gold opacity-80 transition-transform duration-500 group-hover:scale-110" />
                  {/* Location initial */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-[5rem] font-bold text-paper/8 select-none uppercase">
                      {loc.name.split("—")[1]?.trim().charAt(0) ?? "C"}
                    </span>
                  </div>
                  {/* Tag badge */}
                  <span className="absolute left-4 top-4 bg-paper px-3 py-2 fc3-label text-[0.5625rem]">
                    {loc.tag}
                  </span>
                  {/* GLA bottom info */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/80 to-transparent p-5">
                    <p className="fc3-label text-paper/70 text-[0.5rem]">GLA {loc.gla}</p>
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
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{loc.city}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
