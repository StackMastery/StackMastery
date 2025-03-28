import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import RedBank from "@/pages/projects/RedBank";
import ToFound from "@/pages/projects/ToFound";
import Razels from "@/pages/projects/Razels";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects/red-bank",
        element: <RedBank />,
      },
      {
        path: "/projects/to-found",
        element: <ToFound />,
      },
      {
        path: "/projects/razels",
        element: <Razels />,
      },
    ],
  },
]);
