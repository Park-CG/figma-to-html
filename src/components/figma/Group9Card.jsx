import React from "react";
import "./group9-card.css";

export const Group9Card = ({
  width = 660,
  height = 412,
  radius = 40,
  name = "AAKASH DAHAL",
  date = "03/25",
  hideText = false,
  className = "",
}) => {
  return (
    <div
      className={`group9-card ${className}`}
      style={{ width, height, "--r": `${radius}px` }}
      role="img"
      aria-label="Glassy gradient card"
    >
      {!hideText && (
        <div className="group9-content">
          <span className="group9-name">{name}</span>
          <span className="group9-date">{date}</span>
        </div>
      )}
    </div>
  );
};

export default Group9Card;


