import React, { useState, useEffect } from "react";
import Person from "./Person";

const PersonController = () => {
   const [person, setPerson] = useState(null);
   const [number, setNumber] = useState(1);
   const [isLoading, setIsLoading] = useState(false);

   const getPerson = async (num) => {
      setIsLoading(true);
      setPerson(null);

      const url = `https://www.randomuser.me/api?results=${num}`;
      const response = await fetch(url);
      const data = await response.json();
      const tempResult = data.results;

      const result = tempResult.map((item) => ({
         first: item.name.first,
         last: item.name.last,
         email: item.email,
      }));

      setIsLoading(false);
      setPerson(result);
   };

   useEffect(() => {
      getPerson(number);
   }, [number]);

   const handleClick = (num) => {
      setNumber(num);
      getPerson(num);
   };

   return (
      <div>
         <button onClick={() => handleClick(1)}>Read New Person</button>
         <br />
         <button onClick={() => handleClick(11)}>Read 10 Person</button>
         {isLoading ? <div>Loading...</div> : <Person person={person} />}
      </div>
   );
};

export default PersonController;
