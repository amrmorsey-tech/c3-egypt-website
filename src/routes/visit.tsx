import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { AnimatedButton } from "@/components/fc3/primitives";
import { site } from "@/content/site";
import visitAerial from "@/assets/visit-aerial.jpg";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit C3 Retail Network — hours, parking and directions" },
      { name: "description", content: "Opening hours, parking, valet, EV charging and directions to C3 Retail Network — C3 Retail Network." },
      { property: "og:title", content: "Visit C3 Retail Network — hours, parking and directions" },
      { property: "og:description", content: "Opening hours, parking, valet, EV charging and directions to C3 Retail Network — C3 Retail Network." },
    ],
  }),
  component: Visit,
});

function Visit() {
  return (
    <>
      <PageHero
        index="06 — Visit"
        title="Visit"
        lines={["Ten minutes", "from anywhere."]}
        intro={`${site.address.street}, ${site.address.district}, ${site.address.city}.`}
        image={visitAerial}
        imageAlt="Aerial view of C3 Retail Network and its plaza at dusk"
        breadcrumb={[{ label: "Visit", to: "/visit" }]}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <AnimatedButton href={site.mapsUrl} tone="paper">
            Open in maps
          </AnimatedButton>
          <AnimatedButton to="/map" tone="paper">
            Mall map
          </AnimatedButton>
        </div>
      </PageHero>

      <section className="bg-paper py-16 text-ink md:py-24">
        <div className="fc3-shell grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="fc3-label text-gold">Opening hours</p>
            <dl className="mt-8 space-y-4 border-t border-ink/12 pt-8">
              {site.hours.map((h) => (
                <div key={h.days} className="flex flex-wrap justify-between gap-3 border-b border-ink/10 pb-4">
                  <dt className="fc3-label text-ink/50">{h.days}</dt>
                  <dd className="text-sm">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <p className="fc3-label text-gold">Parking & access</p>
            <dl className="mt-8 space-y-4 border-t border-ink/12 pt-8">
              {site.parking.map((p) => (
                <div key={p.label} className="border-b border-ink/10 pb-4">
                  <dt className="fc3-label text-ink/50">{p.label}</dt>
                  <dd className="mt-2 text-sm text-ink/70">{p.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
