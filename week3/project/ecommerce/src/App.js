//                              Project link on netlify
// --------------------------------------------------------------------------------
// https://64d0e760be3d0c65830eb0a7--hyf-ecommerce-project.netlify.app/
// --------------------------------------------------------------------------------

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/Productdetails";
import FavoritesPage from "./components/FavoritesPage";
import "./App.css";

function App() {
   return (
      <Router>
         <nav>
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/favorites">Favorites</Link>
               </li>
            </ul>
         </nav>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<ProductDetails />} />
            <Route path="/favorites" element={<FavoritesPage />} />
         </Routes>
      </Router>
   );
}

export default App;
