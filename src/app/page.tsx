import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Alec Davy
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          UX &amp; Product Designer crafting thoughtful digital experiences. I focus on
          understanding people and translating their needs into intuitive, impactful products.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/work"
            className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            View Work
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <section>
          <h2 className="mb-8 text-sm font-medium uppercase tracking-wider text-gray-400">
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
