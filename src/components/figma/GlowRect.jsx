import React from "react";
import "./glow-rect.css";

export const GlowRect = ({
  width = 412,
  height = 660,
  radius = 40,
  rotate = 90,
  alignToHeight,
  className = "",
  style = {},
}) => {
  // If rotated by 90deg, the visual bounding box height becomes `width`.
  // To align with an existing placeholder height (e.g., 330px), shift up by half the difference.
  const needsComp = rotate % 180 !== 0 && typeof alignToHeight === "number";
  const offsetY = needsComp ? -((width - alignToHeight) / 2) : 0;
  const baseTransform = `rotate(${rotate}deg)`;
  const transform = offsetY !== 0 ? `translateY(${offsetY}px) ${baseTransform}` : baseTransform;
  return (
    <div
      className={`glow-rect ${className}`}
      style={{
        width,
        height,
        "--r": `${radius}px`,
        "--rotate": `${rotate}deg`,
        transform,
        ...style,
      }}
      aria-hidden
    />
  );
};

export default GlowRect;


