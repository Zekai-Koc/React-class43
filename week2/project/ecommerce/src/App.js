//                              Project link on netlify
// --------------------------------------------------------------------------------
// https://64aab3117ed34f28ea2eafb1--incomparable-dieffenbachia-601ed8.netlify.app/
//
// --------------------------------------------------------------------------------

import { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Myinfo from "./components/Myinfo";

function App() {
   const [myInfo, setMyInfo] = useState({ show: false });
   const [selectedCategory, setSelectedCategory] = useState("All Products");

   const handleMyInfo = ({ type, text }) => {
      setMyInfo({ show: true, type, text });
      setTimeout(() => {
         setMyInfo({ show: false });
      }, 1000);
   };

   const handleCategory = (categoryName) => {
      setSelectedCategory(categoryName);
   };

   return (
      <div className="App">
         {myInfo.show && <Myinfo type={myInfo.type} text={myInfo.text} />}
         <h1>Products</h1>
         <Categories
            handleCategory={handleCategory}
            handleMyInfo={handleMyInfo}
         />
         <Products
            selectedCategory={selectedCategory}
            handleMyInfo={handleMyInfo}
         />
      </div>
   );
}

export default App;
