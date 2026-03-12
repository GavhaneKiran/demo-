import { notices } from "@/lib/data";
import type { Notice } from "@/types";

const typeStyles: Record<Notice["type"], { bg: string; text: string; label: string }> = {
  general: { bg: "bg-orange-50", text: "text-[#7c3a1e]", label: "General" },
  tender: { bg: "bg-amber-50", text: "text-[#b87c10]", label: "Tender" },
  urgent: { bg: "bg-red-50", text: "text-[#c0392b]", label: "Important" },
  rti: { bg: "bg-stone-100", text: "text-[#6b5744]", label: "RTI" },
};

export default function NoticesSection() {
  return (
    <section id="notices" className="bg-[#fdf8ee] py-18 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <span className="inline-block bg-[#7c3a1e] text-[#e8a020] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            📢 Official Notices
          </span>

          <h2 className="font-playfair font-black text-[#7c3a1e] text-4xl">
            Notice Board & Circulars
          </h2>

          <span className="font-marathi text-[#6b5744] text-lg block mt-1">
            सूचना फलक व परिपत्रके
          </span>

          <p className="text-[#6b5744] text-sm mt-2 max-w-xl">
            Official announcements and circulars published for members and stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {notices.map((notice) => {
            const style = typeStyles[notice.type];

            return (
              <div
                key={notice.id}
                className="bg-white border-[1.5px] border-[#ddd0b8] rounded-lg p-5 hover:shadow-md transition"
              >

                <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-xl mb-3 ${style.bg} ${style.text}`}>
                  {style.label}
                </span>

                <h3 className="text-sm font-semibold text-[#2c1a0e] mb-1">
                  {notice.title}
                </h3>

                <div className="font-marathi text-[#6b5744] text-xs mb-2">
                  {notice.titleMr}
                </div>

                <p className="text-[#6b5744] text-xs leading-relaxed">
                  {notice.body}
                </p>

                <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#ddd0b8]">
                  <span className="text-[0.7rem] text-[#6b5744]">
                    📅 {notice.date}
                  </span>

                  <span className="text-[#7c3a1e] font-semibold text-xs">
                    {notice.linkLabel}
                  </span>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}