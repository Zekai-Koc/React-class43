import React, { useState } from "react";
import Category from "./Category";
import allCategories from "../fake-data/all-categories";

const newCategories = allCategories.map((category) => {
   return { category: category, selected: false };
});

newCategories.unshift({
   category: "FAKE: All Products",
   selected: true,
});

const Categories = ({ onNewCategorySelection }) => {
   const [categoryList, setCategoryList] = useState(newCategories);

   const onCategorySelect = (cat) => {
      const tempCategories = categoryList.map((item) => {
         return item.category === cat
            ? { ...item, selected: true }
            : { ...item, selected: false };
      });
      setCategoryList(tempCategories);
      onNewCategorySelection(cat);
   };

   return (
      <div className="categories">
         {categoryList.map((item) => {
            return (
               <Category
                  key={item.category}
                  singleCategory={item}
                  onCategorySelect={onCategorySelect}
               />
            );
         })}
      </div>
   );
};

export default Categories;
