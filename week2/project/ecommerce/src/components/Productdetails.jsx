import React from "react";

const Productdetails = ({ selectedProduct, closeButton }) => {
   return (
      <div>
         <h2>Product Details</h2>
         <img
            className="product--image"
            src={selectedProduct.image}
            alt={selectedProduct.title}
         />
         <p>{selectedProduct.category}</p>
         <p>{selectedProduct.title}</p>
         <p>{selectedProduct.price}</p>
         <p>{selectedProduct.description}</p>
         <button onClick={closeButton}>Close</button>
      </div>
   );
};

export default Productdetails;
