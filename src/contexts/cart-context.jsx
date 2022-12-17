import { createContext } from "react";
import React, { useContext, useState } from "react";

const cartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState({ cart: []});
    return(
        <cartContext.Provider value={{cart,setCart}}>
            {children}
        </cartContext.Provider>
    );
}

const useCart = () => useContext(cartContext);

export { CartProvider,useCart};