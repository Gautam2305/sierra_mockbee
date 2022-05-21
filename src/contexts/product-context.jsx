import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducers/product-reducer";
import axios from "axios";
const initialValue = {
    products: [],
};
const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(productReducer,initialValue)
    useEffect(()=>{
        (async () => {
            const getProductRes = await axios.get("/api/products")
            if(getProductRes.status === 200 ){
                dispatch({
                    type: "INITIAL_PRODUCT", 
                    payload: getProductRes.data.products,
                });
            }
        })();
    }, [])
    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext);
export { useProduct, ProductProvider };