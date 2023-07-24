import React from "react";

const Category = ({ singleCategory, onCategorySelect, selectedCategory }) => {
   const { category } = singleCategory;

   return (
      <div
         className={
            selectedCategory === category
               ? "cat--item cat-selected"
               : "cat--item"
         }
         onClick={() => onCategorySelect(category)}
      >
         {category}
      </div>
   );
};

export default Category;
