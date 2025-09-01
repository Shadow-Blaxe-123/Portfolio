import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "@/Pages/HomePage";
import Blog from "@/Pages/Blog";
import AllProjects from "@/Pages/AllProjects";
import ParcelDeliveryDetails from "@/Pages/details/parcel";
import LibraryProjectDetails from "@/Pages/details/library";
import ChatAppDetails from "@/Pages/details/chat";

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
      {
        path: "projects",
        Component: AllProjects,
      },
      {
        path: "/projects/parcel",
        Component: ParcelDeliveryDetails,
      },
      {
        path: "/projects/library",
        Component: LibraryProjectDetails,
      },
      {
        path: "/projects/chat",
        Component: ChatAppDetails,
      },
    ],
  },
]);
