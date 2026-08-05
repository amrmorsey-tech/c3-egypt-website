import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { events } from "@/content/events";
import { AnimatedButton } from "@/components/fc3/primitives";
import panelExperiences from "@/assets/panel-experiences.jpg";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "What's on at C3 Retail Network — events and experiences" },
      { name: "description", content: "Runway nights, live music, night markets and weekend workshops at C3 Retail Network — C3 Retail Network." },
      { property: "og:title", content: "What's on at C3 Retail Network — events and experiences" },
      { property: "og:description", content: "Runway nights, live music, night markets and weekend workshops at C3 Retail Network — C3 Retail Network." },
    ],
  }),
  component: Events,
});

function Events() {
  return (
    <>
      <PageHero
        index="05 — Events"
        title="Events"
        lines={["Always", "something on."]}
        intro="The plaza and the atrium never sit still: runway nights, live sets, night markets and workshops, most of them free to walk into."
        image={panelExperiences}
        imageAlt="Evening crowd enjoying live music on an outdoor plaza"
        breadcrumb={[{ label: "Events", to: "/events" }]}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <AnimatedButton to="/offers" tone="paper">
            Current offers
          </AnimatedButton>
        </div>
      </PageHero>

      <section className="bg-paper py-16 text-ink md:py-24">
        <div className="fc3-shell">
          <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2">
            {events.map((event, i) => (
              <li key={event.slug} data-reveal data-reveal-delay={(i % 2) * 80}>
                <Link to="/events/$slug" params={{ slug: event.slug }} className="group block">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 bg-gold px-3 py-2 fc3-label text-[0.5625rem] text-ink">
                      {event.dateLabel}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-semibold uppercase tracking-[-0.025em] md:text-3xl">
                    {event.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{event.summary}</p>
                  <p className="fc3-label mt-4 text-ink/40">
                    {event.timeLabel} · {event.location} · {event.price}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
