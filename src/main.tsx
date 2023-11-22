import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 路由绑定 */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
