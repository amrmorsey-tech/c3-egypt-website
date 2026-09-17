import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { InteractiveMap } from "@/components/fc3/InteractiveMap";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Mall map — C3 Retail Network levels and units" },
      { name: "description", content: "An interactive floor plan of C3 Retail Network: five levels, every unit, entrances, lifts, restrooms and parking." },
      { property: "og:title", content: "Mall map — C3 Retail Network levels and units" },
      { property: "og:description", content: "An interactive floor plan of C3 Retail Network: five levels, every unit, entrances, lifts, restrooms and parking." },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  return (
    <>
      <PageHero
        index="Wayfinding"
        title="Mall map"
        lines={["Find", "your way."]}
        intro="Five levels around one atrium. Pick a level, tap a unit, follow the loop."
        breadcrumb={[{ label: "Map", to: "/map" }]}
      />
      <InteractiveMap />
    </>
  );
}
