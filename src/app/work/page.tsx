import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Work — Alec Davy",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl tracking-tight [color:var(--fg)]">Work</h1>
      <p className="mt-2 [color:var(--muted)]">Selected projects and case studies.</p>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            frontmatter={project.frontmatter}
          />
        ))}
      </div>

      {projects.length === 0 && (
        <p className="mt-12 [color:var(--muted-strong)]">Projects coming soon.</p>
      )}
    </div>
  );
}
