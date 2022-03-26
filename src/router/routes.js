import { Routes , Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { WishlistPage } from "../pages/WishlistPage";
import { CartPage } from "../pages/CartPage";
import { LoginPage } from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";
import { SignupPage } from "../pages/SignupPage";
import { ProductsListPage } from "../pages/ProductsListPage";
import { MockAPI } from "../mockman";
import { ErrorComponent } from "../components/ErrorComponent";

export const RouterPath = () => {
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/products" element={<ProductsListPage/>} />
            <Route path="/wishlist" element={<WishlistPage/>} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/logout" element={<LogoutPage/>} />
            <Route path="/mockman" element={<MockAPI/>}/>
            <Route path="*" element={<ErrorComponent/>}/> 
        </Routes>
    );
}