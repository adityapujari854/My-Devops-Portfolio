"use client";
import React, { useEffect, useState } from "react";
import type { GithubUser, GithubRepo, GithubEvent, LanguagesMap } from "../../types/github";
import GithubStats from "./GithubStats";
import GithubRepos from "./GithubRepos";
import GithubCalendar from "./GithubCalendar";
import GithubLanguages from "./GithubLanguages";
import GithubActivity from "./GithubActivity";

const USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "adityapujari854";

export default function GithubSectionClient() {
  const [profile, setProfile] = useState<GithubUser | null | undefined>(undefined);
  const [repos, setRepos] = useState<GithubRepo[] | null | undefined>(undefined);
  const [events, setEvents] = useState<GithubEvent[] | null | undefined>(undefined);
  const [languages, setLanguages] = useState<LanguagesMap | null | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const [pRes, rRes, eRes, lRes] = await Promise.all([
          fetch(`/api/github?type=profile&username=${USERNAME}`).then((r) => r.json()),
          fetch(`/api/github?type=pinned&username=${USERNAME}`).then((r) => r.json()),
          fetch(`/api/github?type=events&username=${USERNAME}&per_page=5`).then((r) => r.json()),
          fetch(`/api/github?type=languages&username=${USERNAME}`).then((r) => r.json()),
        ]);

        if (!mounted) return;
        if (pRes && pRes.message === "Not Found") {
          setError("GitHub user not found");
          setProfile(null);
        } else {
          setProfile(pRes);
        }

        setRepos(Array.isArray(rRes) ? rRes : null);
        setEvents(Array.isArray(eRes) ? eRes : null);
        setLanguages(lRes && typeof lRes === "object" ? lRes : null);
      } catch (err) {
        setError(String(err));
        setProfile(null);
        setRepos(null);
        setEvents(null);
        setLanguages(null);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const loading = profile === undefined || repos === undefined || events === undefined || languages === undefined;

  return (
    <section className="github-section github-min">
      <div className="header">
        <div>
          <h2>GitHub</h2>
          <div className="subtitle">Building in public</div>
        </div>
        <div>
          <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer" className="stat-chip">View profile</a>
        </div>
      </div>

      {error && (
        <div className="repo-card" style={{ marginTop: 12, color: "var(--text-secondary)" }}>
          Unable to fetch GitHub data. Visit my profile: <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer" className="underline">github.com/{USERNAME}</a>
        </div>
      )}

      <div className="main-grid" style={{ marginTop: 12 }}>
        <div>
          {loading ? (
            <div className="repo-card animate-pulse" style={{ height: 96 }} />
          ) : (
            <GithubStats profile={profile || null} />
          )}

          <div style={{ marginTop: 16 }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>Featured</h3>
            {loading ? (
              <div style={{ marginTop: 8 }} className="repo-grid">{Array.from({ length: 3 }).map((_, i) => <div key={i} className="repo-card animate-pulse" style={{ height: 72 }} />)}</div>
            ) : (
              <div style={{ marginTop: 8 }}><GithubRepos repos={repos || null} /></div>
            )}
          </div>
        </div>

        <aside>
          <div style={{ marginBottom: 12 }}>
            <h4 style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>Contribution</h4>
            {loading ? <div className="repo-card animate-pulse" style={{ height: 120, marginTop: 8 }} /> : <GithubCalendar username={USERNAME} />}
          </div>

          <div style={{ marginBottom: 12 }}>
            <h4 style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>Languages</h4>
            <div style={{ marginTop: 8 }}>{loading ? <div className="repo-card animate-pulse" style={{ height: 100 }} /> : <GithubLanguages languages={languages || null} />}</div>
          </div>

          <div>
            <h4 style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>Activity</h4>
            <div style={{ marginTop: 8 }}>{loading ? <div className="repo-card animate-pulse" style={{ height: 140 }} /> : <GithubActivity events={events || null} />}</div>
          </div>
        </aside>
      </div>
    </section>
  );
}
