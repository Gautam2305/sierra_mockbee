import { Filter } from "../components/Filter";
import { NavBar } from "../components/NavBar";
import { ProductList } from "../components/ProductList";

export const ProductsListPage = () =>{
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