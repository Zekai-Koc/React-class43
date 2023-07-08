import React from "react";

const Button = ({ countInc }) => {
   return (
      <div>
         <button onClick={countInc}>Increase by 1!</button>
      </div>
   );
};

export default Button;
