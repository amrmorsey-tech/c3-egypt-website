import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ecosystem } from "@/content/site";
import { SectionLabel } from "@/components/fc3/primitives";
import { usePrefersReducedMotion } from "@/lib/motion";
import panelShop from "@/assets/panel-shop.jpg";
import panelDine from "@/assets/panel-dine.jpg";
import panelEntertainment from "@/assets/panel-entertainment.jpg";
import panelExperiences from "@/assets/panel-experiences.jpg";
import panelHyper from "@/assets/dining-1.jpg";
import panelFamily from "@/assets/ent-kids.jpg";

const panelImages = [panelShop, panelDine, panelEntertainment, panelExperiences, panelHyper, panelFamily];

export function DiscoverPanels() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [horizontal, setHorizontal] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const check = () =>
      setHorizontal(window.matchMedia("(min-width: 1024px)").matches && !reduced);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [reduced]);

  useEffect(() => {
    if (!horizontal) {
      setProgress(0);
      return;
    }
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const raw = distance > 0 ? -rect.top / distance : 0;
      const clamped = Math.min(1, Math.max(0, raw));
      setProgress(clamped);
      const shift = track.scrollWidth - window.innerWidth;
      track.style.transform = `translate3d(${-clamped * Math.max(shift, 0)}px, 0, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [horizontal]);

  const panels = [...ecosystem];

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="relative bg-ink text-paper"
      style={horizontal ? { height: `${panels.length * 85 + 60}vh` } : undefined}
      aria-label="C3 Ecosystem"
    >
      <div
        className={
          horizontal
            ? "sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden"
            : "py-24 md:py-32"
        }
      >
        <div className="fc3-shell flex items-end justify-between gap-8">
          <div>
            <SectionLabel tone="ink">Ecosystem</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Built for every day<span className="text-gold">.</span>
            </h2>
          </div>
          {horizontal ? (
            <div className="hidden w-56 items-center gap-4 lg:flex">
              <span className="fc3-label text-paper/55">
                {String(Math.min(panels.length, Math.floor(progress * panels.length) + 1)).padStart(2, "0")}
                /0{panels.length}
              </span>
              <span className="relative h-px flex-1 bg-paper/20">
                <span
                  className="absolute inset-y-0 left-0 bg-gold"
                  style={{ width: `${Math.max(progress * 100, 4)}%` }}
                />
              </span>
            </div>
          ) : null}
        </div>

        <div
          className={
            horizontal
              ? "mt-10 overflow-hidden"
              : "fc3-shell mt-10 grid gap-8 md:grid-cols-2"
          }
        >
          <div
            ref={trackRef}
            className={
              horizontal
                ? "flex w-max gap-8 pl-5 pr-[10vw] will-change-transform md:pl-10 xl:pl-16"
                : "contents"
            }
          >
            {panels.map((panel, i) => (
              <Link
                key={panel.label}
                to="/ecosystem"
                className={`group relative block overflow-hidden ${
                  horizontal ? "h-[58vh] w-[36vw] shrink-0" : "aspect-[4/5]"
                }`}
              >
                <img
                  src={panelImages[i % panelImages.length]}
                  alt={panel.label}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gold accent */}
                <div className="absolute right-6 top-6 h-6 w-6 bg-gold opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110" />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex flex-col p-6 md:p-8">
                  <span className="fc3-label flex items-center gap-3 text-gold">
                    <span className="h-2 w-2 bg-gold transition-transform duration-500 group-hover:scale-[2]" />
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-4 font-display text-[clamp(1.75rem,3vw,2.75rem)] font-bold uppercase leading-none tracking-[-0.03em]">
                    {panel.label}
                  </span>
                  <span className="mt-3 max-w-xs text-sm leading-relaxed text-paper/70">
                    {panel.desc}
                  </span>
                  <span className="fc3-label mt-6 flex items-center gap-2 text-paper/60 transition-colors group-hover:text-paper">
                    Learn more
                    <span aria-hidden="true">→</span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
