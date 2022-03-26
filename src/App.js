import "./App.css";
import { CartPage } from "./pages/CartPage";
import { LandingPage } from "./pages/LandingPage";
import { LogoutPage } from "./pages/LogoutPage";
import { WishlistPage } from "./pages/WishlistPage";
import { RouterPath } from "./router/routes.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <RouterPath>
      <LandingPage></LandingPage> 
      <WishlistPage></WishlistPage>
      <CartPage></CartPage>
      <LogoutPage></LogoutPage>
      </RouterPath> 
    </div>
  );
}

export default App;
