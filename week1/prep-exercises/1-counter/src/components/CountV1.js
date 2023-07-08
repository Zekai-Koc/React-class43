import React, { useState } from "react";
import Button from "./Button";

const Count = ({ countInc }) => {
   return (
      <div>
         <Button countInc={countInc} />
      </div>
   );
};

export default Count;
