export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/c3-logo.png"
      alt="C3 Retail Network"
      className={className}
      draggable={false}
    />
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display font-bold uppercase tracking-[-0.04em] ${className}`}
    >
      C3
    </span>
  );
}
