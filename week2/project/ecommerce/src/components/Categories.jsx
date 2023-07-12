import React from "react";
import Category from "./Category";

const Categories = ({ isLoadingCategories, categoryList, handleCategory }) => {
   return (
      <div>
         {isLoadingCategories ? (
            <div>loading categories...</div>
         ) : (
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
         )}
      </div>
   );

   // return (
   //    <div className="categories">
   //       {categoryList.map((item, index) => {
   //          return (
   //             <Category
   //                key={item.categoryId}
   //                singleCategory={item}
   //                handleCategory={handleCategory}
   //             />
   //          );
   //       })}
   //    </div>
   // );
};

export default Categories;
