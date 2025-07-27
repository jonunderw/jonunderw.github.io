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