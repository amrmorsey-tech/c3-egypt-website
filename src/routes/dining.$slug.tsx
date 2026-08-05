import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { AnimatedButton } from "@/components/fc3/primitives";
import { getRestaurant, restaurants } from "@/content/dining";

export const Route = createFileRoute("/dining/$slug")({
  loader: ({ params }) => {
    const restaurant = getRestaurant(params.slug);
    if (!restaurant) throw notFound();
    return { restaurant };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Restaurant not found — C3 Retail Network" }, { name: "robots", content: "noindex" }],
      };
    }
    const { restaurant } = loaderData;
    const title = `${restaurant.name} — ${restaurant.cuisine} at C3 Retail Network`;
    return {
      meta: [
        { title },
        { name: "description", content: restaurant.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: restaurant.summary },
      ],
    };
  },
  component: RestaurantPage,
});

function RestaurantPage() {
  const { restaurant } = Route.useLoaderData();
  const more = restaurants.filter((r) => r.slug !== restaurant.slug).slice(0, 3);

  return (
    <>
      <PageHero
        index={`${restaurant.kind} · ${restaurant.priceRange}`}
        title={restaurant.name}
        lines={[restaurant.name]}
        intro={restaurant.summary}
        image={restaurant.image}
        imageAlt={restaurant.imageAlt}
        breadcrumb={[{ label: "Dine", to: "/dining" }]}
      />

      <section className="bg-paper py-16 text-ink md:py-24">
        <div className="fc3-shell grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <p className="fc3-label text-gold">The room</p>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">{restaurant.description}</p>

            <p className="fc3-label mt-12 text-gold">Signature</p>
            <ul className="mt-6 divide-y divide-ink/12 border-y border-ink/12">
              {restaurant.signature.map((dish: string) => (
                <li key={dish} className="flex items-center gap-4 py-4">
                  <span className="h-2 w-2 shrink-0 bg-gold" aria-hidden="true" />
                  <span className="text-sm">{dish}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap gap-3">
              <AnimatedButton to="/map">Find the table</AnimatedButton>
              {restaurant.storeSlug ? (
                <Link
                  to="/stores/$slug"
                  params={{ slug: restaurant.storeSlug }}
                  className="fc3-label inline-flex items-center gap-4 border border-ink/25 px-6 py-4 transition-colors hover:border-ink"
                >
                  <span className="h-2 w-2 bg-gold" aria-hidden="true" />
                  Directory entry
                </Link>
              ) : null}
            </div>
          </div>

          <aside className="border-t border-ink/12 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <dl className="space-y-6">
              {[
                { label: "Cuisine", value: restaurant.cuisine },
                { label: "Level", value: restaurant.floor },
                { label: "Unit", value: restaurant.unit },
                { label: "Hours", value: restaurant.hours },
                { label: "Price", value: restaurant.priceRange },
              ].map((row) => (
                <div key={row.label} className="flex justify-between gap-6 border-b border-ink/10 pb-4">
                  <dt className="fc3-label text-ink/45">{row.label}</dt>
                  <dd className="text-sm">{row.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="fc3-shell">
          <p className="fc3-label text-gold">Also worth a table</p>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {more.map((r) => (
              <li key={r.slug}>
                <Link to="/dining/$slug" params={{ slug: r.slug }} className="group block">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold uppercase tracking-[-0.02em]">
                    {r.name}
                  </h2>
                  <p className="fc3-label mt-2 text-paper/40">{r.cuisine}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
