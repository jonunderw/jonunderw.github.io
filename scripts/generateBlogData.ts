import fs from "fs";
import path from "path";
import { getAllPosts } from "../src/utils/mdx.js";

(async () => {
  const outDir = path.join(process.cwd(), "src/data/mdx");
  
  // Clean the output directory first
  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outDir, { recursive: true });

  const posts = await getAllPosts();

  // Generate individual post data as JSON only
  posts.forEach((post) => {
    const filepath = path.join(outDir, `${post.meta.slug}.json`);
    const postData = {
      meta: post.meta,
      content: post.code // This will be the compiled MDX
    };
    
    fs.writeFileSync(filepath, JSON.stringify(postData, null, 2));
    console.log(`Generated: ${post.meta.slug}.json`);
  });

  // Generate index of post metadata
  const indexData = posts.map((p) => p.meta);
  fs.writeFileSync(path.join(outDir, `index.json`), JSON.stringify(indexData, null, 2));

  console.log(`Generated ${posts.length} blog posts as JSON files`);
})();