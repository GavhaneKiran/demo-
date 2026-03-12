import Link from "next/link";

const STATS = [
  { num: "52+",      label: "Years of Service",  labelMr: "सेवेचे वर्षे" },
  { num: "18,000",   label: "Member Farmers",     labelMr: "सभासद शेतकरी" },
  { num: "3,500 TCD",label: "Crushing Capacity",  labelMr: "गाळप क्षमता" },
  { num: "₹340",     label: "FRP 2024–25",        labelMr: "उचित व रास्त भाव" },
];

export default function Hero() {
  return (
    <section
      className="relative px-6 py-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--green) 0%, #0d3320 40%, #1e3a1e 100%)" }}>
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div className="animate-fadeUp">
          <span className="font-marathi block mb-2" style={{ color: "var(--amber)", fontSize: "1.3rem" }}>
            मराठवाड्याचा अभिमान
          </span>
          <h2 className="font-display font-black text-white leading-tight mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Serving <span style={{ color: "var(--amber)" }}>Farmers</span> of Marathwada Since 1972
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-lg">
            A cooperative institution built on trust, transparency, and the collective strength
            of our farming community — committed to fair sugarcane pricing and rural development.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href="#tenders"
              className="px-7 py-3 rounded font-bold text-sm transition-all border-2"
              style={{ background: "var(--amber)", color: "var(--green)", borderColor: "var(--amber)" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "transparent";
                (e.target as HTMLElement).style.color = "var(--amber)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "var(--amber)";
                (e.target as HTMLElement).style.color = "var(--green)";
              }}>
              View Active Tenders
            </a>
            <a href="#careers"
              className="px-7 py-3 rounded font-semibold text-sm text-white border-2 border-white/40 hover:border-white transition-all">
              Careers &amp; Jobs
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 animate-fadeUp-delay">
          {STATS.map(({ num, label, labelMr }) => (
            <div
              key={num}
              className="rounded-xl p-6 text-center transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(212,160,23,0.3)",
                backdropFilter: "blur(4px)",
              }}>
              <div className="font-display font-black leading-none mb-2" style={{ color: "var(--amber)", fontSize: "2.2rem" }}>
                {num}
              </div>
              <div className="text-white/70 text-xs">{label}</div>
              <div className="font-marathi text-white/40 text-[11px] mt-0.5">{labelMr}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
