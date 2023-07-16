//                              Project link on netlify
// --------------------------------------------------------------------------------
// https://64b433be1f52c1622c151df2--incomparable-dieffenbachia-601ed8.netlify.app/
//
// --------------------------------------------------------------------------------

import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import "./App.css";

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details/:id" element={<ProductDetails />}></Route>
         </Routes>
      </>
   );
}

export default App;
