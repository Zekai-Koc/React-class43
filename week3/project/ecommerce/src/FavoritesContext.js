import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export function useFavorites() {
   return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }) {
   const [favorites, setFavorites] = useState([]);

   // Function to add a product ID to favorites
   const addFavorite = (productId) => {
      setFavorites((prevFavorites) => [...prevFavorites, productId]);
   };

   // Function to remove a product ID from favorites
   const removeFavorite = (productId) => {
      setFavorites((prevFavorites) =>
         prevFavorites.filter((id) => id !== productId)
      );
   };

   // Check if a product ID is in favorites
   const isFavorite = (productId) => favorites.includes(productId);

   return (
      <FavoritesContext.Provider
         value={{ favorites, addFavorite, removeFavorite, isFavorite }}
      >
         {children}
      </FavoritesContext.Provider>
   );
}
