import fs from "fs";
import path from "path";
import { getAllPosts } from "../src/utils/mdx";

(async () => {
  const outDir = path.join(process.cwd(), "src/data/mdx");
  fs.mkdirSync(outDir, { recursive: true });

  const posts = await getAllPosts();

  posts.forEach((post) => {
    const filepath = path.join(outDir, `${post.meta.slug}.tsx`);
    const fileContent = `
/** @jsxImportSource react */
import { mdx } from '@mdx-js/react'

${post.code}

export const meta = ${JSON.stringify(post.meta)};
export default MDXContent;
`;

    fs.writeFileSync(filepath, fileContent);
  });

  // Optionally generate a list of post metadata
  const indexData = posts.map((p) => p.meta);
  fs.writeFileSync(path.join(outDir, `index.json`), JSON.stringify(indexData, null, 2));
})();