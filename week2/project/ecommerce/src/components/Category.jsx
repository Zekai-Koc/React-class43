import React from "react";

const Category = ({ singleCategory, handleSelectedCategory }) => {
   const { category, selected } = singleCategory;
   return (
      <div
         className={
            selected ? "categories--item category-selected" : "categories--item"
         }
         onClick={() => handleSelectedCategory(category)}
      >
         {category}
      </div>
   );
};

export default Category;
