import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectFrontmatter {
  title: string;
  description: string;
  role: string;
  team: string;
  timeline: string;
  tags: string[];
  thumbnail: string;
  featured: boolean;
  order: number;
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) return [];

  const files = fs.readdirSync(projectsDirectory).filter((f) => f.endsWith(".mdx"));

  const projects = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as ProjectFrontmatter,
      content,
    };
  });

  return projects.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.frontmatter.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getAllProjects();
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.slug);
}
