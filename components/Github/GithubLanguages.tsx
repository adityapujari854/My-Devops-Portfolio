import React from "react";
import type { LanguagesMap } from "../../types/github";

function topLanguages(map: LanguagesMap | null, limit = 5) {
  if (!map) return [] as [string, number][];
  return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, limit);
}

export default function GithubLanguages({ languages }: { languages: LanguagesMap | null }) {
  const list = topLanguages(languages, 5);
  if (!list.length) return <div className="repo-card">No language data available.</div>;

  const total = list.reduce((s, [, v]) => s + v, 0) || 1;

  return (
    <div style={{ display: "grid", gap: 8 }}>
      {list.map(([lang, bytes]) => {
        const pct = Math.round((bytes / total) * 100);
        return (
          <div key={lang}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>{lang}<span style={{ color: "var(--text-muted)" }}>{pct}%</span></div>
            <div className="lang-bar" style={{ marginTop: 6 }}>
              <div className="lang-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
