import React from 'react';

export default function Footer() {
  return (
    <footer style={{ marginTop: 80, paddingTop: 48, paddingBottom: 24, paddingLeft: 16, paddingRight: 16, textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)', width: '100%', clear: 'both' }}>
      <div style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>© {new Date().getFullYear()} Aditya Pujari</div>
      <div style={{ marginTop: 8, wordWrap: 'break-word', overflowWrap: 'break-word' }}>Built with Next.js, TypeScript, and Framer Motion.</div>
      <div style={{ marginTop: 8, display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
        <a href="https://github.com/adityapujari854" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/adityapujari854" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
