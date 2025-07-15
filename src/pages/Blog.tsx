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

const BlogPage = () => <div className="p-4"><h1>My Blog</h1></div>;


export default BlogPage;