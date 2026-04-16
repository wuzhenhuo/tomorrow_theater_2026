/**
 * PageShell — thin wrapper that ensures every page uses design-system CSS variables
 * for background, text, and section alternation regardless of which Tailwind
 * colour classes the inner content uses (the App.css overrides handle those).
 */
import React from 'react';

const PageShell = ({ children, label }) => (
  <div style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)', paddingTop: 60 }}>
    {children}
  </div>
);

export default PageShell;
