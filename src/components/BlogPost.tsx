import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPostData } from '../types/BlogPostData';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Audio URL based on slug
  const audioUrl = slug ? `/audio/${slug}.mp3` : null;

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
      <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#10172a] to-[#1e293b] pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
            <p className="mt-4 text-cyan-200">Loading blog post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#10172a] to-[#1e293b] pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Post Not Found</h1>
            <p className="text-cyan-200 mb-6">{error || "The blog post you're looking for doesn't exist."}</p>
            <Link
              to="/blogs"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition-colors"
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
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#10172a] to-[#1e293b] pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-[#1e293b] to-[#0a0f1c] rounded-3xl shadow-xl border border-cyan-900/40">
        {/* Back to Blog Link */}
        <div className="mb-8">
          <Link
            to="/blogs"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-200 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              {meta.title}
            </h1>



          </div>

          {meta.imageUrl && (
            <img
              src={meta.imageUrl}
              alt={meta.title}
              className="w-full aspect-[3/2] max-h-[32rem] object-cover rounded-2xl shadow-lg mb-8 mt-6"
              style={{ maxHeight: '32rem' }}
            />
          )}
          {/* {meta.category && (
            <span className="inline-block px-3 py-1 text-sm font-medium text-cyan-300 bg-cyan-900/40 border border-cyan-700 rounded-full">
              {meta.category}
            </span>
          )} */}
          <div className="space-y-4">
            <p className="text-xl text-cyan-200 leading-relaxed">
              {meta.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-cyan-400">
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
                    className="px-3 py-1 text-xs font-medium text-cyan-200 bg-cyan-900/40 border border-cyan-700 rounded-full hover:bg-cyan-800 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Audio Player & Download */}
        {audioUrl && (
          <div className="my-8 flex flex-col items-center gap-4">
            <p className="text-cyan-200 text-base text-center">
              For a more in-depth version of this blog in podcast format, please listen or download the audio below.
            </p>
            <audio controls className="w-full max-w-md">
              <source src={audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <a
              href={audioUrl}
              download
              className="inline-block px-4 py-2 bg-cyan-700 text-white rounded shadow hover:bg-cyan-600 transition"
            >
              Download Audio
            </a>
            <div className="text-xs text-cyan-400 mt-2 text-center">
              Powered by <span className="font-semibold text-cyan-300">NotebookLLM</span>
            </div>
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-white prose-li:text-white prose-strong:text-white prose-em:text-white prose-a:text-white prose-a:no-underline hover:prose-a:text-cyan-200 prose-blockquote:border-l-cyan-500 prose-blockquote:bg-cyan-900/20 prose-code:bg-[#10172a] prose-code:text-white prose-pre:bg-[#10172a]"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-cyan-900/40">
          <div className="flex justify-between items-center">
            <Link
              to="/blogs"
              className="inline-flex items-center px-4 py-2 border border-cyan-900/40 text-base font-medium rounded-md text-cyan-200 bg-[#10172a] hover:bg-cyan-900 hover:text-white transition-colors"
            >
              ← All Posts
            </Link>

            <div className="text-sm text-cyan-400">
              Published on {new Date(meta.date).toLocaleDateString()}
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;