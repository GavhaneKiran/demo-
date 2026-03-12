import { jobs } from "@/lib/data";
import type { Job } from "@/types";

const ELIGIBILITY = [
  "Maharashtra domicile preferred",
  "Maharashtra cooperative service rule compliance",
  "Age: 18–38 years (relaxation per GOM norms)",
  "Local Marathi language proficiency for field roles",
  "Reservation: SC/ST/OBC/NT/SBC as per GOM",
];

function JobCard({ job }: { job: Job }) {
  return (
    <div
      className="rounded-lg p-5 flex gap-4 items-start transition-all duration-200 hover:shadow-md"
      style={{
        border: "1.5px solid var(--border)",
        background: "var(--cream)",
      }}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center text-2xl shrink-0"
        style={{ background: "var(--green)" }}
      >
        {job.icon}
      </div>

      {/* Job info */}
      <div className="flex-1">
        <h3 className="font-semibold text-[15px] mb-0.5">{job.title}</h3>

        <div
          className="font-marathi text-sm mb-2"
          style={{ color: "var(--muted)" }}
        >
          {job.titleMr}
        </div>

        <div className="flex gap-2 flex-wrap">
          {/* Status */}
          <span
            className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
            style={
              job.open
                ? { background: "#e8f5e9", color: "#2d6a4f" }
                : { background: "#eee", color: "#999" }
            }
          >
            {job.open ? "🟢 Open" : "Closed"}
          </span>

          {/* Vacancies */}
          <span
            className="text-[11px] px-2.5 py-1 rounded-full"
            style={{
              background: "var(--cream-dark)",
              color: "var(--muted)",
            }}
          >
            {job.vacancies} {job.vacancies === 1 ? "Vacancy" : "Vacancies"}
          </span>

          {/* Qualification */}
          <span
            className="text-[11px] px-2.5 py-1 rounded-full"
            style={{
              background: "var(--cream-dark)",
              color: "var(--muted)",
            }}
          >
            {job.qualification}
          </span>
        </div>
      </div>

      {/* Apply Button */}
      <div className="self-center">
        <a
          href={job.open ? "#" : undefined}
          className="px-4 py-2 rounded text-sm font-semibold whitespace-nowrap inline-block"
          style={{
            background: job.open ? "var(--green)" : "#aaa",
            color: "white",
            textDecoration: "none",
            pointerEvents: job.open ? "auto" : "none",
          }}
        >
          {job.open ? "Apply" : "Closed"}
        </a>
      </div>
    </div>
  );
}

export default function Careers() {
  return (
    <section id="careers" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
            style={{ background: "var(--green)", color: "var(--amber)" }}
          >
            💼 Careers
          </span>

          <h2
            className="font-display font-black text-4xl mb-1"
            style={{ color: "var(--green)" }}
          >
            Join BCSSK
          </h2>

          <span
            className="font-marathi block text-lg mb-3"
            style={{ color: "var(--muted)" }}
          >
            BCSSK मध्ये सहभागी व्हा
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Left side info */}
          <div className="md:col-span-2">
            <h3
              className="font-display text-xl mb-1"
              style={{ color: "var(--green)" }}
            >
              Why Work With Us?
            </h3>

            <span
              className="font-marathi text-sm block mb-4"
              style={{ color: "var(--muted)" }}
            >
              आमच्यासोबत का काम करावे?
            </span>

            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--muted)" }}
            >
              As a cooperative, BCSSK offers stable employment, government-aligned
              pay scales, and the satisfaction of directly impacting 18,000+
              farming families.
            </p>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--muted)" }}
            >
              Recruitment follows GOM cooperative service rules — transparent,
              merit-based, and reservation-compliant.
            </p>

            {/* Eligibility */}
            <div
              className="rounded-lg p-5"
              style={{
                background: "var(--cream)",
                border: "1.5px solid var(--border)",
              }}
            >
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "var(--green)" }}
              >
                General Eligibility
              </h4>

              <ul className="space-y-2">
                {ELIGIBILITY.map((item) => (
                  <li
                    key={item}
                    className="text-sm flex gap-2 items-start pb-2"
                    style={{
                      color: "var(--muted)",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <span
                      style={{ color: "var(--green-light)" }}
                      className="font-bold shrink-0"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Job List */}
          <div className="md:col-span-3 flex flex-col gap-3">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}