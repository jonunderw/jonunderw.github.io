import React from 'react';
import { Link } from 'react-router-dom';
import { BlogMeta } from '../types/BlogMeta';

interface BlogCardProps {
    post: BlogMeta;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0a0f1c] shadow-xl border border-cyan-900/40 hover:border-cyan-400 transition-all duration-300 group">
            {/* Glassy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-indigo-900/30 opacity-60 pointer-events-none"></div>
            {post.imageUrl && (
                <div className="aspect-video overflow-hidden">
                    <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/80 to-transparent pointer-events-none" />
                </div>
            )}
            
            <div className="relative p-6">
                {post.category && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-300 bg-cyan-900/40 border border-cyan-700 rounded-full mb-3 uppercase tracking-wide">
                        {post.category}
                    </span>
                )}
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    <Link to={`/blogs/${post.slug}`}>
                        {post.title}
                    </Link>
                </h3>
                
                <p className="text-cyan-200 mb-4 line-clamp-3">
                    {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-sm text-cyan-400 mb-4">
                    <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        })}
                    </time>
                    {post.readTime && <span>{post.readTime}</span>}
                </div>
                
                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs font-medium text-cyan-200 bg-cyan-900/40 border border-cyan-700 rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                        {post.tags.length > 3 && (
                            <span className="px-2 py-1 text-xs text-cyan-400">
                                +{post.tags.length - 3} more
                            </span>
                        )}
                    </div>
                )}
                
                <Link 
                    to={`/blogs/${post.slug}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-200 font-medium transition-colors"
                >
                    Read More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </article>
    );
};

export default BlogCard;