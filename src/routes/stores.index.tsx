import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { StoreDirectory } from "@/components/fc3/StoreDirectory";
import { AnimatedButton } from "@/components/fc3/primitives";
import { stores, storeCategories, type StoreCategory } from "@/content/stores";
import storesHero from "@/assets/stores-hero.jpg";

const title = "Store directory — 320 brands at C3 Retail Network";
const description =
  "Search every store at C3 Retail Network — C3 Retail Network by brand, category or level: fashion, beauty, lifestyle, kids and services.";

export const Route = createFileRoute("/stores/")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search["q"] === "string" ? search["q"] : undefined,
    category: storeCategories.includes(search["category"] as StoreCategory)
      ? (search["category"] as StoreCategory)
      : undefined,
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Stores,
});

function Stores() {
  const { q, category } = Route.useSearch();

  return (
    <>
      <PageHero
        index="02 — Shop"
        title="Shop"
        lines={["Three hundred", "and twenty."]}
        intro={`Fashion, beauty, design, kids and services across four levels. ${stores.length} flagship names are listed below — search by brand, category or level.`}
        image={storesHero}
        imageAlt="Shoppers walking along the C3 Retail Network boulevard"
        breadcrumb={[{ label: "Shop", to: "/stores" }]}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <AnimatedButton to="/map" tone="paper">
            Find it on the map
          </AnimatedButton>
          <AnimatedButton to="/offers" tone="paper">
            Current offers
          </AnimatedButton>
        </div>
      </PageHero>

      <StoreDirectory initialQuery={q ?? ""} initialCategory={category} />
    </>
  );
}
