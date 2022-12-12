import { Filter } from "../components/Filter";
import { NavBar } from "../components/NavBar";
import { ProductList } from "../components/ProductList";
import { useEffect } from "react";

export const ProductsListPage = () =>{

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0
      })
    },0)
},[])
    return(
        <div>
            <NavBar/>
            <div className="product-page-container">
            <Filter/>
            <ProductList/>
            </div>
        </div>
    );
}