import React from "react";

export const Badge = ({ className = "", children }) => (
  <span className={`inline-flex items-center rounded-xl px-2 py-1 text-xs font-medium ${className}`}>{children}</span>
);


