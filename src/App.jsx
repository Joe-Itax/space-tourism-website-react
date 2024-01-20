import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Layout from "./components/layout/layout";
import CrewLayout from "./components/layout/crew-layout";
import DestinationLayout from "./components/layout/destination-layout";
import TechnologyLayout from "./components/layout/technology-layout";
import Home from "./pages/home";

// Crew Pages
import Commander from "./pages/crew/commander";
import Engineer from "./pages/crew/engineer";
import Pilot from "./pages/crew/pilot";
import Specialist from "./pages/crew/specialist";

// Destination Pages
import Europa from "./pages/destination/europa";
import Mars from "./pages/destination/mars";
import Moon from "./pages/destination/moon";
import Titan from "./pages/destination/titan";

// Technology Pages
import Capsule from "./pages/technology/capsule";
import Spaceport from "./pages/technology/spaceport";
import Vehicle from "./pages/technology/vehicle";

import "./App.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/crew",
        element: <CrewLayout />,
        children: [
          {
            path: "",
            element: <Commander />,
          },
          {
            path: "specialist",
            element: <Specialist />,
          },
          {
            path: "pilot",
            element: <Pilot />,
          },
          {
            path: "engineer",
            element: <Engineer />,
          },
        ],
      },
      {
        path: "/destination",
        element: <DestinationLayout />,
        children: [
          {
            path: "",
            element: <Moon />,
          },
          {
            path: "mars",
            element: <Mars />,
          },
          {
            path: "europa",
            element: <Europa />,
          },
          {
            path: "titan",
            element: <Titan />,
          },
        ],
      },
      {
        path: "/technology",
        element: <TechnologyLayout />,
        children: [
          {
            path: "",
            element: <Vehicle />,
          },
          {
            path: "capsule",
            element: <Capsule />,
          },
          {
            path: "spaceport",
            element: <Spaceport />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
