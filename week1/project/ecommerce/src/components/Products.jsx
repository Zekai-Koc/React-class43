import React from "react";
import Product from "./Product";

const Products = ({ filteredProductList, handleProduct }) => {
   return (
      <ul className="products">
         {filteredProductList.map((product) => {
            return (
               <Product
                  key={product.id}
                  product={product}
                  handleProduct={handleProduct}
               />
            );
         })}
      </ul>
   );
};

export default Products;
