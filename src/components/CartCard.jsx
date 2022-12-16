import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { useCart } from "../contexts/cart-context";

export const CartCard = ({item}) => {
    const { user }= useAuth();
    const { cart, setCart } = useCart();



    return(
        <div class="card-container cart-container">
        <div class="prod-container">
            <div class="prod-img-container">
                <div class="prod-img">
                    <img src={item.imgSrc} alt="sweatshirt"/>
                </div>
            </div>
            <div class="prod-name cart-prod-details"><h4>{item.productName} </h4>
                <div class="prod-price-detail">
                    <div class="prod-price"><h4><i class="fa-solid fa-rupee-sign">.</i> 999</h4> 
                    <p class="prod-old-price"><i class="fa-solid fa-rupee-sign">.</i>{item.price}</p>
                    <p><span class="primary-text-color"> (70% OFF)</span></p></div>
                </div>
                <div class="cta-button cta-button-cart">
                    <div class="quantity-container">  
                        <h4>Quantity: <button class="minus-btn">-</button><span>1</span><button class="plus-btn"> + </button></h4>
                    </div>
                    <button class="btn-primary-solid"><Link class="link-primary-solid"  href="#"><h4>REMOVE FROM CART</h4></Link></button>
                    <button class="btn-primary-outline"><Link class="link-primary-outline"  href="#"><h4>MOVE TO WISHLIST</h4></Link></button>
                </div>
            </div>
        </div>
        <div class="order-detail-container">
            <h4>ORDER DETAILS</h4>
            <div class="price-detail-div">
                <div>
                    <ul class="price-detail-list">
                        <li><h4>Price :</h4></li>
                        <li><h4>Discount : </h4></li>
                        <li><h4>Delivery Charges : </h4></li>
                    </ul>
                </div>
                <div>
                    <ul class="price-list">
                        <li style="padding-left: 10px;"><h4><i class="fa-solid fa-rupee-sign">.</i> {item.price} </h4></li>
                        <li><h4> - <i class="fa-solid fa-rupee-sign">.</i> {(item.price/item.originalPrice)} </h4></li>
                        <li style="padding-left:10px;"><h4> <i class="fa-solid fa-rupee-sign">.</i> 50</h4></li>
                        <li></li>
                    </ul>
                </div>    
            </div> 
            <div class="total-amt-container">
                <h4>TOTAL AMOUNT</h4>
                <h4 style="padding-left: 90px;"> <i class="fa-solid fa-rupee-sign">.</i> 1049</h4>
            </div>
            <h4>You will save <i class="fa-solid fa-rupee-sign">.</i> 1049 on this order</h4>
            <div class="secondary-btn-container">
                <button class="btn-secondary-solid"><a class="link-primary-solid"  href="#"><h4>PLACE ORDER</h4></a></button>
            </div>
            
        </div>
    </div>
    )
}