import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../utils/fetchData";
import Myinfo from "./Myinfo";
import { useFavorites } from "../FavoritesContext";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets//heart-solid.svg";
import "./Productdetails.css";

const ProductDetails = () => {
   const { id } = useParams();
   const [product, setProduct] = useState(null);
   const [error, setError] = useState(null);

   const { isFavorite } = useFavorites();

   console.log("id: ", id);
   if (isFavorite(id)) console.log("favorite...");
   else console.log("not favorite...");

   useEffect(() => {
      const fetchData = async () => {
         try {
            const productData = await fetchProductDetails(id);
            if (productData) {
               setProduct(productData);
            } else {
               setError("Product not found");
            }
         } catch (error) {
            setError(error.message);
         }
      };
      fetchData();
   }, [id]);

   return (
      <div>
         {error ? (
            <Myinfo type="error" text={error} />
         ) : product ? (
            <div>
               <h2>Product Details</h2>
               <div className="wrapper-img">
                  <img
                     className="product--image"
                     src={product.image}
                     alt={product.title}
                  />
                  {isFavorite(id) ? (
                     <img
                        src={heartSolid}
                        alt="Favorited"
                        className="img-heart"
                     />
                  ) : (
                     <img
                        src={heartRegular}
                        alt="Not Favorited"
                        className="img-heart"
                     />
                  )}
               </div>
               <p>{product.category}</p>
               <p>{product.title}</p>
               <p>{product.price}</p>
               <p>{product.description}</p>
            </div>
         ) : (
            <div>Loading product details...</div>
         )}
      </div>
   );
};

export default ProductDetails;
