import matter from 'gray-matter';
import { marked } from 'marked';
import { BlogPost } from '../types/BlogPost';
import hljs from 'highlight.js';

// Configure marked for syntax highlighting
const renderer = new marked.Renderer();

renderer.code = function({ text, lang, escaped }: { text: string; lang?: string; escaped?: boolean }): string {
  const language = lang || 'plaintext';
  const validLang = hljs.getLanguage(language) ? language : 'plaintext';

  try {
    const highlighted = hljs.highlight(text, { language: validLang }).value;
    return `<pre><code class="hljs language-${validLang}">${highlighted}</code></pre>`;
  } catch (error) {
    console.warn(`Highlight.js failed for language "${language}". Displaying raw code.`, error);
    return `<pre><code class="language-${language}">${text}</code></pre>`;
  }
};

marked.setOptions({
  renderer: renderer,
  gfm: true,
  breaks: true,
  pedantic: false,
});

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

// Process a single blog post from markdown content
export function processBlogPost(markdownContent: string, slug: string): BlogPostWithContent {
  const { data, content } = matter(markdownContent);

  // Validate and type-assert front matter data
  const frontMatterData = data as Partial<BlogPost>;

  // Provide default values if front matter is missing fields
  const title = frontMatterData.title || 'Untitled Blog Post';
  const date = frontMatterData.date || new Date().toISOString().split('T')[0];
  const excerpt = frontMatterData.excerpt || content.substring(0, 150) + '...';
  const category = frontMatterData.category || 'General';
  const readTime = frontMatterData.readTime || '5 min read';
  const imageUrl = frontMatterData.imageUrl || 'https://via.placeholder.com/400x250';

  return {
    title: String(title),
    date: String(date),
    excerpt: String(excerpt),
    category: String(category),
    readTime: String(readTime),
    imageUrl: String(imageUrl),
    slug: slug,
    content: String(marked(content)) // Cast to string to fix type error
  };
}

// Use Vite's import.meta.glob to get all markdown files in the content directory
const markdownFiles = import.meta.glob<string>('/src/content/blogs/*.md', {
  as: 'raw',
  eager: false,
});

// Load a single blog post from a markdown module
export async function loadBlogPost(filePath: string): Promise<BlogPostWithContent | null> {
  const fileLoader = markdownFiles[filePath];
  console.log(markdownFiles);
  if (!fileLoader) {
    console.error(`Blog post not found for path: ${filePath}`);
    return null;
  }

  try {
    const markdownContent = await fileLoader();
    const filename = filePath.split('/').pop() || '';
    const slug = `/blogs/${filename.replace('.md', '')}`;
    console.log(slug);
    return processBlogPost(markdownContent, slug);
  } catch (error) {
    console.error(`Error loading blog post from ${filePath}:`, error);
    return null;
  }
}

// For now, let's use static data to avoid the Buffer issue
export async function loadAllBlogPosts(): Promise<BlogPost[]> {
  return [
    {
      title: "Welcome to My Blog",
      date: "2024-06-01",
      excerpt: "This is the first post on my new blog. Stay tuned for more updates and exciting content!",
      slug: "/blog/welcome-to-my-blog",
      imageUrl: "https://via.placeholder.com/400x250",
      category: "General",
      readTime: "3 min read"
    },
    {
      title: "Getting Started with React",
      date: "2024-06-15",
      excerpt: "Learn the fundamentals of React and how to build your first component with modern best practices.",
      slug: "/blog/getting-started-react",
      imageUrl: "https://via.placeholder.com/400x250",
      category: "React",
      readTime: "5 min read"
    },
    {
      title: "TypeScript Tips and Tricks",
      date: "2024-07-01",
      excerpt: "Discover advanced TypeScript patterns that will make your code more robust and maintainable.",
      slug: "/blog/typescript-tips",
      imageUrl: "https://via.placeholder.com/400x250",
      category: "TypeScript",
      readTime: "7 min read"
    }
  ];
}

// Optional: Example of how to use it (e.g., in a component)
// import { loadAllBlogPosts } from './your-file-path';
//
// useEffect(() => {
//   async function fetchPosts() {
//     const allPosts = await loadAllBlogPosts();
//     console.log(allPosts);
//   }
//   fetchPosts();
// }, []);