import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compile } from "@mdx-js/mdx";

const postsDirectory = path.join(process.cwd(), "content/blogs");

export interface BlogMeta {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  imageUrl?: string;
  category?: string;
  readTime?: string;
  published?: boolean;
  tags?: string[];
}

export interface ParsedMDX {
  meta: BlogMeta;
  code: string;
}

export function getAllPostSlugs(): string[] {
    console.log(postsDirectory);
    return fs.readdirSync(postsDirectory).map((file) => file.replace(/\.mdx$/, ""));
}

export async function getPostBySlug(slug: string): Promise<ParsedMDX> {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const rawContent = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(rawContent);
  const compiled = await compile(content, {
    jsx: true,
    outputFormat: "function-body",
    providerImportSource: "@mdx-js/react",
  });

  return {
    meta: data as BlogMeta,
    code: String(compiled),
  };
}

export async function getAllPosts(): Promise<ParsedMDX[]> {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(slugs.map(getPostBySlug));
  return posts.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}