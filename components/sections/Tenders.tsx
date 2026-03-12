"use client";
import { useState } from "react";
import { tenders } from "@/lib/data";
import type { Tender } from "@/types";

const CATEGORIES = [
  { id: "all",         label: "All Tenders" },
  { id: "machinery",   label: "Machinery & Equipment" },
  { id: "civil",       label: "Civil Works" },
  { id: "agriculture", label: "Agriculture" },
  { id: "it",          label: "IT & Services" },
];

const BADGE_STYLES: Record<Tender["badge"], { bg: string; label: string }> = {
  urgent: { bg: "#c0392b", label: "URGENT" },
  tender: { bg: "var(--green)", label: "TENDER" },
  notice: { bg: "var(--amber-dark, #a07800)", label: "NOTICE" },
};

function TenderCard({ tender }: { tender: Tender }) {
  const badge = BADGE_STYLES[tender.badge];
  return (
    <div
      className="rounded-lg p-5 grid gap-4 transition-all duration-200 hover:shadow-lg relative overflow-hidden"
      style={{
        border: "1.5px solid var(--border)",
        background: "var(--cream)",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
      }}>
      {/* Left accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: tender.badge === "urgent" ? "#c0392b" : "var(--green-light)" }} />

      {/* Badge */}
      <div
        className="text-white text-[11px] font-bold tracking-wide px-2.5 py-1 rounded text-center leading-snug"
        style={{ background: badge.bg }}>
        {badge.label}
      </div>

      {/* Info */}
      <div>
        <h3 className="font-semibold text-[15px] mb-1">
          {tender.title}
          {tender.badge === "urgent" && (
            <span className="ml-2 inline-block bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded align-middle">NEW</span>
          )}
        </h3>
        <div className="font-marathi text-sm" style={{ color: "var(--muted)" }}>{tender.titleMr}</div>
        <div className="flex gap-4 mt-2 flex-wrap">
          <span className="text-xs" style={{ color: "var(--muted)" }}>Ref: {tender.ref}</span>
          <span className="text-xs" style={{ color: "var(--muted)" }}>EMD: {tender.emd}</span>
          <span className="text-xs font-semibold text-red-600">⏰ Closing: {tender.deadline}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2 items-end">
        <a
          href="#"
          className="px-4 py-2 rounded text-white text-sm font-semibold whitespace-nowrap transition-colors"
          style={{ background: "var(--green)" }}>
          ⬇ Download PDF
        </a>
        <button
          className="px-4 py-1.5 rounded text-sm font-semibold border-2 transition-all"
          style={{ color: "var(--green)", borderColor: "var(--green)", background: "transparent", cursor: "pointer", fontFamily: "inherit" }}>
          View Details
        </button>
        <span className="text-[11px]" style={{ color: "var(--muted)" }}>Published: {tender.published}</span>
      </div>
    </div>
  );
}

export default function Tenders() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? tenders
    : tenders.filter((t) => t.category === active);

  return (
    <section id="tenders" className="py-16 px-6" style={{ background: "var(--white, #fff)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
            style={{ background: "var(--green)", color: "var(--amber)" }}>
            📋 Procurement &amp; Tenders
          </span>
          <h2 className="font-display font-black text-4xl mb-1" style={{ color: "var(--green)" }}>
            Active Tenders &amp; e-Procurement
            <span className="ml-3 inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded align-middle">LIVE</span>
          </h2>
          <span className="font-marathi block text-lg mb-3" style={{ color: "var(--muted)" }}>
            सक्रिय निविदा व ई-खरेदी
          </span>
          <p className="text-sm max-w-xl" style={{ color: "var(--muted)" }}>
            All tenders published per GOM e-tendering norms. Download official documents and submit bids before the closing date.
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap mb-7">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all border-2"
              style={{
                background: active === cat.id ? "var(--green)" : "transparent",
                color: active === cat.id ? "white" : "var(--muted)",
                borderColor: active === cat.id ? "var(--green)" : "var(--border)",
                cursor: "pointer",
                fontFamily: "inherit",
              }}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-3">
          {filtered.map((t) => <TenderCard key={t.id} tender={t} />)}
        </div>

        <div className="mt-6 text-center">
          <a href="#"
            className="inline-block px-8 py-3 rounded font-bold text-sm"
            style={{ background: "var(--green)", color: "white" }}>
            View All Tenders &amp; Archive →
          </a>
        </div>
      </div>
    </section>
  );
}
