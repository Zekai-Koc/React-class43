//                              Project link on netlify
// --------------------------------------------------------------------------------
//..........
//
// --------------------------------------------------------------------------------

import { useState } from "react";
import Categories from "./Categories";
import Products from "./Products";
import Myinfo from "./Myinfo";

function Home() {
   const [myInfo, setMyInfo] = useState({ show: false });
   const [selectedCategory, setSelectedCategory] = useState("All Products");
   const [selectedProduct, setSelectedProduct] = useState("");

   const handleMyInfo = ({ type, text }) => {
      setMyInfo({ show: true, type, text });
      setTimeout(() => {
         setMyInfo({ show: false });
      }, 1000);
   };

   const handleCategory = (categoryName) => {
      setSelectedCategory(categoryName);
   };

   const handleProduct = (productName) => {
      // console.log("Product Name: ", productName);
      setSelectedProduct(productName);
   };

   return (
      <div>
         {myInfo.show && <Myinfo type={myInfo.type} text={myInfo.text} />}
         <h1>Products</h1>
         <Categories
            handleCategory={handleCategory}
            handleMyInfo={handleMyInfo}
         />
         <Products
            selectedCategory={selectedCategory}
            handleProduct={handleProduct}
            handleMyInfo={handleMyInfo}
         />
      </div>
   );
}

export default Home;
