import React, { useState, useEffect } from "react";
import CountV1 from "./CountV1";
import CountV2 from "./CountV2";
import CountV3 from "./CountV3";

const Counter = () => {
   const [count, setCount] = useState(0);
   const [feedBack, setFeedBack] = useState("Reset to ZERO.");

   const countInc = () => {
      setCount(count + 1);
   };

   const countDec = () => {
      if (count > 0) setCount(count - 1);
   };

   // let feedBack = count > 10 ? `"It's higher than 10!"` : `"Keep counting..."`;

   // const handleOperation = (id) => {
   //    const number = parseInt(id.slice(1));

   //    switch (id.slice(0, 1)) {
   //       case "+":
   //          setFeedBack(`Increasing by ${number}`);
   //          setCount(count + number);
   //          break;
   //       case "-":
   //          setFeedBack(`Decreasing by ${number}`);
   //          setCount(count - number);
   //          break;
   //       case "*":
   //          setFeedBack(`Multiplying by ${number}`);
   //          setCount(count * number);
   //          break;
   //       case "/":
   //          setFeedBack(`Dividing by ${number}`);
   //          setCount(count / number);
   //          break;
   //       case "r":
   //          setFeedBack(`Resetting to ZERO`);
   //          setCount(0);
   //          break;
   //       default:
   //          break;
   //    }
   //    console.log(count);
   //    if (count < 0) setFeedBack(`negative result!`);
   // };

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
         {/* <label>{count}</label>
         <CountV1 countInc={countInc} countDec={countDec} />
         {feedBack}
         <br />
         <hr />
         <br />
         <label>{count}</label>
         <CountV2 countInc={countInc} countDec={countDec} />
         {feedBack}
         <br />
         <hr />
         <br /> */}

         <p className="result-para">{count}</p>
         <CountV3 handleOperation={handleOperation} />
         <p className="info-para">{feedBack}</p>
      </div>
   );
};

export default Counter;
