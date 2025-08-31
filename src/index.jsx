import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementLight } from "./screens/ElementLight/ElementLight";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <ElementLight />
  </StrictMode>,
);
