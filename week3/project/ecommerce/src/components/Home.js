import React, { useState } from "react";
import Categories from "./Categories";
import Products from "./Products";
import Myinfo from "./Myinfo";

function Home() {
   const [myInfo, setMyInfo] = useState({ show: false });
   const [selectedCategory, setSelectedCategory] = useState("All Products");

   const handleMyInfo = ({ type, text }) => {
      setMyInfo({ show: true, type, text });
      setTimeout(() => {
         setMyInfo({ show: false });
      }, 1000);
   };

   const onCategorySelect = (categoryName) => {
      setSelectedCategory(categoryName);
   };

   return (
      <div>
         {myInfo.show && <Myinfo type={myInfo.type} text={myInfo.text} />}
         <h1>Products</h1>
         <Categories
            onCategorySelect={onCategorySelect}
            selectedCategory={selectedCategory}
            handleMyInfo={handleMyInfo}
         />
         <Products
            selectedCategory={selectedCategory}
            handleMyInfo={handleMyInfo}
         />
      </div>
   );
}

export default Home;
