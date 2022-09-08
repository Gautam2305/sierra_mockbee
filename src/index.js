import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import { ProductProvider } from "./contexts/product-context";
import { FilterProvider } from "./contexts/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <FilterProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </FilterProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);