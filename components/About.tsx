import React from 'react';

export default function About() {
  return (
    <div className="glass">
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, color: 'var(--text-primary)' }}>About Me</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 32, alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 20, color: 'var(--text-secondary)' }}>
            Final-year Computer Engineering student seeking roles in DevOps, Cloud, SRE, or Platform Engineering. Experienced with AWS, Docker, Kubernetes, Terraform, Linux, Jenkins, GitHub Actions, monitoring tools, automation, Python scripting, and AI-assisted development workflows.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div style={{
              padding: 12,
              background: 'var(--accent-soft)',
              border: '1px solid var(--button-border)',
              borderRadius: 8,
              textAlign: 'center'
            }}>
              <div style={{ fontWeight: 600, color: 'var(--accent)' }}>Graduation</div>
              <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 4 }}>June 2026</div>
            </div>
            <div style={{
              padding: 12,
              background: 'var(--accent-soft)',
              border: '1px solid var(--button-border)',
              borderRadius: 8,
              textAlign: 'center'
            }}>
              <div style={{ fontWeight: 600, color: 'var(--accent)' }}>Location</div>
              <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 4 }}>Pune, India</div>
            </div>
            <div style={{
              padding: 12,
              background: 'var(--accent-soft)',
              border: '1px solid var(--button-border)',
              borderRadius: 8,
              textAlign: 'center',
              gridColumn: '1 / -1'
            }}>
              <div style={{ fontWeight: 600, color: 'var(--accent)' }}>Status</div>
              <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 4 }}>Available for Full-time</div>
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            borderRadius: 12,
            overflow: 'hidden',
            border: '2px solid var(--button-border)',
            width: '100%',
            maxWidth: 280,
            aspectRatio: '1',
            boxShadow: '0 0 30px rgba(34,211,238,0.12)'
          }}>
            <img
              src="/profile.jpg"
              alt="Aditya Pujari"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
