import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import Featured from "../pages/Featured";
import Details from "../pages/Details";
import AddModel from "../pages/AddModel";
import Explore from "../pages/Explore";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/featured",
    element: <Featured />,
  },
  {
    path: "/add-model",
    element: <AddModel />,
  },
  {
    path: "/:id",
    element: <Details />,
  },
  {
    path: "*",
    element: <h1>Page Not Found!</h1>,
  },
]);
