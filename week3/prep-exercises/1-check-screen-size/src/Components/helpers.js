const DisplaySize = ({ height, width }) => (
   <div>
      {width}px / {height}px
   </div>
);

const BigHeadMessage = ({ state }) => {
   if (!state) {
      return null;
   }

   return (
      <div
         style={{
            display: "flex",
            alignItems: "center",
            margin: "10px",
            lineHeight: "1",
            flexWrap: "wrap",
         }}
      ></div>
   );
};

export { DisplaySize, BigHeadMessage };
