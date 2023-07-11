import React from "react";

const Category = ({ singleCategory, handleCategory }) => {
   const { categoryId, category, selected } = singleCategory;
   return (
      <div
         className={
            selected ? "categories--item category-selected" : "categories--item"
         }
         onClick={() => handleCategory(categoryId)}
      >
         {category}
      </div>
   );
};

export default Category;
