import { notices } from "@/lib/data";
import type { Notice } from "@/types";

const TYPE_STYLES: Record<Notice["type"], { bg: string; color: string; label: string }> = {
  general: { bg: "#e8f5e9", color: "#2d6a4f", label: "General" },
  tender:  { bg: "#fff3e0", color: "#a07800", label: "Tender" },
  urgent:  { bg: "#fdecea", color: "#c0392b", label: "Important" },
  rti:     { bg: "#e3f2fd", color: "#1565c0", label: "RTI" },
};

function NoticeCard({ notice }: { notice: Notice }) {
  const style = TYPE_STYLES[notice.type];
  return (
    <div
      className="rounded-lg p-5 bg-white border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
      style={{ borderColor: "var(--border)" }}>
      <span
        className="inline-block text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-3"
        style={{ background: style.bg, color: style.color }}>
        {style.label}
      </span>
      <h3 className="font-semibold text-[15px] mb-1">{notice.title}</h3>
      <div className="font-marathi text-sm mb-2.5" style={{ color: "var(--muted)" }}>{notice.titleMr}</div>
      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{notice.body}</p>
      <div className="flex justify-between items-center mt-4 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
        <span className="text-xs" style={{ color: "var(--muted)" }}>📅 Posted: {notice.date}</span>
        <a href="#" className="text-sm font-semibold" style={{ color: "var(--green)", textDecoration: "none" }}>
          {notice.linkLabel} →
        </a>
      </div>
    </div>
  );
}

export default function Notices() {
  return (
    <section id="notices" className="py-16 px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
            style={{ background: "var(--green)", color: "var(--amber)" }}>
            📢 Official Notices
          </span>
          <h2 className="font-display font-black text-4xl mb-1" style={{ color: "var(--green)" }}>
            Notice Board &amp; Circulars
          </h2>
          <span className="font-marathi block text-lg mb-3" style={{ color: "var(--muted)" }}>
            सूचना फलक व परिपत्रके
          </span>
          <p className="text-sm max-w-xl" style={{ color: "var(--muted)" }}>
            Official announcements, AGM notices, rate revisions, and public circulars for all members and stakeholders.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {notices.map((n) => <NoticeCard key={n.id} notice={n} />)}
        </div>
      </div>
    </section>
  );
}
