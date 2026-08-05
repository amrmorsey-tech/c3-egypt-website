import { Link } from "@tanstack/react-router";

/** C3 Retail Network logo mark — white with gold squares, for dark surfaces. */
export function LogoMark({ className = "h-10" }: { className?: string }) {
  return (
    <img
      src="/c3-logo.png"
      alt="C3 Retail Network"
      className={`w-auto ${className}`}
    />
  );
}

/** Wordmark for light surfaces — matches the square grid language of the C3 mark. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* C3 grid icon — 7 squares in C-bracket shape */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="0" y="0" width="9" height="9" fill="currentColor" />
        <rect x="11.5" y="0" width="9" height="9" fill="var(--color-gold)" />
        <rect x="23" y="0" width="9" height="9" fill="var(--color-gold)" />
        <rect x="0" y="11.5" width="9" height="9" fill="var(--color-gold)" />
        <rect x="0" y="23" width="9" height="9" fill="currentColor" />
        <rect x="11.5" y="23" width="9" height="9" fill="var(--color-gold)" />
        <rect x="23" y="23" width="9" height="9" fill="var(--color-gold)" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-bold uppercase leading-none tracking-[-0.04em]">
          C3
        </span>
        <span className="fc3-label mt-0.5 text-[0.5rem] text-gold">RETAIL NETWORK</span>
      </span>
    </span>
  );
}

export function LogoLink({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link to="/" className={`group inline-flex items-center ${className}`} aria-label="C3 Retail Network home">
      {variant === "dark" ? <LogoMark className="h-9 md:h-10" /> : <Wordmark />}
    </Link>
  );
}
