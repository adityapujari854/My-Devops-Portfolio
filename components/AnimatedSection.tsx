'use client';

import React, { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

export default function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  return (
    <div style={{
      animation: `fadeInUp 0.6s ease-out ${delay}s both`,
    }}>
      {children}
    </div>
  );
}
