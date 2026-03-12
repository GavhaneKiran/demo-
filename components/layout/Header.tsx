"use client";

const NAV_LINKS = [
  { label: "Home",     href: "#" },
  { label: "Tenders",  href: "#tenders" },
  { label: "Notices",  href: "#notices" },
  { label: "Projects", href: "#projects" },
  { label: "Careers",  href: "#careers" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];

export default function Header() {
  return (
    <header
      style={{ background: "#7c3a1e" }}
      className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-5">
        {/* Emblem */}
        <div
          className="w-16 h-16 rounded-full flex flex-col items-center justify-center shrink-0"
          style={{
            background: "#e8a020",
            border: "3px solid #fdf6ec",
            color: "#7c3a1e",
            boxShadow: "0 0 0 4px rgba(232,160,32,0.3)",
          }}>
          <span className="font-display font-black text-xl leading-none">BCSSK</span>
          <span className="text-[9px] font-semibold tracking-wide mt-0.5">NANDED</span>
        </div>

        {/* Title */}
        <div className="flex-1">
          <h1 className="font-display font-black text-white text-xl leading-tight">
            Bhaurao Chavan Sahakari Sakhar Karkhana Ltd.
          </h1>
          <span className="font-marathi block mt-0.5" style={{ color: "#e8a020", fontSize: "1rem" }}>
            भाऊराव चव्हाण सहकारी साखर कारखाना लि.
          </span>
          <p className="text-white/60 text-[11px] mt-0.5 tracking-widest uppercase">
            Nanded, Maharashtra &bull; Est. 1972
          </p>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex gap-1 flex-wrap">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm px-3 py-1.5 rounded transition-all border border-transparent hover:border-white/20 hover:bg-white/10 font-medium">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
