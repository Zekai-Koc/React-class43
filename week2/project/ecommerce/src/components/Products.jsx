import React from "react";
import Product from "./Product";

const Products = ({
   isLoadingProducts,
   filteredProductList,
   handleProduct,
}) => {
   return (
      <div>
         {isLoadingProducts ? (
            <div>loading products...</div>
         ) : (
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
         )}
      </div>
   );
};

export default Products;
