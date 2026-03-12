"use client";

import { useState } from "react";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{ background: "#7c3a1e" }}
      className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
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
        <div className="flex-1 min-w-0">
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

        {/* Desktop Nav */}
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

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation"
          className="md:hidden inline-flex items-center justify-center rounded border border-white/30 text-white/90 px-2.5 py-2"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                fill="currentColor"
                d="M6.225 4.811 4.81 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z"
              />
            ) : (
              <path
                fill="currentColor"
                d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-white/20 bg-[#7c3a1e]">
          <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white text-sm px-2 py-2 rounded transition-all hover:bg-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
