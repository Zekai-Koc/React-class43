import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Product from "./Product";
import ProductDetails from "./Productdetails";
import useFetch from "../hooks/useFetch";

const Products = ({ selectedCategory, handleMyInfo }) => {
   const [productSelected, setProductSelected] = useState(false);
   const [selectedProductId, setSelectedProductId] = useState(0);

   const navigate = useNavigate();

   const {
      data: productList,
      loading,
      error,
   } = useFetch(
      selectedCategory === "All Products"
         ? `https://fakestoreapi.com/products`
         : `https://fakestoreapi.com/products/category/${selectedCategory}`
   );

   const handleProductItem = (id) => {
      const tempSelectedProductItem = productList.find(
         (item) => item.id === id
      );
      if (tempSelectedProductItem) {
         navigate(`/details/${id}`);
      } else {
         console.log("Product not found with ID: ", id);
         handleMyInfo({
            type: "danger",
            text: `Product not found with ID: ${id}`,
         });
      }
   };

   if (productSelected) {
      return <ProductDetails selectedProductId={selectedProductId} />;
   }

   if (loading) {
      return <div>Loading products...</div>;
   }

   if (error) {
      return <div>Error: {error}</div>;
   }

   return (
      <div>
         <ul className="products">
            {productList.map((product) => {
               return (
                  <Product
                     key={product.id}
                     product={product}
                     onProductSelect={handleProductItem}
                  />
               );
            })}
         </ul>
      </div>
   );
};

export default Products;
