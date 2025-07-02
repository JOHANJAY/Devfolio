import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// fonts
import "@fontsource/press-start-2p";
import "@fontsource/caveat";
import "@fontsource/ibm-plex-sans";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
