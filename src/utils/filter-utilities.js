const sortByCategoryFilter = ( sortByCategoryList, category) => {
    const sortedArray = [];
    const {men ,women, footwear} = category;
    if(men!==true && women!==true && footwear!==true){
        return sortByCategoryList;
    }
    else if(men === true){
        let sortedList = sortByCategoryList.filter(item => item.categoryName === "men")
        sortedArray.push(...sortedList);
    }
    else if(women === true){
        let sortedList = sortByCategoryList.filter(item => item.categoryName === "women")
        sortedArray.push(...sortedList);
    }
    else if(footwear === true){
        let sortedList = sortByCategoryList.filter(item => item.categoryName === "footwear")
        sortedArray.push(...sortedList);
    }
    return sortedArray;
}

const inStockFilter= (inStockProduct , inStockProductList) => {
    return [...inStockProduct].filter(item => 
        inStockProductList ? item.inStock === true : item)
}

const fastDeliveryFilter = (fastDeliveryProduct, fastDeliveryProductList) => {
    return [...fastDeliveryProduct].filter(item =>
        fastDeliveryProductList ? item.fastDelivery === true : item)
} 

const sortByFilter = (sortByPrice , sortByPriceList) => {
    if(sortByPriceList === "HIGH_TO_LOW"){
        return [...sortByPrice].sort((a,b) => b.price - a.price)
    }
    else if(sortByPriceList === "LOW_TO_HIGH"){
        return [...sortByPrice].sort((a,b) => a.price - b.price)
    } 
    else{
        return [...sortByPrice];
    }
}

const ratingFilter = (ratingsList, ratingsValue) => {
    if ( ratingsValue === "4STARS_&_ABOVE"){
        return [...ratingsList].filter( (item) => item.ratings >= 4)
    }
    else if ( ratingsValue === "3STARS_&_ABOVE"){
        return [...ratingsList].filter( (item) => item.ratings >= 3)
    }
    else if ( ratingsValue === "2STARS_&_ABOVE"){
        return [...ratingsList].filter( (item) => item.ratings >= 2)
    }
    else if ( ratingsValue === "1STARS_&_ABOVE"){
        return [...ratingsList].filter( (item) => item.ratings >= 1)
    }
    else return ratingsList;
}
export {
    ratingFilter, 
    inStockFilter,
    fastDeliveryFilter,
    sortByFilter,
    sortByCategoryFilter
}