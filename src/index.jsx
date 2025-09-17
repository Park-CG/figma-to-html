import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementLight } from "./screens/ElementLight/ElementLight";
import "../tailwind.css";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <ElementLight />
  </StrictMode>,
);
