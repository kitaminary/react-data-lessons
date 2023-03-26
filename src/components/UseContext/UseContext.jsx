import { useContext } from "react";
import { THEME } from "../../App";

export const UseContext = () => {
  const theme = useContext(THEME);
  return (
    <div
      style={{
        backgroundColor: theme ? "DarkSlateGrey" : "#00BFFF",
        color: theme ? "white" : "black",
        padding: "60px",
        width: "100%",
        height: "40px",
      }}
    >
      useContext
    </div>
  );
};
