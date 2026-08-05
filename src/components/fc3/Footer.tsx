import { Link } from "@tanstack/react-router";
import { LogoMark } from "./Logo";
import { site, navigation } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pb-24 pt-20 text-paper md:pb-16 md:pt-28">
      <div className="fc3-shell">
        <div className="grid gap-12 border-b border-paper/10 pb-14 md:grid-cols-[1.2fr_1fr_1fr] md:gap-16">
          <div>
            <LogoMark className="h-11" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/60">
              {site.address.street}
              <br />
              {site.address.district}, {site.address.city}
            </p>
            <p className="mt-4 text-sm text-paper/60">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="fc3-underline">
                {site.phone}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="fc3-underline">
                {site.email}
              </a>
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="fc3-label text-gold">Destination</p>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="fc3-underline text-sm uppercase tracking-[0.08em]">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/map" className="fc3-underline text-sm uppercase tracking-[0.08em]">
                  Mall map
                </Link>
              </li>
              <li>
                <Link to="/offers" className="fc3-underline text-sm uppercase tracking-[0.08em]">
                  Offers
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="fc3-label text-gold">Opening hours</p>
            <ul className="mt-5 space-y-3 text-sm text-paper/70">
              {site.hours.map((h) => (
                <li key={h.days} className="flex flex-col">
                  <span className="uppercase tracking-[0.08em]">{h.days}</span>
                  <span className="text-paper/50">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="fc3-label mt-8 text-gold">Follow</p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="fc3-underline uppercase tracking-[0.08em]">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6 pt-10">
          <div className="fc3-label flex flex-wrap items-center gap-x-6 gap-y-3 text-paper/50">
            <Link to="/about" className="fc3-underline">
              About
            </Link>
            <Link to="/contact" className="fc3-underline">
              Contact
            </Link>
            <span>© {new Date().getFullYear()} C3 Retail Network</span>
            <span>Privacy</span>
          </div>
          <div className="flex gap-1" aria-hidden="true">
            <span className="h-2.5 w-2.5 bg-gold" />
            <span className="h-2.5 w-2.5 bg-paper/20" />
            <span className="h-2.5 w-2.5 bg-paper/20" />
          </div>
        </div>

        <p className="mt-10 font-display text-[clamp(3rem,15vw,13rem)] font-bold uppercase leading-[0.78] tracking-[-0.05em]">
          <span className="block">Ciao</span>
          <span className="block text-paper/25">
            City Center<span className="text-gold">.</span>
          </span>
        </p>
      </div>
    </footer>
  );
}
