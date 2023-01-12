import React from "react";
// import App from "./App";
import { App, PoolA, PoolB, PoolC, PoolD } from "./Constants";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pool-a",
    element: <PoolA />,
  },
  {
    path: "/pool-b",
    element: <PoolB />,
  },
  {
    path: "/pool-c",
    element: <PoolC />,
  },
  {
    path: "/pool-d",
    element: <PoolD />,
  },
]);
export { router };
