import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { DiscoverPanels } from "@/components/home/DiscoverPanels";
import { Intro } from "@/components/home/Intro";
import { Marquee } from "@/components/fc3/Marquee";
import { AnimatedButton } from "@/components/fc3/primitives";
import { site } from "@/content/site";
import introArchitecture from "@/assets/intro-architecture.jpg";

const title = "Discover C3 Retail Network — four ways in";
const description =
  "Shopping, dining, entertainment and experiences across four levels at C3 Retail Network — C3 Retail Network.";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Discover,
});

function Discover() {
  return (
    <>
      <PageHero
        index="01 — Discover"
        title="Discover"
        lines={["Every visit", "starts here."]}
        intro={site.description}
        image={introArchitecture}
        imageAlt="Sunlit atrium of C3 Retail Network"
        breadcrumb={[{ label: "Discover", to: "/discover" }]}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <AnimatedButton to="/map" tone="paper">
            Open the map
          </AnimatedButton>
          <AnimatedButton to="/stores" tone="paper">
            Store directory
          </AnimatedButton>
        </div>
      </PageHero>

      <DiscoverPanels />
      <Intro />
      <div className="bg-ink text-paper">
        <Marquee items={["320 stores", "60 kitchens", "18 screens", "140K m²", "One loop"]} />
      </div>
    </>
  );
}
