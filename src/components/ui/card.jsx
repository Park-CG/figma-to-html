import React from "react";

export const Card = ({ className = "", children, ...rest }) => (
  <div className={`rounded-2xl border bg-white ${className}`} {...rest}>{children}</div>
);

export const CardContent = ({ className = "", children, ...rest }) => (
  <div className={className} {...rest}>{children}</div>
);


