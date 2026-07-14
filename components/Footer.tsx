import React from 'react';

export default function Footer() {
  return (
    <footer style={{ marginTop: 48, padding: '24px 0', textAlign: 'center', color: 'var(--text-muted)' }}>
      <div>© {new Date().getFullYear()} Aditya Pujari</div>
      <div style={{ marginTop: 8 }}>Built with Next.js, TypeScript, and Framer Motion.</div>
    </footer>
  );
}
