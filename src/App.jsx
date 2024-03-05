import React, { useEffect } from "react";
import { AppRouter } from "./navigation/index";
import { Provider, useDispatch, useSelector } from "react-redux";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { setmodel } from "./utils/modelSlice";
import axios from "axios";
import "./utils/constants";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await axios.get("/");
      dispatch(setmodel(response.data));
    })();
  }, []);

  return <RouterProvider router={AppRouter} />;
}
