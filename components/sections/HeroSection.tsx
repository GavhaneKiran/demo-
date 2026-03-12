import { stats } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">

      {/* ── Background: real sugarcane farm photo ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1800&auto=format&fit=crop&q=80')",
        }}
      />

      {/* ── Overlays ── */}
      {/* deep warm gradient left → right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e0f06]/92 via-[#2c1a0e]/76 to-[#1e0f06]/38" />
      {/* bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e0f06]/65 via-transparent to-transparent" />
      {/* amber accent bar on left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e8a020]" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: text */}
          <div className="animate-fade-up">
            <span
              className="font-marathi text-[#e8a020] text-2xl block mb-3"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              मराठवाड्याचा अभिमान
            </span>

            <h2
              className="font-playfair font-black text-white leading-tight mb-5"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                textShadow: "0 2px 12px rgba(0,0,0,0.6)",
              }}
            >
              Serving{" "}
              <em className="not-italic" style={{ color: "#e8a020" }}>
                Farmers
              </em>
              <br />
              of Marathwada
              <br />
              <span style={{ fontSize: "0.75em", color: "rgba(255,255,255,0.8)" }}>
                Since 1972
              </span>
            </h2>

            <p
              className="text-white/80 text-base leading-relaxed mb-8 max-w-md"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
            >
              A cooperative institution built on trust, transparency, and the collective
              strength of our farming community. Committed to fair pricing, timely
              payments, and rural development across Nanded district.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#tenders"
                style={{
                  background: "#e8a020",
                  color: "#1e0f06",
                  border: "2px solid #e8a020",
                  padding: "12px 28px",
                  borderRadius: "6px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  letterSpacing: "0.03em",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 0.2s",
                }}
              >
                View Active Tenders
              </a>
              <a
                href="#careers"
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "2px solid rgba(255,255,255,0.45)",
                  padding: "12px 28px",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 0.2s",
                }}
              >
                Careers &amp; Jobs
              </a>
            </div>

            <div className="mt-14 flex items-center gap-2 text-white/35 text-xs">
              <div className="h-px w-10 bg-white/20" />
              Scroll to explore
            </div>
          </div>

          {/* RIGHT: stats */}
          <div className="grid grid-cols-2 gap-4 animate-fade-up-delay">
            {stats.map((stat) => (
              <div
                key={stat.num}
                className="rounded-xl p-6 text-center backdrop-blur-md hover:-translate-y-1 transition-all"
                style={{
                  background: "rgba(232,160,32,0.08)",
                  border: "1px solid rgba(232,160,32,0.3)",
                }}
              >
                <div
                  className="font-playfair font-black text-4xl leading-none"
                  style={{ color: "#e8a020" }}
                >
                  {stat.num}
                </div>
                <div className="text-white/70 text-xs mt-2">{stat.label}</div>
                <div className="font-marathi text-white/45 text-xs mt-0.5">
                  {stat.labelMr}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
