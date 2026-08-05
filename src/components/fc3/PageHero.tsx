import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

/** Dark editorial page header used by every internal route. */
export function PageHero({
  index,
  title,
  lines,
  intro,
  image,
  imageAlt,
  breadcrumb,
  children,
}: {
  index?: string;
  title: string;
  lines?: string[];
  intro?: string;
  image?: string;
  imageAlt?: string;
  breadcrumb?: { label: string; to: string }[];
  children?: ReactNode;
}) {
  const headline = lines ?? [title];
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-32 text-paper md:pb-20 md:pt-44">
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        </>
      ) : (
        <span className="fc3-grid-lines absolute inset-0 opacity-[0.12]" aria-hidden="true" />
      )}

      <div className="fc3-shell relative">
        {breadcrumb?.length ? (
          <nav aria-label="Breadcrumb" className="fc3-label mb-8 flex flex-wrap items-center gap-3 text-paper/50">
            <Link to="/" className="fc3-underline">
              FC3
            </Link>
            {breadcrumb.map((crumb) => (
              <span key={crumb.to} className="flex items-center gap-3">
                <span aria-hidden="true">/</span>
                <Link to={crumb.to} className="fc3-underline">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        ) : null}

        {index ? (
          <p className="fc3-label flex items-center gap-3 text-gold">
            <span className="h-2 w-2 bg-gold" aria-hidden="true" />
            {index}
          </p>
        ) : null}

        <h1 className="mt-6 font-display text-[clamp(2.5rem,9vw,8rem)] font-bold uppercase leading-[0.85] tracking-[-0.045em]">
          {headline.map((line, i) => (
            <span key={line + i} className="block overflow-hidden">
              <span data-reveal data-reveal-delay={i * 100} className="block">
                {line}
              </span>
            </span>
          ))}
        </h1>

        {intro ? (
          <p data-reveal data-reveal-delay="240" className="mt-8 max-w-xl text-base leading-relaxed text-paper/65">
            {intro}
          </p>
        ) : null}

        {children}
      </div>
    </section>
  );
}
