import fs from "fs";
import path from "path";
import { getAllPosts, calculateReadTime } from "../src/utils/markdown.js";

(async () => {
  const outDir = path.join(process.cwd(), "src/data/blogs");
  
  // Clean the output directory first
  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outDir, { recursive: true });

  const posts = await getAllPosts();

  // Generate individual post data as JSON
  posts.forEach((post) => {
    // Add read time if not already present
    if (!post.meta.readTime) {
      post.meta.readTime = calculateReadTime(post.content);
    }

    const filepath = path.join(outDir, `${post.meta.slug}.json`);
    const postData = {
      meta: post.meta,
      html: post.html, // Processed HTML content
      content: post.content // Raw markdown content
    };
    
    fs.writeFileSync(filepath, JSON.stringify(postData, null, 2));
    console.log(`Generated: ${post.meta.slug}.json`);
  });

  // Generate index of post metadata
  const indexData = posts.map((p) => p.meta);
  fs.writeFileSync(path.join(outDir, `index.json`), JSON.stringify(indexData, null, 2));

  console.log(`Generated ${posts.length} blog posts as JSON files`);
})();