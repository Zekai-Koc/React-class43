import React from "react";
import { useParams } from "react-router-dom";
import Myinfo from "./Myinfo";
import { useFavorites } from "../FavoritesContext";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets//heart-solid.svg";
import "./Productdetails.css";
import useFetch from "../hooks/useFetch";

const ProductDetails = () => {
   const { isFavorite } = useFavorites();
   const { id } = useParams();
   const {
      data: product,
      loading,
      error,
   } = useFetch(`https://fakestoreapi.com/products/${id}`);

   if (error) {
      return <Myinfo type="error" text={error} />;
   }

   if (loading) {
      return <Myinfo type="error" text={error} />;
   }

   if (!product) {
      return null;
   }

   return (
      <div>
         (
         <div>
            <h2>Product Details</h2>
            <div className="wrapper-img">
               <img
                  className="product--image"
                  src={product.image}
                  alt={product.title}
               />
               {isFavorite(id) ? (
                  <img src={heartSolid} alt="Favorited" className="img-heart" />
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
         )
      </div>
   );
};

export default ProductDetails;
