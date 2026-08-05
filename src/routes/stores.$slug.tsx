import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { AnimatedButton } from "@/components/fc3/primitives";
import { getStore, stores } from "@/content/stores";
import { site } from "@/content/site";

export const Route = createFileRoute("/stores/$slug")({
  loader: ({ params }) => {
    const store = getStore(params.slug);
    if (!store) throw notFound();
    return { store };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Store not found — C3 Retail Network" }, { name: "robots", content: "noindex" }] };
    }
    const { store } = loaderData;
    const title = `${store.name} — ${store.category} at C3 Retail Network`;
    return {
      meta: [
        { title },
        { name: "description", content: store.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: store.summary },
      ],
    };
  },
  component: StorePage,
});

function StorePage() {
  const { store } = Route.useLoaderData();
  const related = stores
    .filter((s) => s.category === store.category && s.slug !== store.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        index={store.category}
        title={store.name}
        lines={[store.name]}
        intro={store.summary}
        breadcrumb={[
          { label: "Shop", to: "/stores" },
        ]}
      />

      <section className="bg-paper py-16 text-ink md:py-24">
        <div className="fc3-shell grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <p className="fc3-label text-gold">About</p>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">{store.description}</p>

            <ul className="mt-10 flex flex-wrap gap-2">
              {store.tags.map((tag: string) => (
                <li key={tag} className="fc3-label border border-ink/20 px-4 py-3 text-ink/60">
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap gap-3">
              <AnimatedButton to="/map">See it on the map</AnimatedButton>
              <AnimatedButton to="/stores">All stores</AnimatedButton>
            </div>
          </div>

          <aside className="border-t border-ink/12 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <dl className="space-y-6">
              {[
                { label: "Level", value: store.floor },
                { label: "Unit", value: store.unit },
                { label: "Zone", value: store.zone },
                { label: "Hours", value: store.hours },
                { label: "Phone", value: store.phone ?? site.phone },
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

      {related.length ? (
        <section className="bg-ink py-16 text-paper md:py-24">
          <div className="fc3-shell">
            <p className="fc3-label text-gold">More in {store.category}</p>
            <ul className="mt-8 divide-y divide-paper/12 border-y border-paper/12">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/stores/$slug"
                    params={{ slug: item.slug }}
                    className="group flex items-center justify-between gap-6 py-6"
                  >
                    <span className="font-display text-xl font-semibold uppercase tracking-[-0.02em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:text-3xl">
                      {item.name}
                    </span>
                    <span className="fc3-label shrink-0 text-paper/40">
                      {item.floor} · {item.unit}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
