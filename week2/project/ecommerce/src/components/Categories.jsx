import React from "react";
import Category from "./Category";

const Categories = ({ categoryList, handleCategory }) => {
   return (
      <div className="categories">
         {categoryList.map((item, index) => {
            return (
               <Category
                  key={item.categoryId}
                  singleCategory={item}
                  handleCategory={handleCategory}
               />
            );
         })}
      </div>
   );
};

export default Categories;
