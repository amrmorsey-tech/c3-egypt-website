import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { EntertainmentSection } from "@/components/home/EntertainmentSection";
import { Marquee } from "@/components/fc3/Marquee";
import { AnimatedButton } from "@/components/fc3/primitives";
import panelEntertainment from "@/assets/panel-entertainment.jpg";

export const Route = createFileRoute("/entertainment")({
  head: () => ({
    meta: [
      { title: "Entertainment at C3 Retail Network — cinema, bowling and family" },
      { name: "description", content: "Eighteen cinema screens, sixteen bowling lanes, free-roam VR and a family wing built for whole afternoons at C3 Retail Network." },
      { property: "og:title", content: "Entertainment at C3 Retail Network — cinema, bowling and family" },
      { property: "og:description", content: "Eighteen cinema screens, sixteen bowling lanes, free-roam VR and a family wing built for whole afternoons at C3 Retail Network." },
    ],
  }),
  component: Entertainment,
});

function Entertainment() {
  return (
    <>
      <PageHero
        index="04 — Play"
        title="Play"
        lines={["Stay", "longer."]}
        intro="Cinema, lanes, arcade and a family wing on Level 3 — open long after the shops have pulled their shutters."
        image={panelEntertainment}
        imageAlt="Cinema lobby at night with people queuing under a glowing screen"
        breadcrumb={[{ label: "Play", to: "/entertainment" }]}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <AnimatedButton to="/events" tone="paper">
            What's on this week
          </AnimatedButton>
        </div>
      </PageHero>
      <EntertainmentSection />
      <div className="bg-paper text-ink">
        <Marquee items={["18 screens", "16 lanes", "Free-roam VR", "Open until 02:00"]} />
      </div>
    </>
  );
}
