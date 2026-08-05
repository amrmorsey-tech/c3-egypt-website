import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { AnimatedButton } from "@/components/fc3/primitives";
import { events, getEvent } from "@/content/events";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Event not found — C3 Retail Network" }, { name: "robots", content: "noindex" }] };
    }
    const { event } = loaderData;
    const title = `${event.title} — C3 Retail Network`;
    return {
      meta: [
        { title },
        { name: "description", content: event.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: event.summary },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: EventPage,
});

function EventPage() {
  const { event } = Route.useLoaderData();
  const others = events.filter((e) => e.slug !== event.slug).slice(0, 3);

  return (
    <>
      <PageHero
        index={event.category}
        title={event.title}
        lines={[event.title]}
        intro={event.summary}
        image={event.image}
        imageAlt={event.imageAlt}
        breadcrumb={[{ label: "Events", to: "/events" }]}
      />

      <section className="bg-paper py-16 text-ink md:py-24">
        <div className="fc3-shell grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <p className="fc3-label text-gold">The programme</p>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">{event.description}</p>
            <div className="mt-12 flex flex-wrap gap-3">
              <AnimatedButton to="/visit">Plan your visit</AnimatedButton>
              <AnimatedButton to="/events">All events</AnimatedButton>
            </div>
          </div>
          <aside className="border-t border-ink/12 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <dl className="space-y-6">
              {[
                { label: "Dates", value: event.dateLabel },
                { label: "Time", value: event.timeLabel },
                { label: "Where", value: event.location },
                { label: "Entry", value: event.price },
                { label: "Category", value: event.category },
              ].map((row) => (
                <div key={row.label} className="flex justify-between gap-6 border-b border-ink/10 pb-4">
                  <dt className="fc3-label text-ink/45">{row.label}</dt>
                  <dd className="text-sm">{row.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="fc3-shell">
          <p className="fc3-label text-gold">Also on</p>
          <ul className="mt-8 divide-y divide-paper/12 border-y border-paper/12">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/events/$slug"
                  params={{ slug: item.slug }}
                  className="group flex items-center justify-between gap-6 py-6"
                >
                  <span className="font-display text-xl font-semibold uppercase tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                    {item.title}
                  </span>
                  <span className="fc3-label shrink-0 text-paper/40">{item.dateLabel}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
