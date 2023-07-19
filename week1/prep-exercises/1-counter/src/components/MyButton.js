import React from "react";

const MyButton = ({ handleOperation, buttonId }) => {
   return (
      <div>
         <button
            onClick={() => {
               handleOperation(buttonId);
            }}
         >
            {buttonId}
         </button>
      </div>
   );
};

export default MyButton;
