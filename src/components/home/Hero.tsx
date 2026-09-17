import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-ink">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" />

      <div className="fc3-shell relative z-10 pb-20 pt-40 text-paper md:pb-28 md:pt-48">
        <p className="fc3-label text-paper/50 tracking-widest text-[0.5625rem] mb-6">
          01 — Egypt's Community Retail Network
        </p>
        <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em]">
          <span className="block" data-reveal>C3</span>
          <span className="block text-paper/50" data-reveal data-reveal-delay={80}>
            Retail Network<span className="text-gold">.</span>
          </span>
        </h1>
        <p className="mt-8 max-w-sm text-base leading-relaxed text-paper/60 md:text-lg" data-reveal data-reveal-delay={160}>
          8 active destinations across Egypt — connecting brands, communities and everyday life.
        </p>

        <div className="mt-10 flex flex-wrap gap-4" data-reveal data-reveal-delay={220}>
          <Link
            to="/branches"
            className="inline-flex items-center gap-4 bg-paper px-8 py-4 fc3-label text-ink hover:bg-gold transition-colors"
          >
            <span className="h-2 w-2 bg-ink" aria-hidden="true" />
            Our branches
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-4 border border-paper/30 px-8 py-4 fc3-label hover:border-paper transition-colors"
          >
            About C3
          </Link>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-paper/10 pt-10 md:grid-cols-4" data-reveal data-reveal-delay={280}>
          {[
            { value: "8+", label: "Active locations" },
            { value: "5K+", label: "Daily footfall" },
            { value: "60+", label: "Leading brands" },
            { value: "200K+", label: "SQM GLA" },
          ].map((s) => (
            <div key={s.label}>
              <dt className="fc3-label text-paper/40 text-[0.5625rem]">{s.label}</dt>
              <dd className="mt-1 font-display text-2xl font-bold tracking-[-0.03em] md:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
