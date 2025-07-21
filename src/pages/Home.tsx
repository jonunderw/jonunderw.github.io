import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        
        {/* Content */}
        <div className="relative pt-32 pb-32 sm:pt-40 sm:pb-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block mb-2">Building & Orchestrating</span>
                <span className="block text-indigo-400">Products, Solutions, & Relationships</span>
              </h1>
            
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
                <Link
                  to="/blogs"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                >
                  Read the Blog
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                >
                  About Me
                </Link>
                <a
                  href="mailto:jon@example.com"
                  className="inline-flex items-center justify-center rounded-md border border-indigo-400 bg-transparent px-8 py-3 text-base font-medium text-indigo-400 hover:bg-indigo-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content/Topics - Bento Grid */}
      <div className="relative -mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Topics</h2>
            <p className="text-xl text-gray-300">Explore the core areas I write about</p>
          </div>

          

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Product Strategy & Development */}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-50"></div>
                <div className="relative">
                  <div className="mb-4">
                    <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center mb-3">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      📊 Product Management
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Deep dives into product management, strategy, roadmapping, and the art of building products that users love. 
                    From ideation to launch and beyond.
                  </p>
                  <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                    <span className="mr-2">Discover</span>
                    <svg className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Engineering & Architecture*/}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-100 opacity-50"></div>
                <div className="relative">
                  <div className="mb-4">
                    <div className="h-10 w-10 rounded-lg bg-purple-600 flex items-center justify-center mb-3">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      ✳️ Engineering & Architecture
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    System design, cloud architecture, and engineering best practices. 
                    Building scalable, maintainable solutions.
                  </p>
                  <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                    <span className="mr-2">Discover</span>
                    <svg className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Automation & AI*/}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 opacity-50"></div>
                <div className="relative">
                  <div className="mb-4">
                    <div className="h-10 w-10 rounded-lg bg-green-600 flex items-center justify-center mb-3">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      ⚙️ Automation & AI
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Exploring GenAI, automation tools, and workflows that make teams more efficient and productive.
                  </p>
                  <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                    <span className="mr-2">Discover</span>
                    <svg className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Preview Section - Bento Grid */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* About Content - Spans 2 columns */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-100 opacity-50"></div>
                <div className="relative">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    A bit about me
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Hey there—I'm a builder at heart. With over 10 years in software engineering and product management, 
                    I've made a career out of turning complex systems into simple, powerful solutions that actually get the job done.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    These days, as a Senior Technical Product Manager, I focus on building products that meet real-world needs—most recently 
                    leading Appraisal Modernization efforts by applying a strong architectural background, GenAI capabilities, 
                    and Lean Product principles.
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                  >
                    Learn More About Me
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Stats/Info - 1 column */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 opacity-50"></div>
                <div className="relative text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-100 opacity-50"></div>
                <div className="relative text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
                  <div className="text-sm text-gray-600">Products Launched</div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-100 opacity-50"></div>
                <div className="relative text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">∞</div>
                  <div className="text-sm text-gray-600">Things to Build</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;