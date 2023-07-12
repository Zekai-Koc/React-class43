import React, { useState, useEffect } from "react";
import Product from "./Product";

const Products = ({ selectedCategory, handleMyInfo }) => {
   const [productList, setProductList] = useState([]);
   const [isLoadingProducts, setIsLoadingProducts] = useState(true);

   const getProductList = async (selCat) => {
      setIsLoadingProducts(true);
      try {
         const url =
            selCat === "All Products"
               ? `https://fakestoreapi.com/products`
               : `https://fakestoreapi.com/products/category/${selCat}`;

         const response = await fetch(url);
         const data = await response.json();
         setTimeout(() => setIsLoadingProducts(false), 100);
         // handleMyInfo({ type: "success", text: "Products filtered..." });
         return data;
      } catch (error) {
         setIsLoadingProducts(false);
         handleMyInfo({
            type: "danger",
            text: "Error loading filtered products!",
         });
         console.error(error);
         return [];
      }
   };

   useEffect(() => {
      getProductList(selectedCategory).then((result) => setProductList(result));
   }, [selectedCategory]);

   return (
      <div>
         {isLoadingProducts ? (
            <div>Loading products...</div>
         ) : (
            <ul className="products">
               {productList.map((product) => {
                  return <Product key={product.id} product={product} />;
               })}
            </ul>
         )}
      </div>
   );
};

export default Products;
