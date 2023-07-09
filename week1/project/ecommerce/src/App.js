import { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import Products from "./components/Products";
import allCategories from "./fake-data/all-categories";
import allProducts from "./fake-data/all-products";
import { v4 as uuidv4 } from "uuid";

const newCategories = allCategories.map((category) => {
   return { categoryId: uuidv4(), category: category, selected: false };
});

// newCategories.unshift({
//    categoryId: uuidv4(),
//    category: "FAKE: All Products",
//    selected: true,
// });

function App() {
   const [categoryList, setCategoryList] = useState(newCategories);
   const [productList, setProductList] = useState(allProducts);
   const [filteredProductList, setFilteredProductList] = useState(allProducts);

   const handleCategory = async (id) => {
      const tempCategories = categoryList.map((item) => {
         return item.categoryId === id
            ? { ...item, selected: true }
            : { ...item, selected: false };
      });
      setCategoryList(tempCategories);

      const selectedCategory = tempCategories
         .find((item) => item.categoryId === id)
         .category.slice(6);
      console.log(selectedCategory);

      const filteredProducts = productList.filter((item) => {
         return item.category === selectedCategory;
      });
      console.log(filteredProducts);
      setFilteredProductList(filteredProducts);
   };

   const handleProduct = (id) => {
      console.log("handle product...", id);
   };

   return (
      <div className="App">
         <h1>Products</h1>
         <Categories
            categoryList={categoryList}
            handleCategory={handleCategory}
         />
         <Products
            filteredProductList={filteredProductList}
            handleProduct={handleProduct}
         />
      </div>
   );
}

export default App;
