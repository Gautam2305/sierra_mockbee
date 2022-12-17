import React from "react";
import { NavBar } from "../components/NavBar";
import { ProductCard } from "../components/ProductCard";
import { useCart } from "../contexts/cart-context";
import { useWishlist } from "../contexts/wishlist-context";
export const WishlistPage = () => {
    const { wishlist } = useWishlist();
    const {cart} = useCart();
    const wishlistId = wishlist.wishList.map(item => item._id);
    // console.log(wishlist.wishList);
    const cartId = cart.cart.map(item=> item._id)
    return(
        <>
        <NavBar/>
        <main className="main-login wishlist-main">
        <div className="wishlist-card">
        { wishlist.wishList.map(prod => 
                <ProductCard
                inCart={cartId.includes(prod._id)}
                inWishlist={wishlistId.includes(prod._id)}
                key={prod.id} 
                item={prod} />
                )}
        
        </div>
    </main>
        </>
    );
}