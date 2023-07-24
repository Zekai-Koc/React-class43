//                              Project link on netlify
// --------------------------------------------------------------------------------
// https://64aab3117ed34f28ea2eafb1--incomparable-dieffenbachia-601ed8.netlify.app/
//
// --------------------------------------------------------------------------------

import { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import Products from "./components/Products";

function App() {
   const [selectedCategory, setSelectedCategory] =
      useState("FAKE: All Products");

   const onCategorySelect = (selectedCategory) => {
      setSelectedCategory(selectedCategory);
   };

   const onProductSelect = (id) => {
      console.log("Selected product id:", id);
   };

   return (
      <div className="App">
         <h1>Products</h1>
         <Categories
            onCategorySelect={onCategorySelect}
            selectedCategory={selectedCategory}
         />
         <Products
            onProductSelect={onProductSelect}
            selectedCategory={selectedCategory}
         />
      </div>
   );
}

export default App;
