import About from "../pages/About";
import Article from "../pages/Article";
import Board from "../pages/Board";
import Layout from "../pages/Layout";
import Login from "../pages/Login";

import { createBrowserRouter, createHashRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // path: "board",
        index: true,
        element: <Board />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article/:id/:name",
    element: <Article />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
