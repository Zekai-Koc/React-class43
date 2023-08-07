//                              Project link on netlify
// --------------------------------------------------------------------------------
// https://64d0e760be3d0c65830eb0a7--hyf-ecommerce-project.netlify.app/
// --------------------------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FavoritesProvider } from "./FavoritesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <FavoritesProvider>
         <App />
      </FavoritesProvider>
   </React.StrictMode>
);
