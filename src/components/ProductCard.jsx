import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { useWishlist } from "../contexts/wishlist-context";
import axios from "axios";
import { useCart } from "../contexts/cart-context";
const ProductCard = ({item,inWishlist,inCart}) =>{
    const navigate = useNavigate();
    const {user} = useAuth();
    const {wishlist,setWishlist} = useWishlist();
    const {setCart} = useCart();

    const addToWishlist = async () =>{
        if(user.token === null){
            navigate("/login");
        }
        try{
            if(wishlist.wishList.find(prod => prod._id === item._id)){
                console.log("Already in wishlist");

            }else{
                const response = await axios({
                    method: "post",
                    url: "/api/user/wishlist",
                    headers: {authorization: user.token},
                    data:{product: item}
            });
            setWishlist({ wishList: response.data.wishlist});
            navigate("/products");
            }
        }catch(error){
            console.log(error);
            navigate("*");
        }

    }
    const removeFromWishlist = async () =>{
        try{
            const responseDel = await axios({
                method: "delete",
                url: `/api/user/wishlist/${item._id}`,
                headers: {authorization: user.token},
                data:{product: item}
            });
            
            setWishlist({ wishList: responseDel.data.wishlist});

        }catch(error){
            console.log(error);
        }

    }

    const addToCart = async () =>{
        if(user.token === null){
            navigate("/login")
        }
        try{
            const cartRes = await axios({
                method:"post",
                url:"/api/user/cart",
                headers: {authorization: user.token},
                data: {product: item}
            })
            setCart({cart: cartRes.data.cart})
        }catch(error){
            console.log("Oops", error);
        }
    }
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
            {inWishlist ? (<button className="btn-primary-solid link-primary-solid" onClick={removeFromWishlist}><h4>REMOVE FROM WISHLIST</h4></button>) : (<button className=" btn-primary-solid link-primary-solid" onClick={addToWishlist}><h4>ADD TO WISHLIST</h4></button>)}
            {inCart? (<button className="btn-primary-outline link-primary-outline" onClick={removeFromCart} ><h4>REMOVE FROM BAG</h4></button>):(<button className="btn-primary-outline link-primary-outline" onClick={addToCart} ><h4 style={{fontSize:"0.8rem"}}>ADD TO BAG</h4></button>)}
            </div>
        </div>
        </div>
    )
}
export { ProductCard };