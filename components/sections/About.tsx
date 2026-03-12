const SERVICES = [
  "Sugarcane procurement & crushing",
  "FRP payment & farmer welfare",
  "Co-generation power supply",
  "Drip irrigation support scheme",
  "Agri-input supply at cost",
  "Member loan & dividend facility",
];

const COMPLIANCE = [
  "RTI disclosures — quarterly",
  "Maharashtra Co-op Societies Act",
  "GOM e-tendering compliance",
  "Audited annual accounts published",
  "Board meeting minutes available",
  "Member audit rights ensured",
];

export default function About() {
  return (
    <section id="about" className="py-14 px-6" style={{ background: "var(--cream-dark)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-xl mb-1" style={{ color: "var(--green)" }}>About BCSSK</h3>
          <span className="font-marathi text-sm block mb-3" style={{ color: "var(--muted)" }}>कारखान्याविषयी</span>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            Bhaurao Chavan Sahakari Sakhar Karkhana was established in 1972 in memory of Karmaveer Bhaurao Patil Chavan.
            Over five decades it has grown into one of Marathwada's key cooperative industries — crushing over 3,500 TCD
            and serving 18,000+ member farmers across Nanded district.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xl mb-1" style={{ color: "var(--green)" }}>Key Services</h3>
          <span className="font-marathi text-sm block mb-3" style={{ color: "var(--muted)" }}>मुख्य सेवा</span>
          <ul className="space-y-0">
            {SERVICES.map((s) => (
              <li key={s} className="text-sm py-2" style={{ color: "var(--muted)", borderBottom: "1px solid var(--border)" }}>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl mb-1" style={{ color: "var(--green)" }}>Compliance &amp; Transparency</h3>
          <span className="font-marathi text-sm block mb-3" style={{ color: "var(--muted)" }}>पारदर्शकता</span>
          <ul className="space-y-0">
            {COMPLIANCE.map((c) => (
              <li key={c} className="text-sm py-2" style={{ color: "var(--muted)", borderBottom: "1px solid var(--border)" }}>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
