import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import heroPoster from "@/assets/hero-poster.jpg";
import { site } from "@/content/site";
import { usePrefersReducedMotion } from "@/lib/motion";

const rotating = ["Brands.", "Communities.", "Investors.", "Egypt."];

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const [word, setWord] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setWord((w) => (w + 1) % rotating.length), 2800);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-paper">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        src="/hero.mp4"
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/30 to-ink" />
      <div className="fc3-grid-lines absolute inset-0 opacity-[0.10]" aria-hidden="true" />

      <div className="fc3-shell relative flex min-h-[100svh] flex-col justify-end pb-28 pt-32 md:pb-20">
        <div className="flex items-center gap-4">
          <span className="h-2.5 w-2.5 animate-pulse bg-gold" aria-hidden="true" />
          <p className="fc3-label text-paper/70">Egypt's growing retail network · 8+ locations</p>
        </div>

        <h1 className="mt-8 font-display text-[clamp(3rem,12.5vw,11rem)] font-bold uppercase leading-[0.82] tracking-[-0.05em]">
          <span className="block overflow-hidden">
            <span data-reveal className="block">Egypt's</span>
          </span>
          <span className="block overflow-hidden">
            <span data-reveal data-reveal-delay="120" className="block">
              growing<span className="text-gold">.</span>
            </span>
          </span>
        </h1>

        <div className="mt-8 grid gap-8 border-t border-paper/15 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-xl">
            <p className="fc3-label mb-4 text-gold">{site.tagline}</p>
            <p className="relative h-8 overflow-hidden font-display text-2xl uppercase tracking-[-0.02em] md:text-3xl">
              {rotating.map((item, i) => (
                <span
                  key={item}
                  className="absolute inset-x-0 top-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    opacity: i === word ? 1 : 0,
                    transform: `translateY(${(i - word) * 100}%)`,
                  }}
                >
                  Connecting {item}
                </span>
              ))}
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-paper/65">
              {site.stats[0].value} locations across Egypt's key urban markets, {site.stats[2].value} leading brands, and {site.stats[1].value} daily footfall — all under the C3 network.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/locations"
              className="group inline-flex items-center gap-4 bg-paper px-7 py-4 fc3-label text-ink transition-colors duration-500 hover:bg-gold"
            >
              <span className="h-2 w-2 bg-ink transition-transform duration-500 group-hover:scale-[2]" aria-hidden="true" />
              Explore Locations
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 border border-paper/30 px-7 py-4 fc3-label transition-colors duration-500 hover:border-paper"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-10 grid grid-cols-2 gap-px border border-paper/10 md:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label} className="px-6 py-5 bg-ink/50 backdrop-blur-sm">
              <div className="font-display text-[1.75rem] font-bold text-gold leading-none">{s.value}</div>
              <div className="fc3-label mt-1.5 text-paper/50 uppercase tracking-widest text-[0.5rem]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="fc3-label text-[0.5625rem] text-paper/50">Scroll</span>
        <span className="block h-14 w-px bg-gradient-to-b from-paper/60 to-transparent" />
      </div>
    </section>
  );
}
