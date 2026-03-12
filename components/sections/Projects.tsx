import { projects } from "@/lib/data";
import type { Project } from "@/types";

const STATUS_STYLES: Record<Project["status"], { bg: string; color: string }> = {
  planned:  { bg: "rgba(212,160,23,0.2)",  color: "var(--amber)" },
  progress: { bg: "rgba(82,183,136,0.2)",  color: "#52b788" },
  approved: { bg: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" },
};

function ProjectCard({ project }: { project: Project }) {
  const status = STATUS_STYLES[project.status];
  return (
    <div
      className="rounded-xl p-7 transition-all duration-200 hover:-translate-y-1 relative overflow-hidden group"
      style={{
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}>
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
        style={{ background: "var(--amber)" }} />
      <div className="text-4xl mb-4">{project.icon}</div>
      <h3 className="font-display font-black text-white text-lg mb-1">{project.title}</h3>
      <span className="font-marathi block text-sm mb-3" style={{ color: "var(--amber)" }}>{project.titleMr}</span>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
        {project.description}
      </p>
      <div className="flex items-center gap-2 mb-3">
        <span
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
          style={{ background: status.bg, color: status.color }}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {project.statusLabel}
        </span>
      </div>
      <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{project.investment}</p>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6" style={{ background: "var(--green)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
            style={{ background: "var(--amber)", color: "var(--green)" }}>
            🚀 Future Projects
          </span>
          <h2 className="font-display font-black text-4xl text-white mb-1">
            Expansion &amp; Development Plan
          </h2>
          <span className="font-marathi block text-lg mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
            विस्तार व विकास योजना
          </span>
          <p className="text-sm max-w-xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Our roadmap for upgrading infrastructure, diversifying revenue, and improving farmer welfare over the next five years.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
