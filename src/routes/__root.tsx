import { createRootRouteWithContext, Outlet, ScrollRestoration } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { Navigation } from "@/components/fc3/Navigation";
import { Footer } from "@/components/fc3/Footer";
import { GoldCursor } from "@/components/fc3/GoldCursor";
import { Preloader } from "@/components/fc3/Preloader";
import { useEffect } from "react";

function Root() {
  useEffect(() => {
    // Query only elements not yet revealed — runs on every render so SPA navigation is covered
    const els = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not(.is-in), [data-reveal-mask]:not(.is-in)"
    );
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.transitionDelay = `${el.dataset.revealDelay ?? "0"}ms`;
            el.classList.add("is-in");
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px 120px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }); // no deps — re-runs after every render / navigation

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
