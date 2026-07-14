import React from 'react';

export default function Footer() {
  return (
    <footer style={{ marginTop: 48, padding: '24px 0', textAlign: 'center', color: 'var(--text-muted)' }}>
      <div>© {new Date().getFullYear()} Aditya Pujari</div>
      <div style={{ marginTop: 8 }}>Built with Next.js, TypeScript, and Framer Motion.</div>
      <div style={{ marginTop: 8 }}>
        <a href="https://github.com/adityapujari854" target="_blank" rel="noopener noreferrer" style={{ marginRight: 12, color: 'inherit' }}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/adityapujari854" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
