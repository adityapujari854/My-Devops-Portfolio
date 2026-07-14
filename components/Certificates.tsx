import React from 'react';
import certificates from '../data/certificates';

export default function Certificates() {
  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: 'var(--text-primary)' }}>Certifications</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        {certificates.map((cert, idx) => (
          <div key={idx} className="glass" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>{cert.icon}</div>
            <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>{cert.name}</h3>
            <div style={{ color: 'var(--accent)', fontSize: 13, marginTop: 4 }}>{cert.issuer}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: 12, marginTop: 2 }}>{cert.date}</div>
            {cert.credentialLink && (
              <a href={cert.credentialLink} style={{ color: 'var(--accent)', fontSize: 12, marginTop: 8, textDecoration: 'none' }}>View Credential →</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
