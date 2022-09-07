import { useProduct } from "../contexts/product-context"
import { ProductCard } from "./ProductCard";
import { ratingFilter,
        inStockFilter,
        fastDeliveryFilter,
        sortByFilter,
        sortByCategoryFilter } from "../utils/filter-utilities";
import { useFilter } from "../contexts/filter-context";
export const ProductList = () => {
    const { products } = useProduct();
    const { state ,dispatch } = useFilter();

    const fastDeliveryFilterList = fastDeliveryFilter( products, state.fastDelivery);
    const inStockFilterList = inStockFilter(fastDeliveryFilterList, state.inStock);
    const sortByFilterList = sortByFilter(inStockFilterList, state.sortBy);
    const ratingList = ratingFilter(sortByFilterList, state.ratings);
    const sortByCategoryFilterList = sortByCategoryFilter(ratingList, state.categories)
    

    return (
        <div>
            <div className="product-list-container">
                {sortByCategoryFilterList.map(item=>
                <ProductCard key={item.id} item={item} />
                )}
        
            </div>
        </div>
    )
}