export interface BlogPost {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
    imageUrl?: string;
    category?: string;
    readTime?: string;
    published?: boolean;
}