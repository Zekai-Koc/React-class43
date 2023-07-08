import React from "react";

const Button = ({ countInc }) => {
   return (
      <div>
         <button onClick={countInc}>Add 1!</button>
      </div>
   );
};

export default Button;
