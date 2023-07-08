import React from "react";

const Button = ({ countDec }) => {
   return (
      <div>
         <button onClick={countDec}>Decrease by 1!</button>
      </div>
   );
};

export default Button;
