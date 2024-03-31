import { createBrowserRouter } from "react-router-dom";
import { App } from "../app";
import shopRoutes from 'shop/router'
import adminRoutes from 'admin/router'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      ...shopRoutes,
      ...adminRoutes,
    ]
  }
])

