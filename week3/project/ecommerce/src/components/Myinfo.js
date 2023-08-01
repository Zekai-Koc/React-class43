import React from "react";
import "./Myinfo.css";

const Myinfo = ({ type, text }) => {
   const infoClassName = `myInfo myInfo-${type}`;

   return <div className={infoClassName}>{text}</div>;
};

export default Myinfo;
