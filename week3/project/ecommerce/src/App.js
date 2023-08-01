import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/Productdetails";
import FavoritesPage from "./components/FavoritesPage";
import "./App.css";
import { FavoritesProvider } from "./FavoritesContext";

function App() {
   return (
      <FavoritesProvider>
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
      </FavoritesProvider>
   );
}

export default App;

// //                              Project link on netlify
// // --------------------------------------------------------------------------------
// // https://64b433be1f52c1622c151df2--incomparable-dieffenbachia-601ed8.netlify.app/
// //
// // --------------------------------------------------------------------------------

// import Home from "./components/Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductDetails from "./components/Productdetails";
// import "./App.css";
// import { FavoritesProvider } from "./FavoritesContext";

// function App() {
//    return (
//       <FavoritesProvider>
//          <Router>
//             <Routes>
//                <Route path="/" element={<Home />}></Route>
//                <Route path="/details/:id" element={<ProductDetails />}></Route>
//             </Routes>
//          </Router>
//       </FavoritesProvider>
//    );
// }

// export default App;
