import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 1200);
    const t2 = setTimeout(() => setVisible(false), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-ink transition-opacity duration-700 ${
        hiding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <img src="/c3-logo.png" alt="" className="h-12 brightness-0 invert" />
        <div className="h-px w-32 overflow-hidden bg-paper/20">
          <div className="h-full bg-gold animate-[preload_1.2s_ease-out_forwards]" />
        </div>
      </div>
    </div>
  );
}
