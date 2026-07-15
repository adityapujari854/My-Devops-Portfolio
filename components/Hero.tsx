import React from 'react';
import Terminal from './Terminal';

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-copy">
        <h1 style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.2, marginBottom: 16, color: 'var(--text-primary)' }}>
          Aditya Pujari
        </h1>
        <p style={{ fontSize: 18, color: 'var(--accent)', fontWeight: 600, marginBottom: 12 }}>
          AWS DevOps Engineer | Cloud & Automation Enthusiast
        </p>
        <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 520, marginBottom: 24 }}>
          I build cloud-native applications, automate deployments, and leverage AI-assisted engineering to create scalable production systems. Passionate about DevOps, Infrastructure as Code, and solving operational challenges.
        </p>
        <div className="hero-cta" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            padding: '12px 24px',
            background: 'var(--accent-soft)',
            border: '1px solid var(--button-border)',
            borderRadius: 999,
            color: 'var(--accent)',
            textDecoration: 'none',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            Projects
          </a>
          <a href="/resume.pdf" style={{
            padding: '12px 24px',
            background: 'transparent',
            border: '1px solid var(--border-color)',
            borderRadius: 999,
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontWeight: 500,
            cursor: 'pointer'
          }}>
            Resume
          </a>
          <a href="https://github.com/adityapujari854" target="_blank" rel="noopener noreferrer" style={{
            padding: '12px 24px',
            background: 'transparent',
            border: '1px solid var(--border-color)',
            borderRadius: 999,
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontWeight: 500,
            cursor: 'pointer'
          }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/adityapujari854" target="_blank" rel="noopener noreferrer" style={{
            padding: '12px 24px',
            background: 'transparent',
            border: '1px solid var(--border-color)',
            borderRadius: 999,
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontWeight: 500,
            cursor: 'pointer'
          }}>
            LinkedIn
          </a>
        </div>
      </div>

      <div className="glass" style={{ padding: 0, overflow: 'hidden', background: 'var(--glass-bg)' }}>
        <Terminal />
      </div>
    </div>
  );
}
