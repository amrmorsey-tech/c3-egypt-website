import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/fc3/PageHero";
import { Intro } from "@/components/home/Intro";
import { AnimatedButton } from "@/components/fc3/primitives";
import introArchitecture from "@/assets/intro-architecture.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About C3 Retail Network — C3 Retail Network" },
      { name: "description", content: "How C3 Retail Network was drawn: a boulevard instead of a corridor, daylight from above and a plaza that pulls the street inside." },
      { property: "og:title", content: "About C3 Retail Network — C3 Retail Network" },
      { property: "og:description", content: "How C3 Retail Network was drawn: a boulevard instead of a corridor, daylight from above and a plaza that pulls the street inside." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        index="About"
        title="About FC3"
        lines={["More than", "a mall."]}
        intro="C3 Retail Network — C3 Retail Network was designed as a piece of city: a boulevard, a plaza and a market hall under one roof."
        image={introArchitecture}
        imageAlt="Sunlit atrium of C3 Retail Network"
        breadcrumb={[{ label: "About", to: "/about" }]}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <AnimatedButton to="/contact" tone="paper">
            Leasing & contact
          </AnimatedButton>
        </div>
      </PageHero>
      <Intro />
    </>
  );
}
