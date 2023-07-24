import React, { useState } from "react";
import Category from "./Category";
import allCategories from "../fake-data/all-categories";

const newCategories = allCategories.map((category) => {
   return { category: category };
});

newCategories.unshift({
   category: "FAKE: All Products",
});

const Categories = ({ onCategorySelect, selectedCategory }) => {
   const [categoryList, setCategoryList] = useState(newCategories);

   return (
      <div className="categories">
         {categoryList.map((item) => {
            return (
               <Category
                  key={item.category}
                  singleCategory={item}
                  selectedCategory={selectedCategory}
                  onCategorySelect={onCategorySelect}
               />
            );
         })}
      </div>
   );
};

export default Categories;
