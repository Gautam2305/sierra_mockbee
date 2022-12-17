import { Link, useNavigate } from "react-router-dom"; 
import { useAuth } from "../contexts/auth-context";
import { useCart } from "../contexts/cart-context";
import { useWishlist } from "../contexts/wishlist-context";
export const NavBar = () =>{
    const { user,setUser } = useAuth();
    const { setWishlist} = useWishlist();
    const {setCart} = useCart();
    const navigate = useNavigate();
    const logoutHandler = () => {
        setUser({token:null});
        navigate("/");
        setWishlist({wishlist: []});
        setCart({cart: []})
    }
    return(
        <div>
            <nav className="main-nav">
                <div className="nav-category">
                    <h3 className="brand-name">SIERRA</h3>
                </div>
                <input className="nav-search" type="text" placeholder="Search for products, brands & more..."/>
                <div className="nav-icons">
                    <Link to="/login"><button className="btn-primary-solid link-primary-solid"><h4>{ user.token === null ?<span style={{cursor: "pointer"}} onClick={() => navigate("/login")}>LOGIN</span>  : <span style={{cursor: "pointer"}} onClick={{logoutHandler}}>LOGOUT</span>}</h4></button></Link>
                    <Link to="/wishlist" className="btn-icon wishlist-icon"><i className="fa-regular fa-heart"></i><h6> Wishlist</h6></Link>
                    <Link to="/cart" className="btn-icon bag-icon "><i className="fa-solid fa-bag-shopping"></i><h6> Bag</h6></Link>
                </div>
            </nav>
        </div>
        
    );
}