import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Product from "./Product";
import ProductDetails from "./Productdetails";
import { fetchProductList } from "../utils/fetchData";
import useFetch from "../hooks/useFetch";

const Products = ({ selectedCategory, handleProduct, handleMyInfo }) => {
   // const [productList, setProductList] = useState([]);
   // const [isLoadingProducts, setIsLoadingProducts] = useState(true);
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

   // useEffect(() => {
   //    const fetchData = async () => {
   //       setIsLoadingProducts(true);
   //       try {
   //          const productsByCategory = await fetchProductList(selectedCategory);
   //          setProductList(productsByCategory);
   //          setIsLoadingProducts(false);
   //       } catch (error) {
   //          handleMyInfo({ type: "danger", text: error.message });
   //          setIsLoadingProducts(false);
   //          console.error(error);
   //       }
   //    };
   //    fetchData();
   // }, [selectedCategory, handleMyInfo]);

   const handleProductItem = (id) => {
      console.log("product clicked.");

      const tempSelectedProductItem = productList.find(
         (item) => item.id === id
      );
      if (tempSelectedProductItem) {
         navigate(`/details/${id}`);
      } else {
         console.log("Product not found with ID: ", id);
      }
   };

   return (
      <div>
         {productSelected ? (
            <ProductDetails selectedProductId={selectedProductId} />
         ) : loading ? (
            <div>Loading products...</div>
         ) : error ? (
            <div>Error: {error}</div>
         ) : (
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
         )}
      </div>
   );
};

export default Products;

//
//
//
//
//

// import React, { useState, useEffect } from "react";
// import Product from "./Product";
// import ProductDetails from "./Productdetails";
// import { fetchProductList } from "../utils/fetchData";

// const Products = ({ selectedCategory, handleProduct, handleMyInfo }) => {
//    const [productList, setProductList] = useState([]);
//    const [isLoadingProducts, setIsLoadingProducts] = useState(true);
//    const [productSelected, setProductSelected] = useState(false);
//    const [selectedProductId, setSelectedProductId] = useState(0);

//    useEffect(() => {
//       const fetchData = async () => {
//          setIsLoadingProducts(true);
//          try {
//             const productsByCategory = await fetchProductList(selectedCategory);
//             setProductList(productsByCategory);
//             setIsLoadingProducts(false);
//          } catch (error) {
//             handleMyInfo({ type: "danger", text: error.message });
//             setIsLoadingProducts(false);
//             console.error(error);
//          }
//       };
//       fetchData();
//    }, [handleMyInfo]);

//    const handleProductItem = (id) => {
//       // const tempSelectedProductItem = productList.find(
//       //    (item) => item.id === id
//       // );
//       // if (tempSelectedProductItem) {
//       //    // handleProduct(tempSelectedProductItem);
//       setProductSelected(true);
//       //    // navigate(`/details/${id}`);
//       // }
//       console.log("kkkkkkkkkkkkk ", id);
//       setSelectedProductId(id);
//    };

//    return (
//       <div>
//          {productSelected ? (
//             <ProductDetails selectedProductId={selectedProductId} />
//          ) : isLoadingProducts ? (
//             <div>Loading products...</div>
//          ) : (
//             <ul className="products">
//                {productList.map((product) => {
//                   return (
//                      <Product
//                         key={product.id}
//                         product={product}
//                         onProductSelect={handleProductItem}
//                      />
//                   );
//                })}
//             </ul>
//          )}
//       </div>
//    );
// };

// export default Products;
