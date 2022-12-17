import axios from "axios";
import React from "react";
import { useAuth } from "../contexts/auth-context";
import { useCart } from "../contexts/cart-context";

export const CartCard = ({item}) => {
    const { user }= useAuth();
    const { cart, setCart } = useCart();

    const removeFromCart = async () => {
        try{
            const cartDelRes = await axios({
                method: "delete",
                url: `/api/user/cart/${item._id}`,
                headers: {authorization: user.token},
                data: {product: item}
            })
            setCart({cart: cartDelRes.data.cart})
        }catch(error){
            console.log(error);
        }
    }

    const incrementHandler = async() => {
        const resForInc = await axios({
            method: "post",
            url:`/api/user/cart/${item._id}`,
            headers: {authorization: user.token},
            data: {
                action: {
                    type: "increment"
                }
            }
        })
        setCart({cart: resForInc.data.cart})
    }


    const decrementHandler = async() => {
        const resForDec = await axios({
            method:"delete",
            url: `/api/user/cart/${item._id}`,
            headers: {authorization: user.token},
            data: {
                action: {
                    type: "decrement"
                }
            }
        })
        setCart({cart: resForDec.data.cart})
    }
    return(
        <div className="cart-layout">
        <div className="card-container cart-container">
        <div className="prod-container prod-cart-container">
            <div className="prod-img-container">
                <div className="prod-img">
                    <img src={item.imgSrc} alt="sweatshirt"/>
                </div>
            </div>
            <div className="prod-name cart-prod-details"><h4>{item.productName} </h4>
                <div className="prod-price-detail">
                    <div className="prod-price"><h4><i className="fa-solid fa-rupee-sign">.</i> {item.price}</h4> 
                    <p className="prod-old-price"><i className="fa-solid fa-rupee-sign">.</i>{item.originalPrice}</p>
                </div>
                <div className="cta-button cta-button-cart">
                    <div className="quantity-container">  
                        <h4>Quantity: <button className="minus-btn" onClick={decrementHandler}>-</button><span>{item.qty}</span><button className="plus-btn" onClick={incrementHandler}> + </button></h4>
                    </div>
                    <button className="btn-primary-solid link-primary-solid" onClick={removeFromCart}><h4>REMOVE FROM CART</h4></button>
                </div>
            </div>
        </div>
    </div>

        <div className="order-detail-container">
            <h4>ORDER DETAILS</h4>
            <div className="price-detail-div">
                <div>
                    <ul className="price-detail-list">
                        <li><h4>Price :</h4></li>
                        <li><h4>Discount : </h4></li>
                    </ul>
                </div>
                <div>
                    <ul className="price-list">
                        <li style={{padding: "10px"}}><h4><i className="fa-solid fa-rupee-sign">.</i> {item.price} </h4></li>
                        <li><h4> - <i className="fa-solid fa-rupee-sign">.</i> {item.originalPrice - item.price} </h4></li>
                    </ul>
                </div>    
            </div> 
            <div className="secondary-btn-container">
                <button className="btn-secondary-solid"><a className="link-primary-solid"><h4>PLACE ORDER</h4></a></button>
        </div>
        </div>
        </div>
    </div>
    
    )
}