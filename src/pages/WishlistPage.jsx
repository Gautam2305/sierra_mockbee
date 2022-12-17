import React from "react";
import { NavBar } from "../components/NavBar";
import { ProductCard } from "../components/ProductCard";
import { useWishlist } from "../contexts/wishlist-context";
export const WishlistPage = () => {
    const { wishlist } = useWishlist();
    const wishlistId = wishlist.wishList.map(item => item._id);
    console.log(wishlist.wishList);
    return(
        <>
        <NavBar/>
        <main className="main-login wishlist-main">
        <div className="wishlist-card">
        { wishlist.wishList.map(prod => 
                <ProductCard
                inWishlist={wishlistId.includes(prod._id)}
                key={prod.id} 
                item={prod} />
                )}
        
        </div>
    </main>
        </>
    );
}