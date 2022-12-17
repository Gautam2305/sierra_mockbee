import { useProduct } from "../contexts/product-context"
import { ProductCard } from "./ProductCard";
import { ratingFilter,
        inStockFilter,
        fastDeliveryFilter,
        sortByFilter,
        sortByCategoryFilter } from "../utils/filter-utilities";
import { useFilter } from "../contexts/filter-context";
import { useWishlist} from "../contexts/wishlist-context";
import { useCart } from "../contexts/cart-context";
export const ProductList = () => {
    const { products } = useProduct();
    const { state } = useFilter();
    const { wishlist } = useWishlist();
    const {cart} = useCart();
    const wishlistId = wishlist.wishList.map((item) => item._id); 
    const cartId = cart.cart.map((item) => item._id); 


    
    //filter functions
    const fastDeliveryFilterList = fastDeliveryFilter( products, state.fastDelivery);
    const inStockFilterList = inStockFilter(fastDeliveryFilterList, state.inStock);
    const sortByFilterList = sortByFilter(inStockFilterList, state.sortBy);
    const ratingList = ratingFilter(sortByFilterList, state.ratings);
    const sortByCategoryFilterList = sortByCategoryFilter(ratingList, state.categories);
    
    // console.log(sortByCategoryFilterList);
    return (
        <div>
            <div className="product-list-container">
                {sortByCategoryFilterList.map(item=>
                <ProductCard  
                inWishlist={wishlistId.includes(item._id)}
                key={item.id} 
                item={item}
                inCart={cartId.includes(item._id)} />
                )}
        
            </div>
        </div>
    )
}