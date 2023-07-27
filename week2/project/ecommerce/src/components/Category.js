import React from "react";

const Category = ({ singleCategory, onCategorySelect, selectedCategory }) => {
   const { category } = singleCategory;
   return (
      <div
         className={
            selectedCategory === category
               ? "categories--item category-selected"
               : "categories--item"
         }
         onClick={() => onCategorySelect(category)}
      >
         {category}
      </div>
   );
};

export default Category;
