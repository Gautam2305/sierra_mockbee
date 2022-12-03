import { Link } from "react-router-dom";
import axios from "axios";
import { useWishlist } from "../contexts/wishlist-context";
import { useAuth } from "../contexts/auth-context";
export const WishlistCard = ({item}) => {
    const {wishlist, setWishlist} = useWishlist();
    const {user} = useAuth();
    console.log(item);
    const removeFromWishlist2 = async () =>{
        try{
            const responseDel = await axios({
                method: "delete",
                url: `/api/user/wishlist/${item._id}`,
                headers: {authorization: user.token},
                data:{product: item}
            });
            
            setWishlist({ wishList: responseDel.data.wishlist});
            console.log(wishlist.wishList)

        }catch(error){
            console.log(error);
        }

    }
    return (
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
            <button className="btn-primary-solid link-primary-solid" onClick={removeFromWishlist2}><h4>REMOVE FROM WISHLIST</h4></button>
                <button className="btn-primary-outline"><Link className="link-primary-outline" to="/cart"><h4>ADD TO BAG</h4></Link></button>
            </div>
        </div>
        </div>
    )
}