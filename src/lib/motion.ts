import { useEffect, useRef, useState } from "react";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/** Adds `is-in` to every [data-reveal] / [data-reveal-mask] element as it enters view.
 *  Pass `pathname` (from useRouterState) as a dep so this re-runs on every navigation. */
export function useScrollReveal(pathname?: string) {
  useEffect(() => {
    // Mark body so CSS hides elements only when JS is running
    document.body.classList.add("js-reveal");

    // Small delay so the new route's DOM is fully painted before we observe
    const setup = window.setTimeout(() => {
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in), [data-reveal-mask]:not(.is-in)"),
      );
      if (!targets.length) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        targets.forEach((el) => el.classList.add("is-in"));
        return;
      }

      const observeMap = new Map<Element, HTMLElement[]>();
      targets.forEach((el) => {
        const parent = el.parentElement;
        const style = parent ? window.getComputedStyle(parent) : null;
        const parentClips =
          style && (style.overflow === "hidden" || style.overflowY === "hidden");
        const isMask = el.hasAttribute("data-reveal-mask");
        const useParent = (parentClips || isMask) && parent != null;
        const proxy = useParent ? parent! : el;
        if (!observeMap.has(proxy)) observeMap.set(proxy, []);
        observeMap.get(proxy)!.push(el);
      });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const revealTargets = observeMap.get(entry.target) ?? [];
            revealTargets.forEach((t) => {
              const delay = Number(t.dataset["revealDelay"] ?? 0);
              window.setTimeout(() => t.classList.add("is-in"), delay);
            });
            io.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px 80px 0px", threshold: 0 },
      );

      observeMap.forEach((_, proxy) => io.observe(proxy));
    }, 50);

    return () => window.clearTimeout(setup);
  }, [pathname]); // re-runs whenever pathname changes (every navigation)
}

/** Lenis smooth scrolling, disabled entirely under reduced-motion. */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: { destroy: () => void; raf: (t: number) => void } | null = null;
    let frame = 0;
    let cancelled = false;

    void (async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      const instance = new Lenis({ duration: 1.1, smoothWheel: true });
      lenis = instance as unknown as { destroy: () => void; raf: (t: number) => void };
      const raf = (time: number) => {
        instance.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);
}

/** Vertical parallax on a single element, GPU-friendly and reduced-motion aware. */
export function useParallax<T extends HTMLElement>(strength = 0.18) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      el.style.transform = `translate3d(0, ${(progress * strength * 100).toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);
  return ref;
}
