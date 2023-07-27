import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../utils/fetchData";

const ProductDetails = () => {
   const [product, setProduct] = useState("");
   const [error, setError] = useState(null);

   const { id } = useParams();

   useEffect(() => {
      const fetchData = async (id) => {
         try {
            const product = await fetchProductDetails(id);
            setProduct(product);
         } catch (error) {
            setError(error);
         }
      };

      fetchData(id);
   }, [id]);

   return (
      <div>
         {error && <div>Error: {error.message}</div>}
         {product && (
            <div>
               <h2>Product Details</h2>
               <img
                  className="product--image"
                  src={product.image}
                  alt={product.title}
               />
               <p>{product.category}</p>
               <p>{product.title}</p>
               <p>{product.price}</p>
               <p>{product.description}</p>
            </div>
         )}
      </div>
   );
};

export default ProductDetails;
