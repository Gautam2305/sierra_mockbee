import { useFilter } from "../contexts/filter-context";
import { useProduct } from "../contexts/product-context";
const Filter = () => {
    const { state, dispatch } = useFilter();
    const { products } = useProduct()
return(
<div>
    <div className="filter-container">
        <div className="slidecontainer">
            <div>
                <h4 className="filter-head">Filters 
                <p className="link-primary-outline" style={{cursor: "pointer"}} onClick={() => dispatch({type: "CLEAR"})}>
                        Clear Filters
                    </p></h4>
            </div>
            <h4>Price</h4>
            <div className="filter-category">
                <h4>Category</h4>
                <label className="category-list">
                    <input 
                    checked = {state.categories.men}
                    type = "checkbox" 
                    className = "filter-checkbox"
                    onChange = { e => dispatch({type:"MEN_CLOTHING", payload:e.target.checked})} />
                    Men Clothing
                </label>
                <label className="category-list">
                    <input 
                    checked = {state.categories.women}
                    type = "checkbox" 
                    className = "filter-checkbox" 
                    onChange = { e => dispatch({type:"WOMEN_CLOTHING", payload:e.target.checked})} />
                    Women Clothing
                </label>
                <label className="category-list">
                <input 
                    checked = {state.categories.footwear}
                    type = "checkbox" 
                    className = "filter-checkbox" 
                    onChange = { e => dispatch({type:"FOOTWEAR", payload: e.target.checked})} />
                    Footwear
                </label>
            </div>
            <div className="filter-category">
                <h4>Rating</h4>
                <label htmlFor="category-radio" className="category-list">
                    <input
                    id="category-radio"
                    name="ratings-radio"
                    value = "4STARS_&_ABOVE"
                    type="radio" 
                    className="filter-radio"
                    onChange = { (e) => dispatch({type:"RATINGS" , payload: e.target.value})}/>
                    4 Stars & above
                </label>
                <label htmlFor="category-radio2" className="category-list">
                    <input 
                    id="category-radio2"
                    name="ratings-radio"
                    type="radio" 
                    className="filter-radio"
                    onChange={ () => dispatch ({ type:"RATINGS" , payload:"3STARS_&_ABOVE"})}/>
                    3 Stars & above
                </label>
                <label htmlFor="category-radio3" className="category-list">
                    <input 
                    id="category-radio3"
                    name="ratings-radio"
                    type="radio" 
                    className="filter-radio" 
                    onChange={ () => dispatch({type:"RATINGS" , payload:"2STARS_&_ABOVE"})}/>
                    2 Stars & above
                </label>
                
                <label htmlFor="category-radio4">
                    <input
                    id="category-radio4"
                    name="ratings-radio"
                    type="radio" 
                    className="filter-radio" 
                    onChange={ () => dispatch({type:"RATINGS" , payload:"1STARS_&_ABOVE"})}/>
                    1 Stars & above
                </label>
            </div>
            <div className="filter-category">
                <h4>Sort By</h4>
                    <label className="category-list">
                        <input 
                        name="sort-checkbox"
                        checked = {state.sortBy === "LOW_TO_HIGH"}
                        type="radio" 
                        id="filter-checkbox" 
                        onChange = { () => dispatch({ type:"SORT_BY" , payload:"LOW_TO_HIGH"})} />
                        Price-Low to High
                    </label>
                    <label className="category-list">
                        <input 
                        name="sort-checkbox"
                        checked = {state.sortBy === "HIGH_TO_LOW"}
                        type="radio" 
                        id="filter-checkbox"
                        onChange={ () => dispatch({ type:"SORT_BY" , payload:"HIGH_TO_LOW"})} />
                        Price - High to Low
                        </label>

                    <label className="category-list">
                        <input
                        checked = {state.inStock} 
                        type="checkbox" 
                        className="filter-checkbox" 
                        onChange={ e => dispatch({ type:"IN_STOCK" , payload:e.target.checked})}/>
                        In Stock</label>
                    <label className="category-list">
                        <input 
                        checked = {state.fastDelivery}
                        type="checkbox" 
                        className="filter-checkbox" 
                        onChange={ e => dispatch({ type:"FAST_DELIVERY" , payload:e.target.checked})}/>
                        Fast Delivery</label>
            </div>
        </div>
    </div>
</div>
);
}
export { Filter };