import { App } from './app'
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage } from "@/pages/about";
import { ShopPage } from "@/pages/shop";
import { Suspense } from "react";

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'about',
        element: (
          <Suspense>
            <AboutPage/>
          </Suspense>
        )
      },
      {
        path: 'shop',
        element: (
          <Suspense>
            <ShopPage/>
          </Suspense>
        )
      }
    ]
  }
])

container.render(
  <RouterProvider router={router}/>
)
