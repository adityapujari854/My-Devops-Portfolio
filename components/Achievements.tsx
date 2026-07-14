"use client";
import React, { useState, useEffect } from 'react';
import achievements from '../data/achievements';

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (count < target) {
      interval = setInterval(() => {
        setCount((prev) => (prev + Math.ceil(target / 30) > target ? target : prev + Math.ceil(target / 30)));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}+</span>;
}

export default function Achievements() {
  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: 'var(--text-primary)' }}>Achievements</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
        {achievements.map((ach, idx) => (
          <div key={idx} className="glass" style={{ textAlign: 'center', padding: 24 }}>
            <div style={{ fontSize: 36, fontWeight: 700, color: 'var(--accent)' }}>
              <Counter target={ach.value} />
            </div>
            <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8 }}>{ach.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
