export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#f2e8d5] border-y border-[#ddd0b8] py-14 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-playfair text-[#7c3a1e] text-xl mb-2">About BCSSK</h3>
          <span className="font-marathi text-[#6b5744] text-sm block mb-2">
            कारखान्याविषयी
          </span>
          <p className="text-[#6b5744] text-sm leading-relaxed">
            Bhaurao Chavan Sahakari Sakhar Karkhana was established in 1972 in memory of
            the great social reformer Karmaveer Bhaurao Patil Chavan. Over five decades,
            it has grown into one of Marathwada&apos;s key cooperative industries — crushing
            over 3,500 TCD and serving 18,000+ member farmers across Nanded district.
          </p>
        </div>

        <div>
          <h3 className="font-playfair text-[#7c3a1e] text-xl mb-2">Key Services</h3>
          <span className="font-marathi text-[#6b5744] text-sm block mb-2">मुख्य सेवा</span>
          <ul className="space-y-1.5">
            {[
              "Sugarcane procurement & crushing",
              "FRP payment & farmer welfare",
              "Co-generation power supply",
              "Drip irrigation support scheme",
              "Agri-input supply at cost",
              "Member loan & dividend facility",
            ].map((item) => (
              <li
                key={item}
                className="text-[#6b5744] text-sm border-b border-[#ddd0b8] pb-1.5 last:border-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-playfair text-[#7c3a1e] text-xl mb-2">
            Compliance &amp; Transparency
          </h3>
          <span className="font-marathi text-[#6b5744] text-sm block mb-2">
            पारदर्शकता
          </span>
          <ul className="space-y-1.5">
            {[
              "RTI disclosures — quarterly",
              "Maharashtra Co-op Societies Act",
              "GOM e-tendering compliance",
              "Audited annual accounts published",
              "Board meeting minutes available",
              "Member audit rights ensured",
            ].map((item) => (
              <li
                key={item}
                className="text-[#6b5744] text-sm border-b border-[#ddd0b8] pb-1.5 last:border-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
