import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#10172a] to-[#1e293b]">
      {/* Hero Section */}
      <div className="relative">
        {/* Glassy/gradient overlay */}
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-br from-blue-900/80 via-indigo-900/80 to-cyan-900/80 blur-2xl"></div>

        {/* Content */}
        <div className="relative pt-32 pb-32 sm:pt-40 sm:pb-40 bg-gradient-to-br from-[#10172a] via-[#0a0f1c] to-[#1e293b]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-12">
              {/* Centered Code-style Text Content */}
              <div className="w-full text-center">
                <pre className="bg-[#10172a]/80 border border-cyan-900/40 rounded-2xl px-8 py-8 text-white text-lg sm:text-2xl md:text-3xl font-mono leading-snug shadow-xl whitespace-pre-line mx-auto max-w-2xl select-none">
                  if(<span className="text-cyan-400">idea.isPossible()</span> <span className="text-cyan-400">&amp;&amp;</span> <span className="text-cyan-400">idea.isValuable()</span>)
                  &#123;
                  <span className="text-cyan-400"> buildIt(); </span>
                  &#125;
                </pre>
                <div className="mt-10 flex flex-col sm:flex-row sm:gap-6 gap-4 items-center justify-center">
                  <Link
                    to="/blogs"
                    className="inline-flex items-center justify-center rounded-md border border-cyan-700 bg-[#10172a] px-8 py-3 text-base font-semibold text-cyan-300 hover:bg-cyan-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition-colors shadow-lg"
                  >
                    Read the Blog
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center rounded-md border border-cyan-700 bg-[#10172a] px-8 py-3 text-base font-semibold text-cyan-300 hover:bg-cyan-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition-colors shadow-lg"
                  >
                    About Me
                  </Link>
                  <a
                    href="mailto:jon@example.com"
                    className="inline-flex items-center justify-center rounded-md border border-cyan-400 bg-transparent px-8 py-3 text-base font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-[#10172a] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition-colors shadow-lg"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Featured Content/Topics - Bento Grid */}
      < div className="relative -mt-16" >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Topics</h2>
            <p className="text-xl text-cyan-200">Explore the core areas I write about</p>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Product Strategy & Development */}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0a0f1c] p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-cyan-900/40">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-indigo-900/30 opacity-60"></div>
                <div className="relative">
                  <div className="mb-4">
                    <div className="h-10 w-10 rounded-lg bg-cyan-600 flex items-center justify-center mb-3">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      📊 Product Management
                    </h3>
                  </div>
                  <p className="text-cyan-200 mb-4 leading-relaxed">
                    Deep dives into product management, strategy, roadmapping, and the art of building products that users love.
                    From ideation to launch and beyond.
                  </p>
                  <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300">
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
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0a0f1c] p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-purple-900/40">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 opacity-60"></div>
                <div className="relative">
                  <div className="mb-4">
                    <div className="h-10 w-10 rounded-lg bg-purple-600 flex items-center justify-center mb-3">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      ✳️ Engineering & Architecture
                    </h3>
                  </div>
                  <p className="text-purple-200 mb-4 leading-relaxed">
                    System design, cloud architecture, and engineering best practices.
                    Building scalable, maintainable solutions.
                  </p>
                  <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300">
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
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0a0f1c] p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-green-900/40">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-emerald-900/30 opacity-60"></div>
                <div className="relative">
                  <div className="mb-4">
                    <div className="h-10 w-10 rounded-lg bg-green-600 flex items-center justify-center mb-3">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                      ⚙️ Automation & AI
                    </h3>
                  </div>
                  <p className="text-green-200 mb-4 leading-relaxed">
                    Exploring GenAI, automation tools, and workflows that make teams more efficient and productive.
                  </p>
                  <div className="flex items-center text-green-400 font-medium group-hover:text-green-300">
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
      </div >

      {/* About Preview Section - Bento Grid */}
      < div className="bg-gradient-to-br from-[#10172a] to-[#0a0f1c] py-16" >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* About Content - Spans 2 columns */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0a0f1c] p-8 shadow-xl border border-cyan-900/40">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-indigo-900/30 opacity-60"></div>
                <div className="relative">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    A bit about me
                  </h2>
                  <p className="text-lg text-cyan-200 mb-6 leading-relaxed">
                    Hey there—I'm a builder at heart. With over 10 years in software engineering and product management,
                    I've made a career out of turning complex systems into simple, powerful solutions that actually get the job done.
                  </p>
                  <p className="text-lg text-cyan-200 mb-8 leading-relaxed">
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
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0a0f1c] p-6 shadow-xl border border-green-900/40">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-emerald-900/30 opacity-60"></div>
                <div className="relative text-center">
                  <div className="text-3xl font-bold text-white mb-2">10+</div>
                  <div className="text-sm text-cyan-200">Years Experience</div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0a0f1c] p-6 shadow-xl border border-purple-900/40">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 opacity-60"></div>
                <div className="relative text-center">
                  <div className="text-3xl font-bold text-white mb-2">20+</div>
                  <div className="text-sm text-purple-200">Products Launched</div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0a0f1c] p-6 shadow-xl border border-cyan-900/40">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-indigo-900/30 opacity-60"></div>
                <div className="relative text-center">
                  <div className="text-2xl font-bold text-white mb-2">∞</div>
                  <div className="text-sm text-cyan-200">Things to Build</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default HomePage;