import React from 'react';

const Badge = ({ children, className = "" }) => (
  <span className={`tech-badge ${className}`}>{children}</span>
);

export default Badge;