import React from "react";
import Category from "./Category";
import useFetch from "../hooks/useFetch";
import Myinfo from "./Myinfo";
import processCategoriesData from "../utils/processCategories";

const Categories = ({ onCategorySelect, selectedCategory, handleMyInfo }) => {
   const {
      data,
      loading: isLoadingCategories,
      error,
   } = useFetch("https://fakestoreapi.com/products/categories");

   const processedCategories = processCategoriesData(data);

   if (isLoadingCategories) {
      return <div>Loading categories...</div>;
   }

   if (error) {
      return <Myinfo type="error" text={error} />;
   }

   return (
      <div>
         <div className="categories">
            {processedCategories.map((item, index) => (
               <Category
                  key={item.categoryId}
                  singleCategory={item}
                  selectedCategory={selectedCategory}
                  onCategorySelect={onCategorySelect}
               />
            ))}
         </div>
      </div>
   );
};

export default Categories;
