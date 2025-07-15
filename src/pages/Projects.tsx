import React, { useEffect, useState } from "react";

interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
}

const GITHUB_USERNAME = "jonunderw";

const ProjectsPage: React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
            .then((res) => res.json())
            .then((data) => {
                setRepos(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
            <h1>My GitHub Projects</h1>
            {loading ? (
                <p>Loading projects...</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {repos.map((repo) => (
                        <li
                            key={repo.id}
                            style={{
                                marginBottom: "2rem",
                                padding: "1rem",
                                border: "1px solid #eee",
                                borderRadius: 8,
                                background: "#fafafa",
                            }}
                        >
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0366d6", textDecoration: "none" }}
                            >
                                {repo.name}
                            </a>
                            <p style={{ margin: "0.5rem 0" }}>{repo.description || "No description"}</p>
                            {repo.language && (
                                <span
                                    style={{
                                        background: "#e1e4e8",
                                        borderRadius: 4,
                                        padding: "0.2rem 0.5rem",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    {repo.language}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProjectsPage;