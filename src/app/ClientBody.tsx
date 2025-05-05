"use client";

import React, { useEffect, useState } from 'react';

interface ClientBodyProps {
  children: React.ReactNode;
}

export default function ClientBody({ children }: ClientBodyProps) {
  // Use this state to help with hydration
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted after first render
    setMounted(true);
  }, []);

  // This helps with hydration issues by only rendering children after client-side hydration
  return (
    <div suppressHydrationWarning>
      {children}
    </div>
  );
}
