import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navigation } from "@/components/fc3/Navigation";
import { Footer } from "@/components/fc3/Footer";
import { Preloader } from "@/components/fc3/Preloader";
import { GoldCursor } from "@/components/fc3/GoldCursor";
import { useScrollReveal, useSmoothScroll } from "@/lib/motion";
import { site } from "@/content/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-ink px-6 text-center text-paper">
      <span className="h-3 w-3 bg-gold" aria-hidden="true" />
      <h1 className="mt-8 font-display text-[clamp(3rem,12vw,9rem)] font-bold uppercase leading-none tracking-[-0.05em]">
        404
      </h1>
      <p className="fc3-label mt-6 text-paper/50">This corridor doesn't exist</p>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
        The page you're looking for has moved or closed for refit. The concierge desk is on the
        ground floor.
      </p>
      <Link
        to="/"
        className="fc3-label mt-8 inline-flex items-center gap-4 border border-paper/30 px-6 py-4 transition-colors hover:border-paper"
      >
        <span className="h-2 w-2 bg-gold" aria-hidden="true" />
        Back to C3
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-ink px-6 text-center text-paper">
      <span className="h-3 w-3 bg-gold" aria-hidden="true" />
      <h1 className="mt-8 font-display text-3xl font-bold uppercase tracking-[-0.03em]">
        This page didn't load
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
        Something went wrong on our end. Try again, or head back to the entrance.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="fc3-label inline-flex items-center gap-4 bg-paper px-6 py-4 text-ink"
        >
          <span className="h-2 w-2 bg-gold" aria-hidden="true" />
          Try again
        </button>
        <a
          href="/"
          className="fc3-label inline-flex items-center gap-4 border border-paper/30 px-6 py-4"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "C3 Retail Network" },
      { name: "theme-color", content: "#0A0A0A" },
      { property: "og:site_name", content: "C3 Retail Network" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Corporation",
          name: `${site.name} — ${site.tagline}`,
          description: site.description,
          telephone: site.phone,
          email: site.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            addressLocality: site.address.city,
            postalCode: site.address.postalCode,
            addressCountry: site.address.country,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: site.geo.lat,
            longitude: site.geo.lng,
          },
          openingHours: ["Su-We 10:00-23:00", "Th-Sa 10:00-01:00"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteMotion({ pathname }: { pathname: string }) {
  useSmoothScroll();
  useScrollRevealFor(pathname);
  return null;
}

function useScrollRevealFor(_pathname: string) {
  // Re-runs on every route change because the component is keyed by pathname.
  useScrollReveal();
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <SiteMotion key={pathname} pathname={pathname} />
      <Preloader />
      <GoldCursor />
      <Navigation />
      <main id="main" className="min-h-dvh bg-paper pb-16 md:pb-0">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
