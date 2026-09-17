import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { restaurants } from "@/content/dining";
import { Marquee } from "@/components/fc3/Marquee";
import { AnimatedButton } from "@/components/fc3/primitives";
import panelDine from "@/assets/panel-dine.jpg";

const title = "Dining at C3 Retail Network — 60 kitchens and cafés";
const description =
  "From a nine-seat sushi counter to a market hall of counters and a west-facing terrace: eat and drink at C3 Retail Network — C3 Retail Network.";

export const Route = createFileRoute("/dining/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Dining,
});

function Dining() {
  return (
    <>
      <PageHero
        index="03 — Dine"
        title="Dine"
        lines={["Come", "hungry."]}
        intro="Sixty kitchens, cafés and counters across the Boulevard, the Market Hall and the Level 3 terrace. Here are the tables we'd book first."
        image={panelDine}
        imageAlt="Friends sharing plates on a warmly lit restaurant terrace"
        breadcrumb={[{ label: "Dine", to: "/dining" }]}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <AnimatedButton to="/map" tone="paper">
            Find a table on the map
          </AnimatedButton>
        </div>
      </PageHero>

      <section className="bg-paper py-16 text-ink md:py-24">
        <div className="fc3-shell">
          <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {restaurants.map((r, i) => (
              <li key={r.slug} data-reveal data-reveal-delay={(i % 3) * 80}>
                <Link to="/dining/$slug" params={{ slug: r.slug }} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 bg-paper px-3 py-2 fc3-label text-[0.5625rem]">
                      {r.kind} · {r.priceRange}
                    </span>
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-ink/15 pt-4">
                    <h2 className="font-display text-2xl font-semibold uppercase tracking-[-0.025em]">
                      {r.name}
                    </h2>
                    <span className="fc3-label shrink-0 text-ink/40">{r.unit}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{r.summary}</p>
                  <p className="fc3-label mt-4 text-ink/40">
                    {r.cuisine} · {r.hours}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-ink text-paper">
        <Marquee items={["Late kitchens", "Terrace tables", "Market hall", "Brunch until 16:00"]} />
      </div>
    </>
  );
}
