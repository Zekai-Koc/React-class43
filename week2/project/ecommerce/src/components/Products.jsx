import React, { useState, useEffect } from "react";
import Product from "./Product";
import Productdetails from "./Productdetails";

const Products = ({ selectedCategory, handleMyInfo }) => {
   const [productList, setProductList] = useState([]);
   const [isLoadingProducts, setIsLoadingProducts] = useState(true);
   const [productSelected, setProductSelected] = useState(false);
   const [selectedProduct, setSelectedProduct] = useState("");

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

   const handleProduct = (id) => {
      const tempSelectedProduct = productList.find((item) => item.id === id);

      if (tempSelectedProduct) {
         setProductSelected(true);
         setSelectedProduct(tempSelectedProduct);
      }

      // console.log("product id: ", id);
      // console.log("tempSelectedProduct: ", tempSelectedProduct);
   };

   const closeButton = () => {
      setProductSelected(false);
   };

   return (
      <div>
         {productSelected ? (
            <Productdetails
               selectedProduct={selectedProduct}
               closeButton={closeButton}
            />
         ) : isLoadingProducts ? (
            <div>Loading products...</div>
         ) : (
            <ul className="products">
               {productList.map((product) => {
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
