import { Link } from "react-router-dom";
import { shopRoutes } from "@packages/shared/src/routes/shop";

const Shop = () => {
  return (
    <section>
      <h2>Shop</h2>
      <div>
        <Link to={shopRoutes.second}>To second page</Link>
      </div>
    </section>
  )
}


export default Shop
