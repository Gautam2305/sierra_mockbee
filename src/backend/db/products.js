import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    productName: "Nike Shoe",
    price: "3999",
    categoryName: "Footwear",
    imgSrc:"../assets/nike-shoe.jpg",
    inStock: true,
  },
  {
    _id: uuid(),
    productName: "New Balance Shoes",
    price: "5999",
    categoryName: "Footwear",
    imgSrc:"../assets/new-b-shoes.jpg",
    inStock: true,
  },
  {
    _id: uuid(),
    productName: "Adidas Shoe",
    price: "3599",
    categoryName: "Footwear",
    imgSrc:"../assets/adidas-shoes.jpg",
    inStock: true,
  },
  {
    _id: uuid(),
    productName: "H&M Shirt",
    price: "999",
    categoryName: "Men",
    imgSrc:"../assets/h&m-shirt.webp",
    inStock: true,
  },
  {
    _id: uuid(),
    productName: "New Balance T-Shirt",
    price: "4999",
    categoryName: "Men",
    imgSrc:"../assets/new-balance-t-shirt.jpg",
    inStock: true,
  },
  {
    _id: uuid(),
    productName: "W",
    price: "1999",
    categoryName: "Women",
    imgSrc:"../assets/w-kurta.webp",
    inStock: true,
  },
  {
    _id: uuid(),
    productName: "Libas",
    price: "1999",
    categoryName: "Men",
    imgSrc:"../assets/women-kurta.webp",
    inStock: true,
  },
  {
    _id: uuid(),
    productName: "Levi's",
    price: "1999",
    categoryName: "Women",
    imgSrc:"../assets/levis-shirt.webp",
    inStock: true,
  },
];
