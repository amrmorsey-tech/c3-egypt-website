import { Link } from "@tanstack/react-router";
import { LogoMark } from "./Logo";
import { site } from "@/content/site";

const services = [
  "Retail & F&B Leasing",
  "Brand & Marketing Support",
  "Security & Facility Management",
  "Entertainment Zones",
  "Parking Areas",
];

const branches = [
  "New Capital",
  "El Obour",
  "6th of October",
  "Nasr City",
  "15th of May",
  "Badr City",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pb-24 pt-20 text-paper md:pb-16 md:pt-28">
      <div className="fc3-shell">
        <div className="grid gap-12 border-b border-paper/10 pb-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-10">
          {/* Brand */}
          <div>
            <LogoMark className="h-11" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/60">
              Egypt's first multi-location community retail network — 8 active branches across Cairo, Giza, Qalyubia and Sharkia.
            </p>
            <p className="mt-5 text-sm text-paper/60">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="fc3-underline block">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="fc3-underline mt-1 block">
                {site.email}
              </a>
            </p>
            <p className="fc3-label mt-8 text-gold">Follow</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="fc3-underline uppercase tracking-[0.08em]">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <nav aria-label="Company">
            <p className="fc3-label text-gold">Company</p>
            <ul className="mt-5 space-y-3">
              <li><Link to="/about" className="fc3-underline text-sm uppercase tracking-[0.08em]">About</Link></li>
              <li><Link to="/news" className="fc3-underline text-sm uppercase tracking-[0.08em]">News</Link></li>
              <li><Link to="/contact" className="fc3-underline text-sm uppercase tracking-[0.08em]">Contact</Link></li>
              <li><Link to="/investors" className="fc3-underline text-sm uppercase tracking-[0.08em]">Investors</Link></li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <p className="fc3-label text-gold">Services</p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="fc3-underline text-sm text-paper/70 leading-snug block">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Branches */}
          <nav aria-label="Branches">
            <p className="fc3-label text-gold">Branches</p>
            <ul className="mt-5 space-y-3">
              {branches.map((b) => (
                <li key={b}>
                  <Link to="/branches" className="fc3-underline text-sm uppercase tracking-[0.08em]">
                    {b}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/branches" className="fc3-underline text-sm text-paper/50 uppercase tracking-[0.08em]">
                  + More coming soon
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6 pt-10">
          <div className="fc3-label flex flex-wrap items-center gap-x-6 gap-y-3 text-paper/50">
            <Link to="/about" className="fc3-underline">About</Link>
            <Link to="/news" className="fc3-underline">News</Link>
            <Link to="/contact" className="fc3-underline">Contact</Link>
            <span>© {new Date().getFullYear()} C3 Retail Network</span>
          </div>
          <div className="flex gap-1" aria-hidden="true">
            <span className="h-2.5 w-2.5 bg-gold" />
            <span className="h-2.5 w-2.5 bg-paper/20" />
            <span className="h-2.5 w-2.5 bg-paper/20" />
          </div>
        </div>

        <p className="mt-10 font-display text-[clamp(3rem,15vw,13rem)] font-bold uppercase leading-[0.78] tracking-[-0.05em]">
          <span className="block">C3</span>
          <span className="block text-paper/25">
            Retail Network<span className="text-gold">.</span>
          </span>
        </p>
      </div>
    </footer>
  );
}
