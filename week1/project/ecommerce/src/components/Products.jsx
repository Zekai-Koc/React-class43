import React, { useState } from "react";
import Product from "./Product";
import allProducts from "../fake-data/all-products";

const Products = ({ selectedCategory, onProductSelect }) => {
   const [productList, setProductList] = useState(allProducts);

   const filteredProducts =
      selectedCategory.slice(6) === "All Products"
         ? productList
         : productList.filter((item) => {
              return item.category === selectedCategory.slice(6);
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
