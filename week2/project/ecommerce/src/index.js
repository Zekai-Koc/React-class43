//                              Project link on netlify
// --------------------------------------------------------------------------------
// https://64b433be1f52c1622c151df2--incomparable-dieffenbachia-601ed8.netlify.app/
// --------------------------------------------------------------------------------

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);
