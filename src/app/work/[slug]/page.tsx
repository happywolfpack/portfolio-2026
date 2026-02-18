import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { mdxComponents } from "@/components/mdx";
import ProjectHeader from "@/components/mdx/ProjectHeader";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.frontmatter.title} — Alec Davy`,
    description: project.frontmatter.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <ProjectHeader
        title={frontmatter.title}
        description={frontmatter.description}
        role={frontmatter.role}
        team={frontmatter.team}
        timeline={frontmatter.timeline}
      />
      <article className="prose">
        <MDXRemote source={content} components={mdxComponents} />
      </article>
    </div>
  );
}
