import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact C3 Retail Network — concierge, leasing and press" },
      { name: "description", content: "Reach the C3 Retail Network concierge, leasing and press teams — phone, email and address for C3 Retail Network." },
      { property: "og:title", content: "Contact C3 Retail Network — concierge, leasing and press" },
      { property: "og:description", content: "Reach the C3 Retail Network concierge, leasing and press teams — phone, email and address for C3 Retail Network." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        index="Contact"
        title="Contact"
        lines={["Say", "ciao."]}
        intro="Concierge, leasing, press and lost property — all handled from the ground floor desk."
        breadcrumb={[{ label: "Contact", to: "/contact" }]}
      />
      <section className="bg-paper py-16 text-ink md:py-24">
        <div className="fc3-shell grid gap-12 md:grid-cols-3 md:gap-16">
          {[
            { label: "Concierge", lines: [site.phone, site.email] },
            {
              label: "Address",
              lines: [site.address.street, `${site.address.district}, ${site.address.city}`, site.address.country],
            },
            { label: "Leasing & press", lines: ["leasing@c3-egypt.com", "press@c3-egypt.com"] },
          ].map((block) => (
            <div key={block.label} className="border-t border-ink/12 pt-8">
              <p className="fc3-label text-gold">{block.label}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink/70">
                {block.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
