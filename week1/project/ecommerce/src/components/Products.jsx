import React, { useState, useEffect } from "react";
import Product from "./Product";
import allProducts from "../fake-data/all-products";

const Products = ({ selectedCategory, onProductSelect }) => {
   const [productList, setProductList] = useState(allProducts);

   const filteredProducts =
      selectedCategory === "All Products"
         ? productList.map((item) => item)
         : productList.filter((item) => {
              return item.category === selectedCategory;
           });

   return (
      <ul className="products">
         {filteredProducts.map((product) => {
            return (
               <Product
                  key={product.id}
                  product={product}
                  onProductSelect={onProductSelect}
               />
            );
         })}
      </ul>
   );
};

export default Products;
