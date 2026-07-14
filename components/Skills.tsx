import React from 'react';
import skills from '../data/skills';

export default function Skills() {
  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 32, color: 'var(--text-primary)' }}>Skills & Technologies</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
        {skills.map((cat) => (
          <div key={cat.title} className="glass">
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: 'var(--accent)' }}>{cat.title}</h3>
            <div style={{ display: 'grid', gap: 12 }}>
              {cat.items.map((s) => (
                <div key={s.name} style={{
                  padding: 12,
                  background: 'var(--accent-soft)',
                  borderRadius: 8,
                  border: '1px solid var(--button-border)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
