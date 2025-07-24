import React from 'react';
import { BlogMeta } from '../utils/mdx';

interface BlogCardProps {
    post: BlogMeta;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
    <article className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
        {/* Image */}
        <div className="aspect-video overflow-hidden">
            <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
        </div>
        
        {/* Content */}
        <div className="p-6">
            {/* Category & Read Time */}
            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {post.category}
                </span>
                <span>{post.readTime}</span>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                <a href={post.slug} className="stretched-link">
                    {post.title}
                </a>
            </h3>
            
            {/* Excerpt */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {post.excerpt}
            </p>
            
            {/* Date */}
            <time className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            </time>
        </div>
    </article>
);

export default BlogCard;