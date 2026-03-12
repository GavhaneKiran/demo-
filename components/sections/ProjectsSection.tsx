import { projects } from "@/lib/data";
import type { Project } from "@/types";

const statusStyles: Record<Project["status"], string> = {
  planned:  "bg-[#e8a020]/20 text-[#e8a020]",
  progress: "bg-[#c97d4e]/25 text-[#f0b07a]",
  approved: "bg-white/10 text-white/80",
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-18 px-6" style={{ background: "#4a1e08" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="inline-block bg-[#e8a020] text-[#1e0f06] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            🚀 Future Projects
          </span>
          <h2 className="font-playfair font-black text-white text-4xl">
            Expansion &amp; Development Plan
          </h2>
          <span className="font-marathi text-white/60 text-lg block mt-1">
            विस्तार व विकास योजना
          </span>
          <p className="text-white/65 text-sm mt-2 max-w-xl">
            Our roadmap for upgrading infrastructure, diversifying revenue, and improving
            farmer welfare across the next five years.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card relative bg-white/[0.07] border border-white/15 rounded-xl p-7 hover:bg-white/[0.12] hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="font-playfair text-white text-xl mb-1">{project.title}</h3>
              <span className="font-marathi text-[#e8a020] text-sm block mb-3">
                {project.titleMr}
              </span>
              <p className="text-white/65 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide px-3 py-1 rounded-full ${statusStyles[project.status]}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {project.statusLabel}
              </span>
              <div className="text-white/50 text-xs mt-2.5">{project.investment}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
