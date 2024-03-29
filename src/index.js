import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import { ProductProvider } from "./contexts/product-context";
import { FilterProvider } from "./contexts/filter-context";
import { AuthProvider } from "./contexts/auth-context";
import { WishlistProvider } from "./contexts/wishlist-context";
import { CartProvider } from "./contexts/cart-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <WishlistProvider>
          <AuthProvider>
            <FilterProvider>
              <ProductProvider>
                <App />
              </ProductProvider>
            </FilterProvider>
          </AuthProvider>
        </WishlistProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);