import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { LogoMark, Wordmark } from "./Logo";
import { navigation, quickAccess } from "@/content/site";

export function Navigation() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [hovered, setHovered] = useState<string>("");
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const overlay = isHome && !scrolled;
  const barTone = overlay
    ? "bg-transparent text-paper"
    : "bg-paper text-ink border-b border-ink/10";

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchOpen(false);
    navigate({ to: "/stores", search: { q: query || undefined, category: undefined } });
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-ink focus:px-4 focus:py-2 focus:fc3-label focus:text-paper"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${barTone}`}
      >
        <div className="fc3-shell flex h-[4.5rem] items-center justify-between gap-6 md:h-[5.5rem]">
          <Link to="/" aria-label="C3 Retail Network home" className="shrink-0">
            {overlay ? <LogoMark className="h-8 md:h-9" /> : <Wordmark />}
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="fc3-underline fc3-label transition-opacity hover:opacity-100"
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-expanded={searchOpen}
              className="fc3-label hidden items-center gap-2 md:flex"
            >
              <span className="h-2 w-2 bg-gold" aria-hidden="true" />
              Search
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              className="fc3-label flex items-center gap-3 border border-current/25 px-4 py-3 transition-colors hover:border-current"
            >
              <span className="flex flex-col gap-[3px]" aria-hidden="true">
                <span className="block h-[1.5px] w-4 bg-current" />
                <span className="block h-[1.5px] w-4 bg-current" />
              </span>
              Menu
            </button>
          </div>
        </div>

        {searchOpen ? (
          <form
            onSubmit={submitSearch}
            className="border-t border-current/15 bg-paper text-ink"
            role="search"
          >
            <div className="fc3-shell flex items-center gap-4 py-5">
              <span className="h-2.5 w-2.5 bg-gold" aria-hidden="true" />
              <label htmlFor="fc3-search" className="sr-only">
                Search stores, restaurants and events
              </label>
              <input
                ref={searchRef}
                id="fc3-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search stores, restaurants, events"
                className="w-full bg-transparent font-display text-2xl uppercase tracking-[-0.03em] placeholder:text-ink/30 focus:outline-none md:text-4xl"
              />
              <button type="submit" className="fc3-label shrink-0 text-gold">
                Go
              </button>
            </div>
          </form>
        ) : null}
      </header>

      {/* Full-screen editorial menu */}
      <div
        id="fc3-menu"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[60] bg-ink text-paper transition-[clip-path] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? "pointer-events-auto [clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div className="fc3-shell flex h-[4.5rem] items-center justify-between md:h-[5.5rem]">
          <LogoMark className="h-8 md:h-9" />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="fc3-label flex items-center gap-3 border border-paper/30 px-4 py-3 transition-colors hover:border-paper"
          >
            <span className="h-2 w-2 bg-gold" aria-hidden="true" />
            Close
          </button>
        </div>

        <div className="fc3-shell grid gap-10 pb-16 pt-6 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:pt-10">
          <ul className="divide-y divide-paper/10 border-y border-paper/10">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onMouseEnter={() => setHovered(item.label)}
                  onFocus={() => setHovered(item.label)}
                  className="group flex items-baseline gap-6 py-4 md:py-6"
                  tabIndex={menuOpen ? 0 : -1}
                >
                  <span className="fc3-label text-gold">{item.index}</span>
                  <span className="font-display text-[clamp(2.25rem,7vw,5.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink">
              {/* Architectural grid motif */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-8 gap-px opacity-15">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="bg-paper" />
                ))}
              </div>
              <div className="absolute right-8 top-8 h-10 w-10 bg-gold opacity-80 transition-transform duration-700" />
              <div className="absolute left-8 bottom-12 h-5 w-5 bg-gold opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-display text-[7rem] font-bold text-paper/6 select-none leading-none">C3</p>
              </div>
              <span className="absolute bottom-5 left-5 h-3 w-3 bg-gold" aria-hidden="true" />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">
              C3 Retail Network — Egypt's growing community retail network. 8+ locations, 60+ leading
              brands, and millions of visitors across Cairo and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile quick access — thumb level */}
      <nav
        aria-label="Quick access"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 backdrop-blur md:hidden"
      >
        <ul className="grid grid-cols-4">
          {quickAccess.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="flex min-h-[3.5rem] flex-col items-center justify-center gap-1.5 py-2 fc3-label text-[0.5625rem] text-ink"
                activeProps={{ className: "text-gold" }}
              >
                <span className="h-1.5 w-1.5 bg-current" aria-hidden="true" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
