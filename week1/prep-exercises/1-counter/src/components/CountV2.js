import React from "react";
import ButtonInc from "./Button_increase";
import ButtonDec from "./Button_decrease";

const Count = ({ countInc, countDec }) => {
   return (
      <div>
         <ButtonInc countInc={countInc} />
         <ButtonDec countDec={countDec} />
      </div>
   );
};

export default Count;
