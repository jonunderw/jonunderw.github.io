import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

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

export interface ParsedMarkdown {
  meta: BlogMeta;
  html: string;
  content: string; // Raw markdown content
}

// Configure the remark processor
const processor = remark()
  .use(remarkParse)
  .use(remarkGfm) // GitHub Flavored Markdown
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeHighlight) // Syntax highlighting
  .use(rehypeStringify, { allowDangerousHtml: true });

export function getAllPostSlugs(): string[] {
  console.log(postsDirectory);
  return fs.readdirSync(postsDirectory).map((file) => file.replace(/\.mdx?$/, ""));
}

export async function getPostBySlug(slug: string): Promise<ParsedMarkdown> {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(rawContent);

  // Process markdown to HTML
  const processedContent = await processor.process(content);
  const html = String(processedContent);

  return {
    meta: {
      ...frontmatter,
      slug: frontmatter.slug || slug
    } as BlogMeta,
    html,
    content
  };
}

export async function getAllPosts(): Promise<ParsedMarkdown[]> {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug))
  );

  return posts
    .filter((post) => post.meta.published !== false)
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
}

// Utility function to estimate read time
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}