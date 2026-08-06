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

/** Adds `is-in` to every [data-reveal] / [data-reveal-mask] element as it enters view. */
export function useScrollReveal() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-mask]"),
    );
    if (!targets.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    // Chrome factors clip-path and overflow-hidden into IO intersection calculations,
    // so elements that start fully clipped (translateY inside overflow-hidden, or
    // clip-path:inset(0 0 100%)) report 0% intersection and the threshold never fires.
    // Fix: observe the unclipped parent instead, and animate the actual target when
    // the parent enters view.
    const observeMap = new Map<Element, HTMLElement[]>();
    targets.forEach((el) => {
      const parent = el.parentElement;
      const style = parent ? window.getComputedStyle(parent) : null;
      const parentClips =
        style && (style.overflow === "hidden" || style.overflowY === "hidden");
      const isMask = el.hasAttribute("data-reveal-mask");
      // Use parent as proxy for: (1) [data-reveal] clipped by overflow-hidden parent,
      // (2) [data-reveal-mask] whose own clip-path fools Chrome's IO.
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
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    observeMap.forEach((_, proxy) => io.observe(proxy));
    return () => io.disconnect();
  }, []);
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
