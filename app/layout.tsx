import './globals.css';
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';

export const metadata = {
  title: 'Aditya Pujari — AWS DevOps Engineer',
  description: 'Portfolio — Cloud, DevOps, SRE, Infrastructure Automation'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div style={{ minHeight: '100vh' }}>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
