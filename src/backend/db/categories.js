import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    description:
      "clothes for men",
    img: "./assets/new-balance-t-shirt.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description:
      "clothes for women",
    img: "./assets/uspa-shirt.webp",
  },
  {
    _id: uuid(),
    categoryName: "Footwear",
    description:
      "footwear for man and women",
    img: "./assets/adidas-shoes.jpg",
  },
];
