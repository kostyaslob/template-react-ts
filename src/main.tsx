import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./components/App";
import "modern-normalize";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
