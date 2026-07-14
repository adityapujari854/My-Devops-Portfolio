declare module 'react-github-calendar' {
  import * as React from 'react';

  export type GitHubCalendarProps = {
    username: string;
    transformData?: (contributions: any) => any;
    blockSize?: number;
    blockMargin?: number;
    color?: string | string[];
    fontSize?: number;
    style?: React.CSSProperties;
    [key: string]: any;
  };

  const GitHubCalendar: React.ComponentType<GitHubCalendarProps>;
  export default GitHubCalendar;
}
