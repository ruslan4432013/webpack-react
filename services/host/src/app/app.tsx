import { Link, Outlet } from "react-router-dom";
import { shopRoutes } from '@packages/shared/src/routes/shop'
import { adminRoutes } from '@packages/shared/src/routes/admin'

export const App = () => {
  return (
    <div>
      <nav>
        <Link to={adminRoutes.about}>ABOUT</Link>
        <br/>
        <Link to={shopRoutes.main}>SHOP</Link>
      </nav>
      <h1>Page</h1>
      <Outlet/>
    </div>
  )
}
