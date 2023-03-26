import React, { useState } from "react";
import { UseCallback } from "./components/UseCallback/UseCallback";
import { UseContext } from "./components/UseContext/UseContext";
import { UseEffect } from "./components/UseEffect/UseEffect";
import { UseMemo } from "./components/UseMemo/UseMemo";
import { UseReducer } from "./components/UseReducer/UseReduser";
import { UseState } from "./components/UseState/USeState";
// создание контекста (обязательный верхниу уровень над компонентами)
export const THEME = React.createContext();

function App() {
  const [active, setActive] = useState(0);
  const [theme, setTheme] = useState(false);

  const [users, setUsers] = useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 40 },
  ]);

  let [id, setId] = useState(4);

  const getUser = (userId) => {
    console.log("useCallback works");
    return users.find((user) => user.id === 4) ?? {name: "User not found", age: ''};
  };

  return (
    <div
      style={{
        backgroundColor: theme ? "DarkSlateGrey" : "white",
        color: theme ? "white" : "black",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button
        onClick={() => {
          setUsers([...users, { id: id, name: "Ole", age: 25 }]);
          setId(id + 1);
        }}
      >
        Add user
      </button>
      <div style={{ position: "fixed", top: 0, right: 0 }}>
        darkmode
        <input type="checkbox" name="theme" onChange={() => setTheme(!theme)} />
      </div>
      <THEME.Provider value={theme}>
        <UseState></UseState>
        {active > 0 && <UseEffect theme={theme}></UseEffect>}
        {active > 1 && <UseMemo users={users}></UseMemo>}
        {active > 2 && <UseCallback getUser={getUser}></UseCallback>}
        {active > 3 && <UseContext></UseContext>}
        {active > 4 && <UseReducer></UseReducer>}
      </THEME.Provider>
      <div
        style={{
          backgroundColor: "#A0522D",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <button onClick={() => setActive(active + 1)}>Open more</button>
        <button onClick={() => setActive(active - 1)}>Show less</button>
      </div>
    </div>
  );
}

export default App;
