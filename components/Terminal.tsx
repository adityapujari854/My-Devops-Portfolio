"use client";
import React, { useEffect, useState } from 'react';

const lines = [
  '$ docker compose up -d',
  '✔ Containers running (3/3)',
  '',
  '$ terraform apply -auto-approve',
  '✔ Infrastructure created',
  '',
  '$ kubectl get pods --namespace prod',
  '✔ all pods healthy (15/15)',
  '',
  '$ gh workflow run deploy.yml',
  '✔ workflow queued',
  '✔ deployment successful'
];

export default function Terminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);

  useEffect(() => {
    if (currentLineIdx >= lines.length) {
      setTimeout(() => {
        setCurrentLineIdx(0);
        setCurrentCharIdx(0);
        setDisplayedLines([]);
      }, 2000);
      return;
    }

    const currentLine = lines[currentLineIdx];
    const isComplete = currentCharIdx >= currentLine.length;

    const timeout = setTimeout(() => {
      if (isComplete) {
        setDisplayedLines((prev) => [...prev, currentLine]);
        setCurrentLineIdx((prev) => prev + 1);
        setCurrentCharIdx(0);
      } else {
        setCurrentCharIdx((prev) => prev + 1);
      }
    }, isComplete ? 300 : 30);

    return () => clearTimeout(timeout);
  }, [currentLineIdx, currentCharIdx]);

  const currentDisplayLine = lines[currentLineIdx]?.substring(0, currentCharIdx) || '';

  return (
    <div style={{
      background: 'var(--terminal-bg)',
      color: 'var(--terminal-text)',
      fontFamily: '"Courier New", monospace',
      fontSize: 13,
      borderRadius: 8,
      padding: 16,
      minHeight: 160,
      maxHeight: 200,
      overflowY: 'auto',
      border: '1px solid var(--button-border)'
    }}>
      <div style={{ userSelect: 'none' }}>
        {displayedLines.map((line, idx) => (
          <div key={idx}>{line || ' '}</div>
        ))}
        <div>
          {currentDisplayLine}
          <span className="typing" style={{ opacity: 0.7 }}>▌</span>
        </div>
      </div>
    </div>
  );
}
