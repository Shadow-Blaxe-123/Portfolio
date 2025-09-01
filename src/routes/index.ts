import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "@/Pages/HomePage";
import Blog from "@/Pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        Component: HomePage,
        index: true,
      },
      {
        path: "blog",
        Component: Blog,
      },
    ],
  },
]);
