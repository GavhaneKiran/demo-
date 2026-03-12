"use client";
import { useState } from "react";
import type { Language } from "@/types";

interface Props {
  lang: Language;
  onLangChange: (l: Language) => void;
}

export default function TopStrip({ lang, onLangChange }: Props) {
  return (
    <div
      className="text-xs py-1.5"
      style={{ background: "#7c3a1e", borderBottom: "2px solid #e8a020", color: "#fdf6ec" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center flex-wrap gap-1.5">
        <span>
          📍 Nanded, Maharashtra &nbsp;|&nbsp;
          <a href="#" style={{ color: "#e8a020" }}>RTI Portal</a> &nbsp;|&nbsp;
          <a href="#" style={{ color: "#e8a020" }}>Grievance</a> &nbsp;|&nbsp;
          <a href="#" style={{ color: "#e8a020" }}>Member Login</a>
        </span>
        <div className="flex items-center gap-3">
          <span>Helpline: <a href="tel:02462000000" style={{ color: "#e8a020" }}>02462-XXXXXX</a></span>
          <div className="flex rounded overflow-hidden" style={{ border: "1px solid #e8a020" }}>
            {(["en", "mr"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => onLangChange(l)}
                className="px-2.5 py-0.5 text-xs font-semibold transition-colors"
                style={{
                  background: lang === l ? "#e8a020" : "transparent",
                  color: lang === l ? "#7c3a1e" : "#fdf6ec",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                {l === "en" ? "EN" : "मर"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
