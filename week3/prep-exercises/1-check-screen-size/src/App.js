import "./App.css";
import React, { useState, useEffect, useDebugValue } from "react";
import ShowImage from "./components/ShowImage";

function useWindowSize() {
   const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
   });
   useDebugValue(
      `width: ${windowSize.width}px, height: ${windowSize.height}px`
   );

   useEffect(() => {
      const handleResize = () =>
         setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
         });

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
   }, []);

   return windowSize;
}

function App() {
   const winSize = useWindowSize();

   return (
      <div className="App">
         {/* {winSize.width}, {winSize.height} <br /> */}
         <ShowImage winSize={winSize} />
      </div>
   );
}

export default App;
