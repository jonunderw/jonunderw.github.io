import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPostData } from '../types/BlogPostData';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setError('No post slug provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Dynamically import the generated blog post JSON
        const { default: postData } = await import(`../data/blogs/${slug}.json`);
        setPost(postData as BlogPostData);
      } catch (err) {
        setError('Failed to load blog post');
        console.error('Error loading post:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading blog post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-6">{error || 'The blog post you\'re looking for doesn\'t exist.'}</p>
            <Link
              to="/blogs"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { meta, html } = post;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Blog Link */}
        <div className="mb-8">
          <Link
            to="/blogs"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          {meta.imageUrl && (
            <img
              src={meta.imageUrl}
              alt={meta.title}
              className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg mb-8"
            />
          )}
          
          <div className="space-y-4">
            {meta.category && (
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                {meta.category}
              </span>
            )}
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              {meta.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {meta.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <time dateTime={meta.date}>
                {new Date(meta.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              
              {meta.readTime && (
                <>
                  <span>•</span>
                  <span>{meta.readTime}</span>
                </>
              )}
            </div>
            
            {meta.tags && meta.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-800 prose-blockquote:border-l-blue-500 prose-blockquote:bg-gray-50 prose-code:bg-gray-100 prose-code:text-red-600 prose-pre:bg-gray-900">
          <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
            <div 
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link
              to="/blogs"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              ← All Posts
            </Link>
            
            <div className="text-sm text-gray-500">
              Published on {new Date(meta.date).toLocaleDateString()}
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;