import adidasShoes from "../categ-assets/adidas-shoes.jpg";
import nikeShoes from "../categ-assets/nike-shoes.jpg";
import newBalanceShoes from "../categ-assets/new-b-shoes.jpg";
import hAndMShirt from "../categ-assets/h&m-shirt.webp";
import levisShirt from "../categ-assets/levis-shirt.webp";
import wBrand from "../categ-assets/w-kurta.webp";
import womenKurta from "../categ-assets/women-kurta.webp";
import newBalanceTShirt from "../categ-assets/new-balance-t-shirt.jpg";
import uspaShirt from "../categ-assets/uspa-shirt.webp";
import { ProductsListPage } from "../pages/ProductsListPage";
import { Link } from "react-router-dom";

export const Category = () =>{
    return(
        <div>
            <main className="main-login main-home">
                <div className="category-header">
                <h2 className="brand-heading">
                    Women's Clothing
                </h2 >
                </div>
                <div className="sale-img-container">
                    <div>
                        <Link to="/products">
                        <img src={levisShirt} alt="Levi's shirt" className="category-img"/>
                        </Link> 
                        <h3 className="category-name">Levi's </h3>
                    </div>
                    <div>
                        <Link to="/products">
                        <img src={womenKurta} alt="liba's kurta" className="category-img"/>
                        </Link>
                        <h3 className="category-name"> Liba's  </h3>
                    </div>
                    <div>
                        <Link to="/products">
                        <img src={wBrand} alt="w kurta" className="category-img"/>
                        </Link>
                        <h3 className="category-name">W </h3>
                    </div>
                </div>
                <div className="category-header">
                <h2 className="brand-heading">
                    Men's Clothing 
                </h2 >
                </div>
                <div className="sale-img-container">
                    <div>
                        <Link to="/products">
                        <img src={hAndMShirt} alt="H&M shirt" className="category-img"/>
                        </Link>
                        <h3 className="category-name"> H&M </h3>
                    </div>
                    <div>
                        <Link to="/products">
                        <img src={newBalanceTShirt} alt="new balance shoes" className="category-img"/>
                        </Link>
                        <h3 className="category-name">NB ACTIVE WEAR </h3>
                    </div>
                    <div>
                        <Link to="/products">
                        <img src={uspaShirt} alt="footwear" className="category-img"/>
                        </Link>
                    <h3 className="category-name"> U.S POLO ASSN.</h3>
                    </div>
                </div>
                <div className="category-header">
                <h2 className="brand-heading">
                    Footwear 
                </h2 >
                </div>
                <div className="sale-img-container">
                    <div>
                        <Link to="/products">
                        <img src={nikeShoes} alt="nike shoes" className="category-img"/>
                        </Link>    
                        <h3 className="category-name">NIKE SHOES </h3>
                    </div>
                    <div>
                        <Link to="/products">
                        <img src={newBalanceShoes} alt="new balance shoes" className="category-img"/>
                        </Link>    
                        <h3 className="category-name">NEW BALANCE SHOES </h3>
                    </div>
                    <div>
                        <Link to="/products" element=   {<ProductsListPage/>}>
                        <img src={adidasShoes} alt="footwear" className="category-img"/>
                        </Link>    
                        <h3 className="category-name">ADIDAS SHOES </h3>
                    </div>
                </div>
            </main>
        </div>
    );
}