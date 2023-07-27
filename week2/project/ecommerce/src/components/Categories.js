import React, { useState, useEffect } from "react";
import Category from "./Category";
import { fetchCategoryList } from "../utils/fetchData";

const Categories = ({ onCategorySelect, selectedCategory, handleMyInfo }) => {
   const [categoryList, setCategoryList] = useState([]);
   const [isLoadingCategories, setIsLoadingCategories] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            setIsLoadingCategories(true);
            const categories = await fetchCategoryList();
            setCategoryList(categories);
            setIsLoadingCategories(false);
         } catch (error) {
            handleMyInfo({ type: "danger", text: error.message });
            setIsLoadingCategories(false);
            console.error(error);
         }
      };
      fetchData();
   }, []);

   return (
      <div>
         {isLoadingCategories ? (
            <div>Loading categories...</div>
         ) : (
            <div className="categories">
               {categoryList.map((item, index) => (
                  <Category
                     key={item.category}
                     singleCategory={item}
                     selectedCategory={selectedCategory}
                     onCategorySelect={onCategorySelect}
                  />
               ))}
            </div>
         )}
      </div>
   );
};

export default Categories;
