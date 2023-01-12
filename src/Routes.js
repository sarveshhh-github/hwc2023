import React from "react";
// import App from "./App";
import { App, PoolA } from './Constants'
import { createBrowserRouter } from "react-router-dom"
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/pool-a",
        element: <PoolA />
    }
])
export { router };