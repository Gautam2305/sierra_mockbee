import { Link } from "react-router-dom";
import { CartCard } from "../components/CartCard";
import { useCart } from "../contexts/cart-context";
export const CartPage=({item}) => {
    const {cart} = useCart();

    const cartId = cart.cart.map(item => item._id);
    console.log(cart.cart);
    return(
        <div>
            <nav className="main-nav">
                <div className="nav-category">
                    <h3 className="brand-name">SIERRA</h3>
                </div>
                <input className="nav-search" type="text" placeholder="Search for products, brands & more..."/>
                <div className="nav-icons">
                    <Link to="/logout"><button className="btn-primary-solid link-primary-solid"><h4>LOGOUT</h4></button></Link>
                    <Link to="/wishlist" className="btn-icon wishlist-icon"><i className="fa-regular fa-heart"></i><h6> Wishlist</h6></Link>
                </div>
            </nav>
            <div>
            {cart.cart.map(item => (
                <CartCard
                inCart={cartId.includes(item._id)}
                key={item.id}
                item={item} />
            ))}
            </div>
        </div>
    );
}