import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router";

// fonts
import "@fontsource/press-start-2p";
import "@fontsource/caveat";
import "@fontsource/ibm-plex-sans";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
