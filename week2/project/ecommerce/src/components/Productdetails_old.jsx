import React from "react";

const Productdetails = ({ selectedProductItem, closeButton }) => {
   return (
      <div>
         <h2>Product Details</h2>
         <img
            className="product--image"
            src={selectedProductItem.image}
            alt={selectedProductItem.title}
         />
         <p>{selectedProductItem.category}</p>
         <p>{selectedProductItem.title}</p>
         <p>{selectedProductItem.price}</p>
         <p>{selectedProductItem.description}</p>
         <button onClick={closeButton}>Close</button>
      </div>
   );
};

export default Productdetails;
