import React from "react";
import type { GithubEvent } from "../../types/github";

function timeAgo(iso?: string) {
  if (!iso) return "";
  const then = new Date(iso).getTime();
  const diff = Date.now() - then;
  const minutes = Math.floor(diff / 60000);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  return `${days}d`;
}

export default function GithubActivity({ events }: { events: GithubEvent[] | null }) {
  if (!events || events.length === 0) return <div className="repo-card">No recent activity.</div>;

  return (
    <div>
      <ul className="activity-list">
        {events.slice(0, 6).map((e) => (
          <li key={e.id} className="activity-item">
            <div className="activity-dot" />
            <div>
              <div className="activity-text">{e.type.replace(/Event$/, "")} — <strong style={{ color: "var(--text-secondary)" }}>{e.repo?.name}</strong></div>
              <div className="activity-time">{timeAgo(e.created_at)}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
