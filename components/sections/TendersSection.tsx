"use client";

import { useState } from "react";
import { tenders } from "@/lib/data";
import type { Tender } from "@/types";

const CATEGORIES = [
  { key: "all", label: "All Tenders" },
  { key: "machinery", label: "Machinery & Equipment" },
  { key: "civil", label: "Civil Works" },
  { key: "agriculture", label: "Agriculture" },
  { key: "it", label: "IT & Services" },
];

const badgeStyles: Record<Tender["badge"], string> = {
  urgent: "bg-[#c0392b] text-white",
  tender: "bg-[#7c3a1e] text-white",
  notice: "bg-[#b87c10] text-white",
};

const borderStyles: Record<Tender["badge"], string> = {
  urgent: "before:bg-[#c0392b]",
  tender: "before:bg-[#c97d4e]",
  notice: "before:bg-[#e8a020]",
};

export default function TendersSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? tenders
      : tenders.filter((t) => t.category === activeCategory);

  return (
    <section id="tenders" className="bg-white py-18 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <span className="inline-block bg-[#7c3a1e] text-[#e8a020] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            📋 Procurement & Tenders
          </span>

          <h2 className="font-playfair font-black text-[#7c3a1e] text-4xl">
            Active Tenders & e-Procurement
          </h2>

          <span className="font-marathi text-[#6b5744] text-lg block mt-1">
            सक्रिय निविदा व ई-खरेदी
          </span>

          <p className="text-[#6b5744] text-sm mt-2 max-w-xl">
            All tenders published per GOM e-tendering norms.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-7">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-1.5 rounded-full border-[1.5px] text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? "bg-[#7c3a1e] text-white border-[#7c3a1e]"
                  : "bg-transparent text-[#6b5744] border-[#ddd0b8]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tender List */}
        <div className="flex flex-col gap-3.5">
          {filtered.map((tender) => (
            <div
              key={tender.id}
              className={`relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-l border-[1.5px] border-[#ddd0b8] rounded-lg bg-[#fdf6ec] hover:border-[#7c3a1e] hover:shadow-md transition-all grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-4 sm:items-center px-4 sm:px-6 py-4 sm:py-5 ${borderStyles[tender.badge]}`}
            >

              {/* Badge */}
              <div
                className={`text-xs font-bold tracking-wide px-2.5 py-1 rounded ${badgeStyles[tender.badge]}`}
              >
                {tender.badge.toUpperCase()}
              </div>

              {/* Info */}
              <div>
                <h3 className="text-sm font-semibold text-[#1c1c1a] mb-1">
                  {tender.title}
                </h3>

                <div className="font-marathi text-[#5a5a4f] text-xs">
                  {tender.titleMr}
                </div>

                <div className="flex flex-wrap gap-4 mt-2">
                  <span className="text-xs text-[#5a5a4f]">
                    {tender.ref}
                  </span>

                  <span className="text-xs text-[#5a5a4f]">
                    EMD: {tender.emd}
                  </span>

                  <span className="text-xs text-[#c0392b] font-semibold">
                    ⏰ Closing: {tender.deadline}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 items-end">

                <a
                  href="#"
                  className="bg-[#7c3a1e] text-white px-4 py-2 rounded text-xs font-semibold hover:bg-[#a0522d]"
                >
                  ⬇ Download PDF
                </a>

                <button className="border-[1.5px] border-[#7c3a1e] text-[#7c3a1e] px-4 py-1.5 rounded text-xs font-semibold hover:bg-[#7c3a1e] hover:text-white">
                  View Details
                </button>

                <span className="text-[0.7rem] text-[#5a5a4f]">
                  Published: {tender.published}
                </span>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href="#"
            className="inline-block bg-[#e8a020] text-[#1e0f06] px-6 py-3 rounded font-bold text-sm"
          >
            View All Tenders & Archive →
          </a>
        </div>

      </div>
    </section>
  );
}