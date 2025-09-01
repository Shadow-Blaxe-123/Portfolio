import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "@/Pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        Component: HomePage,
        index: true,
      },
    ],
  },
]);
