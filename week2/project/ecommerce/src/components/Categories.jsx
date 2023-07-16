import React, { useState, useEffect } from "react";
import Category from "./Category";
import { fetchCategoryList } from "../utils/fetchData";

const Categories = ({ handleCategory, handleMyInfo }) => {
   const [categoryList, setCategoryList] = useState([]);
   const [isLoadingCategories, setIsLoadingCategories] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const categories = await fetchCategoryList();
            setCategoryList(categories);
            setIsLoadingCategories(false);
         } catch (error) {
            setIsLoadingCategories(false);
            handleMyInfo({ type: "danger", text: error.message });
            console.error(error);
         }
      };

      fetchData();
   }, []);

   const handleSelectedCategory = (selectedCategoryName) => {
      const tempCategories = categoryList.map((item) =>
         item.category === selectedCategoryName
            ? { ...item, selected: true }
            : { ...item, selected: false }
      );
      setCategoryList(tempCategories);

      handleCategory(selectedCategoryName);
   };

   return (
      <div>
         {isLoadingCategories ? (
            <div>Loading categories...</div>
         ) : (
            <div className="categories">
               {categoryList.map((item, index) => (
                  <Category
                     key={item.categoryId}
                     singleCategory={item}
                     handleSelectedCategory={handleSelectedCategory}
                  />
               ))}
            </div>
         )}
      </div>
   );
};

export default Categories;
