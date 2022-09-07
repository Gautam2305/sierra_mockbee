export const filterReducer = (state, action) => {
    switch(action.type){
        case "MEN_CLOTHING":
            return {...state, categories:{...state.categories, men: !state.categories.men}};
        
        case "WOMEN_CLOTHING": 
            return {...state, categories:{...state.categories, women: !state.categories.women}};

        case "FOOTWEAR":
            console.log(state.categories.footwear)
            return {...state, categories: {...state.categories, footwear: !state.categories.footwear}};
        
        case "RATINGS": 
            return {...state, ratings: action.payload}

        case "SORT_BY":
            return {...state, sortBy: action.payload}

        case "IN_STOCK":
            return {...state, inStock: action.payload}

        case "FAST_DELIVERY":
            return {...state, fastDelivery: action.payload}

        case "CLEAR":
            return {
                ...state,
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

        default:
            return state;
    }
}