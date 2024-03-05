import Body from "./pages/Body";
import Carddetails from "./components/Carddetails";
import Featured from "./pages/Featured1";
import Header from "./components/Header";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Upload from "./components/Upload";
import { useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer/reducer";
function App() {
  const [modelData, setModelData] = useState([]);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body modelData={modelData} />,
    },
    {
      path: "/featured",
      element: <Featured modelData={modelData} />,
    },
    {
      path: "/upload",
      element: (
        <>
          <Header />
          <Upload />
        </>
      ),
    },
    {
      path: "/:id",
      element: <Carddetails />,
    },
  ]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/vishnupillai93/AI-Models/models"
      );
      setModelData(await response.json());
    })();
  }, []);

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
