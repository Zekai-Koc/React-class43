import React from "react";
import { BigHead } from "@bigheads/core";
import "./showImage.css";

const ShowImage = ({ winSize }) => {
   let clothingColor = "white";

   if (winSize.width < 1400) clothingColor = "white";
   if (winSize.width < 1000) clothingColor = "black";
   if (winSize.width < 600) clothingColor = "red";

   return (
      <div className="show-image">
         <p>Screen Width: {winSize.width}</p>
         <p>Screen Height: {winSize.height}</p>

         <BigHead
            accessory="shades"
            body="chest"
            circleColor="blue"
            clothing="tankTop"
            clothingColor={clothingColor}
            eyebrows="angry"
            eyes="wink"
            facialHair="mediumBeard"
            graphic="vue"
            hair="short"
            hairColor="black"
            hat="none"
            hatColor="green"
            lashes="false"
            lipColor="purple"
            mask="true"
            faceMask="true"
            mouth="open"
            skinTone="brown"
         />
      </div>
   );
};

export default ShowImage;
