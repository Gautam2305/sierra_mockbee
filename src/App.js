import "./App.css";
import { MockAPI } from "./mockman";
import { LandingPage } from "./pages/LandingPage";
import { LogoutPage } from "./pages/LogoutPage";
import { ProductsListPage } from "./pages/ProductsListPage";
import { WishlistPage } from "./pages/WishlistPage";
import { LoginPage } from "./pages/LoginPage";
import { RouterPath } from "./router/routes.js";
import { CartPage } from "./pages/CartPage";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <RouterPath>
      <LoginPage/>
      <LandingPage/>
      <WishlistPage/>
      <ProductsListPage/>
      <CartPage/>
      <MockAPI/>
      </RouterPath> 
    </div>
  );
}

export default App;
