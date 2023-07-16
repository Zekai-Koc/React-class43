import { v4 as uuidv4 } from "uuid";

export const fetchProductDetails = async (productId) => {
   try {
      const url = `https://fakestoreapi.com/products/${productId}`;
      const response = await fetch(url);
      if (!response.ok) {
         throw new Error("Failed to fetch product details!");
      }

      const productData = await response.json();

      if (!productData) {
         throw new Error("Product data not found!");
      }
      return productData;
   } catch (error) {
      console.error(error);
      throw new Error(
         `Error reading data from server! Check the id of the product.`
      );
   }
};

export const fetchCategoryList = async () => {
   try {
      const url = `https://fakestoreapi.com/products/categories`;
      const response = await fetch(url);
      const data = await response.json();
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
   } catch (error) {
      throw new Error("Error loading categories!");
   }
};

export const fetchProductList = async (selectedCategory) => {
   try {
      const url =
         selectedCategory === "All Products"
            ? `https://fakestoreapi.com/products`
            : `https://fakestoreapi.com/products/category/${selectedCategory}`;

      const response = await fetch(url);
      const data = await response.json();
      return data;
   } catch (error) {
      throw new Error("Failed to fetch product list");
   }
};
