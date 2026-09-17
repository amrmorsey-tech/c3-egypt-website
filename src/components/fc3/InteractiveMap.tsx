import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  amenities,
  amenityKinds,
  floors,
  unitsForFloor,
  type AmenityKind,
  type FloorId,
  type MapUnit,
} from "@/content/map";

export function InteractiveMap({ initialFloor = "G" as FloorId }: { initialFloor?: FloorId }) {
  const [floor, setFloor] = useState<FloorId>(initialFloor);
  const [selected, setSelected] = useState<MapUnit | null>(null);
  const [activeKinds, setActiveKinds] = useState<AmenityKind[]>([...amenityKinds]);

  const units = useMemo(() => unitsForFloor(floor), [floor]);
  const floorAmenities = useMemo(
    () => amenities.filter((a) => a.floors.includes(floor) && activeKinds.includes(a.kind)),
    [floor, activeKinds],
  );
  const current = floors.find((f) => f.id === floor);

  const toggleKind = (kind: AmenityKind) =>
    setActiveKinds((prev) =>
      prev.includes(kind) ? prev.filter((k) => k !== kind) : [...prev, kind],
    );

  return (
    <section className="bg-ink py-16 text-paper md:py-24">
      <div className="fc3-shell">
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-paper/12 pb-8">
          <div>
            <p className="fc3-label flex items-center gap-3 text-gold">
              <span className="h-2 w-2 bg-gold" aria-hidden="true" />
              Level {current?.label}
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,3rem)] font-bold uppercase leading-none tracking-[-0.03em]">
              {current?.name}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Choose a level">
            {floors.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={floor === f.id}
                onClick={() => {
                  setFloor(f.id);
                  setSelected(null);
                }}
                className={`fc3-label border px-5 py-3 transition-colors duration-300 ${
                  floor === f.id
                    ? "border-gold bg-gold text-ink"
                    : "border-paper/25 text-paper/70 hover:border-paper"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="fc3-label mr-2 text-paper/40">Amenities</span>
          {amenityKinds.map((kind) => (
            <button
              key={kind}
              type="button"
              aria-pressed={activeKinds.includes(kind)}
              onClick={() => toggleKind(kind)}
              className={`fc3-label border px-4 py-2.5 transition-colors duration-300 ${
                activeKinds.includes(kind)
                  ? "border-paper/70 text-paper"
                  : "border-paper/15 text-paper/35"
              }`}
            >
              {kind}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          <div className="relative border border-paper/12 bg-graphite/40 p-4 md:p-8">
            <svg
              viewBox="0 0 122 80"
              role="group"
              aria-label={`Floor plan for level ${current?.label}`}
              className="h-auto w-full"
            >
              <defs>
                <pattern id="fc3-atrium" width="4" height="4" patternUnits="userSpaceOnUse">
                  <path d="M0 4 L4 0" stroke="currentColor" strokeWidth="0.3" opacity="0.35" />
                </pattern>
              </defs>

              {/* shell */}
              <rect
                x="2"
                y="2"
                width="118"
                height="76"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeWidth="0.5"
              />
              {/* atrium void */}
              <rect x="26" y="26" width="70" height="28" fill="url(#fc3-atrium)" />
              <text
                x="61"
                y="41.5"
                textAnchor="middle"
                className="fill-current"
                fontSize="3"
                letterSpacing="0.6"
                opacity="0.5"
              >
                ATRIUM
              </text>

              {units.map((unit) => {
                const isStore = Boolean(unit.store);
                const isActive = selected?.id === unit.id;
                return (
                  <g key={unit.id}>
                    <rect
                      x={unit.x}
                      y={unit.y}
                      width={unit.w}
                      height={unit.h}
                      className={`transition-all duration-300 ${
                        isStore ? "cursor-pointer" : "cursor-default"
                      }`}
                      fill={isActive ? "var(--gold)" : isStore ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.03)"}
                      stroke={isActive ? "var(--gold)" : "currentColor"}
                      strokeOpacity={isActive ? 1 : 0.25}
                      strokeWidth="0.4"
                      tabIndex={isStore ? 0 : -1}
                      role={isStore ? "button" : undefined}
                      aria-label={isStore ? `${unit.name}, unit ${unit.store?.unit}` : undefined}
                      onClick={() => isStore && setSelected(unit)}
                      onKeyDown={(e) => {
                        if (isStore && (e.key === "Enter" || e.key === " ")) {
                          e.preventDefault();
                          setSelected(unit);
                        }
                      }}
                    />
                    <text
                      x={unit.x + unit.w / 2}
                      y={unit.y + unit.h / 2 + 0.9}
                      textAnchor="middle"
                      fontSize="2.4"
                      className={isActive ? "fill-ink" : "fill-current"}
                      opacity={isStore ? 0.85 : 0.35}
                      pointerEvents="none"
                    >
                      {unit.name.length > 15 ? `${unit.name.slice(0, 14)}…` : unit.name}
                    </text>
                  </g>
                );
              })}

              {floorAmenities.map((a) => (
                <g key={a.id}>
                  <rect x={a.x - 1.4} y={a.y - 1.4} width="2.8" height="2.8" fill="var(--gold)" />
                  <title>{a.label}</title>
                </g>
              ))}
            </svg>
            <p className="fc3-label mt-6 text-paper/35">
              Tap a unit for details · Gold squares mark amenities
            </p>
          </div>

          <aside className="border border-paper/12 p-6 md:p-8" aria-live="polite">
            {selected?.store ? (
              <div>
                <p className="fc3-label text-gold">{selected.store.category}</p>
                <h3 className="mt-4 font-display text-3xl font-bold uppercase leading-none tracking-[-0.03em]">
                  {selected.store.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/65">
                  {selected.store.summary}
                </p>
                <dl className="mt-6 space-y-3 border-t border-paper/12 pt-6 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="fc3-label text-paper/40">Unit</dt>
                    <dd>{selected.store.unit}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="fc3-label text-paper/40">Zone</dt>
                    <dd>{selected.store.zone}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="fc3-label text-paper/40">Hours</dt>
                    <dd>{selected.store.hours}</dd>
                  </div>
                </dl>
                <Link
                  to="/stores/$slug"
                  params={{ slug: selected.store.slug }}
                  className="fc3-label mt-8 inline-flex items-center gap-4 border border-paper/30 px-5 py-4 transition-colors hover:border-paper"
                >
                  <span className="h-2 w-2 bg-gold" aria-hidden="true" />
                  Store page
                </Link>
              </div>
            ) : (
              <div>
                <p className="fc3-label text-paper/40">Legend</p>
                <ul className="mt-6 space-y-4 text-sm text-paper/65">
                  <li className="flex items-center gap-3">
                    <span className="h-3 w-3 border border-paper/40 bg-paper/10" aria-hidden="true" />
                    Occupied unit — select for details
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-3 w-3 border border-paper/20 bg-paper/[0.03]" aria-hidden="true" />
                    Available or seasonal unit
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-3 w-3 bg-gold" aria-hidden="true" />
                    Amenity
                  </li>
                </ul>
                <p className="mt-8 text-sm leading-relaxed text-paper/50">
                  Every level wraps a single atrium, so the loop always returns you to the lifts.
                  Levels are listed on the tabs above.
                </p>
                <ul className="mt-6 space-y-2">
                  {floorAmenities.map((a) => (
                    <li key={a.id} className="flex items-center gap-3 text-sm text-paper/60">
                      <span className="h-1.5 w-1.5 bg-gold" aria-hidden="true" />
                      {a.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
