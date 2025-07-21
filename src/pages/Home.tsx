import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero section with overlap */}
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        
        {/* Content */}
        <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Welcome to</span>
                <span className="block text-indigo-400">My Portfolio</span>
              </h1>
              <p className="mx-auto mt-6 max-w-md text-lg text-gray-300 sm:max-w-3xl">
                I'm a passionate developer creating engaging web experiences. 
                Explore my projects, read my thoughts, and learn more about my journey in tech.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  to="/blogs"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                >
                  Read Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section with overlap */}
      <div className="relative -mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-lg bg-white shadow-xl">
            <div className="grid grid-cols-1 gap-8 px-8 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-12">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Web Development</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Building modern, responsive web applications with the latest technologies and best practices.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 00-3.75-2.383M12 18.75a14.407 14.407 0 00-3.75 2.383 12.061 12.061 0 004.5 0zm0-5.25a6.01 6.01 0 019.75 2.383 14.407 14.407 0 00-3.75-2.383M12 13.5a6.01 6.01 0 01-9.75 2.383 14.406 14.406 0 003.75-2.383M12 18.75V13.5" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Technical Writing</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Sharing knowledge through detailed tutorials, insights, and experiences in software development.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Open Source</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Contributing to the developer community through open source projects and collaborative development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional content section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">About</h2>
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Passionate about creating exceptional experiences
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              I love building things that make a difference. Whether it's a sleek user interface, 
              a robust backend system, or an insightful blog post, I'm always looking for ways to 
              create value through technology.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;