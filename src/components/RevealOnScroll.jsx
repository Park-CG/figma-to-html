import React, { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({ children, offsetY = 24, delayMs = 0, durationMs = 1200, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delayMs);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: visible ? "translateY(0)" : `translateY(${offsetY}px)`,
        opacity: visible ? 1 : 0,
        transition: `transform ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};


