export function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className={`overflow-hidden py-5 ${className}`} aria-hidden="true">
      <div className="fc3-marquee-track flex gap-0 whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-0">
            <span className="fc3-label px-6 text-[0.5625rem] uppercase tracking-[0.15em]">
              {item}
            </span>
            <span className="h-1 w-1 shrink-0 bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
