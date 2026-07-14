"use client";
import React, { useEffect, useState } from "react";

export default function GithubCalendarComponent({ username }: { username: string }) {
  const [CalendarComp, setCalendarComp] = useState<any | null>(null);
  const [available, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const mod = (await import("react-github-calendar")) as any;
        if (!mounted) return;
        setCalendarComp(() => mod.GitHubCalendar || mod.default || mod);
        setAvailable(true);
      } catch (err) {
        // package not installed or failed to load
        if (!mounted) return;
        setAvailable(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  if (available === null) {
    return <div className="p-4 border rounded animate-pulse h-40" />;
  }

  if (!available) {
    return (
      <div className="p-4 border rounded">
        <div className="font-medium">Contribution calendar</div>
        <div className="text-sm text-muted-foreground">Install `react-github-calendar` to enable the contribution graph.</div>
      </div>
    );
  }

  const C = CalendarComp;
  return (
    <div className="p-4 border rounded">
      {C ? <C username={username} /> : <div>Loading calendar...</div>}
    </div>
  );
}
