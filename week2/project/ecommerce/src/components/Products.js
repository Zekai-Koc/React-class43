import React, { useState, useEffect } from "react";
import Product from "./Product";
import ProductDetails from "./Productdetails";
import { useNavigate } from "react-router-dom";
import { fetchProductList } from "../utils/fetchData";

const Products = ({ selectedCategory, handleProduct, handleMyInfo }) => {
   const [productList, setProductList] = useState([]);
   const [isLoadingProducts, setIsLoadingProducts] = useState(true);
   const [productSelected, setProductSelected] = useState(false);

   const navigate = useNavigate();

   useEffect(() => {
      const fetchData = async () => {
         setIsLoadingProducts(true);
         try {
            const categories = await fetchProductList(selectedCategory);
            setProductList(categories);
            setIsLoadingProducts(false);
         } catch (error) {
            handleMyInfo({ type: "danger", text: error.message });
            setIsLoadingProducts(false);
            console.error(error);
         }
      };
      fetchData();
   }, [handleMyInfo]);

   const handleProductItem = (id) => {
      const tempSelectedProductItem = productList.find(
         (item) => item.id === id
      );

      if (tempSelectedProductItem) {
         handleProduct(tempSelectedProductItem);
         setProductSelected(true);
         navigate(`/details/${id}`);
      }
   };

   if (productSelected) {
      return <ProductDetails />;
   }

   if (isLoadingProducts) {
      return <div>Loading products...</div>;
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
