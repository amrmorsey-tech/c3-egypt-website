import { createRootRouteWithContext, Outlet, ScrollRestoration } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { Navigation } from "@/components/fc3/Navigation";
import { Footer } from "@/components/fc3/Footer";
import { GoldCursor } from "@/components/fc3/GoldCursor";
import { Preloader } from "@/components/fc3/Preloader";
import { useEffect } from "react";

function Root() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay ?? "0";
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("revealed");
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });

  return (
    <>
      <Preloader />
      <GoldCursor />
      <Navigation />
      <main id="main">
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
