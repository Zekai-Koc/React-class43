import React, { useState, useEffect } from "react";
import CountV3 from "./CountV3";

const Counter = () => {
   const [count, setCount] = useState(0);
   const [feedBack, setFeedBack] = useState("Reset to ZERO.");

   const countInc = () => {
      setCount((prevCount) => prevCount + 1);
   };

   const countDec = () => {
      if (count > 0) setCount((prevCount) => prevCount - 1);
   };

   const handleOperation = (id) => {
      const number = parseInt(id.slice(1));

      switch (id.slice(0, 1)) {
         case "+":
            setCount(count + number);
            setFeedBack(`Increasing by ${number}`);
            break;
         case "-":
            setCount(count - number);
            setFeedBack(`Decreasing by ${number}`);
            break;
         case "*":
            setCount(count * number);
            setFeedBack(`Multiplying by ${number}`);
            break;
         case "/":
            setCount(count / number);
            setFeedBack(`Dividing by ${number}`);
            break;
         case "r":
            setCount(0);
            setFeedBack(`Resetting to ZERO`);
            break;
         default:
            break;
      }
   };

   useEffect(() => {
      console.log(count);
      if (count < 0) {
         setFeedBack(`negative result!`);
      }
   }, [count]);

   return (
      <div className="counter-div">
         <p className="result-para">{count}</p>
         <CountV3 handleOperation={handleOperation} />
         <p className="info-para">{feedBack}</p>
      </div>
   );
};

export default Counter;
