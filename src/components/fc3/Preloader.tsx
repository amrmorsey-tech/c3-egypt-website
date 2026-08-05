import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";

const KEY = "fc3-preloaded";

/** Black screen, gold square snaps into position, mark reveals, curtain wipes up. */
export function Preloader() {
  const [phase, setPhase] = useState<"hidden" | "square" | "logo" | "out" | "done">("hidden");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem(KEY)) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem(KEY, "1");
    document.body.style.overflow = "hidden";
    setPhase("square");
    const t1 = window.setTimeout(() => setPhase("logo"), 420);
    const t2 = window.setTimeout(() => setPhase("out"), 1180);
    const t3 = window.setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 1900);
    return () => {
      [t1, t2, t3].forEach(window.clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[90] flex items-center justify-center bg-ink transition-[clip-path] duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        phase === "out" ? "[clip-path:inset(0_0_100%_0)]" : "[clip-path:inset(0_0_0_0)]"
      }`}
    >
      <div className="relative flex items-center gap-4">
        <span
          className={`block bg-gold transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase === "hidden" ? "h-2 w-2 opacity-0" : "h-3 w-3 opacity-100"
          } ${phase === "logo" || phase === "out" ? "translate-y-0" : "-translate-y-6"}`}
        />
        <div
          className={`overflow-hidden transition-[clip-path] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase === "logo" || phase === "out" ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_100%_0_0)]"
          }`}
        >
          <LogoMark className="h-12 md:h-16" />
        </div>
      </div>
    </div>
  );
}
