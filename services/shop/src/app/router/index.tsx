import { createBrowserRouter } from "react-router-dom";
import { App } from "../app";
import { ShopPage } from "@/pages/shop";
import { Suspense } from "react";
import { UserCard } from "@packages/shared/src/ui/user-card";

const routes = [
  {
    path: '/shop',
    element: <App/>,
    children: [
      {
        path: '/shop/main',
        element: <Suspense fallback={'Loading...'}><ShopPage/></Suspense>
      },
      {
        path: '/shop/second',
        element: (
          <Suspense fallback={'Loading...'}>
            <div style={{ color: 'red' }}>
              <h2>Second page</h2>
              <UserCard username={'FROM SHOP'}/>
            </div>
          </Suspense>
        )
      }
    ]
  }
]

export const router = createBrowserRouter(routes)

export default routes
