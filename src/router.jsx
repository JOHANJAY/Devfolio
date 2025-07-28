import { createBrowserRouter } from "react-router";
import Hero from "./components/Hero";
import LandingPageLayout from "./Layout/LandingPageLayout";
import App from "./App";
import Projects from "./components/Projects";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "hero",
        element: <Hero />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);
