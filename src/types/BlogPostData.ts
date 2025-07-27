import { BlogMeta } from "./BlogMeta";

export interface BlogPostData {
    meta: BlogMeta;
    html: string; // Processed HTML content
    content: string; // Raw markdown content
}