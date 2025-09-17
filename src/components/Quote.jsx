import React from "react";

export const Quote = ({ children, className = "" }) => {
  return (
    <div className={`relative max-w-4xl mx-auto px-6 py-15 ${className}`}>
      {/* Corner decorations: top-right (ㄴ), bottom-left (ㄱ) */}
      <span aria-hidden className="pointer-events-none select-none absolute top-0 right-0 w-6 h-2 bg-gray-300" />
      <span aria-hidden className="pointer-events-none select-none absolute top-0 right-0 w-2 h-6 bg-gray-300" />
      <span aria-hidden className="pointer-events-none select-none absolute bottom-0 left-0 w-6 h-2 bg-gray-300" />
      <span aria-hidden className="pointer-events-none select-none absolute bottom-0 left-0 w-2 h-6 bg-gray-300" />

      <div className="text-center">
        <p className="text-gray-700 text-3xl leading-relaxed">{children}</p>
      </div>
    </div>
  );
};


