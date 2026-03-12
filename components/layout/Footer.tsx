export default function Footer() {
  return (
    <footer id="contact" style={{ background: "#1e0f06", color: "#fdf6ec" }} className="pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-display text-lg mb-1" style={{ color: "#e8a020" }}>
              Bhaurao Chavan Sahakari Sakhar Karkhana Ltd.
            </h3>
            <span className="font-marathi text-sm text-white/60 block mb-4">
              भाऊराव चव्हाण सहकारी साखर कारखाना लि., नांदेड
            </span>
            <p className="text-sm text-white/50 leading-relaxed">
              A cooperative institution committed to the farmers of Marathwada.
              Regulated under Maharashtra Co-operative Societies Act, 1960.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#e8a020" }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Active Tenders", "Notice Board", "Future Projects", "Careers", "RTI Portal", "Annual Reports", "Member Login"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-white/60 hover:text-amber-400 transition-colors"
                    style={{ textDecoration: "none" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#e8a020" }}>
              Contact Us
            </h4>
            <div className="space-y-3">
              {[
                { icon: "📍", text: "BCSSK Factory Road, Nanded – 431601, Maharashtra" },
                { icon: "📞", text: "02462-XXXXXX (Mon–Sat, 10am–5pm)" },
                { icon: "✉️", text: "info@bcssk.maharashtra.gov.in" },
                { icon: "🌐", text: "www.bcssk.org" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex gap-3">
                  <span>{icon}</span>
                  <p className="text-sm text-white/60">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-5 flex flex-wrap justify-between gap-2">
          <p className="text-xs text-white/30">
            © 2025 Bhaurao Chavan Sahakari Sakhar Karkhana Ltd., Nanded. All rights reserved.
          </p>
          <p className="text-xs text-white/30">Designed with transparency in mind</p>
        </div>
      </div>
    </footer>
  );
}
