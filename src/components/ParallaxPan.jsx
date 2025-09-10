import React, { useEffect, useRef, useState } from "react";

// Scroll-reactive background panning for tall images
export const ParallaxPan = ({
  src,
  alt = "",
  height = 648,
  radius = 7,
  speed = 0.6, // 0~1, how much of max range to use
  overscan = 1.25, // inner layer size multiplier to avoid empty edges
  className = "",
}) => {
  const containerRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      // progress: -1 (far above) → 0 (top aligned) → 1 (bottom aligned)
      const progress = ((viewportH / 2 - (rect.top + rect.height / 2)) / viewportH) * 2;
      const maxOffset = ((height * overscan) - height) / 2; // available padding space
      const next = Math.max(-maxOffset, Math.min(maxOffset, progress * maxOffset * speed));
      setOffsetY(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height,
        borderRadius: radius,
        overflow: "hidden",
        backgroundColor: "#eaeaea",
      }}
      aria-label={alt}
   >
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: -(((height * overscan) - height) / 2),
          height: height * overscan,
          transform: `translateY(${offsetY}px)`,
          willChange: "transform",
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

export default ParallaxPan;


