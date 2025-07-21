import React from 'react';

const jobExperiences = [
    {
        company: 'Tech Solutions Inc.',
        role: 'Senior Frontend Developer',
        period: '2021 - Present',
        description: 'Leading development of modern web applications using React, TypeScript, and cloud technologies. Mentoring junior developers and implementing best practices.',
        year: '2021'
    },
    {
        company: 'Web Innovations',
        role: 'UI/UX Designer & Developer',
        period: '2019 - 2021',
        description: 'Designed and developed user interfaces for various clients, improving user experience and conversion rates by 30%.',
        year: '2019'
    },
    {
        company: 'Freelance',
        role: 'Web Developer',
        period: '2017 - 2019',
        description: 'Built custom websites and web applications for small businesses, focusing on responsive design and performance optimization.',
        year: '2017'
    },
    {
        company: 'University',
        role: 'Computer Science Student',
        period: '2015 - 2019',
        description: 'Studied Computer Science with focus on software engineering and web technologies. Graduated with honors.',
        year: '2015'
    }
];

const personalTimeline = [
    {
        event: 'Started Photography',
        period: '2020',
        description: 'Began exploring landscape and portrait photography as a creative outlet.',
        year: '2020'
    },
    {
        event: 'First Open Source Contribution',
        period: '2018',
        description: 'Made my first contribution to a popular React component library.',
        year: '2018'
    },
    {
        event: 'Traveled to Japan',
        period: '2017',
        description: 'Life-changing trip that inspired my interest in minimalist design.',
        year: '2017'
    },
    {
        event: 'Built First Website',
        period: '2014',
        description: 'Created my first HTML/CSS website in high school computer class.',
        year: '2014'
    }
];

const socialHandles = [
    {
        name: 'GitHub',
        handle: '@jonunderw',
        url: 'https://github.com/jonunderw',
        icon: (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
        )
    },
    {
        name: 'LinkedIn',
        handle: '@jonunderwood',
        url: 'https://linkedin.com/in/jonunderwood',
        icon: (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        )
    },
    {
        name: 'Twitter',
        handle: '@jonunderw',
        url: 'https://twitter.com/jonunderw',
        icon: (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
        )
    },
    {
        name: 'Email',
        handle: 'jon@example.com',
        url: 'mailto:jon@example.com',
        icon: (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    }
];

const AboutPage: React.FC = () => (
    <div className="min-h-screen bg-gray-50 pt-20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
            </div>

            {/* Bento Grid Layout */}
            <div className="space-y-8">
                {/* Row 1: Profile Photo & About Description (1 column) */}
                <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                    <div className="p-8 lg:p-12">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-center">
                            {/* Profile Image */}
                            <div className="lg:col-span-4">
                                <div className="flex justify-center lg:justify-start">
                                    <img
                                        className="aspect-[3/4] w-full max-w-sm rounded-2xl bg-gray-50 object-cover shadow-lg"
                                        src="https://via.placeholder.com/400x500"
                                        alt="Jon Underwood"
                                    />
                                </div>
                            </div>
                            
                            {/* About Text */}
                            <div className="mt-8 lg:col-span-8 lg:mt-0">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-50"></div>
                                    <div className="relative p-8">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                            Hello, I'm Jon Underwood
                                        </h2>
                                        <p className="text-xl leading-8 text-gray-700 mb-6">
                                            A passionate full-stack developer with a love for building engaging web experiences. 
                                            I enjoy learning new technologies and collaborating with others to create impactful solutions that make a difference.
                                        </p>
                                        <p className="text-lg leading-7 text-gray-600 mb-6">
                                            With over 5 years of experience in web development, I specialize in React, TypeScript, and modern web technologies. 
                                            I'm passionate about creating user-friendly interfaces, writing clean code, and sharing knowledge with the developer community.
                                        </p>
                                        <p className="text-lg leading-7 text-gray-600">
                                            When I'm not coding, you can find me exploring new hiking trails, experimenting with photography, 
                                            or diving into the latest tech trends and AI developments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2: Skills & Interests (2 columns) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Skills & Technologies */}
                    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                        <div className="relative p-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl opacity-50"></div>
                            <div className="relative">
                                <div className="flex items-center mb-6">
                                    <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center mr-4">
                                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">Skills & Technologies</h2>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'MongoDB', 'PostgreSQL'].map((skill) => (
                                        <div key={skill} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                                            <div className="h-2 w-2 bg-indigo-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700 font-medium">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interests & Hobbies */}
                    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                        <div className="relative p-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl opacity-50"></div>
                            <div className="relative">
                                <div className="flex items-center mb-6">
                                    <div className="h-12 w-12 rounded-lg bg-green-600 flex items-center justify-center mr-4">
                                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">Interests & Hobbies</h2>
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                    {['Photography', 'Hiking', 'Reading', 'Traveling', 'Open Source', 'AI & Machine Learning', 'Music Production', 'Gaming'].map((interest) => (
                                        <div key={interest} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                                            <div className="h-2 w-2 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700 font-medium">{interest}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 3: Career Timeline & Personal Timeline (2 columns) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Career Timeline */}
                    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                        <div className="relative p-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl opacity-50"></div>
                            <div className="relative">
                                <div className="flex items-center mb-8">
                                    <div className="h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center mr-4">
                                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">Career Timeline</h2>
                                </div>
                                <div className="flow-root">
                                    <ul className="-mb-8">
                                        {jobExperiences.map((experience, experienceIdx) => (
                                            <li key={experienceIdx}>
                                                <div className="relative pb-8">
                                                    {experienceIdx !== jobExperiences.length - 1 ? (
                                                        <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                                    ) : null}
                                                    <div className="relative flex space-x-3">
                                                        <div>
                                                            <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                                                                <span className="text-white text-sm font-medium">{experience.year.slice(-2)}</span>
                                                            </span>
                                                        </div>
                                                        <div className="flex min-w-0 flex-1 justify-between space-x-4">
                                                            <div>
                                                                <p className="text-lg font-semibold text-gray-900">
                                                                    {experience.role}
                                                                </p>
                                                                <p className="text-base font-medium text-blue-600 mb-2">
                                                                    {experience.company}
                                                                </p>
                                                                <p className="text-sm text-gray-500 mb-3">
                                                                    {experience.period}
                                                                </p>
                                                                <p className="text-sm text-gray-700">
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
                    </div>

                    {/* Personal Timeline */}
                    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                        <div className="relative p-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl opacity-50"></div>
                            <div className="relative">
                                <div className="flex items-center mb-8">
                                    <div className="h-12 w-12 rounded-lg bg-purple-600 flex items-center justify-center mr-4">
                                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">Personal Journey</h2>
                                </div>
                                <div className="flow-root">
                                    <ul className="-mb-8">
                                        {personalTimeline.map((milestone, milestoneIdx) => (
                                            <li key={milestoneIdx}>
                                                <div className="relative pb-8">
                                                    {milestoneIdx !== personalTimeline.length - 1 ? (
                                                        <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                                    ) : null}
                                                    <div className="relative flex space-x-3">
                                                        <div>
                                                            <span className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center ring-8 ring-white">
                                                                <span className="text-white text-sm font-medium">{milestone.year.slice(-2)}</span>
                                                            </span>
                                                        </div>
                                                        <div className="flex min-w-0 flex-1 justify-between space-x-4">
                                                            <div>
                                                                <p className="text-lg font-semibold text-gray-900">
                                                                    {milestone.event}
                                                                </p>
                                                                <p className="text-sm text-gray-500 mb-3">
                                                                    {milestone.period}
                                                                </p>
                                                                <p className="text-sm text-gray-700">
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
                </div>

                {/* Row 4: Social Handles (1 column) */}
                <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                    <div className="relative p-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl opacity-50"></div>
                        <div className="relative">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Let's Connect</h2>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                {socialHandles.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className="flex-shrink-0 text-gray-400 group-hover:text-indigo-600 transition-colors">
                                                {social.icon}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                                                    {social.name}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate">
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
    </div>
);

export default AboutPage;