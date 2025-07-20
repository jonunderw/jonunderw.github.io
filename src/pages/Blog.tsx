import React from "react";

interface BlogPost {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
}

const posts: BlogPost[] = [
    {
        title: "Welcome to My Blog",
        date: "2024-06-01",
        excerpt: "This is the first post on my new blog. Stay tuned for more updates!",
        slug: "/blog/welcome-to-my-blog",
    },
    // Add more posts here
];

const BlogPage: React.FC = () => (
    <main style={{ maxWidth: 700, margin: "0 auto", padding: "2rem", paddingTop: "6rem" }}>
        <h1>Blog</h1>
        <ul style={{ listStyle: "none", padding: 0 }}>
            {posts.map((post) => (
                <li key={post.slug} style={{ marginBottom: "2rem" }}>
                    <h2>
                    </h2>
                    <small>{post.date}</small>
                    <p>{post.excerpt}</p>
                </li>
            ))}
        </ul>
    </main>
);

export default BlogPage;