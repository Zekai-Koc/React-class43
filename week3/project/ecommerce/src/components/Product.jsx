import React from "react";
import { useFavorites } from "../FavoritesContext";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets//heart-solid.svg";

const Product = ({ product, onProductSelect }) => {
   const { id, title, image } = product;
   const { addFavorite, removeFavorite, isFavorite } = useFavorites();

   const handleFavoriteClick = (event) => {
      event.stopPropagation();
      if (isFavorite(id)) {
         removeFavorite(id);
      } else {
         addFavorite(id);
      }
   };

   return (
      <li className="product--item" onClick={() => onProductSelect(id)}>
         <div className="product">
            <div className="product-image-wrapper">
               <img className="product--image" src={image} alt={title} />
               <span className="product--heart" onClick={handleFavoriteClick}>
                  {isFavorite(id) ? (
                     <img src={heartSolid} alt="Favorited" />
                  ) : (
                     <img src={heartRegular} alt="Not Favorited" />
                  )}
               </span>
            </div>
            <div className="product--title" title={product.title}>
               {product.title}
            </div>
         </div>
      </li>
   );
};

export default Product;
