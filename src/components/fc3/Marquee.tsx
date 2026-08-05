/** Typographic marquee with gold square separators. */
export function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden border-y border-current/15 py-5 ${className}`}>
      <div className="fc3-marquee-track flex w-max items-center gap-10 motion-reduce:animate-none">
        {row.map((item, i) => (
          <span key={item + i} className="flex items-center gap-10">
            <span className="font-display text-2xl font-bold uppercase tracking-[-0.02em] md:text-4xl">
              {item}
            </span>
            <span className="h-2 w-2 shrink-0 bg-gold" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
