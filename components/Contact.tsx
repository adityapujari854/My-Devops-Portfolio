import React from 'react';

export default function Contact() {
  return (
    <div className="glass">
      <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--text-primary)' }}>Contact</h2>
      <p style={{ marginTop: 8, color: 'var(--text-secondary)' }}>Email: adityapujari542@gmail.com</p>
      <p style={{ marginTop: 4, color: 'var(--text-secondary)' }}>LinkedIn: <a href="#" style={{ color: 'var(--accent)' }}>linkedin.com/in/adityapujari854</a></p>
      <div style={{ marginTop: 16 }}>
        <form style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
          <input placeholder="Name" style={{ padding: 10, borderRadius: 8, border: '1px solid var(--border-color)', background: 'var(--input-bg)', color: 'var(--text-primary)' }} />
          <input placeholder="Email" style={{ padding: 10, borderRadius: 8, border: '1px solid var(--border-color)', background: 'var(--input-bg)', color: 'var(--text-primary)' }} />
          <textarea placeholder="Message" rows={4} style={{ padding: 10, borderRadius: 8, border: '1px solid var(--border-color)', background: 'var(--input-bg)', color: 'var(--text-primary)' }} />
          <button type="submit" style={{ padding: '10px 16px', borderRadius: 999, background: 'var(--accent)', color: 'var(--bg-secondary)', border: 0, cursor: 'pointer', fontWeight: 600 }}>Send</button>
        </form>
      </div>
    </div>
  );
}
