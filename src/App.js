import "./App.css";
import { MockAPI } from "./mockman";
import { LandingPage } from "./pages/LandingPage";
import { LogoutPage } from "./pages/LogoutPage";
import { ProductsListPage } from "./pages/ProductsListPage";
import { WishlistPage } from "./pages/WishlistPage";
import { RouterPath } from "./router/routes.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <RouterPath>
      <LandingPage/>
      <WishlistPage/>
      <ProductsListPage/>
      <LogoutPage/>
      <MockAPI/>
      </RouterPath> 
    </div>
  );
}

export default App;
