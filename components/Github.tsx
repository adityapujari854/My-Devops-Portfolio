import React from 'react';

export default function GithubSection() {
  return (
    <div className="glass">
      <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--text-primary)' }}>GitHub</h2>
      <p style={{ marginTop: 8, color: 'var(--text-secondary)' }}>Repository stats and recent activity will appear here (GitHub API integration).</p>
      <p style={{ marginTop: 12 }}>
        View my profile: <a href="https://github.com/adityapujari854" target="_blank" rel="noopener noreferrer">github.com/adityapujari854</a>
      </p>
    </div>
  );
}
