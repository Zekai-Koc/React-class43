import { v4 as uuidv4 } from "uuid";

const processCategoriesData = (data) => {
   if (!data) {
      return [];
   }

   const newCategories = data.map((category) => ({
      categoryId: uuidv4(),
      category: category,
      selected: false,
   }));
   newCategories.unshift({
      categoryId: uuidv4(),
      category: "All Products",
      selected: true,
   });

   return newCategories;
};

export default processCategoriesData;
