import Link from "next/link";
import type { ProjectFrontmatter } from "@/lib/projects";

interface ProjectCardProps {
  slug: string;
  frontmatter: ProjectFrontmatter;
}

export default function ProjectCard({ slug, frontmatter }: ProjectCardProps) {
  return (
    <Link href={`/work/${slug}`} className="group block">
      <div className="mb-3 aspect-[4/3] overflow-hidden rounded-lg [background-color:var(--sf)]">
        {frontmatter.thumbnail && (
          <img
            src={frontmatter.thumbnail}
            alt={frontmatter.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <h3 className="font-medium [color:var(--fg)] group-hover:[color:var(--muted)] transition-colors">
        {frontmatter.title}
      </h3>
      <p className="mt-1 text-sm [color:var(--muted)]">{frontmatter.description}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {frontmatter.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs [color:var(--muted-strong)]">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
