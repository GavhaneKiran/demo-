import { jobs } from "@/lib/data";

export default function CareersSection() {
  return (
    <section id="careers" className="bg-white py-18 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-10">
          <span className="inline-block bg-[#7c3a1e] text-[#e8a020] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            💼 Careers
          </span>

          <h2 className="font-playfair font-black text-[#7c3a1e] text-4xl">
            Join BCSSK
          </h2>

          <span className="font-marathi text-[#6b5744] text-lg block mt-1">
            BCSSK मध्ये सहभागी व्हा
          </span>

          <p className="text-[#6b5744] text-sm mt-2 max-w-xl">
            We recruit skilled professionals committed to cooperative development
            and agricultural progress of Marathwada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-start">

          {/* Left Info Panel */}
          <div>
            <h3 className="font-playfair text-[#7c3a1e] text-2xl mb-2">
              Why Work With Us?
            </h3>

            <span className="font-marathi text-[#6b5744] text-sm block mb-4">
              आमच्यासोबत का काम करावे?
            </span>

            <p className="text-[#6b5744] text-sm leading-relaxed mb-4">
              As a cooperative institution, BCSSK offers stable employment,
              government-aligned pay scales, and the satisfaction of directly
              impacting the lives of 18,000+ farming families in Nanded.
            </p>

            <p className="text-[#6b5744] text-sm leading-relaxed">
              Recruitment follows GOM cooperative service rules — transparent,
              merit-based, and reservation-compliant.
            </p>

            {/* Eligibility */}
            <div className="bg-[#fdf6ec] border-[1.5px] border-[#ddd0b8] rounded-lg p-5 mt-6">
              <h4 className="text-xs font-bold tracking-widest uppercase text-[#7c3a1e] mb-3">
                General Eligibility
              </h4>

              <ul className="space-y-2">
                {[
                  "Maharashtra domicile preferred",
                  "Maharashtra cooperative service rule compliance",
                  "Age: 18–38 years (relaxation as per GOM norms)",
                  "Local Marathi language proficiency required for field roles",
                  "Reservation as per GOM — SC/ST/OBC/NT/SBC",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-xs text-[#6b5744] flex gap-2.5 items-start border-b border-[#ddd0b8] pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-[#c97d4e] font-bold flex-shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Job List */}
          <div className="flex flex-col gap-3.5">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="border-[1.5px] border-[#ddd0b8] rounded-lg bg-[#fdf6ec] px-5 py-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center hover:border-[#7c3a1e] hover:shadow-[0_4px_14px_rgba(124,58,30,0.09)] transition-all"
              >

                {/* Icon */}
                <div className="w-11 h-11 bg-[#7c3a1e] rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  {job.icon}
                </div>

                {/* Job Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-[#1c1c1a] mb-0.5">
                    {job.title}
                  </h3>

                  <div className="font-marathi text-[#5a5a4f] text-xs">
                    {job.titleMr}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2.5">

                    {/* Status */}
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-xl font-medium ${
                        job.status === "open"
                          ? "bg-orange-50 text-[#7c3a1e] font-semibold"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {job.status === "open" ? "🟢 Open" : "Closed"}
                    </span>

                    {/* Vacancies */}
                    <span className="text-xs px-2.5 py-0.5 rounded-xl bg-[#f2e8d5] text-[#6b5744]">
                      {job.vacancies}{" "}
                      {job.vacancies === 1 ? "Vacancy" : "Vacancies"}
                    </span>

                    {/* Qualification */}
                    <span className="text-xs px-2.5 py-0.5 rounded-xl bg-[#f2e8d5] text-[#6b5744]">
                      {job.qualification}
                    </span>

                    {/* Job Type */}
                    <span className="text-xs px-2.5 py-0.5 rounded-xl bg-[#f2e8d5] text-[#6b5744]">
                      {job.type}
                    </span>

                  </div>
                </div>

                {/* Apply Button */}
                <div className="self-stretch sm:self-center mt-3 sm:mt-0 text-right sm:text-left">
                  <button
                    disabled={job.status === "closed"}
                    className={`px-4 py-2 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                      job.status === "open"
                        ? "bg-[#7c3a1e] text-white hover:bg-[#a0522d]"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {job.status === "open" ? "Apply" : "Closed"}
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}