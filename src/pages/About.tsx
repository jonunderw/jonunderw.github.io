import React from 'react';
import { jobExperiences } from '../data/jobExperiences';
import { personalTimeline } from '../data/personalTimeline';
import { socialHandles } from '../data/socialHandles';

const skills = [
  {
    group: "Product Management",
    color: "bg-cyan-700",
    border: "border-cyan-900/40",
    items: ["Jira", "Pendo", "Aha!", "Figma", "Confluence", "Canva"],
  },
  {
    group: "AI Tooling",
    color: "bg-green-700",
    border: "border-green-900/40",
    items: [
      "OpenAI",
      "GitHub Co-Pilot",
      "Claude",
      "Grok",
      "NotebookLLM",
      "n8n",
      "& adding more daily",
    ],
  },
  {
    group: "Vibe Coding",
    color: "bg-indigo-700",
    border: "border-indigo-900/40",
    items: [
      "JavaScript",
      "ReactJS",
      "TailwindCSS",
      "SQL",
      "Python",
      "C#",
    ],
  },
  {
    group: "Cloud & DevOps",
    color: "bg-blue-700",
    border: "border-blue-900/40",
    items: [
      "GCP",
      "Terraform",
      "Kubernetes",
      "Ansible",
      "Artifactory",
      "Apigee",
      "Kafka",
      "Docker",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  {
    group: "Analytics & Visualization",
    color: "bg-purple-700",
    border: "border-purple-900/40",
    items: ["Looker", "ELK", "Excel", "Jupyter Notebook"],
  },
  {
    group: "Testing",
    color: "bg-pink-700",
    border: "border-pink-900/40",
    items: [
      "Postman",
      "Swagger",
      "Sauce Labs",
      "Appium",
      "TestFlight",
      "Veracode",
      "SonarCube",
    ],
  },
  {
    group: "Architecture & Diagrams",
    color: "bg-yellow-700",
    border: "border-yellow-900/40",
    items: ["Markdown with Mermaid", "Draw.io"],
  },
];
const hobbies = [
  {
    group: "Outdoors & Adventure",
    color: "bg-green-700",
    border: "border-green-900/40",
    items: ["Hiking", "Kayaking", "Running", "Fishing", "Traveling"],
  },
  {
    group: "Creative & Hands-On",
    color: "bg-yellow-700",
    border: "border-yellow-900/40",
    items: ["Woodworking", "Music", "Cooking", "Photography", "Writing"],
  },
  {
    group: "Giving Back",
    color: "bg-pink-700",
    border: "border-pink-900/40",
    items: ["Volunteering", "Philanthropy", "Mentoring"],
  },
  {
    group: "Lifestyle & Exploration",
    color: "bg-cyan-700",
    border: "border-cyan-900/40",
    items: ["Local exploration", "New experiences"],
  },
];

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
                    src="/images/headshot.jpeg"
                    alt="Jon Underwood"
                  />
                </div>
              </div>
              {/* About Text */}
              <div className="mt-8 lg:col-span-8 lg:mt-0">
                <div className="relative p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">Here's a bit about myself</h2>
                  <p className="text-xl leading-8 text-cyan-200 mb-6">
                    Hey there—I’m Jon Underwood.  I love turning ideas into reality. With over a decade in software engineering and product management, I’ve spent my career turning complex challenges into products that are practical, scalable, and genuinely valuable to the people who use them. I love seeing an idea grow from concept into something that makes a real impact in the market.
                  </p>
                  <p className="text-xl leading-8 text-cyan-200 mb-6">
                    Today, as a Senior Technical Product Manager, I bring a builder's mindset to the Financial Technology industry—especially within mortgage and property valuation space. My work blends product strategy with a strong technical foundation, helping bridge the gap between what’s possible and what truly solves a customer’s problem. I’ve led initiatives that streamline operations, improve customer experience, and deliver measurable business results—always with an eye toward simplicity, usability, and long-term sustainability.
                  </p>
                  <p className="text-xl leading-8 text-cyan-200">
                    Outside of work, I stay busy with plenty of hobbies—you might find me in the workshop on a new woodworking project, out on the water kayaking, hiking a trail, strumming a guitar, or simply relaxing on a patio with my wife and our dog.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Enhanced Skills & Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced Skills Section */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#232946] to-[#10172a] shadow-lg border border-indigo-900/40 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 opacity-60"></div>
            <div className="relative p-8">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Skills & Tooling</h2>
              </div>
              <div className="space-y-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.group}>
                    <div className="flex items-center mb-2">
                      <span className={`inline-block w-3 h-3 rounded-full mr-2 ${skillGroup.color}`}></span>
                      <span className="text-lg font-semibold text-white">{skillGroup.group}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item) => (
                        <span
                          key={item}
                          className={`px-3 py-1 text-xs font-medium text-white ${skillGroup.color} ${skillGroup.border} rounded-full shadow-sm`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

           {/* Enhanced Hobbies Section */}
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#132e2e] to-[#10172a] shadow-lg border border-green-900/40 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-emerald-900/30 opacity-60"></div>
          <div className="relative p-8">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-lg bg-green-600 flex items-center justify-center mr-4">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Hobbies & Interests</h2>
            </div>
            <div className="space-y-6">
              {hobbies.map((hobbyGroup) => (
                <div key={hobbyGroup.group}>
                  <div className="flex items-center mb-2">
                    <span className={`inline-block w-3 h-3 rounded-full mr-2 ${hobbyGroup.color}`}></span>
                    <span className="text-lg font-semibold text-white">{hobbyGroup.group}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hobbyGroup.items.map((item) => (
                      <span
                        key={item}
                        className={`px-3 py-1 text-xs font-medium text-white ${hobbyGroup.color} ${hobbyGroup.border} rounded-full shadow-sm`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
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