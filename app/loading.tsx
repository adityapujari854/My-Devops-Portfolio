import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900/60">
      <div className="text-center text-slate-100">
        <div className="mb-2">Loading portfolio…</div>
        <div className="h-1 w-40 bg-slate-700 rounded overflow-hidden">
          <div className="h-1 w-12 bg-cyan-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
