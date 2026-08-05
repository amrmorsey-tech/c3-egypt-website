import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { stores, storeCategories, type StoreCategory } from "@/content/stores";
import { floors } from "@/content/map";

export function StoreDirectory({
  initialQuery = "",
  initialCategory,
}: {
  initialQuery?: string;
  initialCategory?: StoreCategory;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<StoreCategory | "All">(initialCategory ?? "All");
  const [floor, setFloor] = useState<string>("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stores
      .filter((s) => (category === "All" ? true : s.category === category))
      .filter((s) => (floor === "All" ? true : s.floor === floor))
      .filter((s) =>
        q
          ? [s.name, s.category, s.zone, s.unit, ...s.tags].join(" ").toLowerCase().includes(q)
          : true,
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [query, category, floor]);

  return (
    <section className="bg-paper py-16 text-ink md:py-24">
      <div className="fc3-shell">
        <div className="border-y border-ink/12 py-6">
          <label htmlFor="directory-search" className="sr-only">
            Search stores
          </label>
          <div className="flex items-center gap-4">
            <span className="h-2.5 w-2.5 shrink-0 bg-gold" aria-hidden="true" />
            <input
              id="directory-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search brands, categories, units"
              className="w-full bg-transparent font-display text-2xl uppercase tracking-[-0.03em] placeholder:text-ink/25 focus:outline-none md:text-4xl"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="fc3-label mr-2 text-ink/40">Category</span>
            {(["All", ...storeCategories] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat as StoreCategory | "All")}
                aria-pressed={category === cat}
                className={`fc3-label border px-4 py-3 transition-colors duration-300 ${
                  category === cat
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/20 text-ink/70 hover:border-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="fc3-label mr-2 text-ink/40">Level</span>
            {["All", ...floors.map((f) => f.id)].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFloor(f)}
                aria-pressed={floor === f}
                className={`fc3-label border px-4 py-3 transition-colors duration-300 ${
                  floor === f
                    ? "border-gold bg-gold text-ink"
                    : "border-ink/20 text-ink/70 hover:border-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <p className="fc3-label mt-10 text-ink/40" aria-live="polite">
          {results.length} {results.length === 1 ? "store" : "stores"}
        </p>

        <ul className="mt-6 divide-y divide-ink/12 border-y border-ink/12">
          {results.map((store) => (
            <li key={store.slug}>
              <Link
                to="/stores/$slug"
                params={{ slug: store.slug }}
                className="group grid grid-cols-[1fr_auto] items-center gap-4 py-6 md:grid-cols-[minmax(0,2fr)_1fr_1fr_auto] md:gap-8"
              >
                <span className="flex items-center gap-4">
                  <span
                    className="h-2 w-2 shrink-0 bg-ink/15 transition-colors duration-500 group-hover:bg-gold"
                    aria-hidden="true"
                  />
                  <span className="font-display text-lg font-semibold uppercase tracking-[-0.02em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:text-2xl">
                    {store.name}
                  </span>
                </span>
                <span className="fc3-label hidden text-ink/50 md:block">{store.category}</span>
                <span className="fc3-label hidden text-ink/50 md:block">
                  {store.floor} · {store.unit}
                </span>
                <span className="fc3-label text-ink/35 transition-colors group-hover:text-gold">
                  View
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {results.length === 0 ? (
          <p className="py-16 text-center text-sm text-ink/55">
            No stores match that search. Try another brand, category or level.
          </p>
        ) : null}
      </div>
    </section>
  );
}
