import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl tracking-tight [color:var(--fg)] sm:text-5xl">
          Alec Davy
        </h1>
        <p className="mt-4 max-w-2xl text-lg [color:var(--muted)]">
          UX &amp; Product Designer crafting thoughtful digital experiences. I focus on
          understanding people and translating their needs into intuitive, impactful products.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/work"
            className="rounded-lg [background-color:var(--fg)] px-5 py-2.5 text-sm font-medium [color:var(--bg)] transition-opacity hover:opacity-80"
          >
            View Work
          </Link>
          <Link
            href="/about"
            className="rounded-lg border [border-color:var(--bd)] px-5 py-2.5 text-sm font-medium [color:var(--fg)] transition-colors hover:[background-color:var(--sf)]"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <section>
          <h2 className="mb-8 text-sm font-medium uppercase tracking-wider [color:var(--muted-strong)]">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                frontmatter={project.frontmatter}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
