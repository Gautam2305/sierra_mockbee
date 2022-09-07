import { useContext, createContext, useReducer } from "react";
import { filterReducer } from "../reducers/filter-reducer";

const FilterContext = createContext();
const initialState = {
    inStock: true,
    fastDelivery: false,
    ratings: null,
    sortBy: null,
    categories: {
        men: null,
        women: null, 
        footwear: null,
    }
}
const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(filterReducer,initialState)
    return(
        <FilterContext.Provider value = {{state,dispatch}} >
            {children}
        </FilterContext.Provider>
    );
};

const useFilter = () => useContext(FilterContext);

export { useFilter , FilterProvider};