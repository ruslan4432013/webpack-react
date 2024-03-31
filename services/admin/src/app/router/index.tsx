import { createBrowserRouter } from "react-router-dom";
import { App } from "../app";
import { AboutPage } from "@/pages/about";
import { Suspense } from "react";

const routes = [
  {
    path: '/admin',
    element: <App/>,
    children: [
      {
        path: '/admin/about',
        element: <Suspense fallback={'Loading...'}><AboutPage/></Suspense>
      }
    ]
  }
]

export const router = createBrowserRouter(routes)

export default routes
