import React from 'react';
import { Link } from 'react-router-dom';
import { BlogMeta } from '../types/BlogMeta';

interface BlogCardProps {
    post: BlogMeta;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
            {post.imageUrl && (
                <div className="aspect-video overflow-hidden">
                    <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}
            
            <div className="p-6">
                {post.category && (
                    <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-3">
                        {post.category}
                    </span>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    <Link to={`/blogs/${post.slug}`}>
                        {post.title}
                    </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
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
                                className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                        {post.tags.length > 3 && (
                            <span className="px-2 py-1 text-xs text-gray-500">
                                +{post.tags.length - 3} more
                            </span>
                        )}
                    </div>
                )}
                
                <Link 
                    to={`/blogs/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
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