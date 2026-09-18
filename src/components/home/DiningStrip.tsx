import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { locations } from "@/content/site";
import { SectionLabel, AnimatedButton } from "@/components/fc3/primitives";

import locNewCapital from "@/assets/loc-new-capital.jpg";
import locObour from "@/assets/loc-obour.jpg";
import locOctober from "@/assets/loc-october.jpg";
import locNasrCity from "@/assets/loc-nasr-city.jpg";
import locMay from "@/assets/loc-15-may.jpg";
import locBadr from "@/assets/loc-badr.jpg";
import locShorouk from "@/assets/loc-shorouk.jpg";
import locRamadan from "@/assets/loc-10-ramadan.jpg";

const locationImages: Record<string, string> = {
  "new-capital": locNewCapital,
  "obour": locObour,
  "october": locOctober,
  "nasr-city": locNasrCity,
  "15-may": locMay,
  "badr": locBadr,
  "shorouk": locShorouk,
  "10-ramadan": locRamadan,
};

const SLIDE_INTERVAL = 3500;
const CARD_WIDTH_VW = 76; // mobile
const CARD_GAP = 24;

export function DiningStrip() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const count = locations.length;

  const goTo = useCallback((index: number) => {
    const next = (index + count) % count;
    setActive(next);
  }, [count]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => goTo(active + 1), SLIDE_INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, paused, goTo]);

  // Scroll the track to the active card
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[active] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
  }, [active]);

  return (
    <section className="bg-paper py-24 text-ink md:py-32">
      <div className="fc3-shell flex flex-wrap items-end justify-between gap-8">
        <div>
          <SectionLabel>Locations</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            Across Egypt<span className="text-gold-deep">.</span>
          </h2>
        </div>
        <div className="flex items-center gap-6">
          {/* Prev / Next */}
          <div className="flex gap-2">
            <button
              aria-label="Previous location"
              onClick={() => { goTo(active - 1); setPaused(true); }}
              className="flex h-10 w-10 items-center justify-center border border-ink/20 text-ink/60 transition hover:border-ink hover:text-ink"
            >
              ←
            </button>
            <button
              aria-label="Next location"
              onClick={() => { goTo(active + 1); setPaused(true); }}
              className="flex h-10 w-10 items-center justify-center border border-ink/20 text-ink/60 transition hover:border-ink hover:text-ink"
            >
              →
            </button>
          </div>
          <AnimatedButton to="/locations">All locations</AnimatedButton>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="fc3-shell mt-6 flex gap-2">
        {locations.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to location ${i + 1}`}
            onClick={() => { goTo(i); setPaused(true); }}
            className={`h-1 transition-all duration-300 ${
              i === active ? "w-8 bg-gold-deep" : "w-3 bg-ink/20 hover:bg-ink/40"
            }`}
          />
        ))}
      </div>

      {/* Cards track */}
      <div
        className="mt-8 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <ul
          ref={trackRef}
          className="flex gap-6 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth md:px-10 xl:px-16"
        >
          {locations.map((loc, i) => {
            const img = locationImages[loc.id] ?? locNewCapital;
            const isActive = i === active;
            return (
              <li
                key={loc.id}
                className={`shrink-0 w-[76vw] sm:w-[42vw] lg:w-[27vw] transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
              >
                <Link
                  to="/locations"
                  className="group block"
                  onClick={() => { goTo(i); setPaused(true); }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                    <img
                      src={img}
                      alt={loc.shortName}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-ink/25" />
                    {/* Gold accent */}
                    <div className={`absolute right-5 top-5 h-5 w-5 bg-gold transition-all duration-500 ${isActive ? "scale-110" : "scale-100 group-hover:scale-110"}`} />
                    {/* Tag */}
                    <span className="absolute left-4 top-4 bg-paper px-3 py-2 fc3-label text-[0.5625rem]">
                      {loc.tag}
                    </span>
                    {/* Bottom info */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5">
                      <p className="fc3-label text-paper/70 text-[0.5625rem]">GLA {loc.gla}</p>
                      <p className="font-display text-lg font-bold text-paper uppercase tracking-[-0.02em] leading-none mt-1">
                        {loc.brands} brands
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-ink/15 pt-4">
                    <h3 className="font-display text-xl font-semibold uppercase tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1">
                      {loc.shortName}
                    </h3>
                    <span className="fc3-label shrink-0 text-ink/40">{loc.footfall}/day</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{loc.city}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
