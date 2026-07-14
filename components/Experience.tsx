import React from 'react';
import experience from '../data/experience';

export default function Experience() {
  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: 'var(--text-primary)' }}>Experience & Training</h2>
      <div style={{ position: 'relative', paddingLeft: 32 }}>
        {experience.map((exp, idx) => (
          <div key={idx} style={{ marginBottom: 32, position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-32px', top: 6, width: 12, height: 12, borderRadius: '50%', background: 'var(--accent)', border: '3px solid var(--bg-secondary)' }} />
            {idx < experience.length - 1 && (
              <div style={{ position: 'absolute', left: '-26px', top: 30, width: 2, height: 60, background: 'var(--button-border)' }} />
            )}
            <div className="glass">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>{exp.title}</h3>
                  <div style={{ color: 'var(--accent)', fontSize: 14, marginTop: 4 }}>{exp.organization}</div>
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>{exp.duration}</div>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginTop: 8, marginBottom: 8 }}>{exp.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {exp.technologies.map((tech) => (
                  <span key={tech} style={{ background: 'var(--accent-soft)', padding: '4px 12px', borderRadius: 999, fontSize: 12, color: 'var(--accent)' }}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
