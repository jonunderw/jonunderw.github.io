import React from 'react';
import { jobExperiences } from '../data/jobExperiences';
import { personalTimeline } from '../data/personalTimeline';
import { socialHandles } from '../data/socialHandles';

const AboutPage: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#10172a] to-[#1e293b] pt-20">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">About Me</h1>
      </div>

      <div className="space-y-8">
        {/* Row 1: Profile Photo & About Description */}
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0a0f1c] shadow-xl border border-cyan-900/40 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 to-indigo-900/30 opacity-60"></div>
          <div className="relative p-8 lg:p-12">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-center">
              {/* Profile Image */}
              <div className="lg:col-span-4">
                <div className="flex justify-center lg:justify-start">
                  <img
                    className="aspect-[3/4] w-full max-w-sm rounded-2xl bg-gray-900 object-cover shadow-lg border border-cyan-900/40"
                    src="https://via.placeholder.com/400x500"
                    alt="Jon Underwood"
                  />
                </div>
              </div>
              {/* About Text */}
              <div className="mt-8 lg:col-span-8 lg:mt-0">
                <div className="relative p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">Here's a bit about myself</h2>
                  <p className="text-xl leading-8 text-cyan-200 mb-6">
                    Hey there—I'm a builder at heart. With over 10 years in software engineering and product management, I've made a career out of turning complex systems into simple, powerful solutions that actually get the job done. I love bringing products to life—from that first spark of an idea to seeing it thrive in the hands of real users.
                  </p>
                  <p className="text-xl leading-8 text-cyan-200 mb-6">
                    These days, as a Senior Technical Product Manager, I focus on building products that meet real-world needs—most recently leading Appraisal Modernization efforts by applying a strong architectural background, GenAI capabilities, and Lean Product principles to power the next generation of Products.
                    In parallel, I am also leading the development and future launch of a new Appraisal Review product that's positioned to drive meaningful revenue and portfolio growth.
                  </p>
                  <p className="text-xl leading-8 text-cyan-200 mb-6">
                    I'm always looking for ways to increase operational efficiency, optimize cloud infrastructure, and improve quality and delivery.
                    I've led cloud cost reductions, simplified vendor integrations, and designed pipelines that power next-gen analytics platforms—all while keeping external users and internal teams on the same page.
                  </p>
                  <p className="text-xl leading-8 text-cyan-200">
                    Outside of work, you'll still find me building, exploring, and orchestrating—just in different forms.
                    Whether that be working on a new woodworking project, hiking and kayaking, or playing music.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Skills & Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills & Technologies */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#232946] to-[#10172a] shadow-lg border border-indigo-900/40 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 opacity-60"></div>
            <div className="relative p-8">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Skills & Technologies</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'MongoDB', 'PostgreSQL'].map((skill) => (
                  <div key={skill} className="flex items-center p-3 bg-[#232946] rounded-lg shadow-sm border border-indigo-900/40">
                    <div className="h-2 w-2 bg-indigo-400 rounded-full mr-3"></div>
                    <span className="text-cyan-100 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interests & Hobbies */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#132e2e] to-[#10172a] shadow-lg border border-green-900/40 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-emerald-900/30 opacity-60"></div>
            <div className="relative p-8">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-lg bg-green-600 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Interests & Hobbies</h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {['Photography', 'Hiking', 'Reading', 'Traveling', 'Open Source', 'AI & Machine Learning', 'Music Production', 'Gaming'].map((interest) => (
                  <div key={interest} className="flex items-center p-3 bg-[#132e2e] rounded-lg shadow-sm border border-green-900/40">
                    <div className="h-2 w-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-cyan-100 font-medium">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Career Timeline & Personal Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Career Timeline */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0a0f1c] shadow-lg border border-cyan-900/40 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 opacity-60"></div>
            <div className="relative p-8">
              <div className="flex items-center mb-8">
                <div className="h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Career Timeline</h2>
              </div>
              <div className="flow-root">
                <ul className="-mb-8">
                  {jobExperiences.map((experience, experienceIdx) => (
                    <li key={experienceIdx}>
                      <div className="relative pb-8">
                        {experienceIdx !== jobExperiences.length - 1 ? (
                          <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-cyan-900/40" aria-hidden="true" />
                        ) : null}
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-[#10172a]">
                              <span className="text-white text-sm font-medium">{experience.year.slice(-2)}</span>
                            </span>
                          </div>
                          <div className="flex min-w-0 flex-1 justify-between space-x-4">
                            <div>
                              <p className="text-lg font-semibold text-white">
                                {experience.role}
                              </p>
                              <p className="text-base font-medium text-cyan-400 mb-2">
                                {experience.company}
                              </p>
                              <p className="text-sm text-cyan-200 mb-3">
                                {experience.period}
                              </p>
                              <p className="text-sm text-cyan-100">
                                {experience.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Personal Timeline */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#232946] to-[#10172a] shadow-lg border border-purple-900/40 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 opacity-60"></div>
            <div className="relative p-8">
              <div className="flex items-center mb-8">
                <div className="h-12 w-12 rounded-lg bg-purple-600 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Personal Journey</h2>
              </div>
              <div className="flow-root">
                <ul className="-mb-8">
                  {personalTimeline.map((milestone, milestoneIdx) => (
                    <li key={milestoneIdx}>
                      <div className="relative pb-8">
                        {milestoneIdx !== personalTimeline.length - 1 ? (
                          <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-purple-900/40" aria-hidden="true" />
                        ) : null}
                        <div className="relative flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <span className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center ring-8 ring-[#10172a]">
                              <span className="text-white text-sm font-medium">{milestone.year.slice(-2)}</span>
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div>
                              <p className="text-lg font-semibold text-white">
                                {milestone.event}
                              </p>
                              <p className="text-sm text-purple-200 mb-3">
                                {milestone.period}
                              </p>
                              <p className="text-sm text-purple-100">
                                {milestone.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: Social Handles */}
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0a0f1c] shadow-lg border border-cyan-900/40 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-indigo-900/30 opacity-60"></div>
          <div className="relative p-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Let's Connect</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {socialHandles.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl border border-cyan-900/40 bg-[#10172a] p-6 shadow-sm hover:border-cyan-400 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {social.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                        {social.name}
                      </p>
                      <p className="text-sm text-cyan-200 truncate">
                        {social.handle}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;