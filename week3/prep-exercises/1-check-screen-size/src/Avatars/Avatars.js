import React, { useEffect, useState, useDebugValue } from "react";
import { BigHead } from "@bigheads/core";
import "./Avatars.css";

const randomHat = () => {
   const arrayOfProp = [
      "none",
      "none2",
      "none3",
      "none4",
      "none5",
      "beanie",
      "turban",
   ];
   return arrayOfProp[Math.floor(Math.random() * arrayOfProp.length)];
};

const randomHatColor = () => {
   const arrayOfProp = ["white", "blue", "black", "green", "red"];
   return arrayOfProp[Math.floor(Math.random() * arrayOfProp.length)];
};

const randomAccessory = () => {
   const arrayOfProp = ["none", "roundGlasses", "tinyGlasses", "shades"];
   return arrayOfProp[Math.floor(Math.random() * arrayOfProp.length)];
};

const randomCloathing = () => {
   const arrayOfProp = [
      "naked",
      "shirt",
      "dressShirt",
      "vneck",
      "tankTop",
      "dress",
   ];
   return arrayOfProp[Math.floor(Math.random() * arrayOfProp.length)];
};

const randomCloathingColor = () => {
   const arrayOfProp = ["white", "blue", "black", "green", "red"];
   return arrayOfProp[Math.floor(Math.random() * arrayOfProp.length)];
};

const randomGraphic = () => {
   const arrayOfProp = ["none", "redwood", "gatsby", "vue", "react", "graphQL"];
   return arrayOfProp[Math.floor(Math.random() * arrayOfProp.length)];
};

export const Avatar1 = (props) => {
   return (
      <div className="avatar-div">
         <BigHead
            accessory={randomAccessory()}
            body="chest"
            circleColor="blue"
            clothing={randomCloathing()}
            clothingColor={randomCloathingColor()}
            eyebrows="raised"
            eyes="normal"
            faceMask={false}
            faceMaskColor="red"
            facialHair="none3"
            graphic={randomGraphic()}
            hair="bob"
            hairColor="blonde"
            hat={randomHat()}
            hatColor={randomHatColor()}
            lashes={false}
            lipColor="purple"
            mask
            mouth="serious"
            skinTone="red"
         />
      </div>
   );
};

export const Avatar2 = () => {
   return (
      <div className="avatar-div">
         <BigHead
            accessory={randomAccessory()}
            body="breasts"
            circleColor="blue"
            clothing={randomCloathing()}
            clothingColor={randomCloathingColor()}
            eyebrows="leftLowered"
            eyes="happy"
            faceMask={false}
            faceMaskColor="white"
            facialHair="none2"
            graphic={randomGraphic()}
            hair="bun"
            hairColor="blue"
            hat={randomHat()}
            hatColor={randomHatColor()}
            lashes={false}
            lipColor="green"
            mask
            mouth="tongue"
            skinTone="yellow"
         />
      </div>
   );
};

export const Avatar3 = () => {
   return (
      <div className="avatar-div">
         <BigHead
            accessory={randomAccessory()}
            body="breasts"
            circleColor="blue"
            clothing={randomCloathing()}
            clothingColor={randomCloathingColor()}
            eyebrows="raised"
            eyes="content"
            faceMask={false}
            faceMaskColor="blue"
            facialHair="none2"
            graphic={randomGraphic()}
            hair="buzz"
            hairColor="pink"
            hat={randomHat()}
            hatColor={randomHatColor()}
            lashes={false}
            lipColor="turqoise"
            mask
            mouth="serious"
            skinTone="yellow"
         />
      </div>
   );
};

export const Avatar = ({ windowWidth }) => {
   const [avatarType, setAvatarType] = useState(Avatar1);

   if (windowWidth < 1000) setAvatarType(Avatar3);
   if (windowWidth < 800) setAvatarType(Avatar2);
   if (windowWidth < 600) setAvatarType(Avatar1);

   console.log(windowWidth);
   return <div>{avatarType}</div>;
};
