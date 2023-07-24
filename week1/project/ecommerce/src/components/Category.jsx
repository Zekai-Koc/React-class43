import React, { useState } from "react";

const Category = ({ singleCategory, onCategorySelect }) => {
   const { category, selected } = singleCategory;

   return (
      <div
         className={selected ? "cat--item cat-selected" : "cat--item"}
         onClick={() => onCategorySelect(category)}
      >
         {category}
      </div>
   );
};

export default Category;
