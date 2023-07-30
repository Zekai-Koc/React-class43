// import { PrettyHeader } from "components/pretty-defaults";

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
      >
         {/* <div style={{ maxWidth: "250px" }}>
            {"You are seeing "}
            <PrettyHeader Component="span" style={{ fontSize: "20px" }}>
               {state.name}
            </PrettyHeader>
            {" because your screen size is "}
            <PrettyHeader Component="span" style={{ fontSize: "20px" }}>
               {state.size}!
            </PrettyHeader>
            <br />
            <div style={{ paddingTop: "10px", fontSize: "50px" }}>
               {state.icon}
            </div>
         </div> */}
      </div>
   );
};

export { DisplaySize, BigHeadMessage };
