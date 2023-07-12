import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Category from "./Category";

const Categories = ({ handleNEW, handleMyInfo }) => {
   const [categoryList, setCategoryList] = useState([]);
   const [isLoadingCategories, setIsLoadingCategories] = useState(true);

   useEffect(() => {
      getCategoryList().then((result) => setCategoryList(result));
   }, []);

   const getCategoryList = async (num) => {
      setIsLoadingCategories(true);
      try {
         const url = `https://fakestoreapi.com/products/categories`;
         const response = await fetch(url);
         const data = await response.json();
         const newCategories = data.map((category) => {
            return {
               categoryId: uuidv4(),
               category: category,
               selected: false,
            };
         });
         newCategories.unshift({
            categoryId: uuidv4(),
            category: "All Products",
            selected: true,
         });
         setTimeout(() => setIsLoadingCategories(false), 500);
         // handleMyInfo({ type: "success", text: "Categories loaded..." });
         // console.log(newCategories);
         return await newCategories;
      } catch (error) {
         setIsLoadingCategories(false);
         handleMyInfo({ type: "danger", text: "Error loading categories!" });
         console.error(error);
         return [];
      }
   };

   const handleSelectedCategory = async (selectedCategoryName) => {
      const tempCategories = categoryList.map((item) => {
         return item.category === selectedCategoryName
            ? { ...item, selected: true }
            : { ...item, selected: false };
      });
      setCategoryList(tempCategories);

      handleNEW(selectedCategoryName);
   };

   return (
      <div>
         {isLoadingCategories ? (
            <div>Loading categories...</div>
         ) : (
            <div className="categories">
               {categoryList.map((item, index) => {
                  return (
                     <Category
                        key={item.categoryId}
                        singleCategory={item}
                        handleSelectedCategory={handleSelectedCategory}
                     />
                  );
               })}
            </div>
         )}
      </div>
   );
};

export default Categories;
