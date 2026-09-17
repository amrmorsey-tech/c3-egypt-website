import { createFileRoute } from "@tanstack/react-router";
import { newsItems } from "@/content/news";
import { SectionLabel } from "@/components/fc3/primitives";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Newsroom — C3 Retail Network in the Press" },
      { name: "description", content: "Press coverage, partnerships and announcements from across the C3 Retail Network." },
    ],
  }),
  component: News,
});

function News() {
  return (
    <>
      {/* Video hero */}
      <section className="relative min-h-[60svh] overflow-hidden bg-ink flex items-end">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          src="/news-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
        <div className="fc3-shell relative pb-16 pt-36 text-paper md:pb-24 md:pt-48">
          <p className="fc3-label text-paper/50 tracking-widest text-[0.5625rem] mb-5">04 — News</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em]">
            Newsroom
          </h1>
          <p className="mt-6 max-w-md text-base text-paper/65 leading-relaxed">
            Coverage, partnerships and announcements from across the C3 Retail Network.
          </p>
        </div>
      </section>

      {/* News cards */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="fc3-shell">
          <SectionLabel>Press Coverage</SectionLabel>

          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item, i) => (
              <li key={item.id} data-reveal data-reveal-delay={i * 70}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col h-full"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-ink">
                    <img
                      src={item.image}
                      alt={item.headlineEn}
                      className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-ink/20" />
                    <span className="absolute left-4 top-4 bg-gold px-3 py-1.5 fc3-label text-[0.5625rem] text-ink">
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 border border-t-0 border-ink/10 p-5">
                    <p className="fc3-label text-ink/40 text-[0.5625rem] mb-3">{item.source}</p>
                    <h3 className="font-display text-lg font-bold uppercase tracking-[-0.02em] leading-tight transition-transform duration-500 group-hover:translate-x-0.5 flex-1">
                      {item.headlineEn}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/60 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4">
                      <span className="fc3-label text-ink/35 text-[0.5625rem]">
                        {new Date(item.date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                      </span>
                      <span className="fc3-label text-gold-deep flex items-center gap-1 text-[0.5625rem] opacity-0 group-hover:opacity-100 transition-opacity">
                        Read <span aria-hidden="true">↗</span>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
