import { useWithinWindowWidth, useWindowSize } from "./Components/hooks";
import { RandomHead, MITHI, DIANA, MIKONG } from "./Components/bighead";
import { BigHeadMessage, DisplaySize } from "./Components/helpers";

const POSSIBLE_STATES = {
   small: { name: "Mikong", size: "small" },
   medium: { name: "Diana", size: "medium" },
   big: { name: "Mithi", size: "big" },
};

function PersonByWindowSize() {
   const isBig = useWithinWindowWidth(1000, Infinity);
   const isMedium = useWithinWindowWidth(700, 999);
   const isSmall = useWithinWindowWidth(0, 699);

   let person = null;
   let state = null;
   if (isBig) {
      person = <RandomHead person={MITHI} />;
      state = POSSIBLE_STATES.big;
   } else if (isMedium) {
      person = <RandomHead person={DIANA} />;
      state = POSSIBLE_STATES.medium;
   } else if (isSmall) {
      person = <RandomHead person={MIKONG} />;
      state = POSSIBLE_STATES.small;
   }

   return (
      <div style={{ display: "flex" }}>
         {person}
         <BigHeadMessage {...{ state }} />
      </div>
   );
}

function App() {
   const { width, height } = useWindowSize();

   return (
      <div className="App">
         <h3>Screen Height: {height}</h3>
         <h3>Screen Width: {width}</h3>
         <PersonByWindowSize />
      </div>
   );
}

export default App;

//
//
//
//
//
//
// import "./App.css";
// import React, { useEffect, useState, useDebugValue } from "react";
// import { Avatar, Avatar1, Avatar2, Avatar3 } from "./Avatars/Avatars";

// function useWindowSize() {
//    const [windowSize, setWindowSize] = useState({
//       width: undefined,
//       height: undefined,
//    });
//    useDebugValue(
//       `width: ${windowSize.width}px, height: ${windowSize.height}px`
//    );

//    useEffect(() => {
//       const handleResize = () =>
//          setWindowSize({
//             width: window.innerWidth,
//             height: window.innerHeight,
//          });

//       window.addEventListener("resize", handleResize);
//       handleResize();

//       return () => window.removeEventListener("resize", handleResize);
//    }, []);

//    return windowSize;
// }

// function App() {
//    const { width, height } = useWindowSize();

//    return (
//       <div>
//          {/* <DisplaySize {...{ width, height }} /> */}
//          {/* <PersonByWindowSize /> */}
//          <Avatar windowWidth={width} />
//          <h3>Screen Height: {height}</h3>
//          <h3>Screen Width: {width}</h3>
//       </div>
//    );
// }

// export default App;

// import "./App.css";
// import React, { useEffect, useState } from "react";
// import { Avatar, Avatar1, Avatar2, Avatar3 } from "./Avatars/Avatars";

// const useWindowSize = () => {
//    const [windowSize, setWindowSize] = useState({
//       width: undefined,
//       height: undefined,
//    });

//    useEffect(() => {
//       const handleResize = () => {
//          setWindowSize({
//             width: window.innerWidth,
//             height: window.innerHeight,
//          });
//       };

//       window.addEventListener("resize", handleResize);

//       handleResize();

//       return () => window.removeEventListener("resize", handleResize);
//    }, []);

//    return windowSize;
// };

// function App() {
//    const [sizeOfWindow, setSizeOfWindow] = useState({});
//    //  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
//    //  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
//    //  const [avatarType, setAvatarType] = useState(Avatar1);

//    const { width, height } = useWindowSize();
//    //  console.log(width, height);

//    //  const changeAvatar = (x) => {
//    //     if (window.innerWidth < 1000) setAvatarType(Avatar3);
//    //     if (window.innerWidth < 800) setAvatarType(Avatar2);
//    //     if (window.innerWidth < 600) setAvatarType(Avatar1);
//    //  };

//    //  changeAvatar(width);

//    //  const screenSizeChange = () => {
//    //     setScreenHeight(window.innerHeight);
//    //     setScreenWidth(window.innerWidth);

//    //     changeAvatar(window.innerWidth);
//    //  };

//    //  useEffect(() => {
//    //     window.addEventListener("resize", screenSizeChange);

//    //     return () => {
//    //        window.removeEventListener("resize", screenSizeChange);
//    //     };
//    //  }, [screenHeight, screenWidth]);

//    setSizeOfWindow({ width, height });

//    return (
//       <div className="App">
//          {/* <h3>Screen Height: {screenHeight}</h3>
//          <h3>Screen Width: {screenWidth}</h3> */}
//          {/* <div className="wrapper-avatar">{avatarType}</div> */}
//          <div className="wrapper-avatar">
//             <Avatar windowSize={{ width, height }} />
//          </div>
//       </div>
//    );
// }

// export default App;
