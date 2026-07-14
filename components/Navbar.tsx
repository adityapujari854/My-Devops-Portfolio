"use client";
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  
  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 16,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '92%',
      maxWidth: 1000,
      zIndex: 50,
      background: 'var(--navbar-bg)',
      backdropFilter: 'blur(8px)',
      border: '1px solid var(--border-color)',
      borderRadius: 12,
      padding: '12px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img
          src="/profile.jpg"
          alt="Aditya"
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            border: '1px solid rgba(34,211,238,0.3)',
            objectFit: 'cover'
          }}
        />
        <span style={{ fontWeight: 600, fontSize: 16, color: 'var(--text-primary)' }}>Aditya</span>
      </div>
      
      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        {links.map((l) => (
          <a key={l.href} href={l.href} style={{ fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s ease' }}>
            {l.label}
          </a>
        ))}
      </div>
      
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <span className="theme-toggle-icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
        </button>
        <a href="/resume.pdf" style={{
          padding: '6px 14px',
          fontSize: 13,
          background: 'rgba(34,211,238,0.1)',
          border: '1px solid rgba(34,211,238,0.3)',
          borderRadius: 6,
          color: '#22d3ee',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}>
          Resume
        </a>
      </div>
    </nav>
  );
}
