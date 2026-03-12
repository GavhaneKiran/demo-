const ITEMS = [
  "🟢 Crushing Season 2024–25 commenced — FRP rate announced ₹340/quintal",
  "📋 Tender Notice: Supply of Sugarcane Harvesters — Last date 30 April 2025",
  "📢 Annual General Meeting scheduled on 15 May 2025 — Members invited",
  "🌾 उस नोंदणी सुरू — Cane registration open for Kharip 2025",
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]; // seamless loop
  return (
    <div className="relative overflow-hidden py-2" style={{ background: "#e8a020", color: "#1e0f06" }}>
      <div
        className="absolute left-0 top-0 bottom-0 z-10 flex items-center px-4 font-bold text-xs tracking-widest uppercase"
        style={{ background: "#7c3a1e", color: "#e8a020" }}>
        📢 NOTICE
      </div>
      <div className="flex whitespace-nowrap animate-ticker pl-28">
        {doubled.map((item, i) => (
          <span key={i} className="mr-20 text-sm font-semibold">{item}</span>
        ))}
      </div>
    </div>
  );
}
