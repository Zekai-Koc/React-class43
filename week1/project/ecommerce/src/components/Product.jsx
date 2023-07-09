import React from "react";

const Product = ({ product, handleProduct }) => {
   const { id, title, image } = product;

   return (
      <li className="product--item" onClick={() => handleProduct(id)}>
         <div className="product">
            <img className="product--image" src={image} alt={title} />
            <span className="product--title" title={product.title}>
               {product.title}
            </span>
         </div>
      </li>
   );
};

export default Product;
