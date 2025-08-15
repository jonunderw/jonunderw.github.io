import React, { useEffect, useState } from "react";

interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    topics: string[];
}

const GITHUB_USERNAME = "jonunderw";

const ProjectsPage: React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=8`)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch repositories');
                return res.json();
            })
            .then((data) => {
                // Filter out forks and get the most interesting repos
                const filteredRepos = data
                    .filter((repo: Repo) => !repo.name.includes('fork'))
                    .slice(0, 8); // Get top 8 repos
                setRepos(filteredRepos);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short'
        });
    };

    const getLanguageColor = (language: string | null) => {
        const colors: { [key: string]: string } = {
            'JavaScript': 'bg-yellow-500',
            'TypeScript': 'bg-blue-500',
            'Python': 'bg-green-500',
            'Java': 'bg-red-500',
            'HTML': 'bg-orange-500',
            'CSS': 'bg-purple-500',
            'React': 'bg-cyan-500',
            'Vue': 'bg-emerald-500',
            'Go': 'bg-cyan-600',
            'Rust': 'bg-orange-600',
            'PHP': 'bg-indigo-500'
        };
        return colors[language || ''] || 'bg-gray-500';
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#10172a] to-[#1e293b] pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
                        <p className="mt-4 text-cyan-200">Loading projects...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#10172a] to-[#1e293b] pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <p className="text-red-400">Error loading projects: {error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#10172a] to-[#1e293b] pt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                        My Projects
                    </h1>
                    <p className="text-xl text-cyan-200 max-w-2xl mx-auto">
                        A collection of my recent work and open source contributions from GitHub.
                    </p>
                </div>

                {/* Single Column Bento Grid */}
                <div className="space-y-8">
                    {repos.map((repo, index) => (
                        <div
                            key={repo.id}
                            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0a0f1c] p-8 shadow-xl border border-cyan-900/40 hover:border-cyan-400 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-indigo-900/30 opacity-60"></div>
                            <div className="relative">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-cyan-600">
                                            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                {repo.name}
                                            </h3>
                                            <p className="text-sm text-cyan-400">Updated {formatDate(repo.updated_at)}</p>
                                        </div>
                                    </div>
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 transition-colors"
                                    >
                                        View Project
                                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                                
                                <p className="text-lg text-cyan-200 mb-6 leading-relaxed">
                                    {repo.description || "No description available for this project."}
                                </p>
                                
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-6">
                                        {repo.language && (
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${getLanguageColor(repo.language)}`}>
                                                {repo.language}
                                            </span>
                                        )}
                                        <div className="flex items-center space-x-6 text-sm text-cyan-400">
                                            <span className="flex items-center">
                                                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                {repo.stargazers_count} stars
                                            </span>
                                            <span className="flex items-center">
                                                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 7a2 2 0 010-2.828l3.707-3.707a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {repo.forks_count} forks
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-br from-[#1e293b] to-[#0a0f1c] rounded-3xl p-8 shadow-xl border border-cyan-900/40">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Want to see more?
                        </h2>
                        <p className="text-cyan-200 mb-6">
                            Check out my complete portfolio of projects and contributions on GitHub.
                        </p>
                        <a
                            href={`https://github.com/${GITHUB_USERNAME}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 transition-colors"
                        >
                            View GitHub Profile
                            <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;