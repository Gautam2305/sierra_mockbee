import { useProduct } from "../contexts/product-context"
import { ProductCard } from "./ProductCard";
export const ProductList = () => {
    const { state } = useProduct();
    return (
        <div>
            <div className="product-list-container">
                {state.products.map(item=>
                <ProductCard key={item.id} item={item} />
                )}
        
            </div>
        </div>
    )
}