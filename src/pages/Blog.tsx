import React, { useState, useEffect } from "react";
import BlogCard from '../components/BlogCard';
import { BlogMeta } from '../types/BlogMeta';

const BlogPage: React.FC = () => {
    const [posts, setPosts] = useState<BlogMeta[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                setLoading(true);
                // Import the generated index file
                const { default: postsData } = await import('../data/blogs/index.json');
                
                // Sort by date (newest first)
                const sortedPosts = (postsData as BlogMeta[]).sort((a, b) => 
                    new Date(b.date).getTime() - new Date(a.date).getTime()
                );
                setPosts(sortedPosts);
            } catch (err) {
                setError('Failed to load blog posts');
                console.error('Error loading posts:', err);
            } finally {
                setLoading(false);
            }
        };

        loadPosts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#10172a] to-[#1e293b] pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
                        <p className="mt-4 text-cyan-200">Loading blog posts...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#10172a] to-[#1e293b] pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <p className="text-red-400">{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#10172a] to-[#1e293b] pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                        Blog
                    </h1>
                    <p className="text-xl text-cyan-200 max-w-2xl mx-auto">
                        Thoughts, tutorials, and insights about web development, programming, and technology.
                    </p>
                </div>
                
                {/* Blog Grid */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <div
                                key={post.slug}
                                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0a0f1c] shadow-xl border border-cyan-900/40 hover:border-cyan-400 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-indigo-900/30 opacity-60"></div>
                                <div className="relative">
                                    <BlogCard post={post} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-cyan-200">No blog posts available yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;