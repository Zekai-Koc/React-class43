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
   const [selectedCategory, setSelectedCategory] = useState("All Products");

   const onCategorySelect = (selectedCategory) => {
      setSelectedCategory(selectedCategory.slice(6));
   };

   const onProductSelect = (id) => {
      console.log("Selected product id:", id);
   };

   return (
      <div className="App">
         <h1>Products</h1>
         <Categories onNewCategorySelection={onCategorySelect} />
         <Products
            selectedCategory={selectedCategory}
            onProductSelect={onProductSelect}
         />
      </div>
   );
}

export default App;
