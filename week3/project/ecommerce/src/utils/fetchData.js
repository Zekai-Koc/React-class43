import { v4 as uuidv4 } from "uuid";

export const fetchProductDetails = async (productId) => {
   const TIMEOUT_MS = 10000; // 10 seconds timeout

   try {
      const url = `https://fakestoreapi.com/products/${productId}`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

      const response = await fetch(url, { signal: controller.signal });

      clearTimeout(timeoutId);

      if (!response.ok) {
         throw new Error("Failed to fetch product details");
      }

      const responseBody = await response.text();
      if (!responseBody) {
         throw new Error("Empty response received");
      }

      const productData = JSON.parse(responseBody);

      return productData;
   } catch (error) {
      throw new Error(
         `Error reading data from server! Check the id of the product.`
      );
   }
};

export const fetchCategoryList = async () => {
   const TIMEOUT_MS = 10000; // 10 seconds timeout

   try {
      const url = `https://fakestoreapi.com/products/categories`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

      const response = await fetch(url, { signal: controller.signal });

      clearTimeout(timeoutId);

      if (!response.ok) {
         throw new Error("Failed to fetch category list");
      }

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
      throw new Error("Error loading categories");
   }
};

export const fetchProductList = async (selectedCategory) => {
   const TIMEOUT_MS = 10000; // 10 seconds timeout

   try {
      const url =
         selectedCategory === "All Products"
            ? `https://fakestoreapi.com/products`
            : `https://fakestoreapi.com/products/category/${selectedCategory}`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

      const response = await fetch(url, { signal: controller.signal });

      clearTimeout(timeoutId);

      if (!response.ok) {
         throw new Error("Failed to fetch product list");
      }

      const data = await response.json();
      return data;
   } catch (error) {
      throw new Error("Error loading product list");
   }
};
