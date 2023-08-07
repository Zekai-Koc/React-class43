import React, { useEffect, useState } from "react";
import { useFavorites } from "../FavoritesContext";
import { fetchProductDetails } from "../utils/fetchData";
import "./FavoritesPage.css";
import heartSolid from "../assets/heart-solid.svg";

const FavoritesPage = () => {
   const { favorites } = useFavorites();
   const [favoriteProducts, setFavoriteProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchFavorites = async () => {
         try {
            setLoading(true);
            setError(null);
            const favoriteProductsData = await Promise.all(
               favorites.map((productId) => fetchProductDetails(productId))
            );
            setFavoriteProducts(favoriteProductsData);
            setLoading(false);
         } catch (error) {
            setError(error.message);
            setLoading(false);
         }
      };

      fetchFavorites();
   }, [favorites]);

   return (
      <div className="wrapper-favorites">
         <h1>Favorites</h1>
         <h3>Total Favorites: {favorites.length}</h3>
         {loading ? (
            <div>Loading favorite products...</div>
         ) : error ? (
            <div>Error: {error}</div>
         ) : (
            <div>
               <ul className="ul-favorites">
                  {favoriteProducts.map((product) => (
                     <li key={product.id} className="li-favorites">
                        <div className="div-favorites">
                           <h4>{product.title}</h4>
                           <div className="wrapper-favorites-image">
                              <img
                                 src={product.image}
                                 alt={product.title}
                                 className="img-favorites"
                              />
                              <img
                                 src={heartSolid}
                                 alt="Favorited"
                                 className="img-heart"
                              />
                           </div>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
};

export default FavoritesPage;
