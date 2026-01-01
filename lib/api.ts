import { Post } from "@/interfaces/post";
import { Projects } from "@/interfaces/projects";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const blogDirectory = join(process.cwd(), "_blog");
const projectsDirectory = join(process.cwd(), "_projects");

export function getbloglugs() {
  return fs.readdirSync(blogDirectory);
}

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getProjectByUrl(url: string) {
  const realUrl = url.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, `${realUrl}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, url: realUrl, content } as unknown as Projects;
}

export function getAllblog(): Post[] {
  const slugs = getbloglugs();
  const blog = slugs
    .map((slug) => getPostBySlug(slug))
    // sort blog by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return blog;
}

export function getAllProject(): Projects[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectByUrl(slug))
    .sort((project1, project2) => (project1.title > project2.title ? 1 : -1));
  return projects;
}