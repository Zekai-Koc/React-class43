import React from "react";

const Person = ({ person }) => {
   // console.log("+++++++++++++", person);

   return (
      <div className="App">
         <ul>
            {person &&
               person.map((item, index) => {
                  return (
                     <li key={index}>
                        {item.first} {item.last} {item.email}
                     </li>
                  );
               })}
         </ul>
      </div>
   );
};

export default Person;
