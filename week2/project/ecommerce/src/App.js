//                              Project link on netlify
// --------------------------------------------------------------------------------
// https://64aab3117ed34f28ea2eafb1--incomparable-dieffenbachia-601ed8.netlify.app/
//
// --------------------------------------------------------------------------------

import { useState, useEffect } from "react";
import "./App.css";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Myinfo from "./components/Myinfo";

function App() {
   // const [categoryList, setCategoryList] = useState([]);
   // const [productList, setProductList] = useState(allProducts);
   // const [isLoadingCategories, setIsLoadingCategories] = useState(true);
   // const [isLoadingProducts, setIsLoadingProducts] = useState(true);
   const [myInfo, setMyInfo] = useState({ show: false });

   const [selectedCategory, setSelectedCategory] = useState("All Products");

   const handleMyInfo = ({ type, text }) => {
      setMyInfo({ show: true, type, text });
      setTimeout(() => {
         setMyInfo({ show: false });
      }, 1000);
   };

   // const getCategoryList = async (num) => {
   //    setIsLoadingCategories(true);
   //    try {
   //       const url = `https://fakestoreapi.com/products/categories`;
   //       const response = await fetch(url);
   //       const data = await response.json();
   //       const newCategories = data.map((category) => {
   //          return {
   //             categoryId: uuidv4(),
   //             category: category,
   //             selected: false,
   //          };
   //       });
   //       newCategories.unshift({
   //          categoryId: uuidv4(),
   //          category: "All Products",
   //          selected: true,
   //       });
   //       setTimeout(() => setIsLoadingCategories(false), 500);
   //       handleMyInfo({ type: "success", text: "Categories loaded..." });
   //       return await newCategories;
   //    } catch (error) {
   //       setIsLoadingCategories(false);
   //       handleMyInfo({ type: "danger", text: "Error loading categories!" });
   //       console.error(error);
   //       return [];
   //    }
   // };

   // const getProductList = async (num) => {
   //    setIsLoadingProducts(true);
   //    try {
   //       const url = `https://fakestoreapi.com/products`;
   //       const response = await fetch(url);
   //       const data = await response.json();
   //       setTimeout(() => setIsLoadingProducts(false), 1000);
   //       handleMyInfo({ type: "success", text: "Products loaded..." });
   //       return await data;
   //    } catch (error) {
   //       setIsLoadingProducts(false);
   //       handleMyInfo({ type: "danger", text: "Error loading products!" });
   //       console.error(error);
   //       return [];
   //    }
   // };

   // const getFilteredProductList = async (selectedCategory) => {
   //    setIsLoadingProducts(true);
   //    try {
   //       const url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
   //       const response = await fetch(url);
   //       const data = await response.json();
   //       setTimeout(() => setIsLoadingProducts(false), 100);
   //       handleMyInfo({ type: "success", text: "Products filtered..." });
   //       return data;
   //    } catch (error) {
   //       setIsLoadingProducts(false);
   //       handleMyInfo({
   //          type: "danger",
   //          text: "Error loading filtered products!",
   //       });
   //       console.error(error);
   //       return [];
   //    }
   // };

   // useEffect(() => {
   //    // getCategoryList().then((result) => setCategoryList(result));
   //    getProductList().then((result) => setProductList(result));
   // }, []);

   // const handleCategory = async (id) => {
   //    const tempCategories = categoryList.map((item) => {
   //       return item.categoryId === id
   //          ? { ...item, selected: true }
   //          : { ...item, selected: false };
   //    });
   //    setCategoryList(tempCategories);

   //    const selectedCategory = tempCategories.find(
   //       (item) => item.categoryId === id
   //    ).category;

   //    const filteredProducts =
   //       selectedCategory === "All Products"
   //          ? await getProductList()
   //          : await getFilteredProductList(selectedCategory);

   //    setProductList(filteredProducts);
   // };

   const handleNEW = (categoryName) => {
      setSelectedCategory(categoryName);
   };

   const handleProduct = (id) => {
      console.log("handle product... id: ", id);
   };

   return (
      <div className="App">
         {myInfo.show && <Myinfo type={myInfo.type} text={myInfo.text} />}
         <h1>Products</h1>
         <Categories
            // isLoadingCategories={isLoadingCategories}
            // categoryList={categoryList}
            // handleCategory={handleCategory}
            handleNEW={handleNEW}
            handleMyInfo={handleMyInfo}
         />
         <Products
            // isLoadingProducts={isLoadingProducts}
            // filteredProductList={productList}
            // handleProduct={handleProduct}
            selectedCategory={selectedCategory}
            handleMyInfo={handleMyInfo}
         />
      </div>
   );
}

export default App;
