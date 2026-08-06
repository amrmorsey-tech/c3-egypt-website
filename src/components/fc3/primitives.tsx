import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/** Small editorial label with the gold square marker: "DISCOVER". */
export function SectionLabel({
  index,
  children,
  className = "",
  tone = "paper",
}: {
  index?: string;
  children: ReactNode;
  className?: string;
  /** "paper" = accessible dark-gold on white; "ink" = bright gold on dark */
  tone?: "ink" | "paper";
}) {
  return (
    <p className={`fc3-label flex items-center gap-3 ${className}`}>
      <span className="fc3-square h-2 w-2" aria-hidden="true" />
      {index ? (
        <span className={tone === "ink" ? "text-gold" : "text-gold-deep"}>{index}</span>
      ) : null}
      <span className="opacity-70">{children}</span>
    </p>
  );
}

/** Oversized architectural headline. Lines are passed as an array to keep the break editorial. */
export function DisplayHeading({
  lines,
  as: Tag = "h2",
  size = "display",
  className = "",
}: {
  lines: string[];
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "display" | "headline";
  className?: string;
}) {
  const sizeClass =
    size === "hero"
      ? "text-[clamp(3rem,12vw,11.25rem)]"
      : size === "display"
        ? "text-[clamp(2.5rem,8.5vw,8rem)]"
        : "text-[clamp(2rem,5.5vw,4.5rem)]";
  return (
    <Tag className={`${sizeClass} ${className}`}>
      {lines.map((line, i) => (
        <span key={line + i} className="block overflow-hidden">
          <span data-reveal data-reveal-delay={i * 90} className="block">
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/** Button with the FC3 gold square expanding out of it on hover. */
export function AnimatedButton({
  to,
  href,
  children,
  tone = "ink",
  className = "",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  tone?: "ink" | "paper";
  className?: string;
}) {
  const base =
    "group relative inline-flex items-center gap-4 border px-6 py-4 fc3-label transition-colors duration-500";
  const tones =
    tone === "ink"
      ? "border-ink/25 text-ink hover:border-ink"
      : "border-paper/30 text-paper hover:border-paper";
  const inner = (
    <>
      <span
        className="h-2 w-2 shrink-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[2.2]"
        aria-hidden="true"
      />
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${tones} ${className}`} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={`${base} ${tones} ${className}`}>
      {inner}
    </Link>
  );
}

/** Image in a clip-path mask that wipes open on scroll, with a slow inner scale on hover. */
export function ImageReveal({
  src,
  alt,
  className = "",
  imageClassName = "",
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <div data-reveal-mask className={`group overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] ${imageClassName}`}
      />
    </div>
  );
}

/** Cropped oversized FC3 letterform used as a background graphic. */
export function LetterformBackdrop({
  text = "FC3",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none font-display font-bold uppercase leading-[0.7] tracking-[-0.06em] ${className}`}
    >
      {text}
    </span>
  );
}
