import { createRootRouteWithContext, Outlet, ScrollRestoration, useRouterState } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { Navigation } from "@/components/fc3/Navigation";
import { Footer } from "@/components/fc3/Footer";
import { GoldCursor } from "@/components/fc3/GoldCursor";
import { Preloader } from "@/components/fc3/Preloader";
import { useScrollReveal } from "@/lib/motion";

function Root() {
  // Subscribe to pathname so this component re-renders on every navigation,
  // which causes useScrollReveal to re-run and pick up new unrevealed elements.
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useScrollReveal(pathname);

  return (
    <>
      <Preloader />
      <GoldCursor />
      <Navigation />
      <main id="main" className="pb-14 md:pb-0">
        <ScrollRestoration />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: Root,
});
