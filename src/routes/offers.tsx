import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { offers } from "@/content/events";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers at C3 Retail Network" },
      { name: "description", content: "Current offers, set menus and members' extras from stores and restaurants at C3 Retail Network — C3 Retail Network." },
      { property: "og:title", content: "Offers at C3 Retail Network" },
      { property: "og:description", content: "Current offers, set menus and members' extras from stores and restaurants at C3 Retail Network — C3 Retail Network." },
    ],
  }),
  component: Offers,
});

function Offers() {
  return (
    <>
      <PageHero
        index="Offers"
        title="Offers"
        lines={["Worth", "the trip."]}
        intro="A running list of what's on offer across the boulevard this month."
        breadcrumb={[{ label: "Offers", to: "/offers" }]}
      />
      <section className="bg-paper py-16 text-ink md:py-24">
        <div className="fc3-shell">
          <ul className="grid gap-px border border-ink/12 bg-ink/12 md:grid-cols-2 xl:grid-cols-3">
            {offers.map((offer) => (
              <li key={offer.slug} className="bg-paper p-8">
                <p className="fc3-label text-gold">{offer.category}</p>
                <h2 className="mt-5 font-display text-2xl font-semibold uppercase leading-none tracking-[-0.025em]">
                  {offer.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">{offer.detail}</p>
                <p className="fc3-label mt-6 text-ink/40">Until {offer.validUntil}</p>
                {offer.storeSlug ? (
                  <Link
                    to="/stores/$slug"
                    params={{ slug: offer.storeSlug }}
                    className="fc3-underline fc3-label mt-6 inline-flex items-center gap-3"
                  >
                    <span className="h-2 w-2 bg-gold" aria-hidden="true" />
                    {offer.store}
                  </Link>
                ) : (
                  <p className="fc3-label mt-6">{offer.store}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
