import React from "react";

const Myinfo = ({ type, text }) => {
   return <div className={`myInfo myInfo-${type}`}>{text}</div>;
};

export default Myinfo;
