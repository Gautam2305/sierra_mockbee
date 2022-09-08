import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({item}) =>{

    return(
        <div>
            <div className="card-container">
            <div className="prod-img-container">
                <div className="prod-img">
                    <img className="image" src={item.imgSrc} alt="sierra_clothes"/>
                </div>
            </div>
            
            <div className="prod-name"><h4> {item.productName} </h4></div>
            <div className="prod-price-detail">
                <div className="prod-price">
                    <h4><i className="fa-solid fa-rupee-sign"> {item.price} </i></h4> 
                <p className="prod-old-price"><i className="fa-solid fa-rupee-sign">.</i> <s>{item.originalPrice}</s> </p>
                <p><span className="primary-text-color"> (70% OFF)</span></p></div>
                <div className="ratings-container">
                    <h4> {item.ratings} | <i className="fas fa-star rating-star"></i></h4>
                </div>
            </div>
            <div className="cta-button">
            <button className="btn-primary-solid"><Link className="link-primary-solid" to="/cart"><h4>ADD TO WISHLIST</h4></Link></button>
                <button className="btn-primary-outline"><Link className="link-primary-outline" to="/cart"><h4>ADD TO BAG</h4></Link></button>
            </div>
        </div>
        </div>
    )
}
export { ProductCard };