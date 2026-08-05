import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { DiscoverPanels } from "@/components/home/DiscoverPanels";
import { DiningStrip } from "@/components/home/DiningStrip";
import { EntertainmentSection } from "@/components/home/EntertainmentSection";
import { EventsSection } from "@/components/home/EventsSection";
import { SocialWall } from "@/components/home/SocialWall";
import { Marquee } from "@/components/fc3/Marquee";
import { AnimatedButton } from "@/components/fc3/primitives";
import { site } from "@/content/site";
import visitAerial from "@/assets/visit-aerial.jpg";

const title = "C3 Retail Network | Egypt's Growing Retail Network";
const description =
  "C3 Retail Network operates 8+ community retail destinations across Egypt — connecting brands, investors, and communities.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <DiscoverPanels />
      <DiningStrip />
      <EntertainmentSection />
      <EventsSection />
      <div className="bg-paper text-ink">
        <Marquee items={["8+ Locations across Egypt", "5,000+ Daily Visitors", "60+ Leading Brands", "200K SQM GLA", "Community · Convenience · Connection"]} />
      </div>
      <SocialWall />

      <section className="relative overflow-hidden bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="fc3-label flex items-center gap-3 text-gold">
              <span className="h-2 w-2 bg-gold" aria-hidden="true" />
              07 — Visit
            </p>
            <h2 className="mt-6 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Ten minutes
              <br />
              from anywhere<span className="text-gold">.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/65">
              {site.address.street}, {site.address.district}. Three entrances, 4,200 covered spaces
              and the first three hours on us.
            </p>
            <dl className="mt-10 space-y-4 border-t border-ink/12 pt-8">
              {site.hours.map((h) => (
                <div key={h.days} className="flex flex-wrap justify-between gap-3">
                  <dt className="fc3-label text-ink/50">{h.days}</dt>
                  <dd className="text-sm">{h.time}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-wrap gap-3">
              <AnimatedButton to="/visit">Plan your visit</AnimatedButton>
              <AnimatedButton href={site.mapsUrl}>Directions</AnimatedButton>
            </div>
          </div>
          <div data-reveal-mask className="relative aspect-[4/3] overflow-hidden">
            <img
              src={visitAerial}
              alt="Aerial view of C3 Retail Network and its plaza at dusk"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute right-6 top-6 h-3.5 w-3.5 bg-gold" aria-hidden="true" />
          </div>
        </div>
      </section>
    </>
  );
}
