import React from 'react';
import Image from 'next/image';
import projects from '../data/projects';

export default function Projects() {
  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: 'var(--text-primary)' }}>Featured Projects</h2>
      <div className="responsive-grid">
        {projects.map((p) => (
          <div key={p.title} className="glass" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: 160, borderRadius: 8, overflow: 'hidden', marginBottom: 12 }}>
              <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover' }} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>{p.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: 8, flexGrow: 1 }}>{p.description}</p>

            {p.features && (
              <div style={{ marginTop: 12 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--accent)', marginBottom: 6 }}>Features:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.features.slice(0, 3).map((feat) => (
                    <span key={feat} style={{ fontSize: 11, background: 'var(--accent-soft)', padding: '2px 8px', borderRadius: 4, color: 'var(--accent)' }}>{feat}</span>
                  ))}
                </div>
              </div>
            )}

            <div style={{ marginTop: 12 }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-muted)', marginBottom: 6 }}>Stack:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.stack.map((tech) => (
                  <span key={tech} style={{ fontSize: 11, background: 'var(--button-bg)', padding: '2px 8px', borderRadius: 4, color: 'var(--text-secondary)' }}>{tech}</span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 12 }}
             />
          </div>
        ))}
      </div>
    </div>
  );
}
