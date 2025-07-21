import React, { useState, useEffect } from "react";
import BlogCard from '../components/BlogCard';
import { BlogPost } from '../types/BlogPost';
import { loadAllBlogPosts } from '../utils/blogUtils';

const BlogPage: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const loadedPosts = await loadAllBlogPosts();
                setPosts(loadedPosts);
            } catch (err) {
                setError('Failed to load blog posts');
                console.error('Error fetching posts:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <p className="mt-4 text-gray-600">Loading blog posts...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <p className="text-red-600">{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Blog
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Thoughts, tutorials, and insights about web development, programming, and technology.
                    </p>
                </div>
                
                {/* Blog Grid */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-600">No blog posts available yet.</p>
                    </div>
                )}
                
                {/* Load More Button (Optional) */}
                {posts.length > 0 && (
                    <div className="text-center mt-12">
                        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                            Load More Posts
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;