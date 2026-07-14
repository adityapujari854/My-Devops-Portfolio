import React from "react";
import type { GithubRepo } from "../../types/github";

export default function GithubRepos({ repos }: { repos: GithubRepo[] | null }) {
  if (!repos) return <div className="repo-card">No repositories found.</div>;

  return (
    <div className="repo-grid" style={{ marginTop: 8 }}>
      {repos.map((r) => (
        <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="repo-card">
          <div className="repo-title">{r.name}</div>
          {r.description && <div className="repo-desc">{r.description}</div>}
          <div className="repo-meta">
            <div>{r.language || ""}</div>
            <div>★ {r.stargazers_count} • {new Date(r.updated_at).toLocaleDateString()}</div>
          </div>
        </a>
      ))}
    </div>
  );
}
