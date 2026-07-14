import React from 'react';
import education from '../data/education';

export default function Education() {
  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: 'var(--text-primary)' }}>Education</h2>
      <div style={{ display: 'grid', gap: 16 }}>
        {education.map((edu, idx) => (
          <div key={idx} className="glass">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>{edu.degree}</h3>
                <div style={{ color: 'var(--accent)', fontSize: 14, marginTop: 4 }}>{edu.institution}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-secondary)' }}>CGPA: {edu.cgpa}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 2 }}>{edu.graduation}</div>
              </div>
            </div>
            {edu.coursework && (
              <div style={{ marginTop: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 6 }}>Relevant Coursework:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {edu.coursework.map((course) => (
                    <span key={course} style={{ background: 'var(--accent-soft)', padding: '4px 12px', borderRadius: 999, fontSize: 12, color: 'var(--accent)' }}>{course}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
