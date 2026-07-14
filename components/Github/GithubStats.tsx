import React from "react";
import type { GithubUser } from "../../types/github";

export default function GithubStats({ profile }: { profile: GithubUser | null }) {
  if (!profile) return <div className="repo-card">Unable to load GitHub stats.</div>;

  return (
    <div className="github-min">
      <div className="header">
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <img src={profile.avatar_url} alt={profile.login} style={{ width: 56, height: 56, borderRadius: 999 }} />
          <div>
            <div style={{ fontWeight: 700 }}>{profile.name || profile.login}</div>
            <div className="subtitle">{profile.bio || "Cloud & DevOps Engineer"}</div>
          </div>
        </div>
        <div className="stat-row">
          <div className="stat-chip">Repos: {profile.public_repos}</div>
          <div className="stat-chip">Followers: {profile.followers}</div>
          <div className="stat-chip">Following: {profile.following}</div>
        </div>
      </div>
    </div>
  );
}
