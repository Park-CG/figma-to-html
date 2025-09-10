import React from "react";

export const AnimatedBackdrop = ({
  width = "min(90vw, 1400px)",
  height = 320,
  className = "",
}) => {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        position: "absolute",
        top: -40,
        left: "50%",
        transform: "translateX(-50%)",
        width,
        height,
        pointerEvents: "none",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <div
          className="blob blob-fast blob-delay-1"
          style={{
            position: "absolute",
            top: 20,
            left: 0,
            width: 260,
            height: 260,
            background: "rgba(255, 183, 197, 0.55)",
          }}
        />
        <div
          className="blob blob-slow blob-delay-2"
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            width: 220,
            height: 220,
            background: "rgba(189, 224, 254, 0.55)",
          }}
        />
        <div
          className="blob"
          style={{
            position: "absolute",
            bottom: -10,
            left: "30%",
            width: 200,
            height: 200,
            background: "rgba(202, 255, 191, 0.5)",
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackdrop;


