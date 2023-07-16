//                              Project link on netlify
// --------------------------------------------------------------------------------
//..........
//
// --------------------------------------------------------------------------------

import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
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
