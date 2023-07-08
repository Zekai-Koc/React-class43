import React from "react";
import MyButton from "./MyButton";

const CountV3 = ({ handleOperation }) => {
   return (
      <div className="count-v3">
         <MyButton buttonId="+1" handleOperation={handleOperation} />
         <MyButton buttonId="+2" handleOperation={handleOperation} />
         <MyButton buttonId="-1" handleOperation={handleOperation} />
         <MyButton buttonId="-2" handleOperation={handleOperation} />
         <MyButton buttonId="*2" handleOperation={handleOperation} />
         <MyButton buttonId="/2" handleOperation={handleOperation} />
         <MyButton buttonId="+111" handleOperation={handleOperation} />
         <MyButton buttonId="-7777" handleOperation={handleOperation} />
         <MyButton buttonId="reset" handleOperation={handleOperation} />
      </div>
   );
};

export default CountV3;
