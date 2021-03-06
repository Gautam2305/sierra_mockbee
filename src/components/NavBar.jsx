import { Link } from "react-router-dom"; 
import { LogoutPage } from "../pages/LogoutPage";
export const NavBar = () =>{
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
                    <Link to="/cart" className="btn-icon bag-icon "><i className="fa-solid fa-bag-shopping"></i><h6> Bag</h6></Link>
                </div>
            </nav>
        </div>
        
    );
}