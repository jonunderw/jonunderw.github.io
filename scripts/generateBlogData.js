import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDir = path.join(process.cwd(), 'src/content/blogs');
const outputFile = path.join(process.cwd(), 'src/data/blogPosts.ts');

function generateBlogData() {
  const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));
  
  const posts = files.map(file => {
    const filePath = path.join(contentDir, file);
    const markdownContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(markdownContent);
    const slug = `/blog/${file.replace('.md', '')}`;
    
    return {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category || 'General',
      readTime: data.readTime || '5 min read',
      imageUrl: data.imageUrl || 'https://via.placeholder.com/400x250',
      slug: slug,
      published: data.published ?? true
    };
  }).filter(post => post.published);

  const output = `import { BlogPost } from '../types/BlogPost';

export const posts: BlogPost[] = ${JSON.stringify(posts, null, 2)};
`;

  fs.writeFileSync(outputFile, output);
  console.log(`Generated blog data for ${posts.length} posts`);
}

generateBlogData();