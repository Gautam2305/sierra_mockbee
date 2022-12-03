import React from "react";
import { NavBar } from "../components/NavBar";
import { WishlistCard } from "../components/WishlistCard";
import { useWishlist } from "../contexts/wishlist-context";
export const WishlistPage = () => {
    const { wishlist } = useWishlist();
    const wishlistId = wishlist.wishList.map(item => item._id);
    return(
        <>
        <NavBar/>
        <main className="main-login wishlist-main">
        <div className="wishlist-empty">{wishlist.wishList.length === 0 ?"Your Wishlist is empty" :""}
        <div className="card-container">
        {
            wishlist.wishList.map(item => {
                <WishlistCard 
                key={item.id} 
                item={item} />
                }) 
        }   
            </div>
        </div>
    </main>
        </>
    );
}