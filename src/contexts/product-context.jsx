import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [ products, setProducts ] = useState([]);
    useEffect(()=>{
        (async () => {
            const getProductRes = await axios.get("/api/products")
            if(getProductRes.status === 200 ){
                    setProducts(getProductRes.data.products)
            }
        })();
    }, [])
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext);
export { useProduct, ProductProvider };